export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  isFeatured?: boolean;
  features?: string[];
}

export const projects: Project[] = [
  {
    id: "trustlens-ai",
    title: "TrustLens AI",
    category: "AI / Cybersecurity / Trust & Safety",
    description:
      "An AI-powered platform that analyzes potentially suspicious content to help users spot scams, misleading information, and untrusted digital material. Users can submit images for a clear, AI-generated trust and risk assessment.",
    tags: ["Gemini API"],
    liveUrl: "https://trustlens-mauve-tau.vercel.app",
    isFeatured: true,
    features: [
      "AI-powered content analysis",
      "Scam and suspicious-content detection",
      "Image upload for analysis",
      "Camera capture option",
      "AI-generated risk and trust assessment",
      "Gemini API integration",
      "User-friendly trust and risk results",
      "Responsive interface",
    ],
  },
  {
    id: "safora",
    title: "Safora",
    category: "Personal Safety / AI",
    description:
      "An AI-powered safety and emergency assistance platform designed to support personal security during travel and everyday movement. It brings together real-time tracking, emergency communication, and intelligent safety monitoring.",
    tags: ["React Native", "Node.js", "Python", "AI", "Firebase", "WebSockets"],
    imageUrl:
      "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=2070&auto=format&fit=crop",
    features: [
      "AI geofencing safety monitoring",
      "Offline emergency messaging using mesh network technology",
      "Travel mode with accident detection",
      "Fake call feature for emergency escape situations",
      "Live tracking link sharing",
      "Multi-language support",
      "Heatmap visualization of unsafe zones",
      "Emergency contacts management with SOS system",
      "Real-time alerts and notifications",
    ],
  },
  {
    id: "ai-document-screening",
    title: "AI Document Screening",
    category: "AI / Document Verification / Security",
    description:
      "An AI-based screening system designed to assess identity documents and flag potentially fake, manipulated, or suspicious submissions. It supports a security-focused verification workflow with clear risk assessment.",
    tags: [],
    features: [
      "Document image analysis",
      "Identity and document screening",
      "Suspicious-document detection",
      "AI-assisted verification",
      "Risk and verification assessment",
      "Security-focused workflow",
    ],
  },
  {
    id: "bookspace",
    title: "BookSpace",
    category: "Web Development / Productivity",
    description:
      "A web-based platform for organizing and booking shared spaces such as classrooms, labs, and meeting rooms. It helps users check availability, manage bookings, and keep room scheduling organized.",
    tags: [],
    liveUrl: "https://book-space-lyart.vercel.app/",
    features: [
      "Space and room availability",
      "Booking management",
      "Classroom and lab scheduling",
      "User-friendly booking interface",
      "Organized room management",
      "Responsive web interface",
    ],
  },
  {
    id: "net-worth-calculator",
    title: "Net Worth Calculator",
    category: "Finance / Data",
    description:
      "A Python-based application that calculates personal net worth by analyzing income, assets, and liabilities. Its structured workflow helps organize financial inputs and produce a clear summary.",
    tags: ["Python", "SQL", "HTML"],
    imageUrl:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop",
    features: [
      "Income, asset, and liability inputs",
      "Personal net worth calculation",
      "Structured financial summary",
    ],
  },
];
