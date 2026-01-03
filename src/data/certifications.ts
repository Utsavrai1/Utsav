export type Certification = {
  id: string;
  title: string;
  issuer: string;
  issuerIconName?: string;
  issuerLogoUrl?: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl: string;
};

export const CERTIFICATIONS: Certification[] = [
  {
    id: "1",
    title: "Python",
    issuer: "Kaggle",
    issuerIconName: "kaggle",
    issueDate: "2024",
    credentialUrl: "https://www.kaggle.com/learn/certification/utsavrai1/python",
  },
  {
    id: "2",
    title: "SQL (Basic)",
    issuer: "HackerRank",
    issuerIconName: "hackerrank",
    issueDate: "2024",
    credentialId: "22b4145670e0",
    credentialUrl: "https://www.hackerrank.com/certificates/22b4145670e0",
  },
  {
    id: "3",
    title: "Python (Basic)",
    issuer: "HackerRank",
    issuerIconName: "hackerrank",
    issueDate: "2024",
    credentialId: "80ea3b2395bf",
    credentialUrl: "https://www.hackerrank.com/certificates/80ea3b2395bf",
  },
  {
    id: "4",
    title: "Data Structures and Algorithms",
    issuer: "Udemy",
    issuerIconName: "udemy",
    issueDate: "2024",
    credentialId: "UC-ee64222e-6dfa-4693-86c4-ff561d76f61c",
    credentialUrl: "https://www.udemy.com/certificate/UC-ee64222e-6dfa-4693-86c4-ff561d76f61c/",
  },
];

