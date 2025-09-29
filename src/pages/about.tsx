// About.tsx
import React, { type CSSProperties } from "react";
import CTA from "@/components/cta/index";
import {
  experiences as rawExperiences,
  skills as rawSkills,
} from "../constants";

import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

export interface Skill {
  name: string;
  imageUrl: string;
}

export interface Experience {
  title: string;
  company_name: string;
  date: string;
  iconBg: string;
  icon: string;
  points: string[];
}

const isSkillArray = (v: unknown): v is Skill[] =>
  Array.isArray(v) &&
  v.every(
    (s) =>
      typeof (s as any).name === "string" &&
      typeof (s as any).imageUrl === "string"
  );

const isExperienceArray = (v: unknown): v is Experience[] =>
  Array.isArray(v) &&
  v.every(
    (e) =>
      typeof (e as any).title === "string" &&
      typeof (e as any).company_name === "string" &&
      typeof (e as any).date === "string" &&
      typeof (e as any).iconBg === "string" &&
      typeof (e as any).icon === "string" &&
      Array.isArray((e as any).points)
  );

const skills: Skill[] = isSkillArray(rawSkills) ? rawSkills : [];
const experiences: Experience[] = isExperienceArray(rawExperiences)
  ? rawExperiences
  : [];

const TimelineItem: React.FC<{ exp: Experience; index: number }> = ({
  exp,
  index,
}) => {
  const borderStyle: CSSProperties = {
    borderBottom: `8px solid ${exp.iconBg}`,
  };

  return (
    <motion.li
      className="relative mb-10 last:mb-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
        <div className="flex sm:flex-col items-center gap-3 sm:gap-2 w-full sm:w-40">
          <time className="text-sm text-slate-500">{exp.date}</time>

          <div
            className="flex items-center justify-center w-10 h-10 rounded-full shrink-0"
            style={{ background: exp.iconBg }}
            aria-hidden
          >
            <img
              src={exp.icon}
              alt={exp.company_name}
              className="w-2/3 h-2/3 object-contain"
            />
          </div>
        </div>

        <article
          className="bg-white rounded-xl p-5 shadow-sm w-full"
          style={borderStyle}
          aria-labelledby={`exp-title-${index}`}
        >
          <h3
            id={`exp-title-${index}`}
            className="text-lg font-semibold text-black"
          >
            {exp.title}
          </h3>
          <p className="text-slate-600 mt-1 mb-3 font-medium">
            {exp.company_name}
          </p>

          <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
            {exp.points.map((p, i) => (
              <li key={i} className="leading-snug">
                {p}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </motion.li>
  );
};

const About: React.FC = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient-text font-semibold drop-shadow">
          {" "}
          Utsav
        </span>{" "}
        👋
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Software Engineer based in India, specializing in technical education
          through hands-on learning and building applications.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <Tilt
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              glareEnable={false}
              className="block-container w-20 h-20 rounded-xl"
              key={skill.name}
            >
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </Tilt>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Experience.</h3>

        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I've worked with all sorts of companies, leveling up my skills and
            teaming up with smart people. Here's the rundown:
          </p>
        </div>

        <div className="mt-12 relative">
          <div
            className="absolute left-6 sm:left-10 top-0 bottom-0 w-[2px] bg-slate-200 hidden max-md:block"
            aria-hidden
          />
          <ol className="relative pl-0 space-y-10">
            {experiences.map((exp, idx) => (
              <div
                key={`${exp.company_name}-${exp.title}-${idx}`}
                className="pl-0"
              >
                <TimelineItem exp={exp} index={idx} />
              </div>
            ))}
          </ol>
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
