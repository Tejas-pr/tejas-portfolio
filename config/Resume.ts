const fallbackUrl = 'https://drive.google.com/file/d/1fT0X918j_0F-GasNU1QRn5WwmdIiR-nS/preview';

const shareLink = process.env.UNIQUE_SHARE_CODE;

const resumeLink = process.env.RESUME_LINK || (shareLink ? `https://drive.google.com/file/d/${shareLink}/preview` : fallbackUrl);

export const resumeConfig = {
  url: resumeLink,
};
