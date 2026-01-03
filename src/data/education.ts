export type Education = {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string | "Present";
  description?: string;
  location?: string;
  website?: string;
};

export const EDUCATION: Education[] = [
  {
    id: "1",
    institution: "IIIT Ranchi",
    degree: "Bachelor of Technology",
    field: "Computer Science and Engineering",
    startDate: "2021",
    endDate: "2025",
    location: "Ranchi, India",
    description: "Completed B.Tech in Computer Science and Engineering with focus on Software Development, Data Structures, Algorithms, and Full Stack Development",
    website: "https://iiitranchi.ac.in/",
  },
];

