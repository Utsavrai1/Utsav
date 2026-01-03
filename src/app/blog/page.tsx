import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Technical articles and insights about software engineering, web development, and technology.",
  openGraph: {
    title: "Blog — Utsav Rai",
    description:
      "Technical articles and insights about software engineering, web development, and technology.",
    images: ["/icons/og-image.png"],
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <div className="container mx-auto max-w-3xl px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-muted-foreground">Blog posts coming soon...</p>
      </div>
      <SiteFooter />
    </div>
  );
}
