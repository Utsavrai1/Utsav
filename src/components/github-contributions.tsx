import { Suspense } from "react";

import { GitHubContributionGraph } from "./github-contribution-graph";
import { getGitHubContributions } from "@/lib/github-api";
import { Panel } from "./panel";

type GitHubContributionsProps = {
  username: string;
};

async function GitHubData({ username }: { username: string }) {
  const data = await getGitHubContributions(username);
  return <GitHubContributionGraph data={data} username={username} />;
}

function GitHubContributionFallback() {
  return (
    <div className="flex h-40 w-full items-center justify-center">
      <div className="size-6 animate-spin rounded-full border-2 border-muted-foreground border-t-transparent" />
    </div>
  );
}

export function GitHubContributions({ username }: GitHubContributionsProps) {
  return (
    <Panel>
      <h2 className="sr-only">GitHub Contributions</h2>

      <Suspense fallback={<GitHubContributionFallback />}>
        <GitHubData username={username} />
      </Suspense>
    </Panel>
  );
}
