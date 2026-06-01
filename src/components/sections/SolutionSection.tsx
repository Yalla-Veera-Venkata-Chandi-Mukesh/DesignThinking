"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  { title: "Pillar 1 — AI Scam Detection Layer", desc: "Every message, call, and link gets a live threat assessment — powered by AI scam pattern recognition, phishing databases, and deepfake audio analysis.", gradient: "linear-gradient(135deg, #34D399, #10B981)" },
  { title: "Pillar 2 — Clear Warning System", desc: "No confusing technical jargon. Simple, color-coded alerts (e.g., Red for 'High Risk — Do Not Click') that interrupt impulsive actions safely.", gradient: "linear-gradient(135deg, #2DD4BF, #059669)" },
  { title: "Pillar 3 — Family Co-Pilot", desc: "Trusted family members receive silent alerts for high-risk threats, allowing them to step in before money is transferred or data is compromised.", gradient: "linear-gradient(135deg, #10B981, #34D399)" },
  { title: "Pillar 4 — Gentle Learning", desc: "Instead of boring tutorials, users get bite-sized, in-the-moment explanations about why something was blocked, gradually building their own digital intuition.", gradient: "linear-gradient(135deg, #A7F3D0, #34D399)" }
];

const steps = [
  { num: "1", title: "Detect", desc: "AI scans all incoming content, links, and calls in real-time" },
  { num: "2", title: "Warn", desc: "Clear, non-technical warning appears before any risky interaction" },
  { num: "3", title: "Guide", desc: "Step-by-step explanation of the threat with recommended action" },
  { num: "4", title: "Protect", desc: "Automatic blocking of confirmed threats with undo option" },
  { num: "5", title: "Reassure", desc: "Post-incident explanation and confidence-building feedback" },
];

const reflections = [
  { title: "Empathy Changes Everything", text: "Going into interviews, we assumed digital scams were mostly a literacy problem. Talking to real seniors showed us it's equally an emotional and trust problem — people fall for scams because they panic, feel urgency, or simply trust familiar-looking content." },
  { title: "The AI Problem Is Already Here", text: "We expected to find concern about future AI threats. Instead, participants were already living it — deepfake videos had fooled family members, AI voice cloning had impersonated their children. Our solution had to address this as a present-tense crisis." },
  { title: "Friction Can Be a Feature", text: "Early in ideation, we wanted to make protection invisible and seamless. User feedback helped us understand that a small, intentional pause — a moment of friction — is actually valuable. The warning overlay isn't an obstacle; it's a design choice that respects the user's desire to stay safe." },
  { title: "Research Changes Your Solution", text: "We generated 150+ ideas across multiple HMW questions. Without structured research, we would have built a simple fact-check tool. The interview insights, empathy maps, and journey mapping revealed that emotional reassurance and accessibility were equally important." },
];

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function SolutionSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="solution" className="py-32">
      <div className="section-divider" />
      <div ref={ref} className="container-main pt-32">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ ease }} className="section-label">Proposed Solution</motion.div>
        <motion.h2 initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, ease }} className="section-heading">SeniorSafe — Our <em>Final Solution</em></motion.h2>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2, ease }} className="section-body mb-8">
          Synthesizing everything we learned — from 50+ interviews, survey responses, empathy maps, journey mapping, and 150+ brainwriting ideas — we propose SeniorSafe: an accessibility-first digital protection ecosystem that meets seniors where they already are and makes digital safety the path of least resistance.
        </motion.p>

        {/* Solution card */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3, ease }} className="card-glow p-8 md:p-10 mb-10" style={{ borderColor: "rgba(52,211,153,0.18)" }}>
          <h3 className="text-xl font-semibold text-white mb-2" style={{ fontFamily: "var(--font-serif)" }}>The <span style={{ color: "#34D399" }}>SeniorSafe</span> Shield</h3>
          <p className="text-[0.85rem] italic mb-5" style={{ color: "#34D399", fontFamily: "var(--font-serif)" }}>Protect first. Explain clearly. Build confidence.</p>
          <p className="text-[0.92rem] text-[#9CA3AF] leading-relaxed">
            SeniorSafe is an accessibility-first protection ecosystem combining simplified interfaces, AI scam detection, fake call protection, guided explanations, emotional reassurance, and multi-platform safety — all designed specifically for older adults. It scored highest across desirability, usability, and accessibility impact.
          </p>
        </motion.div>

        {/* 4 Pillars */}
        <div className="grid md:grid-cols-2 gap-4 mb-16">
          {pillars.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 + i * 0.1, ease }} className="card">
              <div className="w-12 h-1.5 rounded-full mb-6" style={{ background: p.gradient }} />
              <h4 className="text-[0.9rem] font-semibold text-white mb-2">{p.title}</h4>
              <p className="text-[0.85rem] text-[#9CA3AF] leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* 5-Step Flow */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6, ease }}>
          <h3 className="text-[1.3rem] text-white mb-6" style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}>How SeniorSafe Works — The 5-Step Flow</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {steps.map((s, i) => (
              <motion.div key={s.num} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.7 + i * 0.08, ease }} className="card text-center py-8">
                <div className="text-[2rem] mb-2" style={{ color: "#34D399", fontFamily: "var(--font-serif)", fontWeight: 700 }}>{s.num}</div>
                <p className="font-semibold text-white text-[0.88rem] mb-1">{s.title}</p>
                <p className="text-[0.75rem] text-[#9CA3AF]">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Prototype embed */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.9, ease }} className="mt-16">
          <h3 className="text-[1.3rem] text-white mb-6" style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}>Live Prototype</h3>
          <div className="card p-3 md:p-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg mb-3" style={{ background: "rgba(255,255,255,0.02)" }}>
              <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-[#F43F5E]"/><div className="w-2.5 h-2.5 rounded-full bg-[#34D399]"/><div className="w-2.5 h-2.5 rounded-full bg-[#22C55E]"/></div>
              <span className="text-[0.65rem] text-[#94A3B8] font-mono ml-2">v0-onboarding-ui-prototype-olive.vercel.app</span>
            </div>
            <div className="relative rounded-xl overflow-hidden" style={{ paddingTop: "60%" }}>
              <iframe src="https://v0-onboarding-ui-prototype-olive.vercel.app/" className="absolute inset-0 w-full h-full border-0 rounded-xl" title="SeniorSafe Prototype" loading="lazy" allow="fullscreen"/>
            </div>
          </div>
          <div className="mt-4">
            <a href="https://v0-onboarding-ui-prototype-olive.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[0.82rem] font-medium transition-colors hover:text-white" style={{ color: "#34D399" }}>
              ↗ Open Full Prototype
            </a>
          </div>
        </motion.div>

        {/* Reflections */}
        <div className="mt-28">
          <div className="section-divider mb-24" />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ ease }} className="section-label">Reflection & Learning</motion.div>
          <motion.h2 initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.05, ease }} className="section-heading">What We <em>Learned</em></motion.h2>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, ease }} className="section-body mb-16">
            Design thinking is as much about the journey as the solution. Here is what Group 6 learned — about the problem, about our users, and about ourselves as designers and researchers.
          </motion.p>
          <div className="grid md:grid-cols-2 gap-4">
            {reflections.map((r, i) => (
              <motion.div key={r.title} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 + i * 0.08, ease }} className="card">
                <h4 className="font-medium text-white text-[0.95rem] mb-3" style={{ fontFamily: "var(--font-serif)", fontWeight: 700 }}>{r.title}</h4>
                <p className="text-[0.85rem] text-[#94A3B8] leading-relaxed">{r.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-28 pt-10 border-t border-[rgba(255,255,255,0.04)] text-center">
          <p className="text-[0.7rem] text-[#94A3B8] tracking-[2px] uppercase">
            Group 6 · Design Thinking · Mahindra University · 2026
          </p>
        </div>
      </div>
    </section>
  );
}
