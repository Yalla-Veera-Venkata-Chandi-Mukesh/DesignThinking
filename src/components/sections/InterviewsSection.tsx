"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const questions = [
  "Do you use the internet regularly?",
  "What do you usually use the internet for?",
  "Do you usually trust content you see online?",
  "Have you ever believed fake or AI-generated content?",
  "What is your first reaction to emotional content online?",
  "Would you believe a realistic deepfake video?",
  "Do you think AI-generated content can manipulate people?",
  "Which age groups are more vulnerable?",
  "Do you feel confident identifying fake content?",
  "What can be done to protect people online?",
];

const transcripts = [
  { name: "Mugdha", age: 52, initial: "Mu", gradient: "linear-gradient(135deg, #ff6b6b, #a855f7)", quote: "Sometimes videos online look completely real, especially when many people are sharing them. I don't always know how to verify whether something is fake or AI-generated. A warning system that explains things clearly would make me feel safer online. Many older adults panic during scam situations because everything happens very quickly. If there was a tool that warned me before opening suspicious links, I would definitely use it." },
  { name: "Mukesh", age: 61, initial: "Mk", gradient: "linear-gradient(135deg, #00d4ff, #10b981)", quote: "Fake banking messages and phishing scams are becoming very convincing now. Most older adults panic during suspicious situations because everything happens too quickly. Simple guidance and warning systems would help a lot. Deepfake videos are dangerous because they look believable. There should be a system that actively protects users before they make mistakes." },
  { name: "Chaturya", age: 47, initial: "Ch", gradient: "linear-gradient(135deg, #c8ff00, #10b981)", quote: "Modern apps are too cluttered and confusing for many older users. People trust videos because they look realistic. Many fake posts spread quickly because users react emotionally before verifying information. Older adults are more vulnerable because technology changes too fast. Simple interfaces and guided explanations would help users feel more confident online." },
];

export default function InterviewsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [tab, setTab] = useState<"highlights" | "questions">("highlights");

  return (
    <section id="interviews" className="py-28">
      <div className="section-divider" />
      <div ref={ref} className="container-main pt-28">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="section-label">Field Research</motion.div>
        <motion.h2 initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="section-heading">Interviews — Transcripts & Highlights</motion.h2>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} className="section-body mb-10">
          Our team conducted in-depth audio-recorded interviews with 50+ adults above 40, documenting transcripts and extracting key insights about how seniors interact with digital threats in their daily lives.
        </motion.p>

        {/* Questions pills */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.25 }} className="card p-6 mb-10">
          <p className="text-[0.68rem] tracking-[3px] uppercase font-semibold mb-4 text-[#55555f]">Interview Questions</p>
          <div className="flex flex-wrap gap-2">
            {questions.map((q) => <span key={q} className="pill text-[0.78rem]">{q}</span>)}
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-8 mb-10 border-b border-[rgba(255,255,255,0.05)] pb-0">
          <button onClick={() => setTab("highlights")} className={`tab-btn ${tab === "highlights" ? "active" : ""}`}>
            🟡 Highlights
          </button>
          <button onClick={() => setTab("questions")} className={`tab-btn ${tab === "questions" ? "active" : ""}`}>
            📄 Transcripts
          </button>
        </div>

        {/* Transcript Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {transcripts.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.35 + i * 0.1 }} className="card-glow p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="avatar-gradient w-12 h-12 text-[0.8rem]" style={{ background: t.gradient }}>{t.initial}</div>
                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-[0.7rem] text-[#55555f]">Age {t.age} · Interview Participant</p>
                </div>
              </div>
              <p className="quote-text text-[0.88rem]">&ldquo;{t.quote}&rdquo;</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
