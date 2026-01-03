import { AWARDS } from "@/data/awards";
import { Panel, PanelHeader, PanelTitle } from "./panel";
import { AwardItem } from "./award-item";

export function Awards() {
  return (
    <Panel id="awards">
      <PanelHeader>
        <PanelTitle>
          Honors & Awards
          <sup className="-top-[0.75em] ml-1 text-sm font-medium text-muted-foreground select-none">
            ({AWARDS.length})
          </sup>
        </PanelTitle>
      </PanelHeader>

      <div>
        {AWARDS.map((award) => (
          <AwardItem key={award.id} award={award} />
        ))}
      </div>
    </Panel>
  );
}

