"use client";

import Container from "@/components/common/Container";
import ProfileHeader from "@/components/landing/ProfileHeader";
import Github from "@/components/landing/Github";
import Skills from "@/components/landing/Skills";
import Meeting from "@/components/landing/Meeting";
import Projects from "@/components/landing/Projects";
import DiagonalPattern from "@/components/common/DiagonalPattern";
import Dividor from "@/components/common/Dividor";
import Hero from "@/components/common/Hero";

export default function Page() {
  return (
    <div className="min-h-screen relative w-full flex flex-col items-center overflow-x-hidden">
      <div className="w-full max-w-3xl relative">
        <DiagonalPattern side="left" className="-left-[20px] md:-left-[60px]" />
        <DiagonalPattern
          side="right"
          className="-right-[20px] md:-right-[60px]"
        />
        {/* <Hero /> */}
        <ProfileHeader />
        <Dividor />
        <Skills />
        <Dividor />
        <Projects />
        <Dividor className="mt-3" />
        <Github />
        <Meeting />
      </div>
    </div>
  );
}
