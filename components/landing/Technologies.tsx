import { technologies } from "@/config/Technologies";
import Skill from "../common/Skill";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

export default function Technologies() {
  return (
    <Container className="mt-20" id="tech">
      <SectionHeading subHeading="That I know" heading="Technologies" />
      <div className="grid gap-6 mt-5">
        {technologies.map((category, index) => (
          <div key={index} className="space-y-3">
            <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((technology, techIndex) => (
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
        ))}
      </div>
    </Container>
  );
}
