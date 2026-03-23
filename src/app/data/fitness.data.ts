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
    dayNameTr: string;
    title: string;
    titleTr: string;
    exercises: string[];
    exercisesTr?: string[];
}

export interface MealItem {
    name: string;
    nameTr: string;
    amount: string;
    amountTr?: string;
    calories: number;
    protein: number;
    carbs: number;
    fats: number;
}

export interface MealPlan {
    id: string;
    name: string;
    nameTr: string;
    time: string;
    timeTr: string;
    highlight?: boolean;
    cssClass?: string;
    items: MealItem[];
}

export interface Hobby {
    id: string;
    name: string;
    nameTr: string;
    description: string;
    descriptionTr: string;
    icon: string;
    image?: string;
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
        dayName: "Monday",
        dayNameTr: "Pazartesi",
        title: "Light Leg",
        titleTr: "Hafif Bacak",
        exercises: ["Leg extension (3x10)", "Back Extension (3x10)", "Calf Press (3x10)", "Single Leg Press (3x10)"],
        exercisesTr: ["Leg extension (3x10)", "Back Extension (3x10)", "Calf Press (3x10)", "Single Leg Press (3x10)"]
    },
    {
        id: "tuesday",
        dayName: "Tuesday",
        dayNameTr: "Salı",
        title: "Core, Chest & Arms",
        titleTr: "Core, Göğüs ve Kollar",
        exercises: ["Incline db press (4x8)", "Single Arm Cable Rear Delt Fly (4x8)", "Single Arm Preacher Curl (4x8)", "Decline Situps (4x8)"],
        exercisesTr: ["Incline db press (4x8)", "Single Arm Cable Rear Delt Fly (4x8)", "Single Arm Preacher Curl (4x8)", "Decline Situps (4x8)"]
    },
    {
        id: "wednesday",
        dayName: "Wednesday",
        dayNameTr: "Çarşamba",
        title: "Back & Shoulders",
        titleTr: "Sırt ve Omuzlar",
        exercises: ["Single Arm Lat Pulldown (4x8)", "Lateral Cable Raises (4x8)", "Seated Row (4x8)", "Triceps Cable Extensions (4x8)"],
        exercisesTr: ["Single Arm Lat Pulldown (4x8)", "Lateral Cable Raises (4x8)", "Seated Row (4x8)", "Triceps Cable Extensions (4x8)"]
    },
    {
        id: "thursday",
        dayName: "Thursday",
        dayNameTr: "Perşembe",
        title: "Balance Muscles",
        titleTr: "Denge Kasları",
        exercises: ["Stretching moves", "Infraspinatus workout"],
        exercisesTr: ["Esnetme hareketleri", "Infraspinatus antrenmanı"]
    },
    {
        id: "friday",
        dayName: "Friday",
        dayNameTr: "Cuma",
        title: "Upper Body",
        titleTr: "Üst Vücut",
        exercises: ["Incline db press (3x8)", "Dumbell Shrugs (3x8)", "Triceps Cable Extensions (3x8)", "Single Arm Preacher Curl (3x8)", "Decline Situps (3x8)", "Lateral Cable Raises (3x8)"],
        exercisesTr: ["Incline db press (3x8)", "Dumbell Shrugs (3x8)", "Triceps Cable Extensions (3x8)", "Single Arm Preacher Curl (3x8)", "Decline Situps (3x8)", "Lateral Cable Raises (3x8)"]
    },
    {
        id: "saturday",
        dayName: "Saturday",
        dayNameTr: "Cumartesi",
        title: "Heavy Leg",
        titleTr: "Ağır Bacak",
        exercises: ["Free Squats (4x6)", "Reverse Nordic Curl (4x8)", "Calf Raises (4x8)", "Leg Curl (4x8)"],
        exercisesTr: ["Free Squats (4x6)", "Reverse Nordic Curl (4x8)", "Calf Raises (4x8)", "Leg Curl (4x8)"]
    },
    {
        id: "sunday",
        dayName: "Sunday",
        dayNameTr: "Pazar",
        title: "Off Day",
        titleTr: "Dinlenme Günü",
        exercises: ["Rest and Recovery"],
        exercisesTr: ["Dinlenme ve Yenilenme"]
    }
];

export const DIET_PLAN: MealPlan[] = [
    {
        id: "breakfast",
        name: "Breakfast",
        nameTr: "Kahvaltı",
        time: "Morning",
        timeTr: "Sabah",
        items: [
            { name: "Oatmeal", nameTr: "Yulaf Ezmesi", amount: "60g", calories: 225, protein: 8, carbs: 40, fats: 4 },
            { name: "Banana", nameTr: "Muz", amount: "150g", calories: 135, protein: 1.5, carbs: 35, fats: 0.5 },
            { name: "Whole Egg", nameTr: "Yumurta (Tam)", amount: "5 pieces", amountTr: "5 adet", calories: 350, protein: 30, carbs: 3, fats: 25 },
            { name: "Chia Seeds", nameTr: "Chia Tohumu", amount: "5g", calories: 25, protein: 1, carbs: 2, fats: 1.5 },
            { name: "Flax Seeds", nameTr: "Keten Tohumu", amount: "5g", calories: 25, protein: 1, carbs: 1.5, fats: 2 },
            { name: "Raw Cacao", nameTr: "Ham Kakao", amount: "10g", calories: 25, protein: 2, carbs: 5, fats: 1 },
            { name: "Cinnamon", nameTr: "Tarçın", amount: "10g", calories: 25, protein: 0.4, carbs: 8, fats: 0.1 }
        ]
    },
    {
        id: "lunch",
        name: "Lunch (Post-Workout)",
        nameTr: "Öğle (Antrenman Sonrası)",
        time: "Recovery",
        timeTr: "Toparlanma",
        highlight: true,
        cssClass: "post-workout-card",
        items: [
            { name: "Buckwheat (Raw)", nameTr: "Karabuğday (Çiğ)", amount: "150g", calories: 515, protein: 19.5, carbs: 107, fats: 4.5 },
            { name: "Chicken Breast (Raw)", nameTr: "Tavuk Göğsü (Çiğ)", amount: "100g", calories: 110, protein: 23, carbs: 0, fats: 2 },
            { name: "Olive Oil", nameTr: "Zeytinyağı", amount: "20g", calories: 177, protein: 0, carbs: 0, fats: 20 },
            { name: "Green/Capya Pepper", nameTr: "Yeşil/Kapya Biber", amount: "1/2 piece", amountTr: "1/2 adet", calories: 20, protein: 1, carbs: 4, fats: 0 },
            { name: "Soy Sauce", nameTr: "Soya Sosu", amount: "1 tbsp", amountTr: "1 y.k.", calories: 5, protein: 0, carbs: 1, fats: 0 }
        ]
    },
    {
        id: "dinner",
        name: "Dinner",
        nameTr: "Akşam",
        time: "Evening",
        timeTr: "Akşam",
        items: [
            { name: "Chicken Breast (Raw)", nameTr: "Tavuk Göğsü (Çiğ)", amount: "200g", calories: 220, protein: 46, carbs: 0, fats: 4 },
            { name: "Yogurt (Full Fat)", nameTr: "Yoğurt (Tam Yağlı)", amount: "300g", calories: 185, protein: 10, carbs: 14, fats: 10 },
            { name: "Orange", nameTr: "Portakal", amount: "200g", calories: 95, protein: 1.8, carbs: 24, fats: 0.2 },
            { name: "Olive Oil", nameTr: "Zeytinyağı", amount: "10g", calories: 88, protein: 0, carbs: 0, fats: 10 },
            { name: "Buckwheat (Raw)", nameTr: "Karabuğday (Çiğ)", amount: "50g", calories: 172, protein: 6.5, carbs: 36, fats: 1.5 },
            { name: "Avoya Mineral Water + Lemon", nameTr: "Avoya Maden Suyu + Limon", amount: "1 bottle", amountTr: "1 şişe", calories: 0, protein: 0, carbs: 0, fats: 0 }
        ]
    }
];

export const FITNESS_TIMELINE: TimelineItem[] = [
    {
        year: "2020",
        title: "The Beginning",
        titleTr: "Başlangıç",
        subtitle: "First Gym Membership",
        subtitleTr: "İlk Spor Salonu Üyeliği",
        description: "My friends (Ayberk & Furkan) introduced me to the gym. Like many beginners, I was inconsistent at first, going some months and skipping others. I was only 58kg back then.",
        descriptionTr: "Arkadaşlarım (Ayberk ve Furkan) beni spora başlattı. Her yeni başlayan gibi bazı aylar gidip bazı aylar gitmiyordum. O zamanlar sadece 58 kiloydum.",
        type: "education",
        tags: ["Beginner", "Consistency"],
    },
    {
        year: "2021",
        title: "Establishing Routine",
        titleTr: "Düzen Kurma",
        subtitle: "A New Gym",
        subtitleTr: "Yeni Bir Salon",
        description: "Started at a well-equipped gym. I was lifting consistently, but I wasn't paying much attention to my nutrition at this point.",
        descriptionTr: "Güzel bir salona başladık. Düzenli spor yapıyordum ancak beslenmeme henüz dikkat etmiyordum.",
        type: "work",
        tags: ["Consistency", "Lifting"],
    },
    {
        year: "2022",
        title: "Strength Focus",
        titleTr: "Güç Odaklı Dönem",
        subtitle: "Bulk Phase",
        subtitleTr: "Bulk Dönemi",
        description: "Heavily focused on getting stronger. I combined heavy lifting with high calorie intake, reaching 72kg, though I gained some unwanted body fat along the way.",
        descriptionTr: "Güçlenmeye çok odaklanmıştım. Baya yemek yiyor ve güçlenmeye çalışıyordum, 72 kiloya kadar çıktım ancak bu süreçte biraz yağlanmıştım.",
        type: "work",
        tags: ["Mass Building", "Bulk"],
    },
    {
        year: "2023",
        title: "Transformation",
        titleTr: "Değişim Yılı",
        subtitle: "Lifestyle Overhaul",
        subtitleTr: "Hayat Tarzı Revizyonu",
        description: "A major turning point. I researched how to optimize my life, gave up bad habits, and lost excess fat while experimenting with Powerlifting (Squat & Bench Press).",
        descriptionTr: "Hayatımda çok şeyin değiştiği bir sene oldu. Hayatımı nasıl düzeltebileceğimi araştırdım, kötü alışkanlıklarımdan vazgeçmeye başladım ve yağlarımı eritirken powerlifting (squat ve bench press) denemelerine başladık.",
        type: "work",
        tags: ["Health", "Powerlifting"],
    },
    {
        year: "2024",
        title: "Optimization",
        titleTr: "Optimizasyon",
        subtitle: "Quality Living",
        subtitleTr: "Kaliteli Yaşam",
        description: "Most bad habits are behind me. I've achieved a great physique and established a high-quality, healthy lifestyle with much better conditioning.",
        descriptionTr: "Kötü alışkanlıklarımın çoğunu geride bıraktım. Artık güzel bir fiziğe ve kaliteli, sağlıklı bir yaşama sahibim. Kondisyonum çok daha iyi bir noktaya geldi.",
        type: "work",
        tags: ["Hypertrophy", "Conditioning"],
    },
    {
        year: "2025",
        title: "Advanced Nutrition",
        titleTr: "İleri Seviye Beslenme",
        subtitle: "Strict Protocol",
        subtitleTr: "Katı Protokol",
        description: "Deep-dived into science-based lifting and followed a very strict, fixed-meal diet with zero junk food. Also started my handstand progression series.",
        descriptionTr: "Science-based lifting araştırmaları yapıp uygulamaya başladım. Çok katı ve sağlıklı bir diyet uyguluyordum, paketli gıdaları tamamen bıraktım ve amuda kalkma serisine başladım.",
        type: "work",
        tags: ["Science-Based", "Handstand"],
    },
    {
        year: "2026",
        title: "Peak Conditioning",
        titleTr: "Zirve Form",
        subtitle: "Stability & Mastery",
        subtitleTr: "Denge ve Ustalık",
        description: "Focusing on smaller stabilizer muscles that were previously weak. Can now hold a solid handstand and have moved on to handstand push-up training.",
        descriptionTr: "Vücudumdaki zayıf kalmış denge ve küçük kas gruplarını geliştirmeye odaklandım. Artık amuda kalkabiliyorum ve amutta şınav serisine geçtim.",
        type: "certification",
        tags: ["Aesthetics", "Calisthenics"],
    }
];

export const HOBBIES: Hobby[] = [
    {
        id: "guitar",
        name: "Electric Guitar",
        nameTr: "Elektro Gitar",
        description: "Expressing energy through riffs and melodies. From blues to heavy metal, the electric guitar is my primary creative outlet.",
        descriptionTr: "Riffler ve melodiler aracılığıyla enerjimi ifade ediyorum. Blues'tan heavy metal'e, elektro gitar temel yaratıcı çıkış noktam.",
        icon: "music"
    },
    {
        id: "cooking",
        name: "Gourmet Cooking",
        nameTr: "Gurme Yemek Pişirme",
        description: "Treating the kitchen as a laboratory for flavors. I enjoy experimenting with global cuisines and healthy, high-protein recipes.",
        descriptionTr: "Mutfağı lezzetler için bir laboratuvar olarak görüyorum. Küresel mutfaklar ve sağlıklı, yüksek proteinli tarifler denemekten zevk alıyorum.",
        icon: "utensils-crossed"
    }
];

export const FITNESS_LABELS = {
    mainPage: { en: 'Main Page', tr: 'Ana Sayfa' },
    program: { en: 'Program', tr: 'Antrenman' },
    nutrition: { en: 'Nutrition', tr: 'Beslenme' },
    hobbies: { en: 'Hobbies', tr: 'Hobiler' },
    journey: { en: 'Journey', tr: 'Yolculuk' },
    heroEyebrow: { en: 'LIFESTYLE', tr: 'YAŞAM TARZI' },
    heroSlogan: { en: 'Lift Heavy,<br>Eat Clean, Stay Dedicated.', tr: 'Ağır Kaldır,<br>Temiz Beslen, Sadık Kal.' },
    heroDesc: { en: 'Transforming mind and body through rigorous daily persistence.', tr: 'Sıkı ve günlük kararlılıkla zihin ve vücudu dönüştürmek.' },
    viewProgram: { en: 'View My Program', tr: 'Programımı Gör' },
    beyondGym: { en: 'Beyond the Gym', tr: 'Spor Salonunun Ötesinde' },
    timelineTitle: { en: 'Lifestyle Journey', tr: 'Yaşam Yolculuğu' },
    timelineSubtitle: { en: 'LIFESTYLE TIMELINE', tr: 'LIFESTYLE ZAMAN ÇİZELGESİ' }
};
