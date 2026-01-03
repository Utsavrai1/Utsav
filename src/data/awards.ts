export type Award = {
  id: string;
  title: string;
  prize: string;
  date: string;
  organization: string;
  referenceLink?: string;
  description?: string;
};

export const AWARDS: Award[] = [
  {
    id: "1",
    title: "SANS AI Cybersecurity Hackathon",
    prize: "Grand Prize Winner - Team",
    date: "Mar 2025",
    organization: "SANS Institute",
    referenceLink: "https://devpost.com/software/aaas-labs",
    description: `Built AaaS Labs - Automated Attack and Security Labs, a real-time code and website vulnerability detection platform with no-code workflows. The project enables automated security scanning, conversational AI for code analysis, and custom security workflows for continuous monitoring.`,
  },
  {
    id: "2",
    title: "GDSC Ranchi Hackathon",
    prize: "2nd Rank",
    date: "Mar 2023",
    organization: "Google Developer Student Clubs, IIIT Ranchi",
    referenceLink:
      "https://drive.google.com/file/d/1OJKs48PRsD9VtE17JJllkZO9WQIbhFsQ/view",
  },
  {
    id: "3",
    title: "Chess - Futsal (Intra College Sports Competition)",
    prize: "Gold Medal",
    date: "2024",
    organization: "IIIT Ranchi",
  },
  {
    id: "4",
    title: "Chess - Futsal (Intra College Sports Competition)",
    prize: "Silver Medal",
    date: "2023",
    organization: "IIIT Ranchi",
  },
];
