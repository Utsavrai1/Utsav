import Image from "next/image";
import { cn } from "@/lib/utils";
import { TECH_STACK } from "@/data/tech-stack";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function TechStack() {
  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>

      <PanelContent
        className={cn(
          "[--pattern-foreground:oklch(0.141_0.005_285.823_/_0.05)] dark:[--pattern-foreground:oklch(0.985_0_0_/_0.05)]",
          "bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center"
        )}
      >
        <TooltipProvider>
          <ul className="flex flex-wrap gap-4 select-none">
            {TECH_STACK.map((tech) => {
              return (
                <li key={tech.key} className="flex">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={tech.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={tech.title}
                        className={cn(
                          "flex items-center justify-center",
                          // Invert dark icons in dark mode for visibility
                          ["kafka", "express", "socketio", "threejs", "github"].includes(tech.key) &&
                            "dark:invert"
                        )}
                      >
                        <Image
                          src={tech.imageUrl}
                          alt={tech.title}
                          width={32}
                          height={32}
                          unoptimized
                          className={cn(
                            // Scale down Kafka icon
                            tech.key === "kafka" && "scale-75"
                          )}
                        />
                      </a>
                    </TooltipTrigger>

                    <TooltipContent>
                      <p>{tech.title}</p>
                    </TooltipContent>
                  </Tooltip>
                </li>
              );
            })}
          </ul>
        </TooltipProvider>
      </PanelContent>
    </Panel>
  );
}

