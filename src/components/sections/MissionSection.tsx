"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  { icon: "🔍", title: "Verification & Detection", tags: ["AI scam detection", "Deepfake identification", "Phishing link scanning", "Fake caller detection"] },
  { icon: "🔗", title: "Accessibility & Simplification", tags: ["Large readable fonts", "Simplified navigation", "High-contrast interfaces", "Guided walkthroughs"] },
  { icon: "🎯", title: "Behavior & Trust Building", tags: ["Step-by-step guidance", "Confirmation before actions", "Progressive digital literacy", "Familiar language"] },
  { icon: "🧠", title: "Emotional & Cognitive Support", tags: ["Panic prevention systems", "Reassuring AI assistant", "Clear risk explanations", "Family-assisted safety"] },
];

export default function MissionSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="mission" className="py-28">
      <div className="section-divider" />
      <div ref={ref} className="container-main pt-28">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="section-label">Our Mission</motion.div>
        <motion.h2 initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }} className="section-heading">Why This Matters</motion.h2>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="section-body mb-12">
          As AI-generated content becomes increasingly realistic, older adults are becoming more vulnerable to phishing scams, fake OTP messages, impersonation scams, manipulated videos, deepfakes, and misleading social media content. Modern interfaces are cluttered, advertisement-heavy, and visually overwhelming. We set out to understand the human experience behind digital vulnerability for seniors — the confusion, the panic, the trust that gets exploited.
        </motion.p>

        {/* Problem statement quote */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }} className="card-glow p-8 md:p-10 mb-10">
          <div className="quote-mark">&ldquo;</div>
          <p className="quote-text mt-2">
            A senior citizen who relies on WhatsApp, Facebook, and online banking needs to have a simple, guided, and trustworthy way to identify suspicious content before interacting with it — because they want to stay connected without accidentally falling victim to scams or damaging their digital confidence.
          </p>
        </motion.div>

        {/* HMW Banner */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 }} className="card p-6 mb-14" style={{ borderColor: "rgba(52,211,153,0.18)" }}>
          <p className="text-[0.92rem]" style={{ color: "#34D399" }}>
            How might we help older adults quickly identify digital threats so that scam vulnerability decreases and confident, independent digital usage becomes natural?
          </p>
        </motion.div>

        {/* 4 Pillars */}
        <div className="grid md:grid-cols-2 gap-5">
          {pillars.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 + i * 0.1 }} className="card">
              <p className="text-[0.68rem] tracking-[3px] uppercase font-semibold mb-4" style={{ color: "#34D399" }}>
                {p.icon} {p.title}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => <span key={t} className="pill">{t}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
