import { TimelineItem } from '../timeline/timeline';

export interface SocialLink {
    name: string;
    url: string;
    iconSrc: string;
    cssClass?: string;
}

export interface WorkoutDay {
    id: string;
    dayName: string;
    title: string;
    exercises: string[];
}

export interface MealItem {
    name: string;
    amount: string;
    calories: number;
    protein: number;
    carbs: number;
    fats: number;
}

export interface MealPlan {
    id: string;
    name: string;
    time: string;
    highlight?: boolean;
    cssClass?: string;
    items: MealItem[];
}

export const FITNESS_SOCIALS: SocialLink[] = [
    {
        name: "Instagram (@minimpekka)",
        url: "https://www.instagram.com/minimpekka/",
        iconSrc: "https://cdn.simpleicons.org/instagram/E4405F",
        cssClass: ""
    },
    {
        name: "TikTok (@emirhannatar)",
        url: "https://www.tiktok.com/@emirhannatar",
        iconSrc: "https://cdn.simpleicons.org/tiktok/E0E0E0",
        cssClass: ""
    },
    {
        name: "YouTube (@emirhannatar)",
        url: "https://www.youtube.com/@emirhannatar",
        iconSrc: "https://cdn.simpleicons.org/youtube/FF0000",
        cssClass: ""
    },
    {
        name: "Cooking Insta (@emirhancooks)",
        url: "https://www.instagram.com/emirhancooks/",
        iconSrc: "https://cdn.simpleicons.org/instagram/E4405F",
        cssClass: "cook-link"
    },
    {
        name: "Cooking TikTok",
        url: "https://www.tiktok.com/@emirhancooks",
        iconSrc: "https://cdn.simpleicons.org/tiktok/E0E0E0",
        cssClass: "cook-link"
    }
];

export const WEEKLY_WORKOUT: WorkoutDay[] = [
    {
        id: "monday",
        dayName: "Pazartesi",
        title: "Hafif Bacak",
        exercises: ["Leg extension (3x10)", "Back Extension (3x10)", "Calf Press (3x10)", "Single Leg Press (3x10)"]
    },
    {
        id: "tuesday",
        dayName: "Salı",
        title: "Core, Chest & Arms",
        exercises: ["Incline db press (4x8)", "Single Arm Cable Rear Delt Fly (4x8)", "Single Arm Preacher Curl (4x8)", "Decline Situps (4x8)"]
    },
    {
        id: "wednesday",
        dayName: "Çarşamba",
        title: "Back & Shoulders",
        exercises: ["Single Arm Lat Pulldown (4x8)", "Lateral Cable Raises (4x8)", "Seated Row (4x8)", "Triceps Cable Extensions (4x8)"]
    },
    {
        id: "thursday",
        dayName: "Perşembe",
        title: "Balance Muscles",
        exercises: ["Stretching moves", "Infraspinatus workout"]
    },
    {
        id: "friday",
        dayName: "Cuma",
        title: "Upper Body",
        exercises: ["Incline db press (3x8)", "Dumbell Shrugs (3x8)", "Triceps Cable Extensions (3x8)", "Single Arm Preacher Curl (3x8)", "Decline Situps (3x8)", "Lateral Cable Raises (3x8)"]
    },
    {
        id: "saturday",
        dayName: "Cumartesi",
        title: "Ağır Bacak",
        exercises: ["Free Squats (4x6)", "Reverse Nordic Curl (4x8)", "Calf Raises (4x8)", "Leg Curl (4x8)"]
    },
    {
        id: "sunday",
        dayName: "Pazar",
        title: "Off Day",
        exercises: ["Rest and Recovery"]
    }
];

export const DIET_PLAN: MealPlan[] = [
    {
        id: "breakfast",
        name: "Kahvaltı",
        time: "Morning",
        items: [
            { name: "Yulaf Ezmesi", amount: "60g", calories: 225, protein: 8, carbs: 40, fats: 4 },
            { name: "Muz", amount: "150g", calories: 135, protein: 1.5, carbs: 35, fats: 0.5 },
            { name: "Yumurta (Tam)", amount: "5 adet", calories: 350, protein: 30, carbs: 3, fats: 25 },
            { name: "Chia Tohumu", amount: "5g", calories: 25, protein: 1, carbs: 2, fats: 1.5 },
            { name: "Keten Tohumu", amount: "5g", calories: 25, protein: 1, carbs: 1.5, fats: 2 },
            { name: "Ham Kakao", amount: "10g", calories: 25, protein: 2, carbs: 5, fats: 1 },
            { name: "Tarçın", amount: "10g", calories: 25, protein: 0.4, carbs: 8, fats: 0.1 }
        ]
    },
    {
        id: "lunch",
        name: "Öğle (Post-Workout)",
        time: "Recovery",
        highlight: true,
        cssClass: "post-workout-card",
        items: [
            { name: "Karabuğday (Çiğ)", amount: "150g", calories: 515, protein: 19.5, carbs: 107, fats: 4.5 },
            { name: "Tavuk Göğsü (Çiğ)", amount: "100g", calories: 110, protein: 23, carbs: 0, fats: 2 },
            { name: "Zeytinyağı", amount: "20g", calories: 177, protein: 0, carbs: 0, fats: 20 },
            { name: "Yeşil/Kapya Biber", amount: "1/2 adet", calories: 20, protein: 1, carbs: 4, fats: 0 },
            { name: "Soya Sosu", amount: "1 y.k.", calories: 5, protein: 0, carbs: 1, fats: 0 }
        ]
    },
    {
        id: "dinner",
        name: "Akşam",
        time: "Evening",
        items: [
            { name: "Tavuk Göğsü (Çiğ)", amount: "200g", calories: 220, protein: 46, carbs: 0, fats: 4 },
            { name: "Yoğurt (Tam Yağlı)", amount: "300g", calories: 185, protein: 10, carbs: 14, fats: 10 },
            { name: "Portakal", amount: "200g", calories: 95, protein: 1.8, carbs: 24, fats: 0.2 },
            { name: "Zeytinyağı", amount: "10g", calories: 88, protein: 0, carbs: 0, fats: 10 },
            { name: "Karabuğday (Çiğ)", amount: "50g", calories: 172, protein: 6.5, carbs: 36, fats: 1.5 },
            { name: "Avoya Maden Suyu + Limon", amount: "1 şişe", calories: 0, protein: 0, carbs: 0, fats: 0 }
        ]
    }
];

export const FITNESS_TIMELINE: TimelineItem[] = [
    {
        year: "2020 - 2021",
        title: "The Beginning",
        subtitle: "First Gym Membership",
        description: "Started lifting weights, developing routine, and learning the fundamentals of exercise execution.",
        type: "education",
        tags: ["Beginner", "Consistency"],
    },
    {
        year: "2022 — 2023",
        title: "Consistent Builder",
        subtitle: "Core Lifts",
        description: "Transitioned to highly tracked macros and solid mechanical gym foundation.",
        type: "work",
        tags: ["Mass Building", "Nutrition"],
    },
    {
        year: "2024 — 2025",
        title: "Advanced Hypertrophy",
        subtitle: "Progressive Overload",
        description: "Structured split programs, high-intensity sets, and strict nutrition tracking for serious mass building.",
        type: "work",
        tags: ["Hypertrophy", "Bulking"],
    },
    {
        year: "2026",
        title: "Peak Conditioning",
        subtitle: "Lifestyle & Discipline",
        description: "Sustaining a disciplined diet, advanced splits, and optimal muscle growth strategies.",
        type: "certification",
        tags: ["Aesthetics", "Discipline"],
    }
];
