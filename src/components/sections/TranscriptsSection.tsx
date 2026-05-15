"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const transcripts = [
  {
    name: "Mugdha",
    age: 52,
    color: "#ec4899",
    quotes: [
      "Sometimes videos online look completely real, especially when many people are sharing them.",
      "I don't always know how to verify whether something is fake or AI-generated.",
      "A warning system that explains things clearly would make me feel safer online.",
      "Many older adults panic during scam situations because everything happens very quickly.",
      "If there was a tool that warned me before opening suspicious links, I would definitely use it.",
    ],
  },
  {
    name: "Mukesh",
    age: 61,
    color: "#00f0ff",
    quotes: [
      "Fake banking messages and phishing scams are becoming very convincing now.",
      "Most older adults panic during suspicious situations because everything happens too quickly.",
      "Simple guidance and warning systems would help a lot.",
      "Deepfake videos are dangerous because they look believable.",
      "There should be a system that actively protects users before they make mistakes.",
    ],
  },
  {
    name: "Chaturya",
    age: 47,
    color: "#8b5cf6",
    quotes: [
      "Modern apps are too cluttered and confusing for many older users.",
      "People trust videos because they look realistic.",
      "Many fake posts spread quickly because users react emotionally before verifying information.",
      "Older adults are more vulnerable because technology changes too fast.",
      "Simple interfaces and guided explanations would help users feel more confident online.",
    ],
  },
];

export default function TranscriptsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[rgba(236,72,153,0.2)] to-transparent" />

      <div ref={ref} className="section-container">
        <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="section-label block text-center">
          Interview Transcripts
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="section-title text-4xl sm:text-5xl text-center mb-16"
        >
          Real <span className="gradient-text">voices</span>, real concerns
        </motion.h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {transcripts.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
              className="glass-card p-8 relative overflow-hidden group"
            >
              {/* Audio wave decoration */}
              <div className="absolute top-0 left-0 right-0 h-1 opacity-50" style={{ background: `linear-gradient(90deg, transparent, ${t.color}, transparent)` }} />
              
              {/* Name + Age */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center font-heading text-xl font-bold"
                  style={{ background: `${t.color}15`, border: `1px solid ${t.color}33`, color: t.color }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg" style={{ color: t.color }}>{t.name}</h3>
                  <p className="text-xs text-[#555577]">Age {t.age} · Interview Participant</p>
                </div>
              </div>

              {/* Audio wave visual */}
              <div className="flex items-center gap-[2px] mb-6 h-8">
                {Array.from({ length: 40 }).map((_, j) => (
                  <motion.div
                    key={j}
                    className="rounded-full"
                    style={{
                      width: 2,
                      background: t.color,
                      opacity: 0.3,
                    }}
                    animate={{
                      height: [4, 8 + Math.random() * 20, 4],
                      opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                      duration: 1 + Math.random(),
                      delay: j * 0.05,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>

              {/* Quotes */}
              <div className="space-y-4">
                {t.quotes.map((q, qi) => (
                  <motion.div
                    key={qi}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + qi * 0.1 + i * 0.2 }}
                    className="relative pl-4 border-l-2 py-1"
                    style={{ borderColor: `${t.color}33` }}
                  >
                    <p className="text-sm text-[#aaaacc] leading-relaxed italic">&ldquo;{q}&rdquo;</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
