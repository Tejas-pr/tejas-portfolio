"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { type Project } from "@/types/project";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

import ArrowRight from "../svg/ArrowRight";
import Github from "../svg/Github";
import Website from "../svg/Website";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

interface ProjectCardProps {
  project: Project;
}

// A live deploy link we can screenshot — not a GitHub repo used as a stand-in "live" url.
function isPreviewableLiveLink(url?: string): url is string {
  if (!url) return false;
  try {
    const { hostname, protocol } = new URL(url);
    return (
      (protocol === "http:" || protocol === "https:") &&
      !hostname.includes("github.com")
    );
  } catch {
    return false;
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [hasError, setHasError] = useState<boolean>(false);
  const [screenshotFailed, setScreenshotFailed] = useState<boolean>(false);

  const canShowLiveScreenshot =
    hasError && !screenshotFailed && isPreviewableLiveLink(project.live);

  return (
    <Card className="group h-full w-full overflow-hidden border-gray-100 p-0 shadow-none transition-all dark:border-gray-800">
      <CardHeader className="p-0">
        <div className="group relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-900">
          {canShowLiveScreenshot ? (
            <Image
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              src={`https://api.microlink.io/?url=${encodeURIComponent(
                project.live
              )}&screenshot=true&meta=false&embed=screenshot.url`}
              alt={`Live preview of ${project.title}`}
              width={1920}
              height={1080}
              unoptimized
              onError={() => setScreenshotFailed(true)}
            />
          ) : hasError ? (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 p-6 text-center">
              <span className="text-xl font-bold text-gray-400 dark:text-gray-600">
                {project.title}
              </span>
            </div>
          ) : (
            <Image
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              src={project.image}
              alt={project.title}
              width={1920}
              height={1080}
              onError={() => setHasError(true)}
            />
          )}
        </div>
      </CardHeader>

      <CardContent className="px-6">
        <div className="space-y-4">
          {/* Project Header - Title and Icons */}
          <div className="flex items-center justify-between gap-4">
            <Link href={project.projectDetailsPageSlug}>
              <h3 className="group-hover:text-primary text-xl leading-tight font-semibold hover:cursor-pointer">
                {project.title}
              </h3>
            </Link>
            <div className="flex items-center gap-2">
              <Tooltip>
                <TooltipTrigger>
                  <Link
                    className="text-secondary hover:text-primary flex size-6 items-center justify-center transition-colors"
                    href={project.link}
                    target="_blank"
                  >
                    <Website />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>View Website</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  {project.github && (
                    <Link
                      className="text-secondary hover:text-primary flex size-6 items-center justify-center transition-colors"
                      href={project.github}
                      target="_blank"
                    >
                      <Github />
                    </Link>
                  )}
                </TooltipTrigger>
                <TooltipContent>
                  <p>View GitHub</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>

          {/* Description */}
          <p className="text-secondary line-clamp-3">{project.description}</p>

          {/* Technologies */}
          <div>
            <h4 className="text-secondary mb-2 text-sm font-medium">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((technology, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger>
                    <div className="size-6 transition-all duration-300 hover:scale-120 hover:cursor-pointer">
                      {technology.icon}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{technology.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        </div>
      </CardContent>

      {project.details && (
        <CardFooter className="flex justify-between p-6 pt-0">
          <div
            className={`flex items-center gap-1 rounded-md px-2 py-1 text-xs ${
              project.isWorking
                ? "border-green-300 bg-green-500/10"
                : "border-red-300 bg-red-500/10"
            }`}
          >
            {project.isWorking ? (
              <>
                <div className="size-2 animate-pulse rounded-full bg-green-500" />
                All Systems Operational
              </>
            ) : (
              <>
                <div className="size-2 animate-pulse rounded-full bg-red-500" />
                Building
              </>
            )}
          </div>
          {/* <Link
            href={project.projectDetailsPageSlug}
            className="text-secondary hover:text-primary flex items-center gap-2 text-sm underline-offset-4 transition-colors hover:underline"
          >
            View Details <ArrowRight className="size-4" />
          </Link> */}
        </CardFooter>
      )}
    </Card>
  );
}
