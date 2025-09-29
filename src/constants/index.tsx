import { upwork, digitalshift } from "@/assets/images/index";
import {
  contact,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  mui,
  nextjs,
  nodejs,
  nexaconnect,
  react,
  redux,
  tailwindcss,
  typescript,
  aws,
  threejs,
  swagger,
  redis,
  python,
  postman,
  postgresql,
  mysql,
  flutter,
  docker,
  dart,
  snaptalk,
  android,
  bitebeat,
  kafka,
  socketio,
} from "@/assets/icons/index";

export const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Language",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Language",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: aws,
    name: "Amazon Web Services",
    type: "Tool",
  },
  {
    imageUrl: docker,
    name: "Docker",
    type: "Tool",
  },
  {
    imageUrl: postgresql,
    name: "Postgresql",
    type: "Database",
  },
  {
    imageUrl: mysql,
    name: "MySql",
    type: "Database",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Language",
  },
  {
    imageUrl: redis,
    name: "Redis",
    type: "Database",
  },
  {
    imageUrl: kafka,
    name: "Kafka",
    type: "Distributed event streaming platform",
  },
  {
    imageUrl: flutter,
    name: "Flutter",
    type: "Frontend",
  },
  {
    imageUrl: dart,
    name: "Dart",
    type: "Language",
  },
  {
    imageUrl: threejs,
    name: "ThreeJs",
    type: "Frontend",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: postman,
    name: "Postman",
    type: "Tool",
  },
  {
    imageUrl: swagger,
    name: "Swagger",
    type: "Tool",
  },
  {
    imageUrl: android,
    name: "Android",
    type: "Frontend",
  },
  {
    imageUrl: socketio,
    name: "Socket Io",
    type: "Package",
  },
];

export const experiences = [
  {
    title: "Softwale Developer",
    company_name: "Digital Shift Pvt. Ltd",
    icon: digitalshift,
    iconBg: "#ffa07a",
    date: "Aug 2023 - Feb 2024",
    points: [
      " Worked on Cloutin`s Flutter app and Node.js backend, integrating APIs, enhancing UI/UX, and cutting app start time from 3.6 seconds to 1 second.",
      "Implemented Firebase SDKs including Analytics, Crashlytics, and Performance to enhance app monitoring and user engagement, leading to a 30% decrease in performance issues.",
      "Implemented backend wallet system for businesses, reducing influencer hiring time by 30% by enabling upfront fund deposits, streamlining payments for marketing campaigns.",
      "Contributed to the app`s beta testing phase, resulting in a 4.8-star rating from influencers and businesses.",
    ],
  },
  {
    title: "Freelance Flutter Developer",
    company_name: "Get Work(UpWork)",
    icon: upwork,
    iconBg: "#90ee90",
    date: "May 2023 - Jul 2023",
    points: [
      "Contracted to design and develop three mobile games: Switch Ball, Right Ball, and 2048.",
      "Built the UI and game mechanics for all three games, utilizing the Flame package to render game screens 20% faster, ensuring a smooth and engaging user experience.",
      "Successfully completed the project in just 2 weeks, well ahead of the 4-week deadline.",
      "Received a 5-star rating from the client for the quality and timely delivery of the games.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "#",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/Utsavrai1",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/raiutsav",
  },
];

export const projects = [
  {
    iconUrl: nexaconnect,
    theme: "btn-back-red",
    name: "NexaConnect",
    description:
      "NexaConnect is a cross-platform video and audio calling application built using Flutter. It allows users to seamlessly connect with others through high-quality video and audio calls.",
    link: "https://drive.google.com/file/d/1Iq3-cONOsGd1RVbXo_PjVMrDoGC5GwRf/view",
    repolink: "https://github.com/Utsavrai1/nexaconnect",
    technologies: [dart, flutter],
  },
  {
    iconUrl: bitebeat,
    theme: "btn-back-pink",
    name: "BiteBeat",
    description:
      "BiteBeat is a food ordering application designed to simplify the process of ordering food from various restaurants. It provides users with a seamless experience from exploring menus to tracking deliveries.",
    link: "https://bitebeat.onrender.com/",
    repolink:
      "https://gist.github.com/Utsavrai1/adda796650e52b0810ae9fb7c6825476",
    technologies: [typescript, react, nodejs, express, mongodb],
  },
  {
    iconUrl: snaptalk,
    theme: "btn-back-green",
    name: "SnapTalk",
    description:
      "SnapTalk is a modern real-time chat application that enables seamless communication across platforms, boasting features like real-time messaging, user authentication, and chat room functionality.",
    link: "https://snaptalk-project.vercel.app/",
    repolink:
      "https://gist.github.com/Utsavrai1/7e9d04467a16b2b7c358660c1dc0add5",
    technologies: [
      dart,
      javascript,
      react,
      nodejs,
      express,
      mongodb,
      flutter,
      socketio,
    ],
  },
];
