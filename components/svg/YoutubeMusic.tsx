export default function YoutubeMusic({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={className}
    >
      <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Zm0-21.6c5.297 0 9.6 4.303 9.6 9.6 0 5.297-4.303 9.6-9.6 9.6-5.297 0-9.6-4.303-9.6-9.6 0-5.297 4.303-9.6 9.6-9.6Zm-2.4 14.4 7.2-4.8-7.2-4.8v9.6Z" />
    </svg>
  );
}
