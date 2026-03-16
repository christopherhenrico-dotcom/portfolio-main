import { motion } from "framer-motion";

const specs = [
  {
    serial: "SP-2026-01",
    label: "PERFORMANCE_METRIC",
    title: "The 48-Hour Sprint",
    bigNum: "48H",
    body: "Need a secure, full-stack dataroom or a custom dashboard? I specialize in rapid deployment without sacrificing security.",
  },
  {
    serial: "SP-2026-02",
    label: "DELIVERY_METRIC",
    title: "MVP Specialist",
    bigNum: "14D",
    body: "From concept to a functional Ignite chain framework or React-based MVP in 14 days. I handle the architecture so you can focus on the fundraising.",
  },
  {
    serial: "SP-2026-03",
    label: "FOUNDER_METRIC",
    title: "Founder-to-Founder",
    bigNum: "F2F",
    body: "I've raised capital, managed payroll, and built companies. I don't just write code; I build business assets.",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.2, 1, 0.3, 1] as const } },
};

const ProvenSpeed = () => (
  <section className="py-[12vh] border-t border-border">
    <div className="container px-8">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-8">
        [ PROVEN_SPEED ]
      </p>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {specs.map((s) => (
          <motion.div
            key={s.serial}
            variants={item}
            className="relative bg-muted/30 border-l-4 border-l-primary border border-border p-6 overflow-hidden"
          >
            <span className="absolute top-3 right-3 font-mono text-[10px] text-muted-foreground tracking-[0.2em]">
              {s.serial}
            </span>
            <span className="absolute -bottom-4 -right-2 font-mono text-7xl font-bold text-primary/10 select-none">
              {s.bigNum}
            </span>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
              [ {s.label} ]
            </p>
            <h3 className="font-mono text-lg font-bold text-foreground mb-3">{s.title}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed relative z-10">{s.body}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ProvenSpeed;
