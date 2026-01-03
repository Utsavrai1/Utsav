import { Awards } from "@/components/awards";
import { Certifications } from "@/components/certifications";
import { Education } from "@/components/education";
import { Experiences } from "@/components/experiences";
import { GitHubContributions } from "@/components/github-contributions";
import { Overview } from "@/components/overview";
import { ProfileHeader } from "@/components/profile-header";
import { Projects } from "@/components/projects";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SocialLinks } from "@/components/social-links";
import { TechStack } from "@/components/tech-stack";

function Separator() {
  return (
    <div className="relative flex h-8 w-full border-x border-edge overflow-hidden">
      <div className="absolute -left-[100vw] -z-1 h-8 w-[200vw] bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-edge)]/56" />
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SiteHeader />

      <div className="mx-auto md:max-w-3xl">
        <ProfileHeader />
        <Separator />

        <Overview />
        <Separator />

        <SocialLinks />
        <Separator />

        <GitHubContributions username="Utsavrai1" />
        <Separator />

        <TechStack />
        <Separator />

        <Experiences />
        <Separator />

        <Projects />
        <Separator />

        <Education />
        <Separator />

        <Awards />
        <Separator />

        <Certifications />
      </div>

      <SiteFooter />
    </div>
  );
}
