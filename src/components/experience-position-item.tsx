"use client";

import { InfinityIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import type { ExperiencePosition, ExperiencePositionIcon } from "@/data/experiences";
import {
  BriefcaseBusinessIcon,
  CodeXmlIcon,
  DraftingCompassIcon,
  GraduationCapIcon,
  LightbulbIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<
  ExperiencePositionIcon,
  React.ComponentType<{ className?: string }>
> = {
  code: CodeXmlIcon,
  design: DraftingCompassIcon,
  education: GraduationCapIcon,
  business: BriefcaseBusinessIcon,
  idea: LightbulbIcon,
};

function ExperienceIcon({ icon }: { icon: ExperiencePositionIcon | undefined }) {
  const IconComponent = icon ? iconMap[icon] : BriefcaseBusinessIcon;
  return <IconComponent className="size-4" />;
}

export function ExperiencePositionItem({
  position,
}: {
  position: ExperiencePosition;
}) {
  const [isOpen, setIsOpen] = useState(position.isExpanded ?? false);
  const { start, end } = position.employmentPeriod;
  const isOngoing = !end;

  return (
    <div className="relative last:before:absolute last:before:h-full last:before:w-4 last:before:bg-background">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "block w-full text-left",
          "relative before:absolute before:-top-1 before:-right-1 before:-bottom-1.5 before:left-7 before:-z-1 before:rounded-lg before:transition-[background-color] before:ease-out hover:before:bg-accent2"
        )}
      >
        <div className="relative z-1 mb-1 flex items-center gap-3">
          <div
            className={cn(
              "flex size-6 shrink-0 items-center justify-center rounded-lg",
              "bg-muted text-muted-foreground",
              "border border-muted-foreground/15 ring-1 ring-edge ring-offset-1 ring-offset-background"
            )}
            aria-hidden
          >
            <ExperienceIcon icon={position.icon} />
          </div>

          <h4 className="flex-1 font-medium text-balance">
            {position.title}
          </h4>

          <div
            className="shrink-0 text-muted-foreground"
            aria-hidden
          >
            {isOpen ? (
              <ChevronUpIcon className="size-4" />
            ) : (
              <ChevronDownIcon className="size-4" />
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 pl-9 text-sm text-muted-foreground">
          {position.employmentType && (
            <>
              <dl>
                <dt className="sr-only">Employment Type</dt>
                <dd>{position.employmentType}</dd>
              </dl>

              <span className="text-muted-foreground">•</span>
            </>
          )}

          <dl>
            <dt className="sr-only">Employment Period</dt>
            <dd className="flex items-center gap-0.5">
              <span>{start}</span>
              <span className="font-mono">—</span>
              {isOngoing ? (
                <>
                  <InfinityIcon
                    className="size-4.5 translate-y-[0.5px]"
                    aria-hidden
                  />
                  <span className="sr-only">Present</span>
                </>
              ) : (
                <span>{end}</span>
              )}
            </dd>
          </dl>
        </div>
      </button>

      {isOpen && (
        <div className="overflow-hidden">
          {position.description && (
            <div className="pt-2 pl-9 text-sm text-muted-foreground prose prose-sm prose-neutral dark:prose-invert max-w-none [&_a]:underline [&_a]:underline-offset-4 [&_a]:text-foreground hover:[&_a]:text-foreground/80">
              <ReactMarkdown
                components={{
                  p: ({ children }) => <p className="my-1">{children}</p>,
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium"
                    >
                      {children}
                    </a>
                  ),
                }}
              >
                {position.description}
              </ReactMarkdown>
            </div>
          )}
        </div>
      )}

      {Array.isArray(position.skills) && position.skills.length > 0 && (
        <ul className="flex flex-wrap gap-1.5 pt-3 pl-9">
          {position.skills.map((skill, index) => (
            <li key={index} className="flex">
              <span className="inline-flex items-center rounded-md border border-border bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
                {skill}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

