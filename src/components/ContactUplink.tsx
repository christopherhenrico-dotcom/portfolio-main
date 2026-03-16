import { motion } from "framer-motion";

const ContactUplink = () => (
  <section id="contact" className="py-[12vh] border-t border-border">
    <div className="container px-8">
      <motion.div
        className="max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, ease: [0.2, 1, 0.3, 1] }}
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-6">
          [ UPLINK // CONTACT ]
        </p>
        <h2 className="font-mono text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ textWrap: "balance" }}>
          Need a developer who understands the bottom line?
        </h2>
        <p className="font-body text-muted-foreground text-base leading-7 mb-8">
          I'm currently taking on select freelance projects and technical consulting.
          If you need it shipped yesterday, let's get to work.
        </p>
        <div className="space-y-4 mb-8">
          <a
            href="mailto:christopherhenrico8@gmail.com"
            className="block font-mono text-sm text-primary hover:underline transition-colors"
          >
            christopherhenrico8@gmail.com
          </a>
          <a
            href="https://github.com/ChristopherHenrico"
            target="_blank"
            rel="noopener noreferrer"
            className="block font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            github.com/ChristopherHenrico
          </a>
        </div>
        <a
          href="mailto:christopherhenrico8@gmail.com"
          className="inline-block cyber-cut cyber-btn bg-primary text-primary-foreground font-mono font-bold px-8 py-3 text-sm uppercase tracking-wider hover:brightness-110 transition-all duration-150"
        >
          Let's Ship
        </a>
      </motion.div>
    </div>
  </section>
);

export default ContactUplink;
