"use client";

interface DividorProps {
  className?: string;
}

export default function Dividor({ className = "" }: DividorProps) {
  return (
    <div
      className={`border-b border-dashed dark:border-white/10 border-black/10 ${className}`}
    />
  );
}
