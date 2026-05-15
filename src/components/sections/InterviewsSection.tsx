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
  const [tab, setTab] = useState<"highlights" | "audio" | "questions">("highlights");

  const driveLink = "https://drive.google.com/drive/folders/18Z6SRvZrt7O71fDqE5-_tuiqnrvPkD30?usp=drive_link";

  const audioGroups = [
    { name: "Navaneeth's Interviews", sub: "5 audio recordings · ~7 min total", desc: "Series of recorded interviews by Navaneeth MU CS 1, covering social media news habits and fake news experiences. Recorded April 2026.", initial: "N", color: "#10b981" },
    { name: "Ritvik's Interviews", sub: "4 audio recordings · ~6 min total", desc: "In-depth recorded sessions by Ritvik exploring confidence levels in fake news detection and emotional reactions to misinformation.", initial: "R", color: "#f59e0b" },
    { name: "Hasini's Interviews", sub: "Forwarded recordings · Ashwin et al.", desc: "Recordings forwarded by Hasini Pappaya including Ashwin's interview on AI-generated content and its impact on trust.", initial: "H", color: "#3b82f6" },
    { name: "Abhinav's Interview", sub: "1 recording · Shreethan's interview.m4a", desc: "Abhinav's recorded session with a participant about political fake news and how misinformation shaped their opinion of a political party.", initial: "A", color: "#f97316" },
    { name: "Anvit's Interviews", sub: "Multiple recordings · Design Thinking group", desc: "Anvit's interview recordings gathered as part of the Design Thinking group session, focusing on verification behavior and sharing habits.", initial: "An", color: "#14b8a6" },
    { name: "Full Audio Folder", sub: "All recordings · Google Drive", desc: "Access the complete collection of all interview audio recordings from the Shifters team research phase on Google Drive.", initial: "📂", color: "#ec4899", isMain: true }
  ];

  return (
    <section id="interviews" className="py-28">
      <div className="section-divider" />
      <div ref={ref} className="container-main pt-28">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="section-label">Field Research</motion.div>
        <motion.h2 initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="section-heading">Interviews & Recordings</motion.h2>
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
            💬 Highlights
          </button>
          <button onClick={() => setTab("audio")} className={`tab-btn ${tab === "audio" ? "active" : ""}`}>
            🎙️ Audio Recordings
          </button>
          <button onClick={() => setTab("questions")} className={`tab-btn ${tab === "questions" ? "active" : ""}`}>
            📄 Transcripts
          </button>
        </div>

        {/* Audio Recordings Content */}
        {tab === "audio" && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
              {audioGroups.map((g, i) => (
                <div key={g.name} className="card p-6 flex flex-col h-full bg-[#16161f] hover:bg-[#1a1a24] transition-colors border-[#252533]">
                  <div className="flex gap-4 items-center mb-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-[#111] text-sm" style={{ background: g.color }}>
                      {g.initial}
                    </div>
                    <div>
                      <h4 className="text-white text-[0.95rem] font-semibold">{g.name}</h4>
                      <p className="text-[#8a8a9a] text-[0.7rem]">{g.sub}</p>
                    </div>
                  </div>
                  <p className="text-[0.8rem] text-[#8a8a9a] mb-6 flex-grow leading-relaxed">
                    {g.desc}
                  </p>
                  <a href={driveLink} target="_blank" rel="noopener noreferrer" className="text-[0.8rem] font-semibold text-[#c8ff00] hover:text-[#e2ff4c] flex items-center gap-2 mt-auto w-fit">
                    ▶ {g.isMain ? "Open Full Folder" : "Listen on Drive"}
                  </a>
                </div>
              ))}
            </div>

            {/* Drive list mock */}
            <div className="card p-0 overflow-hidden border-[#252533] bg-[#16161f]">
              <div className="flex justify-between items-center p-4 border-b border-[#252533] bg-[#1a1a24]">
                <div className="flex items-center gap-3 text-white font-medium text-[0.9rem]">
                  🎙️ Audio Interviews — Google Drive
                </div>
                <div className="text-[0.7rem] text-[#8a8a9a]">Folder: Audio interviews</div>
              </div>
              <div className="p-0">
                {[1, 2, 3].map((_, i) => (
                  <a key={i} href={driveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 border-b border-[#252533] hover:bg-[rgba(255,255,255,0.02)] transition-colors text-[0.85rem]">
                    <span className="text-[#8a8a9a]">🎵</span>
                    <span className="text-white font-medium flex-grow">Document from Abhinav.m4a</span>
                    <span className="text-[#8a8a9a] w-32 hidden sm:block">May 12</span>
                    <span className="text-[#8a8a9a] w-40 hidden md:block">Abhinav Pakanati</span>
                  </a>
                ))}
                <div className="p-4 text-center">
                  <a href={driveLink} target="_blank" rel="noopener noreferrer" className="inline-block px-5 py-2 rounded-full bg-[#c8ff00] text-black font-semibold text-[0.8rem] hover:bg-[#e2ff4c] transition-colors">
                    View all 15+ recordings on Google Drive
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Transcript/Highlights Content */}
        {tab !== "audio" && (
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
        )}
      </div>
    </section>
  );
}
