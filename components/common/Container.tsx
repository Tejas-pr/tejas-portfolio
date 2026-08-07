import React from "react";

export default function Container({
  children,
  className,
  maxWidth = "max-w-3xl",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  maxWidth?: string;
}) {
  return (
    <div
      className={`animate-fade-in-blur container mx-auto ${maxWidth} px-4 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
