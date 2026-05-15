"use client";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import MissionSection from "@/components/sections/MissionSection";
import TeamSection from "@/components/sections/TeamSection";
import ProblemSection from "@/components/sections/ProblemSection";
import ResearchSection from "@/components/sections/ResearchSection";
import JourneySection from "@/components/sections/JourneyMapSection";
import InterviewsSection from "@/components/sections/InterviewsSection";
import HmwSection from "@/components/sections/HmwSection";
import IdeationSection from "@/components/sections/IdeationSection";
import MindmapSection from "@/components/sections/MindmapSection";
import SolutionSection from "@/components/sections/SolutionSection";

const SmoothScroll = dynamic(() => import("@/components/SmoothScroll"), { ssr: false });

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <HeroSection />
        <MissionSection />
        <TeamSection />
        <ProblemSection />
        <ResearchSection />
        <JourneySection />
        <InterviewsSection />
        <HmwSection />
        <MindmapSection />
        <IdeationSection />
        <SolutionSection />
      </main>
    </SmoothScroll>
  );
}
