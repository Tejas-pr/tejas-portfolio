import { certifications } from "@/config/Certifications";
import { ArrowUpRight } from "lucide-react";
import React from "react";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { Card } from "../ui/card";
import Link from "next/link";

export default function Certifications() {
  return (
    <Container className="mt-10">
      <SectionHeading subHeading="Achievements" heading="Licenses & Certifications" />
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        {certifications.map((item) => (
          <Link className="group" href={item.href} key={item.name} target="_blank" rel="noopener noreferrer">
            <Card className="relative flex h-full flex-row items-center justify-between gap-4 px-4 py-4 transition-all duration-300 hover:border-indigo-500/50 hover:bg-muted/50">
              <div className="flex flex-1 items-center gap-4 min-w-0">
                <div className="bg-muted flex shrink-0 items-center justify-center rounded-md p-3">
                  {(() => {
                    const Icon = item.icon as React.ComponentType<{
                      className?: string;
                    }>;
                    return <Icon className="size-6 text-indigo-500" />;
                  })()}
                </div>
                <div className="flex flex-col min-w-0">
                  <h3 className="text-base font-semibold leading-tight">{item.name}</h3>
                  <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground whitespace-nowrap">{item.issuer}</span>
                    <span className="shrink-0">•</span>
                    <span className="whitespace-nowrap">{item.date}</span>
                  </div>
                  {item.description && (
                    <p className="mt-1 text-xs text-muted-foreground">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
              <ArrowUpRight className="size-5 shrink-0 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100 group-hover:text-indigo-400" />
            </Card>
          </Link>
        ))}
      </div>
    </Container>
  );
}
