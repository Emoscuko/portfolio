# Coding Guidelines & Architecture Principles

This document serves as the core coding guideline and architectural reference for building and scaling this portfolio application. As an AI assistant or human developer contributing to this project, adhere strictly to these principles to maintain a clean, dynamic, and object-oriented codebase.

## 1. Architecture & Object-Oriented Principles

### Component-Driven Design
- **Single Responsibility Principle (SRP):** Each component should do one thing perfectly. If a component (e.g., a page like `Developer` or `Fitness`) grows too large (e.g., > 150 lines of HTML), break it down into smaller, reusable UI components (e.g., `TimelineComponent`, `ProjectCardComponent`, `MealCardComponent`).
- **Side Independence (Developer vs. Fitness):** Treat the **Developer** and **Fitness** sides as distinct, independent vertical modules. While they may share minor utility patterns or global styles today, they should **not** be forced into a single shared structure. Later developments will cause these sides to diverge significantly in structure, data, and logic. Avoid over-abstracting their core layouts together; prioritize the flexibility for each side to evolve its own unique identity.
- **Encapsulation:** Keep styles, templates, and logic self-contained within the component directory. Use Angular's `ViewEncapsulation` to prevent style leakage unless global scope is explicitly required.

### Data & State Management
- **Services for Logic:** Move complex business logic, data fetching, and state management out of components and into Injectable Services. Components should primarily be responsible for presentation and delegating user actions.
- **Interfaces & Types:** Always define strict TypeScript `interface` or `type` definitions for data structures (e.g., `TimelineItem`, `ProjectData`, `MealPlan`). Avoid `any`.

## 2. Dynamism & Third-Party Libraries

### Ecosystem Utilization
- **Use the Best Tool for the Job:** Do not reinvent the wheel. If a third-party library provides a robust, accessible, and performant solution for a complex UI requirement (e.g., animations, complex carousels, data visualization), use it.
- **Recommended Additions for a Dynamic Feel:**
  - **Animations:** Consider integrating libraries like Angular's native `@angular/animations` for smooth entry/exit and state transitions. GSAP is highly recommended for complex, scroll-linked animations.
  - **Icons:** Use modular icon libraries like `lucide-angular`, `phosphor-icons`, or `simple-icons` rather than managing static SVGs manually, unless the SVG is highly customized.

### Data-Driven UI
- Avoid hardcoding extensive lists directly into HTML. Define configuration arrays or fetch JSON data within the component/service and render them dynamically using Angular control flows (`@for`, `*ngFor`).

## 3. Styling & Aesthetics

### Modern, Premium Design
- **CSS Preprocessor:** Utilize SCSS features fully—variables, mixins, and nesting—to keep stylesheets DRY (Don't Repeat Yourself).
- **Responsive & Fluid:** Use modern CSS (Grid, Flexbox, `clamp()`, `cqw`) to ensure the layout adapts beautifully to all screen sizes, not just mobile and desktop breakpoints.
- **Micro-interactions:** Add subtle hover effects, active states, and focus rings to interactive elements. The interface should feel "alive" and responsive to the user's cursor.
- **Theming:** Centralize highly used colors, gradients, and font families in global SCSS variables (`styles.scss` or a `variables.scss` partial) to allow for easy theme switching and consistency.

## 4. Workflows & Version Control

- **Continuous Refactoring:** Before adding a new feature, assess if the existing code can be improved or abstracted to support the new feature more elegantly.
- **Web Search Usage:** When encountering a unique architectural challenge or looking for modern UX/UI trends, proactively search the web for community-standard approaches.

## 5. Development Standards
- **Standalone Components:** This project uses modern Angular APIs. Always generate components as `standalone: true`.
- **Modern Control Flow:** Prefer the new Angular `@if`, `@for`, and `@switch` syntax over structural directives (`*ngIf`, `*ngFor`) when generating new templates, as it improves readability and performance.
