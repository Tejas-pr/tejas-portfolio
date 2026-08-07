// The resume lives in a single Google Doc — edit it there and the site
// picks up the change automatically. No more manually exporting a PDF and
// re-uploading it: both the embedded preview and the "Download" button are
// generated live from this same doc on every request.
//
// Override the doc via NEXT_PUBLIC_RESUME_DOC_ID if it ever moves. The
// default below is extracted from:
// https://docs.google.com/document/d/1Yk87Fq3FlwKg7twtErKL424PV61vMQSwZeAP4hzMuPw/edit
const DEFAULT_DOC_ID = "1Yk87Fq3FlwKg7twtErKL424PV61vMQSwZeAP4hzMuPw";

const docId = process.env.NEXT_PUBLIC_RESUME_DOC_ID || DEFAULT_DOC_ID;

export const resumeConfig = {
  docId,
  // Read-only, embeddable live preview of the doc's current content.
  previewUrl: `https://docs.google.com/document/d/${docId}/preview`,
  // Opens the doc directly on Google Docs.
  editUrl: `https://docs.google.com/document/d/${docId}/edit?usp=sharing`,
  // Our proxy (app/api/resume/route.ts) that streams a freshly generated
  // PDF export of the doc, under a fixed filename.
  downloadHref: "/api/resume",
};
