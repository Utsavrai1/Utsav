import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { PROJECTS } from "@/data/projects";
import { ArrowUpRightIcon, GithubIcon, ExternalLinkIcon } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore my projects: SafePassVPN (12K+ users), Snap Talk (real-time chat), and Bite Beat (food ordering platform). Full-stack development with focus on security, performance, and scalability.",
  openGraph: {
    title: "Projects — Utsav Rai",
    description:
      "Explore my projects: SafePassVPN (12K+ users), Snap Talk (real-time chat), and Bite Beat (food ordering platform).",
    images: ["/icons/og-image.png"],
  },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SiteHeader />

      <div className="mx-auto md:max-w-3xl">
        <div className="screen-line-after border-x border-edge p-8">
          <h1 className="text-4xl font-bold mb-3">Projects</h1>
          <p className="text-lg text-muted-foreground">
            Explore the projects I've built and the impact they've made
          </p>
        </div>

        <div className="border-x border-edge">
          {PROJECTS.map((project, projectIndex) => (
            <div
              key={project.id}
              className={cn(
                "screen-line-after p-6 sm:p-8",
                projectIndex === 0 && "screen-line-before"
              )}
            >
              {/* Project Header */}
              <div className="mb-6">
                <div className="flex items-start justify-between gap-4">
                  {project.companyWebsite ? (
                    <h2 className="text-2xl font-bold">
                      <a
                        href={project.companyWebsite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {project.companyName}
                      </a>
                    </h2>
                  ) : (
                    <h2 className="text-2xl font-bold">
                      {project.companyName}
                    </h2>
                  )}
                  {project.positions[0] && (
                    <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                      {project.positions[0].employmentPeriod.start && (
                        <span>
                          {project.positions[0].employmentPeriod.start}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Project Description & Impact */}
              {project.positions.map((position, positionIndex) => (
                <div key={position.id} className="mb-6">
                  <div className="prose prose-sm prose-neutral dark:prose-invert max-w-none mb-4 [&_a]:underline [&_a]:underline-offset-4 [&_a]:text-foreground hover:[&_a]:text-foreground/80">
                    <ReactMarkdown
                      components={{
                        p: ({ children }) => <p className="mb-3">{children}</p>,
                        ul: ({ children }) => (
                          <ul className="space-y-2 mb-4">{children}</ul>
                        ),
                        li: ({ children }) => (
                          <li className="text-muted-foreground leading-relaxed">
                            {children}
                          </li>
                        ),
                        a: ({ href, children }) => (
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium inline-flex items-center gap-1"
                          >
                            {children}
                            <ArrowUpRightIcon className="size-3" />
                          </a>
                        ),
                      }}
                    >
                      {position.description || ""}
                    </ReactMarkdown>
                  </div>

                  {/* Links */}
                  {position.description?.includes("Links:") && (
                    <div className="flex flex-wrap gap-3 mb-4">
                      {position.description
                        .match(/\[([^\]]+)\]\(([^)]+)\)/g)
                        ?.map((link, idx) => {
                          const match = link.match(/\[([^\]]+)\]\(([^)]+)\)/);
                          if (!match) return null;
                          const [, text, url] = match;

                          const isGithub = url.includes("github.com");
                          const Icon = isGithub ? GithubIcon : ExternalLinkIcon;

                          return (
                            <a
                              key={idx}
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-accent transition-colors"
                            >
                              <Icon className="size-4" />
                              {text}
                            </a>
                          );
                        })}
                    </div>
                  )}

                  {/* Technologies */}
                  {position.skills && position.skills.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold mb-2">
                        Technologies Used
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {position.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="inline-flex items-center rounded-md border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
