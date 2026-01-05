"use client";

import { Tabs } from "@/components/ui/tabs";
import HackathonsTab from "./HackathonsTab";
import OpenSourceTab from "./OpenSourceTab";
import CertificationsTab from "./CertificationsTab";

export default function AchievementsSection() {
  const tabs = [
    {
      title: "Hackathons",
      value: "hackathons",
      content: <HackathonsTab />,
    },
    {
      title: "Open Source",
      value: "opensource",
      content: <OpenSourceTab />,
    },
    {
      title: "Certifications",
      value: "certifications",
      content: <CertificationsTab />,
    },
  ];

  return (
    <div className="mt-16 [perspective:1000px]">
      <Tabs tabs={tabs} contentClassName="mt-7" containerClassName="mb-3" />
    </div>
  );
}
