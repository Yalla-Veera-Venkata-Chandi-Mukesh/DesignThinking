"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const findings = [
  "Social media is now the dominant source of information for older adults — overtaking TV and newspapers for many WhatsApp-active seniors.",
  "Users frequently feel confused about whether content is real or fake, especially when it is emotionally charged or widely shared.",
  "Most participants cannot confidently distinguish AI-generated content from authentic media, increasing vulnerability to deepfakes.",
  "Urgency and emotional language in scam messages causes panic, leading to hasty decisions before any verification occurs.",
  "Clear warnings and familiar terminology significantly improved confidence and reduced fear during suspicious interactions.",
];

export default function ResearchSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="research" className="py-28">
      <div className="section-divider" />
      <div ref={ref} className="container-main pt-28">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="section-label">Empathy Phase</motion.div>
        <motion.h2 initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="section-heading">Research & Survey Insights</motion.h2>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} className="section-body mb-14">
          We surveyed 50+ participants and conducted in-depth audio-recorded interviews to understand real user experiences with digital scams — the confusion, the emotional impact, and the behavioral patterns.
        </motion.p>

        {/* Key Findings */}
        <div className="space-y-4">
          {findings.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 + i * 0.08 }} className="flex gap-4 items-start p-5 rounded-2xl" style={{ background: "#111118", border: "1px solid rgba(255,255,255,0.04)" }}>
              <div className="w-1 shrink-0 rounded-full self-stretch" style={{ background: i % 2 === 0 ? "#00d4ff" : "#c8ff00" }} />
              <p className="text-[0.95rem] text-[#c0c0d0] leading-relaxed">{f}</p>
            </motion.div>
          ))}
        </div>

        {/* AI Problem Callout */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.7 }} className="card-glow p-8 md:p-10 mt-10">
          <p className="text-[0.9rem] font-semibold mb-3" style={{ color: "#ff6b35" }}>🤖 The AI Amplification Problem</p>
          <p className="text-[0.95rem] text-[#8a8a9a] leading-relaxed">
            AI plays a significant role in worsening scam threats for seniors. AI-generated content — highly realistic articles, images, deepfake videos, and voice cloning — is now indistinguishable from genuine information. AI also enables rapid impersonation scam calls and phishing at scale. Since most older adults already lack confidence identifying suspicious content, AI makes this exponentially worse. The result: greater confusion, stronger panic, and more devastating financial and emotional consequences.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
