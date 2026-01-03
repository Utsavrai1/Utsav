import type { Experience } from "./experiences";

export type Project = Experience;

export const PROJECTS: Project[] = [
  {
    id: "safepassvpn",
    companyName: "SafePassVPN",
    companyWebsite: "https://safepassvpn.com",
    positions: [
      {
        id: "safepassvpn-1",
        title: "SafePassVPN",
        employmentPeriod: {
          start: "2024",
        },
        icon: "idea",
        description: `- Developed and supported a secure VPN platform serving 12,000+ active users, focused on privacy, performance, and reliability across global regions.
- Implemented AES-256 military-grade encryption and enforced a strict zero-logs policy, ensuring end-to-end data security and user anonymity.
- Helped scale VPN infrastructure across 6 continents with 10+ server locations, improving connection stability and reducing latency for international users.
- Optimized backend services to support unlimited bandwidth usage and unlimited simultaneous device connections for premium subscribers.
- Contributed to system features enabling 24/7 priority support, improving user issue resolution time and service uptime.

Links: [Website](https://safepassvpn.com) • [Google Play Store](https://play.google.com/store/apps/details?id=com.computeone.safepassvpn)`,
        skills: [
          "VPN Technology",
          "AES-256 Encryption",
          "Network Security",
          "Infrastructure Scaling",
          "Backend Optimization",
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: "snaptalk",
    companyName: "Snap Talk",
    positions: [
      {
        id: "snaptalk-1",
        title: "Snap Talk",
        employmentPeriod: {
          start: "03.2024",
        },
        icon: "code",
        description: `- Real-time chat app with React 18 (frontend) and NodeJs, Prisma (backend), containerized with Docker.
- Scalable architecture with Redis Pub/Sub, enabling Socket.io server communication across multiple instances.
- Messages encrypted with AES-256 and secure key exchange via Delphi Key Exchange algorithm.
- Real-time video calling feature using WebRTC for direct peer-to-peer communication with low latency.

Links: [Frontend](https://github.com/Utsavrai1/snap-talk-frontend) • [Backend](https://github.com/Utsavrai1/snap_talk_backend) • [Live Demo](https://snaptalk-project.vercel.app)`,
        skills: [
          "React",
          "Node.js",
          "Socket.io",
          "Redis",
          "Prisma",
          "Docker",
          "WebRTC",
          "AES-256",
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: "bitebeat",
    companyName: "Bite Beat",
    positions: [
      {
        id: "bitebeat-1",
        title: "Bite Beat",
        employmentPeriod: {
          start: "01.2024",
        },
        icon: "code",
        description: `- Food ordering platform built with React 18 for the frontend and NodeJs for the backend, using Docker for scalability.
- User roles include Restaurant (manage menu), Customer (place orders and review), and Admin (approve registrations).
- Implemented secure authentication and authorization for role-based access control to protect user data.
- Designed an intuitive user interface for seamless navigation and features for tracking and managing orders.

Links: [Repository](https://github.com/Utsavrai1/bitebeat)`,
        skills: [
          "TypeScript",
          "React",
          "Node.js",
          "Tailwind CSS",
          "Firebase",
          "Docker",
        ],
        isExpanded: true,
      },
    ],
  },
];
