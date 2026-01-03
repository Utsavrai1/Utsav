"use client";

import { AwardIcon, FileCheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { useState } from "react";
import type { Award } from "@/data/awards";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export function AwardItem({
  className,
  award,
}: {
  className?: string;
  award: Award;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const canExpand = !!award.description;

  return (
    <div className={className}>
      <div className="flex items-center hover:bg-accent2 transition-colors">
        <div
          className="mx-4 flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted ring-1 ring-edge ring-offset-1 ring-offset-background"
          aria-hidden
        >
          <AwardIcon className="pointer-events-none size-4 text-muted-foreground" />
        </div>
        <div className="flex-1 border-l border-dashed border-edge">
          <div className="flex w-full items-center gap-2 p-4 pr-2">
            <button
              onClick={() => canExpand && setIsOpen(!isOpen)}
              className="flex-1 text-left"
              disabled={!canExpand}
            >
              <h3 className="mb-1 leading-snug font-medium text-balance">
                {award.title}
              </h3>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
                <dl>
                  <dt className="sr-only">Prize</dt>
                  <dd>{award.prize}</dd>
                </dl>

                <Separator
                  className="data-[orientation=vertical]:h-4"
                  orientation="vertical"
                />

                <dl>
                  <dt className="sr-only">Awarded in</dt>
                  <dd>
                    <time>{award.date}</time>
                  </dd>
                </dl>

                <Separator
                  className="data-[orientation=vertical]:h-4"
                  orientation="vertical"
                />

                <dl>
                  <dt className="sr-only">Organization</dt>
                  <dd>{award.organization}</dd>
                </dl>
              </div>
            </button>

            {award.referenceLink && (
              <a
                className="relative flex size-6 shrink-0 items-center justify-center text-muted-foreground after:absolute after:-inset-2 hover:text-foreground transition-colors"
                href={award.referenceLink}
                target="_blank"
                rel="noopener"
                title="View Certificate/Reference"
              >
                <FileCheckIcon
                  className="pointer-events-none size-4"
                  aria-hidden
                />
                <span className="sr-only">View Certificate</span>
              </a>
            )}

            {canExpand && (
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="shrink-0 text-muted-foreground hover:text-foreground transition-colors"
                aria-label={isOpen ? "Collapse" : "Expand"}
              >
                {isOpen ? (
                  <ChevronUpIcon className="size-4" />
                ) : (
                  <ChevronDownIcon className="size-4" />
                )}
              </button>
            )}
          </div>
        </div>
      </div>

      {canExpand && isOpen && (
        <div className="border-t border-edge">
          <div className="p-4 text-sm text-muted-foreground">
            {award.description}
          </div>
        </div>
      )}
    </div>
  );
}

