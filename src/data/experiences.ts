export type ExperiencePositionIcon =
  | "code"
  | "design"
  | "education"
  | "business"
  | "idea";

export type ExperiencePosition = {
  id: string;
  title: string;
  employmentPeriod: {
    start: string;
    end?: string;
  };
  employmentType?: string;
  description?: string;
  icon?: ExperiencePositionIcon;
  skills?: string[];
  isExpanded?: boolean;
};

export type Experience = {
  id: string;
  companyName: string;
  companyLogo?: string;
  companyWebsite?: string;
  positions: ExperiencePosition[];
  isCurrentEmployer?: boolean;
};

export const EXPERIENCES: Experience[] = [
  {
    id: "prostructengineering",
    companyName: "ProStruct Engineering",
    positions: [
      {
        id: "1",
        title: "Software Engineer",
        employmentPeriod: {
          start: "02.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Developed an internal reporting tool for ProStruct Engineering to streamline operational insights and decision-making.
- Built an AI-powered plan check tool, reducing plan check comments by approximately 50%.
- Improved website organic traffic and scalability by identifying and fixing critical technical SEO issues.
- Collaborated cross-functionally to deliver scalable solutions aligned with business and engineering goals.`,
        skills: [
          "React",
          "TypeScript",
          "Node.js",
          "AI Integration",
          "Technical SEO",
          "Internal Tools",
          "Cross-functional Collaboration",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "digitalshift",
    companyName: "Digital Shift Pvt. Ltd",
    positions: [
      {
        id: "2",
        title: "Software Developer Intern",
        employmentPeriod: {
          start: "08.2023",
          end: "02.2024",
        },
        employmentType: "Internship",
        icon: "code",
        description: `- Enhanced Cloutin's app, cutting start time from 3.6 to 1 second with API integration and UI improvements.
- Deployed the backend on AWS Elastic Beanstalk and used AWS S3 for efficient storage of images and videos.
- Utilized Firebase SDKs to improve app monitoring and user engagement, decreasing performance issues by 30%.
- Developed and implemented an escrow wallet system with Cashfree integration for businesses, enhancing payment processes and reducing influencer hiring time by 30% through upfront deposits and streamlined transactions.
- Played a significant role in the app's beta testing phase, achieving a 4.8-star rating from influencers and businesses.`,
        skills: [
          "React Native",
          "AWS Elastic Beanstalk",
          "AWS S3",
          "Firebase",
          "Cashfree Integration",
          "API Integration",
          "Performance Optimization",
        ],
        isExpanded: true,
      },
    ],
  },
];

