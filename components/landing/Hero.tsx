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
import { Download, Terminal, Package, ArrowRight } from "lucide-react";

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

      {/* Publication Badge */}
      <div className="mt-6 flex">
        <Link 
          href="https://link.springer.com/chapter/10.1007/978-981-97-3817-5_10" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-600 dark:text-indigo-400 transition-colors hover:bg-indigo-500/20"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex size-2 rounded-full bg-indigo-500"></span>
          </span>
          Publication in Springer: Stock Price Prediction Using LSTM
        </Link>
      </div>

      {/* Text Area */}
      <div className="mt-4 flex flex-col gap-2">
        <h1 className="text-4xl font-bold">
          Hi, I&apos;m {name} — <span className="text-secondary">{title}</span>
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-x-1.5 gap-y-2 text-base whitespace-pre-wrap text-neutral-500 md:text-lg">
          {renderDescription()}
        </div>
      </div>

      {/* Featured NPM Packages & AI Skills */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Link
          href="https://www.npmjs.com/package/tejas-ai-skills"
          target="_blank"
          className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-indigo-500/30 bg-indigo-500/5 p-4 backdrop-blur-sm transition-all hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]"
        >
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-indigo-500/20 p-2.5 text-indigo-400 ring-1 ring-indigo-500/30">
              <Terminal className="size-5" />
            </div>
            <div>
              <h3 className="font-semibold text-neutral-700 dark:text-neutral-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">tejas-ai-skills</h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">AI capabilities & tools</p>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between rounded-lg bg-neutral-100 dark:bg-black/40 px-3 py-2.5 border border-neutral-200 dark:border-white/5 ring-1 ring-inset ring-transparent dark:ring-white/10 group-hover:ring-indigo-500/30 transition-all">
            <code className="text-sm font-mono text-indigo-600 dark:text-indigo-300">npm i tejas-ai-skills</code>
            <ArrowRight className="size-4 text-neutral-400 dark:text-neutral-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
          </div>
        </Link>

        <div className="flex flex-col gap-3">
          <Link
            href="https://nailcutter-npm.vercel.app/"
            target="_blank"
            className="group flex h-full items-center justify-between rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4 backdrop-blur-sm transition-all hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-emerald-500/20 p-2 text-emerald-600 dark:text-emerald-400 ring-1 ring-emerald-500/30">
                <Package className="size-5" />
              </div>
              <span className="font-medium text-neutral-700 dark:text-neutral-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">NPM Packages Hub</span>
            </div>
            <ArrowRight className="size-4 text-neutral-400 dark:text-neutral-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
          </Link>
          
          <Link
            href="https://www.npmjs.com/~tejaspr?activeTab=packages"
            target="_blank"
            className="group flex h-full items-center justify-between rounded-xl border border-rose-500/30 bg-rose-500/5 p-4 backdrop-blur-sm transition-all hover:border-rose-500/50 hover:bg-rose-500/10 hover:shadow-[0_0_20px_rgba(244,63,94,0.15)]"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-rose-500/20 p-2 text-rose-600 dark:text-rose-400 ring-1 ring-rose-500/30">
                <svg viewBox="0 0 24 24" className="size-5 fill-current">
                  <path d="M0 7.334v8l6.666 1.332V18h10.668v-1.334h6.666v-9.332H0zm12 6.666H9.334v-4H12v4zm9.334 0h-2.666v-4h2.666v4z"/>
                </svg>
              </div>
              <span className="font-medium text-neutral-700 dark:text-neutral-200 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">NPM Profile</span>
            </div>
            <ArrowRight className="size-4 text-neutral-400 dark:text-neutral-500 group-hover:text-rose-600 dark:group-hover:text-rose-400 group-hover:translate-x-1 transition-all" />
          </Link>
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
                  download="Tejas_P_R_Resume.pdf"
                  aria-label="Download Resume"
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
