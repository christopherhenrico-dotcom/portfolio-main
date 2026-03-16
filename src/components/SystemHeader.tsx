import { motion, useScroll, useSpring } from "framer-motion";

const navLinks = [
  { label: "WORK", href: "#portfolio" },
  { label: "TECH_STACK", href: "#tech" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "CONTACT", href: "#contact" },
];

const SystemHeader = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-primary origin-left z-[60]"
        style={{ scaleX }}
      />
      <header className="fixed top-[2px] left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container flex items-center justify-between py-4 px-8">
          <a href="#" className="font-mono text-sm font-bold tracking-widest text-foreground">
            C.HENRICO <span className="text-muted-foreground">// SYS_OP</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
};

export default SystemHeader;
