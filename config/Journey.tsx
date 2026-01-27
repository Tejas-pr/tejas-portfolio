import { Instagram, Swords } from "lucide-react";
import React from "react";

export type JourneyItem = {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
};

export const journeyItems: JourneyItem[] = [
  {
    name: "Instagram",
    description: "Making reels on instagram",
    icon: Instagram,
    href: "https://instagram.com/tejas",
  },
  {
    name: "Badminton",
    description: "Playing badminton",
    icon: Swords,
    href: "#",
  },
];

const journeyConfig = {
  journeyItems,
};

export default journeyConfig;
