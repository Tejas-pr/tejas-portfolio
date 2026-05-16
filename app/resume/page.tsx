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
  // Extract File ID from Google Drive URL
  const fileIdMatch = resumeConfig.url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  const fileId = fileIdMatch ? fileIdMatch[1] : null;

  // Use API proxy if ID found, otherwise fallback to original URL
  const downloadHref = fileId
    ? `/api/resume?id=${fileId}`
    : resumeConfig.url;

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
                href={downloadHref}
                download="Tejas_PR_Resume.pdf"
                aria-label="Download Resume"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 size-4" />
                Download Resume
              </a>
            </Button>
            {/* WORD BUTTON */}
            <Button variant="outline" asChild>
              <a
                href="https://docs.google.com/document/d/1Yk87Fq3FlwKg7twtErKL424PV61vMQSwZeAP4hzMuPw/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="mr-2 size-4" />
                Word View
              </a>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mx-auto max-w-lg">
            💡 <strong>Note:</strong> The Word view will always contain the most up-to-date version of my resume.
          </p>
        </div>
        <Separator />
        <div className="mx-auto max-w-2xl">
          <iframe
            src={resumeConfig.url}
            className="min-h-screen w-full"
          ></iframe>
        </div>
      </div>
    </Container>
  );
}
