import Container from "@/components/common/Container";
import { getPageMetadata } from "@/config/Meta";
import { resumeConfig } from "@/config/Resume";
import { Separator } from "@radix-ui/react-separator";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

export const metadata: Metadata = {
  ...getPageMetadata("/resume"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function ResumePage() {
  return (
    <Container className="py-16">
      <div className="space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Resume
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            My resume.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="default"
              className="inset-shadow-indigo-500"
              asChild
            >
              <a
                href={resumeConfig.downloadHref}
                download="Tejas_P_R_Resume.pdf"
                aria-label="Download Resume"
              >
                <Download className="mr-2 size-4" />
                Download Resume
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href={resumeConfig.editUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="mr-2 size-4" />
                Open in Google Docs
              </a>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mx-auto max-w-lg">
            💡 <strong>Note:</strong> Both the preview below and the PDF download
            are generated live from the same Google Doc, so they always reflect
            the latest edits.
          </p>
        </div>
        <Separator />
        <div className="mx-auto max-w-2xl">
          <iframe
            src={resumeConfig.previewUrl}
            className="min-h-screen w-full"
          ></iframe>
        </div>
      </div>
    </Container>
  );
}
