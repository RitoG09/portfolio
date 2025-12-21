"use client";

import Container from "@/components/common/Container";
import Footer from "@/components/common/Footer";
import Hero from "@/components/common/Hero";
import Skills from "@/components/landing/Skills";

export default function Page() {
  return (
    <Container className="min-h-screen">
      <Hero />
      <Skills />
      <Footer />
    </Container>
  );
}
