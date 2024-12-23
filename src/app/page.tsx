import AboutMe from "@/components/ui/aboutMe";
import { Form } from "@/components/ui/form";
import SocialLinks from "@/components/ui/social";
import { Timeline } from "@/components/ui/timeline";
import { Hero } from "@/modules/Home/Components/Hero";
import { Projects } from "@/modules/Home/Components/Projects";
import SkillsSection from "@/modules/Home/Components/Skills";
import { data } from "@/shared/constants/timeLineData";
import React from "react";

export default function Home() {
  return (
    <main className="bg-black pb-20">
      <Hero />
      <Projects />
      <Timeline data={data} />
      <AboutMe />
      <SkillsSection />
      <SocialLinks />
      <Form />
    </main>
  );
}
