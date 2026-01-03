import { ArrowUpRightIcon, ShieldCheckIcon } from "lucide-react";
import type { Certification } from "@/data/certifications";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export function CertificationItem({
  className,
  certification,
}: {
  className?: string;
  certification: Certification;
}) {
  return (
    <a
      className={cn(
        "group/cert flex items-center pr-2 hover:bg-accent2 transition-colors",
        className
      )}
      href={certification.credentialUrl}
      target="_blank"
      rel="noopener"
    >
      <div
        className={cn(
          "mx-4 flex size-6 shrink-0 items-center justify-center rounded-lg select-none",
          "border border-muted-foreground/15 ring-1 ring-edge ring-offset-1 ring-offset-background",
          "bg-muted text-muted-foreground [&_svg]:size-4"
        )}
        aria-hidden
      >
        <ShieldCheckIcon />
      </div>

      <div className="flex-1 space-y-1 border-l border-dashed border-edge p-4 pr-2">
        <h3 className="leading-snug font-medium text-balance underline-offset-4 group-hover/cert:underline">
          {certification.title}
        </h3>

        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
          <dl>
            <dt className="sr-only">Issued by</dt>
            <dd>
              <span aria-hidden>@</span>
              <span className="ml-0.5">{certification.issuer}</span>
            </dd>
          </dl>

          {certification.issueDate && (
            <>
              <Separator
                className="data-[orientation=vertical]:h-4"
                orientation="vertical"
              />
              <dl>
                <dt className="sr-only">Issued on</dt>
                <dd>
                  <span>{certification.issueDate}</span>
                </dd>
              </dl>
            </>
          )}
        </div>
      </div>

      <ArrowUpRightIcon
        className="size-4 text-muted-foreground"
        aria-hidden
      />
    </a>
  );
}

