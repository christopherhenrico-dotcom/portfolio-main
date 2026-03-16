import { motion } from "framer-motion";

const categories = [
  {
    label: "LANGUAGES",
    items: ["TypeScript", "JavaScript", "Python", "Java", "C#", "HTML5/CSS3"],
  },
  {
    label: "FRAMEWORKS",
    items: ["React", "Next.js", "Angular", "Vue", "Node.js", "Express"],
  },
  {
    label: "INFRASTRUCTURE",
    items: ["DevOps", "Distributed Systems", "IoT Integration", "Blockchain", "PostgreSQL", "Git"],
  },
  {
    label: "AUTOMATION",
    items: ["HubSpot API", "Notion API", "Custom CRM Workflows"],
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.2, ease: [0.2, 1, 0.3, 1] as const } },
};

const TechArsenal = () => (
  <section id="tech" className="py-[12vh] border-t border-border">
    <div className="container px-8">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-8">
        [ TECHNICAL_ARSENAL ]
      </p>
      <div className="space-y-8">
        {categories.map((cat) => (
          <div key={cat.label}>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">
              {cat.label}
            </p>
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {cat.items.map((t) => (
                <motion.div
                  key={t}
                  variants={item}
                  className="bg-muted border border-border p-3 flex items-center gap-3 hover:border-primary/40 transition-colors duration-150"
                >
                  <div className="status-active flex-shrink-0" />
                  <span className="font-mono text-xs text-foreground">{t}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TechArsenal;
