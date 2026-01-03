import type { Activity } from "@/components/contribution-graph";

type GitHubContributionsResponse = {
  contributions: Activity[];
};

export async function getGitHubContributions(username: string): Promise<Activity[]> {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
      { 
        next: { revalidate: 86400 }, // Cache for 1 day
        cache: 'force-cache'
      }
    );
    
    if (!res.ok) {
      throw new Error("Failed to fetch GitHub contributions");
    }
    
    const data = (await res.json()) as GitHubContributionsResponse;
    return data.contributions;
  } catch (error) {
    console.error("Error fetching GitHub contributions:", error);
    return [];
  }
}

