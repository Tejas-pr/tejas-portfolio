"use client";

import { parseTemplate } from "@/lib/hero";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Container from "../common/Container";
import CV from "../svg/CV";
import Chat from "../svg/Chat";
import { Button } from "../ui/button";
import Link from "next/link";
import { heroConfig, skillComponents, socialLinks } from "@/config/Hero";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Skill from "../common/Skill";
import { GetInTouchButton } from "../contact/ContactModal";
import { Download } from "lucide-react";

const buttonIcons = {
  CV: CV,
  Chat: Chat,
  Download: Download,
};

export default function Hero() {
  const { name, title, avatar, skills, description, buttons } = heroConfig;

  const renderDescription = () => {
    const parts = parseTemplate(description.template, skills);

    return parts.map((part) => {
      if (part.type === "skill" && "skill" in part && part.skill) {
        const SkillComponent =
          skillComponents[part.skill.component as keyof typeof skillComponents];
        return (
          <Skill key={part.key} name={part.skill.name} href={part.skill.href}>
            <SkillComponent />
          </Skill>
        );
      } else if (part.type === "bold" && "text" in part) {
        return (
          <b key={part.key} className="text-primary whitespace-pre-wrap">
            {part.text}
          </b>
        );
      } else if (part.type === "text" && "text" in part) {
        return (
          <span key={part.key} className="whitespace-pre-wrap">
            {part.text}
          </span>
        );
      }
      return null;
    });
  };

  return (
    <Container className="mx-auto max-w-5xl" id="home">
      {/* Image */}
      <Image
        src={avatar}
        alt="hero"
        width={100}
        height={100}
        priority
        className="size-24 rounded-full bg-blue-300 dark:bg-yellow-300"
      />

      {/* Text Area */}
      <div className="mt-8 flex flex-col gap-2">
        <h1 className="text-4xl font-bold">
          Hi, I&apos;m {name} — <span className="text-secondary">{title}</span>
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-x-1.5 gap-y-2 text-base whitespace-pre-wrap text-neutral-500 md:text-lg">
          {renderDescription()}
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-8 flex gap-2">
        {socialLinks.map((link) => (
          <Tooltip key={link.name} delayDuration={0}>
            <TooltipTrigger asChild>
              <Link
                href={link.href}
                key={link.name}
                className="text-secondary flex items-center gap-2"
              >
                <span className="size-6">{link.icon}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>{link.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-8 flex gap-2">
        {buttons.map((button, index) => {
          const IconComponent =
            buttonIcons[button.icon as keyof typeof buttonIcons];

          if (button.href === "/contact") {
            return (
              <GetInTouchButton
                key={index}
                variant={button.variant as "default" | "outline"}
                text={button.text}
                icon={IconComponent}
                className={cn(
                  button.variant === "outline" && "inset-shadow-indigo-500",
                  button.variant === "default" && "inset-shadow-indigo-500",
                  "ml-2",
                )}
              />
            );
          }

          // Handle Download Button
          if ("isDownload" in button && button.isDownload) {
            // Extract File ID from Google Drive URL
            // Expected format: .../d/FILE_ID/preview or .../d/FILE_ID/view
            const fileIdMatch = button.href.match(/\/d\/([a-zA-Z0-9_-]+)/);
            const fileId = fileIdMatch ? fileIdMatch[1] : null;

            // Use API proxy if ID found, otherwise fallback to original href
            const downloadHref = fileId
              ? `/api/resume?id=${fileId}`
              : button.href;

            return (
              <Button
                key={index}
                variant={button.variant as "outline" | "default"}
                size="icon"
                className={cn(
                  "aspect-square p-2",
                  button.variant === "outline" && "inset-shadow-indigo-500",
                )}
                asChild
              >
                <a
                  href={downloadHref}
                  download="Tejas_PR_Resume.pdf"
                  aria-label="Download Resume"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {IconComponent && <IconComponent className="size-4" />}
                </a>
              </Button>
            );
          }

          return (
            <Button
              key={index}
              variant={button.variant as "outline" | "default"}
              className={cn(
                button.variant === "outline" && "inset-shadow-indigo-500",
                button.variant === "default" && "inset-shadow-indigo-500",
              )}
            >
              {IconComponent && <IconComponent />}
              <Link href={button.href}>{button.text}</Link>
            </Button>
          );
        })}
      </div>
    </Container>
  );
}
