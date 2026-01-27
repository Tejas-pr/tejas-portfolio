import Calender from "@/components/svg/Calender";
import ShieldCheck from "lucide-react";
import React from "react";

export type JourneyItem = {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
};

export const journeyItems: JourneyItem[] = [
  {
    name: "My Journey",
    description: "Overview of my learning and career journey.",
    icon: Calender,
    href: "#",
  },
  // {
  //   name: "Certificates & Achievements",
  //   description: "A curated list of certificates and achievements.",
  //   icon: ShieldCheck,
  //   href: "/journey/achievements",
  // },
];

const journeyConfig = {
  journeyItems,
};

export default journeyConfig;
