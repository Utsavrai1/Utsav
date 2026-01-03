import { USER } from "@/data/user";
import { FlipSentences } from "./flip-sentences";

export function ProfileHeader() {
  return (
    <div className="screen-line-after border-x border-edge">
      <div className="flex flex-col p-4">
        <div className="flex items-end pb-1">
          <div className="line-clamp-1 font-mono text-xs text-zinc-300 select-none max-sm:hidden dark:text-zinc-800">
            {"text-3xl "}
            <span className="inline dark:hidden">text-zinc-950</span>
            <span className="hidden dark:inline">text-zinc-50</span>
            {" font-medium"}
          </div>
        </div>

        <div className="border-t border-edge pt-2">
          <div className="flex items-center gap-2">
            <h1 className="-translate-y-px text-3xl font-semibold">
              {USER.displayName}
            </h1>
          </div>

          <div className="h-12 border-t border-edge py-1 sm:h-9 flex items-center">
            <FlipSentences
              className="font-mono text-sm text-muted-foreground"
              interval={3}
            >
              {USER.flipSentences}
            </FlipSentences>
          </div>
        </div>
      </div>
    </div>
  );
}

