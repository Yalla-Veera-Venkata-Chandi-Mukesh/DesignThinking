"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const members = [
  { name: "Mugdha", role: "UX Researcher", initials: "Mu", gradient: "linear-gradient(135deg, #ff6b6b, #a855f7)" },
  { name: "Mukesh", role: "Design Strategist", initials: "Mk", gradient: "linear-gradient(135deg, #00d4ff, #10b981)" },
  { name: "Chaturya", role: "User Researcher", initials: "Ch", gradient: "linear-gradient(135deg, #c8ff00, #10b981)" },
  { name: "Kirishmita", role: "Interaction Designer", initials: "Ki", gradient: "linear-gradient(135deg, #f59e0b, #ff6b35)" },
  { name: "Srujan", role: "Visual Designer", initials: "Sr", gradient: "linear-gradient(135deg, #ec4899, #a855f7)" },
  { name: "Aahil", role: "Prototyper", initials: "Aa", gradient: "linear-gradient(135deg, #3b82f6, #00d4ff)" },
];

export default function TeamSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="team" className="py-28">
      <div className="section-divider" />
      <div ref={ref} className="container-main pt-28">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="section-label">The People</motion.div>
        <motion.h2 initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="section-heading">Team Group 6</motion.h2>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} className="section-body mb-14">
          Six students from Mahindra University, united by a shared conviction that digital safety for seniors is a design problem — and design thinking is how we solve it.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {members.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25 + i * 0.08 }}
              className="card text-center py-8"
            >
              <div className="avatar-gradient mx-auto mb-4" style={{ background: m.gradient }}>
                {m.initials}
              </div>
              <p className="font-semibold text-white text-[0.95rem]">{m.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
