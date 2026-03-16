import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

const EnergyBar = () => {
  const { scrollYProgress } = useScroll();
  const [isFull, setIsFull] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      setIsFull(v > 0.95);
    });
    return unsubscribe;
  }, [scrollYProgress]);

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-2">
      <div className="w-3 h-48 border border-border bg-muted/30 relative overflow-hidden">
        <motion.div
          className="absolute bottom-0 left-0 right-0 bg-primary"
          style={{ scaleY: scrollYProgress, transformOrigin: "bottom" }}
        />
      </div>
      <p
        className={`font-mono text-[8px] uppercase tracking-[0.15em] text-center leading-tight transition-colors duration-300 ${
          isFull ? "text-primary animate-stamina-flash" : "text-muted-foreground"
        }`}
      >
        {isFull ? (
          <>
            STAMINA
            <br />
            FULL
          </>
        ) : (
          <>
            SCROLL
            <br />
            ↓
          </>
        )}
      </p>
    </div>
  );
};

export default EnergyBar;
