import React from "react";

export default function Logo({
  className,
  width = 45,
  height = 45,
}: {
  className?: string;
  width?: number;
  height?: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 500 500"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      <image href="/images/dnchat.png" x="0" y="0" width="500" height="500" />
    </svg>
  );
}
