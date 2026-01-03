"use client";

import {
  BriefcaseBusinessIcon,
  ClockIcon,
  CodeXmlIcon,
  GlobeIcon,
  LightbulbIcon,
  MailIcon,
  MapPinIcon,
  MarsIcon,
} from "lucide-react";
import { useEffect, useState } from "react";

import { USER } from "@/data/user";
import {
  IntroItem,
  IntroItemContent,
  IntroItemIcon,
  IntroItemLink,
} from "./intro-item";

function getJobIcon(title: string) {
  if (/(developer|engineer)/i.test(title)) {
    return <CodeXmlIcon />;
  }
  if (/(founder|co-founder)/i.test(title)) {
    return <LightbulbIcon />;
  }
  return <BriefcaseBusinessIcon />;
}

function JobItem({ title, company }: { title: string; company: string }) {
  return (
    <IntroItem>
      <IntroItemIcon>{getJobIcon(title)}</IntroItemIcon>

      <IntroItemContent>
        {title} @<span className="ml-0.5 font-medium">{company}</span>
      </IntroItemContent>
    </IntroItem>
  );
}

function CurrentLocalTimeItem({ timeZone }: { timeZone: string }) {
  const [timeString, setTimeString] = useState<string>("");
  const [diffText, setDiffText] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      // Format time for the target timezone
      const formattedTime = now.toLocaleTimeString("en-US", {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setTimeString(formattedTime);

      // Calculate timezone offset difference
      const viewerOffset = -now.getTimezoneOffset(); // in minutes
      const targetDate = new Date(now.toLocaleString("en-US", { timeZone }));
      const targetOffset = (targetDate.getTime() - now.getTime()) / 60000;

      const minutesDiff = Math.abs(targetOffset);
      const hoursDiff = minutesDiff / 60;

      let diff = "";
      if (hoursDiff < 1) {
        diff = " // same time";
      } else {
        const hours = Math.floor(hoursDiff);
        const isAhead = targetOffset > 0;
        diff = ` // ${hours}h ${isAhead ? "ahead" : "behind"}`;
      }
      setDiffText(diff);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, [timeZone]);

  if (!timeString) {
    return (
      <IntroItem>
        <IntroItemIcon>
          <ClockIcon />
        </IntroItemIcon>
        <IntroItemContent>00:00</IntroItemContent>
      </IntroItem>
    );
  }

  return (
    <IntroItem>
      <IntroItemIcon>
        <ClockIcon />
      </IntroItemIcon>

      <IntroItemContent aria-label={`Current local time: ${timeString}`}>
        {timeString}
        <span className="text-muted-foreground" aria-hidden="true">
          {diffText}
        </span>
      </IntroItemContent>
    </IntroItem>
  );
}

export function Overview() {
  return (
    <div className="screen-line-before screen-line-after border-x border-edge">
      <div className="p-4 space-y-2.5">
        {USER.jobs.map((job, index) => (
          <JobItem key={index} title={job.title} company={job.company} />
        ))}

        <div className="grid gap-x-12 gap-y-2.5 sm:grid-cols-2">
          <IntroItem>
            <IntroItemIcon>
              <MapPinIcon />
            </IntroItemIcon>
            <IntroItemContent>
              <IntroItemLink
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  USER.address
                )}`}
                aria-label={`Location: ${USER.address}`}
              >
                {USER.address}
              </IntroItemLink>
            </IntroItemContent>
          </IntroItem>

          <CurrentLocalTimeItem timeZone={USER.timeZone} />

          <IntroItem>
            <IntroItemIcon>
              <MailIcon />
            </IntroItemIcon>
            <IntroItemContent>
              <IntroItemLink
                href={`mailto:${USER.email}`}
                aria-label={`Email: ${USER.email}`}
              >
                {USER.email}
              </IntroItemLink>
            </IntroItemContent>
          </IntroItem>

          <IntroItem>
            <IntroItemIcon>
              <GlobeIcon />
            </IntroItemIcon>
            <IntroItemContent>
              <IntroItemLink
                href={USER.website}
                aria-label={`Personal website: ${USER.website.replace(
                  /https?:\/\//,
                  ""
                )}`}
              >
                {USER.website.replace(/https?:\/\//, "")}
              </IntroItemLink>
            </IntroItemContent>
          </IntroItem>

          <IntroItem>
            <IntroItemIcon>
              <MarsIcon />
            </IntroItemIcon>
            <IntroItemContent aria-label={`Pronouns: ${USER.pronouns}`}>
              {USER.pronouns}
            </IntroItemContent>
          </IntroItem>
        </div>
      </div>
    </div>
  );
}
