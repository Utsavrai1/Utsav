export type UserJob = {
  title: string;
  company: string;
};

export const USER = {
  displayName: "Utsav Rai",
  username: "utsavrai",
  gender: "male" as const,
  pronouns: "he/him",
  flipSentences: [
    "Engineering scalable solutions from AI tools to global VPN infrastructure.",
    "Full-stack developer specializing in performance, security, and AI.",
    "Building products that impact thousands: from 1s load times to 12K+ users.",
  ],
  address: "Bangalore, India",
  email: "utsav@utsavrai.com",
  website: "https://utsavrai.com",
  jobs: [
    {
      title: "Software Engineer",
      company: "ProStruct Engineering",
    },
  ],
  avatar: "",
  timeZone: "Asia/Kolkata",
};

