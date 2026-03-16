const SystemFooter = () => (
  <footer className="border-t border-border py-6">
    <div className="container px-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-mono text-[10px] text-muted-foreground tracking-wider">
        © 2026 Christopher Henrico. Built with TypeScript and speed.
      </p>
      <p className="font-mono text-[10px] text-muted-foreground tracking-wider">
        SYS_STATUS: <span className="text-primary">ONLINE</span>
      </p>
    </div>
  </footer>
);

export default SystemFooter;
