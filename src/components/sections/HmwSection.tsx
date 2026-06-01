"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const hmws = [
  "How might we help older adults identify phishing messages before clicking suspicious links?",
  "How might we make deepfake detection accessible to people with limited digital literacy?",
  "How might we reduce panic during scam situations and guide users to safety?",
  "How might we simplify online interfaces so seniors can navigate with confidence?",
  "How might we build a warning system that explains risks in familiar, non-technical language?",
  "How might we help family members remotely monitor and assist older adults online?",
];

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function HmwSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="hmw" className="py-32">
      <div className="section-divider" />
      <div ref={ref} className="container-main pt-32">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ ease }} className="section-label">Root Cause Analysis</motion.div>
        <motion.h2 initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, ease }} className="section-heading">How Might <em>We…?</em></motion.h2>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2, ease }} className="section-body mb-16">
          From our research, we generated &ldquo;How Might We&rdquo; questions — reframing pain points as design opportunities. These became the seeds of our ideation process.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-4">
          {hmws.map((q, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.25 + i * 0.08, ease }} className="card-glow p-7 flex gap-4 items-start">
              <span className="text-[1.4rem] shrink-0 leading-none font-medium" style={{ color: "#34D399", fontFamily: "var(--font-serif)" }}>
                {String(i + 1).padStart(2, "0")}.
              </span>
              <p className="text-[0.9rem] text-[#9CA3AF] leading-relaxed">{q}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
