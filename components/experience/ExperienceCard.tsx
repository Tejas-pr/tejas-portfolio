import { type Experience } from "@/config/Experience";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

import Skill from "../common/Skill";
import Github from "../svg/Github";
import LinkedIn from "../svg/LinkedIn";
import Website from "../svg/Website";
import X from "../svg/X";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import Link from "next/link";

interface ExperienceCardProps {
  experience: Experience;
}

const parseDescription = (text: string): string => {
  return text.replace(/\*(.*?)\*/g, "<b>$1</b>");
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="flex flex-col gap-4">
      {/* Company Header */}
      <div className="flex flex-col gap-2 md:flex-row md:justify-between">
        {/* Left Side */}
        <div className="flex items-center gap-4">
          <Image
            src={experience.image}
            alt={experience.company}
            width={100}
            height={100}
            className="size-12 rounded-md"
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <h3
                className={cn(
                  "text-lg font-bold",
                  experience.isBlur ? "blur-[5px]" : "blur-none",
                )}
              >
                {experience.company}
              </h3>
              {experience.website && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={experience.website}
                      target="_blank"
                      className="size-4 text-neutral-500"
                    >
                      <Website />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>Visit Website</TooltipContent>
                </Tooltip>
              )}
              {experience.x && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={experience.x}
                      target="_blank"
                      className="size-4 text-neutral-500"
                    >
                      <X />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>Follow on X</TooltipContent>
                </Tooltip>
              )}
              {experience.linkedin && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={experience.linkedin}
                      target="_blank"
                      className="size-4 text-neutral-500"
                    >
                      <LinkedIn />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>Connect on LinkedIn</TooltipContent>
                </Tooltip>
              )}
              {experience.github && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={experience.github}
                      target="_blank"
                      className="size-4 text-neutral-500"
                    >
                      <Github />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>View GitHub</TooltipContent>
                </Tooltip>
              )}
              {experience.isCurrent && (
                <div className="flex items-center gap-1 rounded-md border-green-300 bg-green-500/10 px-2 py-1 text-xs">
                  <div className="size-2 animate-pulse rounded-full bg-green-500"></div>
                  Working
                </div>
              )}
            </div>
            <p>{experience.position}</p>
          </div>
        </div>
        {/* Right Side */}
        <div className="text-secondary flex flex-col md:text-right">
          <p>
            {experience.startDate} -{" "}
            {experience.isCurrent ? "Present" : experience.endDate}
          </p>
          <p>{experience.location}</p>
        </div>
      </div>

      {/* Technologies */}
      <div>
        <h4 className="text-md mt-4 mb-2 font-semibold">Technologies</h4>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((technology, techIndex: number) => (
            <Skill
              key={techIndex}
              name={technology.name}
              href={technology.href}
            >
              {technology.icon}
            </Skill>
          ))}
        </div>
      </div>

      {/* Description or Projects */}
      <div className="text-secondary flex flex-col gap-4">
        {experience.description && (
          <div className="flex flex-col">
            {experience.description.map(
              (description: string, descIndex: number) => (
                <p
                  key={descIndex}
                  dangerouslySetInnerHTML={{
                    __html: `• ${parseDescription(description)}`,
                  }}
                />
              ),
            )}
          </div>
        )}

        {experience.projects && (
          <div className="flex flex-col gap-4">
            {experience.projects.map((project, projectIndex) => (
              <div key={projectIndex} className="flex flex-col gap-1">
                <h5 className="text-foreground font-bold italic">
                  Project {projectIndex + 1}: {project.name}
                </h5>
                <div className="flex flex-col">
                  {project.description.map((desc, descIndex) => (
                    <p
                      key={descIndex}
                      dangerouslySetInnerHTML={{
                        __html: `• ${parseDescription(desc)}`,
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
