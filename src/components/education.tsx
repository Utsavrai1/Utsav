import { GraduationCapIcon, MapPinIcon } from "lucide-react";
import { EDUCATION } from "@/data/education";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

export function Education() {
  return (
    <Panel id="education">
      <PanelHeader>
        <PanelTitle>Education</PanelTitle>
      </PanelHeader>

      <PanelContent className="space-y-6">
        {EDUCATION.map((edu) => (
          <div key={edu.id} className="relative">
            <div className="flex gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-muted">
                <GraduationCapIcon className="size-5 text-muted-foreground" />
              </div>

              <div className="flex-1 space-y-2">
                <div>
                  <h3 className="text-lg font-semibold leading-tight">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-muted-foreground">{edu.field}</p>
                </div>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                  {edu.website ? (
                    <a
                      href={edu.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium hover:underline"
                    >
                      {edu.institution}
                    </a>
                  ) : (
                    <span className="font-medium">{edu.institution}</span>
                  )}
                  
                  {edu.location && (
                    <>
                      <span className="text-muted-foreground">•</span>
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <MapPinIcon className="size-3" />
                        {edu.location}
                      </span>
                    </>
                  )}
                </div>

                <div className="text-sm text-muted-foreground">
                  {edu.startDate} - {edu.endDate}
                </div>

                {edu.description && (
                  <p className="text-sm text-muted-foreground">
                    {edu.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </PanelContent>
    </Panel>
  );
}

