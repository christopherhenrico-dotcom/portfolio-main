import { motion } from "framer-motion";

const projects = [
  {
    id: "01",
    serial: "PJ-2026-01",
    title: "Secure Transaction Data Room",
    desc: "A full-stack environment built for secure document sharing and investor due diligence.",
    shipTime: "48H",
    status: "DEPLOYED",
  },
  {
    id: "02",
    serial: "PJ-2026-02",
    title: "ChainGoX Infrastructure",
    desc: "P2P communication layer for autonomous fleets using mesh networking.",
    shipTime: "ONGOING",
    status: "ACTIVE",
  },
  {
    id: "03",
    serial: "PJ-2026-03",
    title: "Automation Engine",
    desc: "Scalable lead-gen and automated marketing pipeline that increased conversion by 45%.",
    shipTime: "72H",
    status: "DEPLOYED",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.2, 1, 0.3, 1] as const } },
};

const PortfolioSection = () => (
  <section id="portfolio" className="py-[12vh] border-t border-border">
    <div className="container px-8">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-8">
        [ DATA_DUMPS // PORTFOLIO ]
      </p>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {projects.map((p) => (
          <motion.div key={p.serial} variants={item} className="border border-border bg-card overflow-hidden">
            {/* Window title bar */}
            <div className="flex items-center justify-between px-4 py-2 bg-muted border-b border-border">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-accent" />
                <span className="w-2.5 h-2.5 rounded-full bg-primary/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
              </div>
              <span className="font-mono text-[10px] text-muted-foreground tracking-wider">
                project_{p.id}.exe
              </span>
            </div>
            {/* Content */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Project {p.id}
                </p>
                <span className="font-mono text-[10px] text-muted-foreground tracking-[0.2em]">
                  {p.serial}
                </span>
              </div>
              <h3 className="font-mono text-base font-bold text-foreground mb-3">{p.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
              <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.2em]">
                <span className="text-primary">SHIP_TIME: {p.shipTime}</span>
                <span className="text-muted-foreground">STATUS: {p.status}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default PortfolioSection;
