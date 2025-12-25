"use client";

import BackToTop from "@/components/common/BackToTop";
import Container from "@/components/common/Container";
import Hero from "@/components/common/Hero";
import Github from "@/components/landing/Github";
import Skills from "@/components/landing/Skills";
import Meeting from "@/components/landing/Meeting";

export default function Page() {
  return (
    <Container className="min-h-screen">
      <Hero />
      <Skills />
      <Github />
      <Meeting />
      {/* <BackToTop /> */}
    </Container>
  );
}
