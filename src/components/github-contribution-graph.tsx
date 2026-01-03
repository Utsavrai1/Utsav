"use client";

import { format } from "date-fns";

import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
  type Activity,
} from "@/components/contribution-graph";

type GitHubContributionGraphProps = {
  data: Activity[];
  username: string;
};

export function GitHubContributionGraph({
  data,
  username,
}: GitHubContributionGraphProps) {
  if (!data || data.length === 0) {
    return (
      <div className="flex h-40 items-center justify-center text-muted-foreground">
        No contribution data available
      </div>
    );
  }

  return (
    <ContributionGraph
      className="mx-auto py-2"
      data={data}
      blockSize={11}
      blockMargin={3}
      blockRadius={0}
    >
      <ContributionGraphCalendar
        className="no-scrollbar px-2"
        title="GitHub Contributions"
      >
        {({ activity, dayIndex, weekIndex }) => (
          <g>
            <title>
              {activity.count} contribution{activity.count !== 1 ? "s" : ""} on{" "}
              {format(new Date(activity.date), "dd.MM.yyyy")}
            </title>
            <ContributionGraphBlock
              activity={activity}
              dayIndex={dayIndex}
              weekIndex={weekIndex}
            />
          </g>
        )}
      </ContributionGraphCalendar>

      <ContributionGraphFooter className="px-2">
        <ContributionGraphTotalCount>
          {({ totalCount, year }) => (
            <div className="text-muted-foreground">
              {totalCount.toLocaleString("en")} contributions in {year} on{" "}
              <a
                className="font-medium underline underline-offset-4"
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener"
              >
                GitHub
              </a>
              .
            </div>
          )}
        </ContributionGraphTotalCount>

        <ContributionGraphLegend />
      </ContributionGraphFooter>
    </ContributionGraph>
  );
}

