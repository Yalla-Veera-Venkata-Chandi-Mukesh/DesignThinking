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

const MindmapNode = ({ node, level = 0 }: { node: any, level?: number }) => {
  const colors = [
    "border-[#c8ff00] text-[#c8ff00] bg-[rgba(200,255,0,0.05)]", // Level 0
    "border-[#00d4ff] text-[#00d4ff] bg-[rgba(0,212,255,0.05)]", // Level 1
    "border-[#ff6b35] text-[#ff6b35] bg-[rgba(255,107,53,0.05)]", // Level 2
    "border-[#10b981] text-[#10b981] bg-[rgba(16,185,129,0.05)]", // Level 3
    "border-[#a855f7] text-[#a855f7] bg-[rgba(168,85,247,0.05)]", // Level 4
    "border-[#ff4444] text-[#ff4444] bg-[rgba(255,68,68,0.05)]", // Level 5
  ];
  
  const colorClass = colors[level % colors.length];

  return (
    <div className="flex items-center">
      {/* The Node */}
      <div className={`p-3 rounded-lg border ${colorClass} text-[0.75rem] leading-snug w-[180px] shrink-0 shadow-lg backdrop-blur-sm`}>
        {node.text}
      </div>
      
      {/* The Children */}
      {node.children && node.children.length > 0 && (
        <div className="flex items-center">
          {/* Horizontal line from parent to vertical spine */}
          <div className="w-6 h-[2px] bg-[#333]"></div>
          
          {/* Vertical Spine + Children Container */}
          <div className="flex flex-col gap-4 py-2 border-l-2 border-[#333]">
            {node.children.map((child: any, i: number) => (
              <div key={i} className="flex items-center relative">
                {/* Horizontal line from spine to child */}
                <div className="w-6 h-[2px] bg-[#333]"></div>
                <MindmapNode node={child} level={level + 1} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const mindmapData = [
  {
    title: "1. Confusion with Technology",
    root: {
      text: "Older people struggle to tell real from fake and feel confused by fast-changing technology",
      children: [
        {
          text: "Verification systems are weak or confusing",
          children: [
            {
              text: "Reporting scams is difficult",
              children: [
                { text: "Too many steps to report", children: [{ text: "Apps prioritize simplicity over safety", children: [{ text: "Reporting systems feel hidden" }] }] },
                { text: "Victims don't know where to complain", children: [{ text: "Lack of awareness about cybercrime support", children: [{ text: "Information is poorly advertised" }] }] }
              ]
            },
            {
              text: "Caller verification is unreliable",
              children: [
                { text: "Fake numbers can be generated", children: [{ text: "Internet calling services hide identities", children: [{ text: "International scam networks operate anonymously" }] }] },
                { text: "Contacts can be spoofed", children: [{ text: "Scammers manipulate caller ID systems", children: [{ text: "Telecom loopholes are exploited" }] }] }
              ]
            },
            {
              text: "Platforms lack strong scam warnings",
              children: [
                { text: "AI content labels are inconsistent", children: [{ text: "Companies use different standards", children: [{ text: "No universal AI-detection policy exists" }] }] },
                { text: "Warning messages are ignored", children: [{ text: "Frequent popups reduce attention", children: [{ text: "Users become desensitized" }] }] }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    title: "2. Emotional Manipulation",
    root: {
      text: "Scam tactics emotionally manipulate victims",
      children: [
        {
          text: "Scammers create panic situations",
          children: [
            { text: "Fake emergency calls/messages", children: [{ text: "Pretending family members are in danger", children: [{ text: "Emotional shock reduces logical thinking" }] }] },
            { text: "Urgent payment requests", children: [{ text: "Victims fear consequences of delay", children: [{ text: "Fear pressures immediate action" }] }] }
          ]
        },
        {
          text: "Emotional trust is exploited",
          children: [
            { text: "Scammers act friendly and caring", children: [{ text: "Loneliness increases emotional dependence", children: [{ text: "Elderly users may seek social interaction online" }] }] },
            { text: "Familiar voices/images increase trust", children: [{ text: "AI clones known people", children: [{ text: "Personal data is publicly available online" }] }] }
          ]
        },
        {
          text: "Victims feel rushed",
          children: [
            { text: "Little time to verify information", children: [{ text: "Scammers discourage independent checking", children: [{ text: "Isolation increases vulnerability" }] }] },
            { text: "Fear of missing important updates", children: [{ text: "Constant notifications create stress", children: [{ text: "Users react impulsively" }] }] }
          ]
        }
      ]
    }
  },
  {
    title: "3. Fast-Paced Technology",
    root: {
      text: "Older users are not updated with new technology",
      children: [
        {
          text: "Technology changes too fast",
          children: [
            { text: "Apps constantly introduce new features", children: [{ text: "Updates are automatic and confusing", children: [{ text: "Interfaces change without explanation" }] }] },
            { text: "AI terms are unfamiliar", children: [{ text: "Technical language feels intimidating", children: [{ text: "Users avoid learning more" }] }] }
          ]
        },
        {
          text: "Limited digital education",
          children: [
            { text: "Few workshops exist for seniors", children: [{ text: "Awareness programs focus on younger people", children: [{ text: "Schools teach digital literacy more than community centers" }] }] },
            { text: "Family members may not explain patiently", children: [{ text: "Younger generations assume technology is easy", children: [{ text: "Communication gap between generations grows" }] }] }
          ]
        },
        {
          text: "Fear of making mistakes online",
          children: [
            { text: "Worry about pressing wrong buttons", children: [{ text: "Past bad experiences increase anxiety", children: [{ text: "Scam stories spread fear further" }] }] },
            { text: "Hesitation to ask for help", children: [{ text: "Fear of feeling embarrassed", children: [{ text: "Pride prevents open discussion" }] }] }
          ]
        }
      ]
    }
  },
  {
    title: "4. Misinformation Spread",
    root: {
      text: "Social media spreads misinformation quickly",
      children: [
        {
          text: "Fake content spreads faster than corrections",
          children: [
            { text: "Shocking content gets more engagement", children: [{ text: "Algorithms prioritize engagement", children: [{ text: "Platforms reward viral content" }] }] },
            { text: "Users forward messages instantly", children: [{ text: "People trust family/friend forwards", children: [{ text: "Emotional content spreads faster" }] }] }
          ]
        },
        {
          text: "Echo chambers reinforce false beliefs",
          children: [
            { text: "Users repeatedly see similar misinformation", children: [{ text: "Recommendation systems personalize feeds", children: [{ text: "AI predicts emotionally engaging content" }] }] },
            { text: "Fact-checks are less visible", children: [{ text: "Corrections are less dramatic", children: [{ text: "Users ignore lengthy explanations" }] }] }
          ]
        },
        {
          text: "Lack of moderation in private groups",
          children: [
            { text: "WhatsApp groups are difficult to monitor", children: [{ text: "Encrypted platforms limit moderation", children: [{ text: "Privacy protections reduce oversight" }] }] },
            { text: "Community trust overrides skepticism", children: [{ text: "Familiar groups feel safe", children: [{ text: "Members rarely question each other" }] }] }
          ]
        }
      ]
    }
  },
  {
    title: "5. Realistic AI Content",
    root: {
      text: "AI-generated content looks extremely realistic",
      children: [
        {
          text: "AI tools can copy human speech patterns",
          children: [
            { text: "Voice datasets are easily available online", children: [{ text: "People upload videos/audio publicly", children: [{ text: "Social media encourages oversharing" }] }] },
            { text: "AI models are becoming cheaper and accessible", children: [{ text: "Free apps and websites exist", children: [{ text: "Scam technology spreads quickly online" }] }] }
          ]
        },
        {
          text: "AI-generated images/videos look natural",
          children: [
            { text: "Deepfake technology has improved rapidly", children: [{ text: "AI learns facial expressions accurately", children: [{ text: "More powerful hardware allows faster rendering" }] }] },
            { text: "Lighting and editing hide flaws", children: [{ text: "Mobile editing apps are advanced", children: [{ text: "Even amateurs can create believable edits" }] }] }
          ]
        },
        {
          text: "Scam messages imitate normal conversations",
          children: [
            { text: "AI can mimic texting style", children: [{ text: "Public chats/comments provide writing samples", children: [{ text: "Scammers collect data from social media" }] }] },
            { text: "Messages create urgency and emotion", children: [{ text: "Fear reduces critical thinking", children: [{ text: "Panic makes victims react quickly" }] }] }
          ]
        }
      ]
    }
  }
];

export default function IdeationSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [openIdx, setOpenIdx] = useState<number>(0);
  const keys = Object.keys(hmwIdeas);

  const scrollSlider = (direction: 'left' | 'right') => {
    const slider = document.getElementById('digital-mindmap-slider');
    if (slider) {
      const scrollAmount = slider.clientWidth * 0.8;
      slider.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="ideation" className="py-28">
      <div className="section-divider" />
      <div ref={ref} className="container-main pt-28">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="section-label">Ideation Phase</motion.div>
        <motion.h2 initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="section-heading">Brainwriting Solutions</motion.h2>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} className="section-body mb-6">
          We collaboratively generated 150+ solution ideas across our HMW questions — producing concrete concepts through structured ideation. Click any question below to explore the six ideas our team generated.
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.25 }} className="text-[0.82rem] text-[#55555f] mb-14">
          Solutions prioritized using feasibility, desirability, accessibility impact, and emotional reassurance.
        </motion.p>

        {/* Digital Mindmap Slider */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.28 }} className="mb-14">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-[1.1rem] font-semibold text-white">Digital Whiteboard Sessions</h3>
            <div className="flex gap-2">
              <button onClick={() => scrollSlider('left')} className="p-2 rounded-full bg-[#16161f] hover:bg-[#252533] text-white transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button onClick={() => scrollSlider('right')} className="p-2 rounded-full bg-[#16161f] hover:bg-[#252533] text-white transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
          
          <div id="digital-mindmap-slider" className="flex overflow-x-auto gap-6 snap-x snap-mandatory no-scrollbar pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {mindmapData.map((data, idx) => (
              <div key={idx} className="shrink-0 w-full snap-center rounded-xl overflow-hidden border border-[#252533] bg-[#0a0a0f] flex flex-col h-[500px]">
                <div className="bg-[#16161f] px-5 py-3 border-b border-[#252533] flex items-center justify-between">
                  <span className="text-[0.85rem] font-medium text-white">{data.title}</span>
                  <span className="text-[0.65rem] text-[#55555f] uppercase tracking-wider">Scroll to explore &rarr;</span>
                </div>
                <div className="flex-grow overflow-auto p-8 relative custom-scrollbar">
                  <MindmapNode node={data.root} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="space-y-6">
          {keys.map((k, i) => (
            <motion.div key={k} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 + i * 0.08 }}>
              <button
                onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
                className="w-full text-left card-glow p-7 flex items-center justify-between gap-4"
              >
                <span className="text-[0.92rem] font-semibold" style={{ color: openIdx === i ? "#c8ff00" : "#c0c0d0" }}>{k}</span>
                <svg className={`w-5 h-5 shrink-0 transition-transform ${openIdx === i ? "rotate-180" : ""}`} fill="none" stroke={openIdx === i ? "#c8ff00" : "#55555f"} strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"/></svg>
              </button>
              {openIdx === i && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3 pl-4">
                  {hmwIdeas[k].map((idea, j) => (
                    <div key={j} className="card p-5">
                      <span className="text-[0.7rem] text-[#c8ff00] font-mono font-semibold">Idea {j + 1}</span>
                      <p className="text-[0.88rem] text-[#8a8a9a] mt-2">{idea}</p>
                    </div>
                  ))}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
