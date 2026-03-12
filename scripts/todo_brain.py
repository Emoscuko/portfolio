import os
import subprocess
import json
import time
import google.generativeai as genai

# --- 1. SETUP & CONFIGURATION ---
API_KEY = os.getenv("GENAI_API_KEY")
ISSUE_BODY = os.getenv("ISSUE_BODY", "No TODO provided.")
ISSUE_NUMBER = os.getenv("ISSUE_NUMBER", "0")
BRANCH_NAME = f"antigravity/todo-{ISSUE_NUMBER}"

genai.configure(api_key=API_KEY)

# --- 2. THE TOOLS (AGENT'S HANDS) ---
def read_file(filepath: str) -> str:
    """Reads the content of a file so the agent can understand the code."""
    try:
        if ".env" in filepath or "node_modules" in filepath or ".git" in filepath:
            return "Error: Access denied to sensitive/ignored files."
        with open(filepath, 'r') as f:
            return f.read()
    except Exception as e:
        return f"Error reading file: {str(e)}"

def search_and_replace(filepath: str, search_text: str, replace_text: str) -> str:
    """
    Replaces exact text in a file. 
    IMPORTANT: search_text must EXACTLY match the current file content, including spaces and indentation.
    """
    try:
        with open(filepath, 'r') as f:
            content = f.read()
            
        if search_text not in content:
            return f"Error: The search_text was not found in {filepath}. Check your indentation and try again."
            
        new_content = content.replace(search_text, replace_text)
        with open(filepath, 'w') as f:
            f.write(new_content)
        
        return f"Successfully updated {filepath}."
    except Exception as e:
        return f"Error modifying file: {str(e)}"

# --- 3. HELPER FUNCTIONS ---
def run_cmd(cmd):
    """Executes a shell command safely."""
    return subprocess.check_output(cmd, shell=True).decode('utf-8').strip()

def get_file_tree():
    """Returns a map of the project files to guide the agent."""
    return run_cmd("find . -type f -not -path '*/.*' -not -path '*/node_modules/*' | sort")

def check_copilot_review(pr_url):
    """Polls GitHub CLI for the latest PR review."""
    print("⏳ Waiting 60 seconds for Copilot review...")
    time.sleep(60) # Give Copilot time to run
    
    try:
        cmd = f"gh pr view {pr_url} --json reviews"
        data = json.loads(run_cmd(cmd))
        reviews = data.get('reviews', [])
        
        if not reviews:
            return "NO_REVIEW"
            
        latest = reviews[-1]
        if latest['state'] in ['CHANGES_REQUESTED', 'COMMENTED']:
            return latest['body']
        return "APPROVED"
    except Exception as e:
        print(f"Review check error: {e}")
        return "NO_REVIEW"

# --- 4. ORCHESTRATOR LOGIC ---
def main():
    print(f"🚀 Starting Antigravity for Issue #{ISSUE_NUMBER}")
    
    # Initialize Git
    run_cmd('git config user.name "Antigravity Agent"')
    run_cmd('git config user.email "agent@antigravity.local"')
    run_cmd(f'git checkout -b {BRANCH_NAME}')

    # Setup the Agent
    model = genai.GenerativeModel(
        model_name="gemini-3.1-pro-preview", 
        tools=[read_file, search_and_replace]
    )
    chat = model.start_chat(enable_automatic_function_calling=True)

    # Initial Prompt
    file_tree = get_file_tree()
    guidelines = read_file("REVIEW_GUIDELINE")
    
    system_prompt = f"""
    You are an autonomous Software Engineer.
    TASK: {ISSUE_BODY}
    
    1. Look at the File Tree below. Use 'read_file' on files you need to change.
    2. Once you know what to fix, use 'search_and_replace' to edit them.
    3. Ensure you follow these guidelines: {guidelines}
    4. When all changes are successfully made, reply with "DONE_CODING".
    
    FILE TREE:
    {file_tree}
    """
    
    print("🧠 Agent is thinking and modifying files...")
    chat.send_message(system_prompt)
    
    # Push initial code and create PR
    run_cmd('git add .')
    run_cmd(f'git commit -m "Antigravity: Initial implementation for #{ISSUE_NUMBER}"')
    run_cmd(f'git push -u origin {BRANCH_NAME}')
    
    pr_url = run_cmd(f'gh pr create --title "Antigravity Fix: #{ISSUE_NUMBER}" --body "Automated fix. Review against REVIEW_GUIDELINE." --base main --head {BRANCH_NAME}')
    print(f"✅ PR Created: {pr_url}")

    # --- 5. THE COPILOT REVIEW LOOP ---
    max_loops = 3
    is_approved = False
    
    for loop in range(max_loops):
        print(f"🔄 Review Loop {loop + 1}/{max_loops}")
        feedback = check_copilot_review(pr_url)
        
        if feedback == "APPROVED":
            is_approved = True
            print("🎉 Copilot Approved!")
            break
        elif feedback != "NO_REVIEW":
            print("❌ Copilot requested changes. Agent is fixing...")
            chat.send_message(f"GitHub Copilot rejected the code with this feedback: '{feedback}'. Please use your tools to fix the code, then reply 'DONE_FIXING'.")
            
            run_cmd('git add .')
            run_cmd('git commit -m "Antigravity: Addressed Copilot feedback"')
            run_cmd(f'git push origin {BRANCH_NAME}')
        else:
            print("⏳ Still waiting for review... skipping loop iteration.")
            time.sleep(30)

    # Clean exit without sending a notification to the issue
    if not is_approved:
        print("⚠️ Reached max loops or pending human review. Exiting quietly.")
    print("🏁 Workflow finished.")

if __name__ == "__main__":
    main()