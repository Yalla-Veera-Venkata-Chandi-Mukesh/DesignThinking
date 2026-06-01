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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
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
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="nav-bar"
      style={{
        borderBottomColor: scrolled ? 'rgba(255,255,255,0.05)' : 'transparent',
        transition: 'border-color 0.4s ease',
      }}
    >
      <div className="container-main flex items-center h-20 gap-10 md:gap-14 overflow-x-auto no-scrollbar">
        <a
          href="#home"
          className="shrink-0 text-[0.82rem] tracking-[3px] uppercase font-semibold transition-colors duration-300"
          style={{
            fontFamily: "var(--font-body)",
            color: "#fff",
            letterSpacing: '3px',
          }}
        >
          GROUP 6
        </a>
        <div className="flex items-center gap-6 shrink-0">
          {links.slice(1).map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="relative py-1.5 text-[0.68rem] tracking-[2px] uppercase font-medium transition-all duration-300 whitespace-nowrap"
              style={{
                color: active === l.id ? '#fff' : '#94A3B8',
              }}
              onMouseEnter={(e) => {
                if (active !== l.id) (e.target as HTMLElement).style.color = '#F8FAFC';
              }}
              onMouseLeave={(e) => {
                if (active !== l.id) (e.target as HTMLElement).style.color = '#94A3B8';
              }}
            >
              {l.label}
              {active === l.id && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute -bottom-0.5 left-0 right-0 h-[2px] rounded-full"
                  style={{ background: 'linear-gradient(90deg, #34D399, #2DD4BF)' }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
