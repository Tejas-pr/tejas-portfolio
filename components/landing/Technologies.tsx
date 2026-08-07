"use client";

import { useState } from "react";
import { technologies } from "@/config/Technologies";
import Skill from "../common/Skill";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

export default function Technologies() {
  const [activeCategory, setActiveCategory] = useState(
    technologies[0].category
  );

  const active =
    technologies.find((category) => category.category === activeCategory) ??
    technologies[0];

  return (
    <Container className="mt-20" id="tech">
      <SectionHeading subHeading="That I know" heading="Technologies" />

      <div className="mt-5 flex flex-wrap gap-2">
        {technologies.map((category) => {
          const isActive = category.category === activeCategory;
          return (
            <button
              key={category.category}
              type="button"
              onClick={() => setActiveCategory(category.category)}
              aria-pressed={isActive}
              className={`rounded-md border px-3 py-1 text-sm font-medium transition-colors ${
                isActive
                  ? "border-black bg-black text-white dark:border-white dark:bg-white dark:text-black"
                  : "border-black/20 text-neutral-600 hover:border-black/40 dark:border-white/30 dark:text-neutral-400 dark:hover:border-white/50"
              }`}
            >
              {category.category}
            </button>
          );
        })}
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {active.items.map((technology, techIndex) => (
          <Skill
            key={techIndex}
            name={technology.name}
            href={technology.href}
          >
            {technology.icon}
          </Skill>
        ))}
      </div>
    </Container>
  );
}
