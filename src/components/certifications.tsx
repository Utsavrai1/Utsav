import { CERTIFICATIONS } from "@/data/certifications";
import { Panel, PanelHeader, PanelTitle } from "./panel";
import { CertificationItem } from "./certification-item";

export function Certifications() {
  return (
    <Panel id="certifications">
      <PanelHeader>
        <PanelTitle>
          Certifications
          <sup className="-top-[0.75em] ml-1 text-sm font-medium text-muted-foreground select-none">
            ({CERTIFICATIONS.length})
          </sup>
        </PanelTitle>
      </PanelHeader>

      <div>
        {CERTIFICATIONS.map((certification) => (
          <CertificationItem key={certification.id} certification={certification} />
        ))}
      </div>
    </Panel>
  );
}

