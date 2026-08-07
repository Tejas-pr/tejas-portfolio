"use client";

import { ctaConfig } from "@/config/CTA";
import Cal from "@calcom/embed-react";

interface CallToActionProps {
  calLink?: string;
  preText?: string;
}

export default function CTA({
  calLink = ctaConfig.calLink,
  preText = ctaConfig.preText,
}: CallToActionProps) {
  return (
    // This section deliberately breaks out of the page's ancestor
    // `max-w-3xl` container (see app/page.tsx) so the Cal.com embed gets
    // enough width to render its desktop calendar+time-slots layout
    // instead of collapsing into its narrow single-column mobile view.
    <div
      id="book-a-call"
      className="relative left-1/2 right-1/2 -mx-[50vw] mt-20 w-screen px-4"
    >
      <div className="mx-auto max-w-6xl rounded-md border border-dashed border-black/20 bg-background/80 backdrop-blur-md py-8 dark:border-white/10">
        <div className="px-6 sm:px-12">
          <p className="text-center text-base opacity-50 sm:text-left md:text-xl">
            {preText}
          </p>
        </div>

        <div className="mt-6 h-[600px] w-full overflow-hidden rounded-lg px-2 sm:px-6">
          <Cal
            calLink={calLink}
            config={{
              name: "Portfolio Visitor",
              email: "",
              notes: "Booked from portfolio website",
              layout: "month_view",
            }}
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
