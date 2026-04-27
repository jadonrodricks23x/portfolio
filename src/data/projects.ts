export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  isFeatured?: boolean;
  features?: string[];
}

export const projects: Project[] = [
  {
    id: "safora",
    title: "Safora",
    description: "An AI-powered safety and emergency assistance platform designed to enhance personal security during travel and daily movement. Integrates real-time tracking, emergency communication, and intelligent safety monitoring.",
    tags: ["React Native", "Node.js", "Python", "AI", "Firebase", "WebSockets"],
    imageUrl: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=2070&auto=format&fit=crop", // Sleek tech/map/security vibe
    isFeatured: true,
    features: [
      "AI Geofencing Safety Monitoring",
      "Offline Emergency Messaging using Mesh Network technology",
      "Travel Mode with Accident Detection system",
      "Fake Call Feature for emergency escape situations",
      "Live Tracking Link sharing for real-time location tracking",
      "Multi-Language Support for accessibility",
      "Heatmap visualization of unsafe zones",
      "Emergency Contacts management with SOS system",
      "Real-Time Alerts and Notifications system"
    ]
  },
  {
    id: "1",
    title: "Net Worth Calculator",
    description: "A Python-based application to calculate personal net worth by analyzing income, assets, and liabilities. Designed logical workflows for accurate financial computation.",
    tags: ["Python", "SQL", "HTML", "Finance"],
    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop",
    githubUrl: "https://github.com",
  },
  {
    id: "2",
    title: "Data Analysis Dashboard (Placeholder)",
    description: "An analytical tool for exploring data sets. This is a placeholder project to demonstrate skills in data handling and analytical thinking.",
    tags: ["Python", "Data Analysis"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    githubUrl: "https://github.com",
  },
  {
    id: "3",
    title: "Business Metrics Tracker (Placeholder)",
    description: "A digital solution focusing on usability and structured data processing for tracking key business metrics and liabilities.",
    tags: ["SQL", "HTML", "Business Management"],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    githubUrl: "https://github.com",
  }
];
