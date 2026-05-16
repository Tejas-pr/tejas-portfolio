const fallbackUrl = 'https://drive.google.com/file/d/1H0JEjhEgoSI8HYB4Y6mdK50qESDdH9pk/preview';

const shareLink = process.env.NEXT_PUBLIC_UNIQUE_SHARE_CODE;

const resumeLink = process.env.NEXT_PUBLIC_RESUME_LINK || (shareLink ? `https://drive.google.com/file/d/${shareLink}/preview` : fallbackUrl);

export const resumeConfig = {
  url: resumeLink,
};