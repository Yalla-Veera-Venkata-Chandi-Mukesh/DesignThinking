"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const members = [
  { name: "Mugdha", role: "UX Researcher", initials: "Mu", gradient: "linear-gradient(135deg, #34D399, #10B981)" },
  { name: "Mukesh", role: "Design Strategist", initials: "Mk", gradient: "linear-gradient(135deg, #2DD4BF, #059669)" },
  { name: "Chaturya", role: "User Researcher", initials: "Ch", gradient: "linear-gradient(135deg, #10B981, #34D399)" },
  { name: "Kirishmita", role: "Interaction Designer", initials: "Ki", gradient: "linear-gradient(135deg, #38BDF8, #2DD4BF)" },
  { name: "Srujan", role: "Visual Designer", initials: "Sr", gradient: "linear-gradient(135deg, #34D399, #059669)" },
  { name: "Aahil", role: "Prototyper", initials: "Aa", gradient: "linear-gradient(135deg, #A7F3D0, #34D399)" },
];

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function TeamSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="team" className="py-32">
      <div className="section-divider" />
      <div ref={ref} className="container-main pt-32">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ ease }} className="section-label">The People</motion.div>
        <motion.h2 initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, ease }} className="section-heading">Team <em>Group 6</em></motion.h2>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2, ease }} className="section-body mb-16">
          Six students from Mahindra University, united by a shared conviction that digital safety for seniors is a design problem — and design thinking is how we solve it.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {members.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25 + i * 0.08, ease }}
              className="card text-center py-8"
            >
              <div className="avatar-gradient mx-auto mb-4" style={{ background: m.gradient }}>
                {m.initials}
              </div>
              <p className="font-semibold text-white text-[0.92rem]">{m.name}</p>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
