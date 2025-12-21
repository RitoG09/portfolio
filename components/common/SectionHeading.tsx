import React from "../technologies/React";

interface SectionHeadingProps {
  subHeading: string;
  heading: string;
}

export default function SectionHeading({
  subHeading,
  heading,
}: SectionHeadingProps) {
  return (
    <>
      <p className="text-secondary text-sm">{subHeading}</p>
      <h2 className="text-2xl font-bold">{heading}</h2>
    </>
  );
}
