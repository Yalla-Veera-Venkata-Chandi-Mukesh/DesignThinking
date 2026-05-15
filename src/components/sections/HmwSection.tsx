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

export default function HmwSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="hmw" className="py-28">
      <div className="section-divider" />
      <div ref={ref} className="container-main pt-28">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="section-label">Root Cause Analysis</motion.div>
        <motion.h2 initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="section-heading">How Might We…?</motion.h2>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} className="section-body mb-14">
          From our research, we generated &ldquo;How Might We&rdquo; questions — reframing pain points as design opportunities. These became the seeds of our ideation process.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-5">
          {hmws.map((q, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.25 + i * 0.08 }} className="card-glow p-7 flex gap-4 items-start">
              <span className="text-[1.5rem] font-display font-800 shrink-0 leading-none" style={{ color: "#c8ff00" }}>
                {String(i + 1).padStart(2, "0")}.
              </span>
              <p className="text-[0.92rem] text-[#c0c0d0] leading-relaxed">{q}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
