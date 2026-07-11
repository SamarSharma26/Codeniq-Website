import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import logoAsset from "@/assets/codeniq-logo.png.asset.json";
import {
  ArrowUpRight,
  Phone,
  MessageCircle,
  Mail,
  Instagram,
  Linkedin,
  Code2,
  Layers,
  Palette,
  Cloud,
  Smartphone,
  Brain,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const PROJECTS = [
  {
    name: "Copacabana Restaurant",
    tag: "Restaurant Website",
    url: "https://copacabana-restro.vercel.app",
    stack: ["React", "Tailwind", "Framer Motion"],
    accent: "from-amber-400/30 to-rose-500/20",
  },
  {
    name: "Foodies Mudhol",
    tag: "Restaurant Ordering Platform",
    url: "https://foodies-mudhol-demo.vercel.app",
    stack: ["Next.js", "Tailwind", "TypeScript"],
    accent: "from-lime-400/30 to-emerald-500/20",
  },
  {
    name: "Fold Fire Showcase",
    tag: "Creative Landing Page",
    url: "https://fold-fire-showcase.vercel.app",
    stack: ["React", "GSAP", "Tailwind"],
    accent: "from-orange-400/30 to-red-500/20",
  },
  {
    name: "Aashray Multispeciality Clinic",
    tag: "Healthcare Website",
    url: "https://aashray-clinic-elevate.vercel.app",
    stack: ["React", "Tailwind", "Node.js"],
    accent: "from-sky-400/30 to-indigo-500/20",
  },
];

const SERVICES = [
  {
    t: "Custom Software Development",
    d: "Enterprise-grade systems tailored to how your business actually runs.",
    icon: Code2,
    items: ["Enterprise Software", "Business Management Systems", "CRM & ERP Solutions", "Internal Dashboards", "Custom Portals"],
  },
  {
    t: "Web Development",
    d: "Fast, scalable web products — from marketing sites to full SaaS.",
    icon: Layers,
    items: ["Corporate Websites", "SaaS Applications", "Progressive Web Apps", "E-commerce Platforms", "Custom Web Applications"],
  },
  {
    t: "Mobile App Development",
    d: "Native-quality apps for Android, iOS, and cross-platform.",
    icon: Smartphone,
    items: ["Android Apps", "iOS Apps", "Cross-Platform Apps (React Native)"],
  },
  {
    t: "AI Solutions",
    d: "Intelligent products and automation that compound with your data.",
    icon: Brain,
    items: ["AI Chatbots", "AI Assistants", "Workflow Automation", "AI Integrations", "Recommendation Systems", "Computer Vision", "OCR Solutions"],
  },
  {
    t: "Cloud & Backend",
    d: "Reliable APIs and infrastructure engineered to scale from day one.",
    icon: Cloud,
    items: ["API Development", "Authentication Systems", "Database Design", "Cloud Deployment", "DevOps", "Scalable Infrastructure"],
  },
  {
    t: "UI/UX Design",
    d: "Product design that turns complex flows into effortless experiences.",
    icon: Palette,
    items: ["Product Design", "Dashboard Design", "Wireframing", "Interactive Prototypes"],
  },
];

const WHY = [
  "Product Thinking",
  "Scalable Architecture",
  "AI-Native Engineering",
  "Type-Safe Codebases",
  "Mobile First",
  "Cloud & DevOps",
  "Security by Default",
  "Performance Obsessed",
  "Design That Ships",
  "Long-term Partnership",
];

const PROCESS = [
  { n: "01", t: "Discovery", d: "We dig into your goals, users, and constraints." },
  { n: "02", t: "Planning", d: "Sitemap, scope, and success metrics locked in." },
  { n: "03", t: "Design", d: "High-fidelity systems, not just pretty screens." },
  { n: "04", t: "Development", d: "Clean, typed, componentized, production-grade." },
  { n: "05", t: "Testing", d: "Performance, accessibility & cross-device QA." },
  { n: "06", t: "Launch", d: "Deploy, monitor, iterate. Then we compound." },
];

const TESTIMONIALS = [
  {
    q: "Codeniq turned our idea into a shipped product in weeks — architecture, AI features, and polish that felt premium from day one.",
    n: "Aarav Mehta",
    r: "Founder",
  },
  {
    q: "They rebuilt our internal ERP and cut operations time in half. The engineering quality is genuinely rare.",
    n: "Priya Shetty",
    r: "COO",
  },
  {
    q: "They ship like a top-tier product team. Cleanest codebase and cloud setup we've ever inherited.",
    n: "Rohan Kapoor",
    r: "CTO",
  },
  {
    q: "From AI strategy to mobile app to launch — Codeniq owned the whole stack. Now we finally move at startup speed.",
    n: "Sana Iyer",
    r: "Head of Product",
  },
];

const TECHS = [
  "React",
  "Next.js",
  "React Native",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Docker",
  "OpenAI",
  "Vercel",
];

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).dataset.reveal = "in";
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground grain">
      <style>{`
        [data-reveal] { opacity: 0; transform: translateY(24px); transition: opacity .8s cubic-bezier(.2,.7,.2,1), transform .8s cubic-bezier(.2,.7,.2,1); }
        [data-reveal="in"] { opacity: 1; transform: none; }
        html { scroll-behavior: smooth; }
      `}</style>
      <Nav />
      <Hero />
      <MarqueeStrip />
      <Services />
      <Portfolio />
      <WhyUs />
      <Process />
      <Testimonials />
      <Technologies />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl bg-background/60 border-b border-border" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:py-5">
        <a href="#home" className="flex items-center gap-2.5 text-xl font-bold tracking-tight">
          <img src={logoAsset.url} alt="Codeniq" className="h-9 w-9 rounded-md" />
          Codeniq<span className="text-primary">.</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="group relative text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {n.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
        >
          Book a Call <ArrowUpRight className="h-4 w-4" />
        </a>
        <button
          type="button"
          className="group relative md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/60 backdrop-blur transition-all duration-300 hover:border-primary hover:bg-primary/10 active:scale-95"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className="sr-only">Toggle menu</span>
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 block h-[2px] w-5 rounded-full bg-foreground transition-all duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:bg-primary ${
                open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 block h-[2px] w-5 -translate-y-1/2 rounded-full bg-foreground transition-all duration-200 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:bg-primary ${
                open ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-[2px] w-5 rounded-full bg-foreground transition-all duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:bg-primary ${
                open ? "bottom-1/2 translate-y-1/2 -rotate-45" : "bottom-0"
              }`}
            />
          </span>
        </button>
      </div>
      <div
        className={`md:hidden overflow-hidden border-border bg-background/95 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "max-h-[480px] border-t opacity-100" : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6">
          {NAV.map((n, i) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${80 + i * 50}ms` : "0ms" }}
              className={`text-lg font-medium transition-all duration-500 ease-out hover:text-primary ${
                open ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"
              }`}
            >
              {n.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            style={{ transitionDelay: open ? `${80 + NAV.length * 50}ms` : "0ms" }}
            className={`inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.6)] transition-all duration-500 ease-out hover:scale-[1.03] ${
              open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            }`}
          >
            Book a Call <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const wrap = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const on = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      setMouse({
        x: (e.clientX - r.left - r.width / 2) / r.width,
        y: (e.clientY - r.top - r.height / 2) / r.height,
      });
    };
    el.addEventListener("mousemove", on);
    return () => el.removeEventListener("mousemove", on);
  }, []);

  return (
    <section id="home" ref={wrap} className="relative overflow-hidden pt-32 md:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-[520px] w-[520px] rounded-full blur-3xl opacity-40"
        style={{
          background: "radial-gradient(circle, var(--color-primary), transparent 60%)",
          transform: `translate(${mouse.x * 30}px, ${mouse.y * 30}px)`,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full blur-3xl opacity-20"
        style={{
          background: "radial-gradient(circle, #ffffff, transparent 60%)",
          transform: `translate(${mouse.x * -40}px, ${mouse.y * -40}px)`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <span className="h-px w-10 bg-primary" />
          Premium Software Development Agency
        </div>

        <h1 className="text-[12vw] font-bold leading-[0.9] tracking-tighter md:text-[8rem]">
          Engineering <span className="text-primary">Software</span>
          <br />
          That Scales<span className="text-primary">.</span>
        </h1>

        <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-end">
          <p className="max-w-xl text-lg text-muted-foreground md:text-xl">
            We help startups and businesses transform ideas into scalable software —
            from AI-powered platforms and mobile apps to enterprise systems and
            premium web experiences.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:justify-end">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Book a Free Consultation
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-4 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              View Our Work
            </a>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-8 border-t border-border pt-10 md:grid-cols-4">
          {[
            { k: "10+", v: "Projects Delivered" },
            { k: "100%", v: "Client Satisfaction" },
            { k: "95+", v: "Lighthouse Score" },
            { k: "24/7", v: "Long-term Support" },
          ].map((s) => (
            <div key={s.v}>
              <div className="text-4xl font-bold md:text-5xl">{s.k}</div>
              <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex items-center gap-3 pb-10 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <span className="inline-block h-8 w-px animate-pulse bg-primary" />
          Scroll to explore
        </div>
      </div>
    </section>
  );
}

function MarqueeStrip() {
  const items = ["Custom Software", "Web Apps", "Mobile Apps", "AI Solutions", "Cloud & DevOps", "SaaS Products", "Enterprise Systems", "UI/UX Design"];
  const row = [...items, ...items];
  return (
    <div className="border-y border-border bg-secondary/40 py-6 overflow-hidden">
      <div className="flex w-max marquee gap-16 whitespace-nowrap text-3xl md:text-5xl">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-16 text-muted-foreground">
            {t}
            <span className="h-2 w-2 rounded-full bg-primary" />
          </span>
        ))}
      </div>
    </div>
  );
}

function Services() {
  return (
    <Section id="services" eyebrow="What we do" title="Services" kicker="A complete technology partner — from first prototype to production scale.">
      <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <div key={s.t} className="group relative flex flex-col bg-card p-8 transition-all duration-300 hover:bg-secondary hover:-translate-y-1 active:scale-[0.99] motion-reduce:transform-none motion-reduce:transition-none">
            <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background text-primary transition-colors group-hover:border-primary">
              <s.icon className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-semibold">{s.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            <ul className="mt-5 space-y-1.5 text-sm text-muted-foreground">
              {s.items.map((it) => (
                <li key={it} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-primary" />
                  {it}
                </li>
              ))}
            </ul>
            <ArrowUpRight className="absolute right-6 top-6 h-5 w-5 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:text-primary" />
          </div>
        ))}
      </div>
    </Section>
  );
}

function Portfolio() {
  return (
    <Section
      id="portfolio"
      eyebrow="Selected work"
      title="Portfolio"
      kicker="Software and digital products shipped for founders, restaurants, clinics and modern brands."
    >
      <div className="grid gap-8 md:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.url} p={p} i={i} />
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({ p, i }: { p: (typeof PROJECTS)[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [t, setT] = useState({ x: 0, y: 0 });
  const reveal = useReveal<HTMLDivElement>();

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setT({
      x: (e.clientX - r.left) / r.width - 0.5,
      y: (e.clientY - r.top) / r.height - 0.5,
    });
  };
  const reset = () => setT({ x: 0, y: 0 });

  return (
    <div ref={reveal} data-reveal style={{ transitionDelay: `${i * 80}ms` }}>
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={reset}
        className="group relative overflow-hidden rounded-3xl border border-border bg-card p-4 transition-shadow duration-500 hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
        style={{
          transform: `perspective(1000px) rotateX(${t.y * -6}deg) rotateY(${t.x * 6}deg)`,
          transition: "transform 200ms ease",
        }}
      >
        <div className={`relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${p.accent}`}>
          <div className="flex items-center gap-1.5 border-b border-border/70 bg-background/60 px-4 py-2.5 backdrop-blur">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
            <div className="ml-3 truncate rounded-md bg-secondary px-3 py-1 text-[10px] text-muted-foreground">
              {p.url.replace(/^https?:\/\//, "")}
            </div>
          </div>
          <div className="relative aspect-[16/10] w-full bg-background">
            <iframe
              src={p.url}
              title={p.name}
              loading="lazy"
              className="absolute left-0 top-0 h-[200%] w-[200%] origin-top-left scale-50 border-0"
              sandbox="allow-scripts allow-same-origin"
            />
            <a href={p.url} target="_blank" rel="noreferrer" className="absolute inset-0" aria-label={`Visit ${p.name}`} />
          </div>
        </div>

        <div className="flex items-start justify-between gap-6 p-4 pt-6">
          <div className="min-w-0">
            <div className="text-xs uppercase tracking-widest text-primary">{p.tag}</div>
            <h3 className="mt-1 text-2xl font-semibold">{p.name}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span key={s} className="rounded-full border border-border px-3 py-1 text-[11px] text-muted-foreground">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <a
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:scale-[1.05]"
          >
            Visit <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}

function WhyUs() {
  return (
    <Section id="why" eyebrow="Why Codeniq" title="Built different. On purpose." kicker="The details that make premium feel premium.">
      <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
        {WHY.map((w, i) => (
          <div key={w} className="group relative bg-card p-8 transition-colors hover:bg-primary hover:text-primary-foreground">
            <div className="font-mono text-xs text-muted-foreground group-hover:text-primary-foreground/70">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="mt-6 text-lg font-semibold leading-tight">{w}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Process() {
  return (
    <Section id="process" eyebrow="How we work" title="Our Process" kicker="Six steps. Zero guesswork.">
      <div className="relative">
        <div className="absolute left-6 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-1/2" />
        <div className="space-y-10">
          {PROCESS.map((p, i) => (
            <ProcessRow key={p.n} p={p} i={i} />
          ))}
        </div>
      </div>
    </Section>
  );
}

function ProcessRow({ p, i }: { p: (typeof PROCESS)[number]; i: number }) {
  const reveal = useReveal<HTMLDivElement>();
  const left = i % 2 === 0;
  return (
    <div
      ref={reveal}
      data-reveal
      style={{ transitionDelay: `${i * 80}ms` }}
      className={`relative grid md:grid-cols-2 md:gap-16 ${left ? "" : "md:[&>*:first-child]:col-start-2"}`}
    >
      <div className={`pl-16 md:pl-0 ${left ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
        <div className="font-mono text-sm text-primary">{p.n}</div>
        <h3 className="mt-2 text-3xl font-semibold">{p.t}</h3>
        <p className="mt-2 text-muted-foreground">{p.d}</p>
      </div>
      <span className="absolute left-6 top-2 grid h-4 w-4 -translate-x-1/2 place-items-center rounded-full border border-primary bg-background md:left-1/2">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      </span>
    </div>
  );
}

function Testimonials() {
  return (
    <Section id="testimonials" eyebrow="Kind words" title="Trusted by ambitious teams" kicker="What founders say after shipping with us.">
      <div className="grid gap-6 md:grid-cols-2">
        {TESTIMONIALS.map((t, i) => (
          <TestimonialCard key={t.n} t={t} i={i} />
        ))}
      </div>
    </Section>
  );
}

function TestimonialCard({ t, i }: { t: (typeof TESTIMONIALS)[number]; i: number }) {
  const reveal = useReveal<HTMLDivElement>();
  return (
    <div
      ref={reveal}
      data-reveal
      style={{ transitionDelay: `${i * 80}ms` }}
      className="group relative rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-[0_20px_50px_-25px_hsl(var(--primary)/0.4)] active:scale-[0.99] motion-reduce:transform-none motion-reduce:transition-none"
    >
      <div className="text-6xl leading-none text-primary/60">"</div>
      <p className="mt-2 text-lg leading-relaxed text-foreground">{t.q}</p>
      <div className="mt-8 flex items-center gap-3 border-t border-border pt-6">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary font-semibold text-primary-foreground">
          {t.n[0]}
        </div>
        <div className="min-w-0">
          <div className="truncate font-semibold">{t.n}</div>
          <div className="truncate text-xs text-muted-foreground">{t.r}</div>
        </div>
      </div>
    </div>
  );
}

function Technologies() {
  const row = [...TECHS, ...TECHS];
  return (
    <Section id="tech" eyebrow="Our stack" title="Technologies" kicker="Best-in-class tools, wielded well.">
      <div className="overflow-hidden rounded-3xl border border-border bg-card py-10">
        <div className="flex w-max marquee gap-14 whitespace-nowrap px-8 text-2xl md:text-3xl">
          {row.map((t, i) => (
            <span key={i} className="flex items-center gap-14 text-muted-foreground">
              <span className="transition-colors hover:text-primary">{t}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="About" title="A modern digital studio, obsessed with the details.">
      <div className="grid gap-12 md:grid-cols-5">
        <p className="text-lg leading-relaxed text-muted-foreground md:col-span-3">
          Codeniq is a software development agency that designs and builds custom software,
          AI-powered solutions, web applications, mobile apps, SaaS products, enterprise
          systems, automation tools, and high-performance websites for startups and
          businesses. We combine product thinking, engineering rigor, and design craft to
          ship software that scales.
        </p>
        <div className="md:col-span-2 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border">
          {[
            { k: "10+", v: "Projects" },
            { k: "6", v: "Service Lines" },
            { k: "AI", v: "Native" },
            { k: "100%", v: "Craft" },
          ].map((s) => (
            <div key={s.v} className="bg-card p-6">
              <div className="text-3xl font-bold">{s.k}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  const actions = [
    { icon: Phone, label: "Direct Call", href: "tel:+919284782207", ext: false },
    { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/919284782207", ext: true },
    { icon: Mail, label: "Email", href: "mailto:samar.businesslab@gmail.com", ext: false },
    { icon: Instagram, label: "Instagram", href: "https://instagram.com/codeniq.01", ext: true },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/codeniq26", ext: true },
  ];
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-primary), transparent 60%)" }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-3xl">
          <div className="mb-4 text-xs uppercase tracking-[0.25em] text-primary">Contact</div>
          <h2 className="text-5xl font-bold leading-[0.95] tracking-tighter md:text-7xl">
            Let's build something amazing<span className="text-primary">.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Tell us about your project. We reply within 24 hours.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-5">
          <form
            action="https://formspree.io/f/mjgqjawo"
            method="POST"
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = new FormData(form);
              try {
                const res = await fetch("https://formspree.io/f/mjgqjawo", {
                  method: "POST",
                  body: data,
                  headers: { Accept: "application/json" },
                });
                if (res.ok) {
                  setSent(true);
                  form.reset();
                }
              } catch {
                // no-op
              }
            }}
            className="rounded-3xl border border-border bg-card/60 p-8 backdrop-blur-xl lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" />
              <Field label="Business Name" name="business" />
              <Field label="Project Type" name="project" />
              <Field label="Budget" name="budget" />
            </div>
            <div className="mt-5">
              <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              />
            </div>
            <button
              type="submit"
              className="mt-8 group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              {sent ? "Thanks — we'll be in touch" : "Let's Build Something Amazing"}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </form>

          <div className="lg:col-span-2">
            <div className="rounded-3xl border border-border bg-card/60 p-8 backdrop-blur-xl">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Direct</div>
              <a href="tel:+919284782207" className="mt-2 block text-2xl font-semibold hover:text-primary">
                +91 92847 82207
              </a>
              <a
                href="mailto:samar.businesslab@gmail.com"
                className="mt-1 block break-all text-muted-foreground hover:text-primary"
              >
                samar.businesslab@gmail.com
              </a>

              <div className="mt-8 space-y-3">
                {actions.map((a) => (
                  <a
                    key={a.label}
                    href={a.href}
                    target={a.ext ? "_blank" : undefined}
                    rel={a.ext ? "noreferrer" : undefined}
                    className="group flex items-center justify-between rounded-2xl border border-border bg-background px-4 py-3 transition-colors hover:border-primary hover:bg-primary/5"
                  >
                    <span className="flex items-center gap-3">
                      <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <a.icon className="h-4 w-4" />
                      </span>
                      <span className="font-medium">{a.label}</span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <a href="#home" className="flex items-center gap-3 text-2xl font-bold">
              <img src={logoAsset.url} alt="Codeniq" className="h-11 w-11 rounded-md" />
              Codeniq<span className="text-primary">.</span>
            </a>
            <p className="mt-4 max-w-md text-muted-foreground">
              Crafting high-performance digital experiences for ambitious brands.
            </p>
          </div>
          <div>
            <div className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">Quick Links</div>
            <ul className="space-y-2 text-sm">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="hover:text-primary">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">Services</div>
            <ul className="space-y-2 text-sm">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.t} className="text-muted-foreground">
                  {s.t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-border pt-8 md:flex-row md:items-center">
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Codeniq. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com/codeniq.01"
              target="_blank"
              rel="noreferrer"
              className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/company/codeniq26"
              target="_blank"
              rel="noreferrer"
              className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:samar.businesslab@gmail.com"
              className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
          <div className="text-xs text-muted-foreground">
            Designed & Developed by <span className="text-foreground">Codeniq</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Section({
  id,
  eyebrow,
  title,
  kicker,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  kicker?: string;
  children: React.ReactNode;
}) {
  const reveal = useReveal<HTMLDivElement>();
  return (
    <section id={id} className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div ref={reveal} data-reveal className="mb-14 max-w-3xl">
          <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-primary">
            <span className="h-px w-8 bg-primary" />
            {eyebrow}
          </div>
          <h2 className="text-4xl font-bold leading-[1.02] tracking-tighter md:text-6xl">{title}</h2>
          {kicker && <p className="mt-4 text-lg text-muted-foreground">{kicker}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}