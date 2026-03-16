import { motion } from "framer-motion";

const experiences = [
  {
    date: "2024 — PRESENT",
    serial: "EX-2026-01",
    role: "Full Stack Engineer & Founder",
    org: "ChainGoX",
    focus: "Building decentralized intelligence grids for autonomous systems.",
    highlights: ["High-concurrency", "sub-100ms latency", "mesh networking"],
  },
  {
    date: "2023 — 2024",
    serial: "EX-2026-02",
    role: "Lead Software Engineer",
    org: "Contract",
    focus: "Automation, HubSpot ecosystem optimization, and custom API integrations for executive leadership teams.",
    highlights: ["HubSpot API", "automation", "API integrations"],
  },
  {
    date: "2022 — 2023",
    serial: "EX-2026-03",
    role: "Product Engineer",
    org: "Adverox Artificial",
    focus: "Full-cycle digital solutions and automation tools using Python and modern JavaScript frameworks.",
    highlights: ["Python", "JavaScript", "automation"],
  },
];

const item = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: [0.2, 1, 0.3, 1] as const } },
};

const ExperienceLog = () => (
  <section id="experience" className="py-[12vh] border-t border-border">
    <div className="container px-8">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-8">
        [ EXPERIENCE_LOG ]
      </p>
      <div className="space-y-0">
        {experiences.map((exp) => (
          <motion.div
            key={exp.serial}
            variants={item}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="group grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-8 p-6 border-b border-border hover:bg-secondary/10 transition-colors duration-150"
          >
            <div className="font-mono text-[11px] text-muted-foreground tabular-nums tracking-wider pt-1">
              {exp.date}
            </div>
            <div>
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-mono text-base font-bold text-foreground">{exp.role}</h3>
                  <p className="font-mono text-sm text-primary">{exp.org}</p>
                </div>
                <span className="hidden md:block font-mono text-[10px] text-muted-foreground tracking-[0.2em]">
                  {exp.serial}
                </span>
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-3">{exp.focus}</p>
              <div className="flex flex-wrap gap-2">
                {exp.highlights.map((h) => (
                  <span key={h} className="font-mono text-[10px] px-2 py-1 bg-muted border border-border text-primary uppercase tracking-wider">
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceLog;
