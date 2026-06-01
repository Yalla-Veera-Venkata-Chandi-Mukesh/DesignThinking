"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const hmwIdeas: Record<string, string[]> = {
  "01. How might we help seniors identify phishing messages?": [
    "AI-powered link scanner that checks URLs before opening",
    "Color-coded risk badges on incoming messages",
    "Voice-narrated warnings explaining why a message is suspicious",
    "One-tap 'Ask Family' button to verify suspicious messages",
    "Template matching that flags messages mimicking bank formats",
    "Daily safety digest highlighting common scam patterns",
  ],
  "02. How might we make deepfake detection accessible?": [
    "Simple 'Real or Fake?' button on any video or image",
    "AI overlay showing manipulation confidence percentage",
    "Crowdsourced verification from trusted community members",
    "Automatic flagging of AI-generated content in WhatsApp",
    "Tutorial mode teaching seniors to spot deepfake telltale signs",
    "Family alert system when deepfake content is viewed",
  ],
  "03. How might we reduce panic during scam situations?": [
    "Calming AI assistant that speaks in reassuring familiar language",
    "Step-by-step guided panic response protocol",
    "Automatic call blocking with explanation of why it was blocked",
    "Emergency contact alert sent to family during suspicious activity",
    "Undo/cancel window for any financial transaction attempt",
    "Post-incident reassurance and explanation system",
  ],
  "04. How might we simplify online interfaces for seniors?": [
    "One-tap 'Easy Mode' for any app reducing to essential features",
    "Large touch-friendly buttons with clear text labels",
    "Voice-first navigation as alternative to visual interfaces",
    "Consistent layouts that never change across updates",
    "Color-coded sections for different types of actions",
    "Family-configurable interface complexity settings",
  ],
};

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function IdeationSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [openIdx, setOpenIdx] = useState<number>(0);
  const keys = Object.keys(hmwIdeas);



  return (
    <section id="ideation" className="py-32">
      <div className="section-divider" />
      <div ref={ref} className="container-main pt-32">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ ease }} className="section-label">Ideation Phase</motion.div>
        <motion.h2 initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, ease }} className="section-heading">Brainwriting <em>Solutions</em></motion.h2>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2, ease }} className="section-body mb-6">
          We collaboratively generated 150+ solution ideas across our HMW questions — producing concrete concepts through structured ideation. Click any question below to explore the six ideas our team generated.
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.25, ease }} className="text-[0.8rem] text-[#9CA3AF] mb-16">
          Solutions prioritized using feasibility, desirability, accessibility impact, and emotional reassurance.
        </motion.p>



        <div className="space-y-4">
          {keys.map((k, i) => (
            <motion.div key={k} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 + i * 0.08, ease }}>
              <button
                onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
                className="w-full text-left card-glow p-7 flex items-center justify-between gap-4"
              >
                <span className="text-[0.9rem] font-medium" style={{ color: openIdx === i ? "#34D399" : "#9CA3AF" }}>{k}</span>
                <svg className={`w-4 h-4 shrink-0 transition-transform duration-300 ${openIdx === i ? "rotate-180" : ""}`} fill="none" stroke={openIdx === i ? "#34D399" : "#6B7280"} strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"/></svg>
              </button>
              {openIdx === i && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3 pl-4">
                  {hmwIdeas[k].map((idea, j) => (
                    <div key={j} className="card p-5">
                      <span className="text-[0.68rem] text-[#34D399] font-mono font-medium">Idea {j + 1}</span>
                      <p className="text-[0.85rem] text-[#9CA3AF] mt-2">{idea}</p>
                    </div>
                  ))}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Prioritization Matrix Embed */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5, ease }} className="mt-20">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-[1.1rem] font-medium text-white" style={{ fontFamily: "var(--font-serif)" }}>Value vs Effort Prioritization</h3>
          </div>
          <div className="w-full rounded-xl overflow-hidden border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)]" style={{ height: "1000px" }}>
            <iframe
              src="/DesignThinking/matrix.html"
              className="w-full h-full"
              frameBorder="0"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
