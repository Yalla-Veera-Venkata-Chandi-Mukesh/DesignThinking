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



const highlightsData = [
  { name: "Shreya", age: 52, initial: "Sh", gradient: "linear-gradient(135deg, #ff6b6b, #a855f7)", quote: "Once, a viral video about a public issue looked completely real, so everyone believed it. Later, we found out parts were edited and taken out of context. Another time, a forwarded message about a new rule spread everywhere, but it also turned out to be fake. These incidents show how easily misinformation spreads online." },
  { name: "Gathresh", age: 61, initial: "Ga", gradient: "linear-gradient(135deg, #00d4ff, #10b981)", quote: "Better awareness, digital literacy and some stronger platforms of regulations. And also some tools that are able to detect whether the particular content is AI generated or not. That would help." },
  { name: "Vidhi", age: 47, initial: "Vi", gradient: "linear-gradient(135deg, #c8ff00, #10b981)", quote: "I don't trust everything online anymore. If it sounds too good or too, too bad, I, I tend to double check because there's a lot of misinformation. So I think my trust has gone down drastically. It really puts you on spot." },
];

export default function InterviewsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [tab, setTab] = useState<"highlights" | "audio" | "questions">("highlights");

  const driveLink = "https://drive.google.com/drive/folders/18Z6SRvZrt7O71fDqE5-_tuiqnrvPkD30?usp=drive_link";



  return (
    <section id="interviews" className="py-28">
      <div className="section-divider" />
      <div ref={ref} className="container-main pt-28">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="section-label">Field Research</motion.div>
        <motion.h2 initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="section-heading">Interviews & Recordings</motion.h2>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} className="section-body mb-10">
          Our team conducted in-depth audio-recorded interviews with adults above 40, documenting transcripts and extracting key insights about how seniors interact with digital threats in their daily lives.
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
            {/* Drive list mock */}
            <div className="card p-0 overflow-hidden border-[#252533] bg-[#16161f]">
              <div className="flex justify-between items-center p-4 border-b border-[#252533] bg-[#1a1a24]">
                <div className="flex items-center gap-3 text-white font-medium text-[0.9rem]">
                  🎙️ Audio Interviews — Google Drive
                </div>
                <div className="text-[0.7rem] text-[#8a8a9a]">Folder: Audio interviews</div>
              </div>
              <div className="p-0">
                {["Mugdha", "Mukesh", "Chaturya"].map((name, i) => (
                  <a key={i} href={driveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 border-b border-[#252533] hover:bg-[rgba(255,255,255,0.02)] transition-colors text-[0.85rem]">
                    <span className="text-[#8a8a9a]">🎵</span>
                    <span className="text-white font-medium flex-grow">Interview with {name}.m4a</span>
                    <span className="text-[#8a8a9a] w-32 hidden sm:block">April 2026</span>
                    <span className="text-[#8a8a9a] w-40 hidden md:block">Participant #{i+1}</span>
                  </a>
                ))}
                <div className="p-4 text-center bg-[#111118]">
                  <a href={driveLink} target="_blank" rel="noopener noreferrer" className="inline-block px-5 py-2 rounded-full bg-[#c8ff00] text-black font-semibold text-[0.8rem] hover:bg-[#e2ff4c] transition-colors">
                    View all recordings on Google Drive
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Transcripts Content */}
        {tab === "questions" && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            {/* Drive list mock */}
            <div className="card p-0 overflow-hidden border-[#252533] bg-[#16161f]">
              <div className="flex justify-between items-center p-4 border-b border-[#252533] bg-[#1a1a24]">
                <div className="flex items-center gap-3 text-white font-medium text-[0.9rem]">
                  📄 Transcripts — Google Drive
                </div>
                <div className="text-[0.7rem] text-[#8a8a9a]">Folder: Transcripts</div>
              </div>
              <div className="p-0">
                {["Mugdha", "Mukesh", "Chaturya"].map((name, i) => (
                  <a key={i} href={driveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 border-b border-[#252533] hover:bg-[rgba(255,255,255,0.02)] transition-colors text-[0.85rem]">
                    <span className="text-[#8a8a9a]">📄</span>
                    <span className="text-white font-medium flex-grow">Transcript_{name}.pdf</span>
                    <span className="text-[#8a8a9a] w-32 hidden sm:block">April 2026</span>
                    <span className="text-[#8a8a9a] w-40 hidden md:block">Participant #{i+1}</span>
                  </a>
                ))}
                <div className="p-4 text-center bg-[#111118]">
                  <a href={driveLink} target="_blank" rel="noopener noreferrer" className="inline-block px-5 py-2 rounded-full bg-[#c8ff00] text-black font-semibold text-[0.8rem] hover:bg-[#e2ff4c] transition-colors">
                    View all transcripts on Google Drive
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Highlights Content */}
        {tab === "highlights" && (
          <div className="grid md:grid-cols-3 gap-5">
            {highlightsData.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.35 + i * 0.1 }} className="card-glow p-7 flex flex-col">
                <div className="flex items-center gap-3 mb-5">
                  <div className="avatar-gradient w-12 h-12 text-[0.8rem]" style={{ background: t.gradient }}>{t.initial}</div>
                  <div>
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="text-[0.7rem] text-[#55555f]">Age {t.age} · Interview Participant</p>
                  </div>
                </div>
                <p className="quote-text text-[0.88rem] flex-grow">&ldquo;{t.quote}&rdquo;</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
