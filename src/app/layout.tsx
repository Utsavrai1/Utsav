import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import { Providers } from "@/components/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Dark mode script - runs before React hydration to prevent flash
const darkModeScript = String.raw`
  try {
    if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    }
  } catch (_) {}
`;

export const metadata: Metadata = {
  metadataBase: new URL("https://utsavrai.com"),
  title: {
    default: "Utsav Rai — Software Engineer",
    template: "%s — Utsav Rai",
  },
  description:
    "Full-stack Software Engineer specializing in performance optimization, AI integration, and scalable systems. Building products from AI tools to global VPN infrastructure.",
  keywords: [
    "Utsav Rai",
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "AI",
    "VPN",
    "Web Development",
  ],
  authors: [
    {
      name: "Utsav Rai",
      url: "https://utsavrai.com",
    },
  ],
  creator: "Utsav Rai",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://utsavrai.com",
    siteName: "Utsav Rai",
    title: "Utsav Rai — Software Engineer",
    description:
      "Full-stack Software Engineer specializing in performance optimization, AI integration, and scalable systems.",
    images: [
      {
        url: "/icons/og-image.png",
        width: 1200,
        height: 630,
        alt: "Utsav Rai - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Utsav Rai — Software Engineer",
    description:
      "Full-stack Software Engineer specializing in performance optimization, AI integration, and scalable systems.",
    images: ["/icons/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#18181b" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{ __html: darkModeScript }}
        />
        <Script src={`data:text/javascript;base64,${btoa(darkModeScript)}`} />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
