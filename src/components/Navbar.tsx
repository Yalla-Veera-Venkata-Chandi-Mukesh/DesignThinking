"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const links = [
  { id: "home", label: "Home" },
  { id: "mission", label: "Mission" },
  { id: "team", label: "Team" },
  { id: "problem", label: "Problem" },
  { id: "research", label: "Research" },
  { id: "journey", label: "Journey" },
  { id: "interviews", label: "Interviews" },
  { id: "hmw", label: "HMW" },
  { id: "ideation", label: "Ideation" },
  { id: "solution", label: "Solution" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      for (let i = links.length - 1; i >= 0; i--) {
        const el = document.getElementById(links[i].id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(links[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="nav-bar"
    >
      <div className="container-main flex items-center h-16 gap-16 overflow-x-auto no-scrollbar">
        <a href="#home" className="shrink-0 font-display font-800 text-[0.95rem] tracking-[3px] uppercase" style={{ color: "#c8ff00" }}>
          GROUP 6
        </a>
        <div className="flex items-center gap-6 shrink-0">
          {links.slice(1).map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`py-1.5 text-[0.72rem] tracking-[2px] uppercase font-bold transition-colors whitespace-nowrap ${
                active === l.id ? "text-white" : "text-[#55555f] hover:text-[#8a8a9a]"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
