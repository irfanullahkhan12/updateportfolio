export const profile = {
  name: "Irfan Ullah",
  role: "Senior Mobile, AI & Game Engineer",
  location: "Lahore, Pakistan",
  email: "irfanullahkhan.dev@gmail.com",
  linkedin: "https://linkedin.com/in/irfan-ullah-a23649217",
  phone: "+92 331 3334735",
  whatsapp: "https://wa.me/923313334735",
  photo: "/images/irfan.jpg",
  summary:
    "I build cross-platform Flutter apps, casual 2D mobile games and generative AI systems — from real-time voice assistants on Vapi, LiveKit and Gemini to image, face-swap and video pipelines. I take products from first commit through Play Store, App Store and production VPS.",
};

export const stats = [
  { value: "2+", label: "Years in production" },
  { value: "3", label: "Voice AI assistants" },
  { value: "2", label: "App stores shipped to" },
  { value: "60 FPS", label: "Game performance" },
];

export type Status = "Live" | "Active" | "Testing" | "Shipped";

export type Project = {
  title: string;
  subtitle: string;
  status: Status;
  points: string[];
  tags: string[];
  image?: string;
  link?: { label: string; href: string };
};

export const voiceProjects: Project[] = [
  {
    title: "Nexivo AI Voice Assistant",
    subtitle: "Autonomous voice agent",
    status: "Live",
    points: [
      "Voice-first assistant on Vapi's conversational speech pipeline with sub-second responses.",
      "Custom LLM reasoning workflows, speech-to-text, voice synthesis and webhook automation.",
    ],
    tags: ["Vapi", "LLM", "STT / TTS", "Webhooks"],
    link: { label: "nexivoai.co", href: "https://nexivoai.co/ai-assistant" },
  },
  {
    title: "LiveKit Real-Time Voice Agent",
    subtitle: "Ultra-low-latency WebRTC assistant",
    status: "Active",
    points: [
      "Bidirectional audio over LiveKit WebRTC with natural barge-in interruption.",
      "Voice Activity Detection and noise suppression for clean cross-platform audio.",
    ],
    tags: ["LiveKit", "WebRTC", "VAD", "Flutter"],
  },
  {
    title: "Gemini Multimodal Assistant",
    subtitle: "Gemini 1.5 Pro & Flash mobile pipeline",
    status: "Active",
    points: [
      "Streaming Markdown responses, document analysis and visual image inspection.",
    ],
    tags: ["Gemini", "Multimodal", "Streaming"],
  },
];

export const gameProjects: Project[] = [
  {
    title: "Nido Bird",
    subtitle: "Casual tap-to-fly arcade game",
    status: "Live",
    points: [
      "Real-time physics, sprite animation and precise collision detection.",
      "Steady 60 FPS on budget and flagship devices; AdMob banner and interstitial monetization.",
    ],
    tags: ["Flutter", "2D Engine", "AdMob"],
    image: "/images/games/nido-bird.webp",
    link: {
      label: "Google Play",
      href: "https://play.google.com/store/apps/details?id=com.bathan.nedobird",
    },
  },
  {
    title: "Arrow Game",
    subtitle: "Casual arrow-firing game",
    status: "Testing",
    points: [
      "Casual game where you fire arrows through colourful, increasingly challenging levels.",
      "Particle effects, responsive touch controls and Play Console testing tracks for crash telemetry.",
    ],
    tags: ["Flutter", "Casual", "Play Console"],
    image: "/images/games/arrow-game.webp",
  },
];

export const aiMedia = {
  title: "AI Media Studio",
  subtitle: "Neural diffusion & computer-vision mobile suite",
  status: "Active" as Status,
  modules: [
    { name: "Image Generator", text: "Prompt-based synthesis with aspect ratios, style seeds and negative prompts." },
    { name: "Photo Editor & Inpainting", text: "Interactive canvas masking, object erasure and high-res upscaling." },
    { name: "Neural FaceSwap", text: "Landmark-aligned face replacement with colour-matched blending." },
    { name: "Video Editor", text: "Auto subtitles, audio separation and AI enhancement filters." },
  ],
};

export const commercial: Project[] = [
  {
    title: "LinkOn (Paroter)",
    subtitle: "Social networking platform",
    status: "Shipped",
    points: ["Live streaming, interactive stories, Agora audio/video calling and an in-app tipping wallet."],
    tags: ["Agora", "Live Stream", "Wallet"],
    image: "/images/apps/linkon.jpg",
    link: {
      label: "Google Play",
      href: "https://play.google.com/store/apps/details?id=com.socioon.linkonpro",
    },
  },
  {
    title: "PTI (Rabta)",
    subtitle: "Public outreach & data collection",
    status: "Shipped",
    points: ["Responsive UI modules, secure citizen data forms and a high-throughput content feed."],
    tags: ["Forms", "Feeds", "Flutter"],
    image: "/images/apps/pti.jpg",
    link: {
      label: "Google Play",
      href: "https://play.google.com/store/apps/details?id=com.syntecx.pti",
    },
  },
  {
    title: "Bandhu",
    subtitle: "Community & social platform",
    status: "Shipped",
    points: ["Location-based friend discovery, real-time messaging, invites and digital wallets."],
    tags: ["Geo", "Chat", "Payments"],
    image: "/images/apps/bandhu.png",
  },
];

export type StoreApp = {
  name: string;
  category: string;
  icon: string;
  href?: string;
};

export const storeApps: StoreApp[] = [
  { name: "Paroter", category: "Social app", icon: "/images/apps/parochat.png", href: "https://play.google.com/store/apps/details?id=com.paroter.app" },
  { name: "Parochat", category: "Messaging", icon: "/images/apps/parochat.png", href: "https://play.google.com/store/apps/details?id=com.parochat.messenger.app" },
  { name: "PTI Raabta", category: "Political engagement", icon: "/images/apps/pti.jpg", href: "https://play.google.com/store/apps/details?id=com.syntecx.pti" },
  { name: "Club92", category: "Professional network", icon: "/images/apps/club92.png", href: "https://play.google.com/store/apps/details?id=com.socioon.club92" },
  { name: "LinkOn Pro", category: "Professional network", icon: "/images/apps/linkon.jpg", href: "https://play.google.com/store/apps/details?id=com.socioon.linkonpro" },
  { name: "Hunt+Gather", category: "Mobile app", icon: "/images/apps/huntandgather.jpg" },
  { name: "Bruzzz", category: "Social networking", icon: "/images/apps/bruzzz.jpg" },
  { name: "Bandhu", category: "Community app", icon: "/images/apps/bandhu.png" },
];

export const companies = [
  { name: "Socioon", logo: "/images/companies/socioon.jpg" },
  { name: "Heapware", logo: "/images/companies/heapware.png" },
  { name: "EwigLife", logo: "/images/companies/ewiglife.jpg" },
];

export const screens = [1, 2, 3, 4, 5].map((n) => `/images/screens/screen-${n}.png`);

export const experience = [
  {
    role: "Senior Flutter & Mobile Engineer",
    company: "Socioon",
    logo: "/images/companies/socioon.jpg",
    period: "Dec 2023 — Present",
    tech: ["Flutter", "Agora", "Stripe", "PayPal", "AdMob", "OneSignal", "BLoC", "Riverpod"],
    points: [
      "Architecting core social and generative-AI components for retention and modular scale.",
      "High-concurrency Agora calling, live broadcasting, interactive stories and P2P wallets.",
      "Stripe & PayPal payments, AdMob revenue and OneSignal behavioural push notifications.",
      "BLoC, Riverpod and GetX architectures with decoupled data repositories.",
    ],
  },
  {
    role: "Flutter Developer Intern",
    company: "Heapware",
    logo: "/images/companies/heapware.png",
    period: "Mar 2022 — Dec 2022",
    tech: ["Flutter", "GetX", "Provider", "REST APIs"],
    points: [
      "Cross-platform productivity, reminder and coffee-ordering commerce apps.",
      "Reactive state with GetX and Provider; optimised async REST sync.",
    ],
  },
];

export const skills = [
  { group: "Mobile & Games", items: ["Flutter", "Dart", "2D Game Engine", "BLoC", "Riverpod", "GetX", "Clean Architecture"] },
  { group: "AI & Voice", items: ["Gemini", "Vapi", "LiveKit", "WebRTC", "ElevenLabs", "Image Gen", "FaceSwap", "AI Video"] },
  { group: "Cloud & Payments", items: ["Firebase", "Agora RTC", "Stripe", "PayPal", "AdMob", "OneSignal", "IAP"] },
  { group: "DevOps & Release", items: ["Play Console", "App Store Connect", "TestFlight", "Ubuntu VPS", "Nginx", "SSL", "PM2", "Git"] },
];

export const deployment = [
  {
    title: "Google Play",
    text: "AAB builds, keystores, target-API compliance, internal/closed/open tracks, Data Safety and listing optimisation.",
  },
  {
    title: "Apple App Store",
    text: "Certificates, App IDs, provisioning profiles, TestFlight betas and App Store review compliance.",
  },
  {
    title: "Linux VPS",
    text: "Ubuntu/Debian servers, Nginx reverse proxy, Let's Encrypt SSL, PM2/systemd, firewalls and DNS.",
  },
];

export const education = [
  { title: "BS Computer Science", place: "Virtual University of Pakistan", period: "2018 — 2023" },
  { title: "ICS (Computer Science)", place: "Govt. Islamia College Civil Lines, Lahore", period: "2016 — 2018" },
  { title: "Mobile App Development", place: "NAVTTC, Lahore — Certification", period: "" },
];
