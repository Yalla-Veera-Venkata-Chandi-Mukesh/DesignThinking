"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const questions = [
  "Do you use the internet regularly?",
  "What do you usually use the internet for?",
  "Do you usually trust content you see online?",
  "Have you ever believed fake or AI-generated content?",
  "What is your first reaction when you see emotional content online?",
  "Would you believe a realistic deepfake video?",
  "Do you think AI-generated content can manipulate people?",
  "Which age groups are more vulnerable?",
  "Do you feel confident identifying fake content?",
  "What can be done to protect people online?",
];

export default function InterviewQuestionsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedQ, setExpandedQ] = useState<number | null>(null);

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[rgba(139,92,246,0.2)] to-transparent" />

      <div ref={ref} className="section-container">
        <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="section-label block text-center">
          Interview Framework
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="section-title text-4xl sm:text-5xl text-center mb-16"
        >
          The <span className="gradient-text-purple">questions</span> we asked
        </motion.h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {questions.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.07 }}
              onClick={() => setExpandedQ(expandedQ === i ? null : i)}
              className="glass-card p-5 cursor-pointer group"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[rgba(139,92,246,0.15)] to-[rgba(236,72,153,0.15)] border border-[rgba(139,92,246,0.2)] flex items-center justify-center font-heading font-bold text-sm text-[#8b5cf6] shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="font-medium text-[#cccce0] group-hover:text-white transition-colors flex-1">
                  {q}
                </p>
                <svg
                  className={`w-5 h-5 text-[#555577] transition-transform ${expandedQ === i ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {expandedQ === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-4 pl-14 text-sm text-[#8888aa] leading-relaxed"
                >
                  This question was designed to understand the participant&apos;s relationship with digital content and their vulnerability to misinformation and scams.
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
