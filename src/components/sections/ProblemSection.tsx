"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const canvas = [
  { icon: "⚡", title: "User / Protagonist", color: "#c8ff00", items: ["Senior citizens aged 45–70+", "Regular users of WhatsApp, Facebook, YouTube", "Use SMS, browsers, online banking", "Limited digital literacy", "Easily overwhelmed by cluttered interfaces", "Panic during suspicious situations"] },
  { icon: "🔑", title: "Context & Situation", color: "#00d4ff", items: ["Phishing messages disguised as bank alerts", "Deepfake videos of public figures", "Emotional fake content on social media", "AI-generated scam calls", "Fake OTP and lottery messages", "Fast-paced, confusing digital environment"] },
  { icon: "📊", title: "Evidence Base", color: "#a855f7", items: ["78% cannot identify fake AI content", "64% previously believed misleading information", "82% expressed fear of online scams", "51% shared misinformation unknowingly", "Audio-recorded interviews with 50+ adults", "Empathy mapping & user journey research"] },
  { icon: "⚡", title: "Pain Points & Needs", color: "#ff6b35", items: ["Difficulty identifying trustworthy content", "No warning systems before risky actions", "AI-generated media increasingly realistic", "Information overload from multiple platforms", "Panic during scam situations", "Fear of making irreversible mistakes"] },
  { icon: "🔍", title: "Root Causes (5 Whys)", color: "#00d4ff", items: ["Older adults struggle to identify suspicious content", "Modern interfaces are complex and overwhelming", "Apps prioritize engagement over accessibility", "Confusing layouts make risky content harder to spot", "Cybersecurity systems aren't designed for seniors"] },
  { icon: "📊", title: "Impact & Scale", color: "#ff4444", items: ["Financial loss from phishing and scam calls", "Emotional distress and loss of confidence", "Social embarrassment from sharing fake content", "Reduced digital independence", "Increased isolation from technology", "Family burden of constant monitoring"] },
];

export default function ProblemSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="problem" className="py-28">
      <div className="section-divider" />
      <div ref={ref} className="container-main pt-28">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="section-label">Define Phase</motion.div>
        <motion.h2 initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="section-heading">Problem Statement Canvas</motion.h2>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} className="section-body mb-14">
          Using the integrated design thinking framework, we mapped our user, their context, pain points, root causes, and the scale of impact to arrive at a clear, actionable problem definition.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {canvas.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25 + i * 0.08 }}
              className="card"
            >
              <p className="text-xl mb-4">{c.icon}</p>
              <p className="text-[0.68rem] tracking-[3px] uppercase font-bold mb-5" style={{ color: c.color }}>{c.title}</p>
              <ul className="bullet-list">
                {c.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
