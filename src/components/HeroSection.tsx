import { motion } from "framer-motion";

const glitchVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: [0, 0.8, 0.2, 0.9, 0.4, 1],
    transition: { duration: 0.4, ease: [0.2, 1, 0.3, 1] as const },
  },
};

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "auto" });
  };

  return (
    <section className="relative min-h-screen flex items-center dot-grid overflow-hidden">
      <div className="absolute inset-0 scanline z-10" />
      <div className="container relative z-20 px-8 pt-24">
        <motion.div
          variants={glitchVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-6">
            [ SYSTEM_ONLINE // FULL_STACK_ENGINEER ]
          </p>
          <h1 className="font-mono text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-foreground" style={{ textWrap: "balance" }}>
            I build the technical foundations for fast-moving startups.
          </h1>
          <p className="max-w-xl text-muted-foreground font-mono text-sm leading-relaxed mb-8">
            Full-stack engineer and serial founder. Whether it's a secure Data Room in 48 hours or a scalable MVP in 2 weeks, I ship production-ready code while others are still planning the sprint.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo("portfolio")}
              className="cyber-cut cyber-btn bg-primary text-primary-foreground font-mono font-bold px-6 py-3 text-sm uppercase tracking-wider hover:brightness-110 transition-all duration-150"
            >
              View My Portfolio
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="cyber-btn border border-border bg-transparent text-foreground font-mono font-bold px-6 py-3 text-sm uppercase tracking-wider hover:bg-muted transition-all duration-150"
            >
              Let's Talk Shop
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
