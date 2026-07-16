import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import logoAsset from "@/assets/codemantix-logo.png.asset.json";
import heroImg from "@/assets/hero-cohort.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const NAV = [
  { href: "#about", label: "About" },
  { href: "#curriculum", label: "Curriculum" },
  { href: "#tracks", label: "Tracks" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

function Btn({
  href,
  variant = "primary",
  children,
  className = "",
}: {
  href: string;
  variant?: "primary" | "ghost" | "outline";
  children: React.ReactNode;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2";
  const styles = {
    primary:
      "bg-brand-orange text-white shadow-[0_10px_30px_-10px_var(--brand-orange)] hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-15px_var(--brand-orange)]",
    outline:
      "border border-white/25 text-white hover:bg-white/10 backdrop-blur",
    ghost:
      "bg-white text-brand-navy hover:bg-brand-cream border border-black/5",
  }[variant];
  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      {children}
      <span aria-hidden>→</span>
    </a>
  );
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#hero" className="flex items-center gap-2.5 group">
      <img src={logoAsset.url} alt="Codemantix Collective" className="h-9 w-9 rounded-md" />
      <span className={`hidden sm:block font-bold tracking-tight text-[15px] leading-tight ${light ? "text-white" : "text-brand-navy"}`}>
        Codemantix<br />
        <span className={`font-medium text-[11px] ${light ? "text-white/60" : "text-muted-foreground"}`}>COLLECTIVE</span>
      </span>
    </a>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto mt-3 max-w-6xl px-4">
        <nav className="flex items-center justify-between rounded-full bg-white/85 backdrop-blur border border-black/5 shadow-[0_10px_30px_-15px_rgba(20,30,60,0.2)] px-4 sm:px-5 py-2.5">
          <Logo />
          <ul className="hidden md:flex items-center gap-7 text-sm font-medium text-brand-navy/80">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-brand-orange transition-colors">{n.label}</a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <a href="#application" className="hidden sm:inline-flex items-center rounded-full bg-brand-navy px-4 py-2 text-sm font-semibold text-white hover:bg-brand-navy-deep transition-colors">
              Apply Now
            </a>
            <button
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              <span className="text-lg">{open ? "×" : "≡"}</span>
            </button>
          </div>
        </nav>
        {open && (
          <div className="md:hidden mt-2 rounded-2xl bg-white border border-black/5 shadow-lg p-4 flex flex-col gap-3">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-brand-navy font-medium">
                {n.label}
              </a>
            ))}
            <a href="#application" onClick={() => setOpen(false)} className="mt-2 inline-flex justify-center rounded-full bg-brand-orange px-4 py-2.5 text-white font-semibold">
              Apply Now
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28" style={{ background: "var(--gradient-hero)" }}>
      <div aria-hidden className="absolute -top-24 -right-24 h-96 w-96 rounded-full blur-3xl opacity-40" style={{ background: "var(--gradient-accent)" }} />
      <div aria-hidden className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full blur-3xl opacity-30" style={{ background: "var(--gradient-green)" }} />
      <div className="relative mx-auto max-w-6xl px-4 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
        <div className="text-white">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 backdrop-blur px-3 py-1 text-xs font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-green animate-pulse" />
            Cohort 07 · Applications open
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
            Become a <span className="text-brand-orange">job-ready</span> developer in <span className="whitespace-nowrap">16 weeks.</span>
          </h1>
          <p className="mt-5 text-lg text-white/75 max-w-xl">
            Codemantix Collective is a mentor-led bootcamp built around real-world projects. No fluff, no lectures on autopilot — ship code, get feedback, land the offer.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Btn href="#application">Apply Now</Btn>
            <Btn href="#curriculum" variant="outline">See what you'll learn</Btn>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            {[
              ["93%", "Job placement"],
              ["1:6", "Mentor ratio"],
              ["12+", "Real projects"],
            ].map(([k, v]) => (
              <div key={v}>
                <dt className="text-2xl font-bold text-white">{k}</dt>
                <dd className="text-xs uppercase tracking-wider text-white/60 mt-1">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl opacity-60 blur-2xl" style={{ background: "var(--gradient-accent)" }} />
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <img src={heroImg} alt="Bootcamp cohort learning together" width={1600} height={1200} className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 rounded-2xl bg-white p-4 shadow-2xl">
            <div className="flex -space-x-2">
              {["#f26a2b", "#2ea866", "#1a2a5e"].map((c) => (
                <span key={c} className="h-8 w-8 rounded-full border-2 border-white" style={{ background: c }} />
              ))}
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Live cohort</p>
              <p className="text-sm font-semibold text-brand-navy">142 builders online</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Proof() {
  const testimonials = [
    {
      quote: "The mentorship alone was worth it. I went from 'what is a function' to shipping full-stack apps in 4 months.",
      name: "Amara O.",
      role: "Frontend Engineer @ fintech startup",
    },
    {
      quote: "The projects are what got me hired. My interviewers wanted to talk about my Codemantix work, not my CV.",
      name: "Daniel K.",
      role: "Product Designer @ SaaS scale-up",
    },
    {
      quote: "I was a teacher. Now I'm a junior dev earning 2.5x. Codemantix made that switch feel possible.",
      name: "Rita M.",
      role: "Career switcher · Web Dev track",
    },
  ];
  return (
    <section id="proof" className="py-20 sm:py-28 bg-brand-cream">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange">Proof, not promises</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-brand-navy">Graduates working at companies you know.</h2>
          </div>
          <a href="#application" className="text-sm font-semibold text-brand-navy hover:text-brand-orange">Join the next cohort →</a>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            ["500+", "Graduates shipped"],
            ["93%", "Hired within 6 months"],
            ["1:6", "Mentor-to-student ratio"],
            ["4.9/5", "Cohort satisfaction"],
          ].map(([k, v]) => (
            <div key={v} className="rounded-2xl bg-white p-5 border border-black/5">
              <p className="text-3xl font-bold text-brand-navy">{k}</p>
              <p className="text-xs text-muted-foreground mt-1">{v}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl bg-white p-6 border border-black/5 shadow-[0_10px_30px_-20px_rgba(20,30,60,0.3)] flex flex-col">
              <div className="text-brand-orange text-3xl leading-none">"</div>
              <blockquote className="mt-2 text-brand-navy/90 flex-1">{t.quote}</blockquote>
              <figcaption className="mt-5 pt-5 border-t border-black/5">
                <p className="font-semibold text-brand-navy">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const points = [
    { icon: "◆", title: "Hands-on from day one", body: "You write code and design real interfaces in week one. No 4-week theory prologue." },
    { icon: "◇", title: "Mentors who ship", body: "Every mentor is a working practitioner. You get 1:1s, code reviews, and honest feedback." },
    { icon: "◈", title: "Real-world projects", body: "Portfolio-grade work with real briefs — the kind hiring managers actually want to see." },
    { icon: "◉", title: "Career support that works", body: "Interview prep, portfolio reviews, referrals. We only win when you get hired." },
  ];
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 grid lg:grid-cols-[1fr_1.2fr] gap-12">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange">About the bootcamp</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-brand-navy leading-tight">Built for beginners, career switchers, and ambitious students.</h2>
          <p className="mt-5 text-muted-foreground">
            Most bootcamps teach you syntax. Codemantix teaches you to think, ship, and get hired. Our curriculum is rebuilt every cohort with input from the engineers and designers doing the work today.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Btn href="#curriculum" variant="ghost">Explore curriculum</Btn>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {points.map((p) => (
            <div key={p.title} className="rounded-2xl border border-black/5 p-6 bg-white hover:border-brand-orange/30 hover:-translate-y-0.5 transition-all duration-300">
              <div className="h-10 w-10 rounded-xl flex items-center justify-center text-lg text-white" style={{ background: "var(--gradient-accent)" }}>{p.icon}</div>
              <h3 className="mt-4 font-bold text-brand-navy">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Curriculum() {
  const modules = [
    { week: "Weeks 1–2", title: "Foundations", skills: "HTML, CSS, JS fundamentals, Git", tools: "VS Code, GitHub", outcome: "Personal portfolio site" },
    { week: "Weeks 3–5", title: "Frontend Engineering", skills: "React, TypeScript, state, routing", tools: "React, Vite, TS", outcome: "Interactive product UI" },
    { week: "Weeks 6–8", title: "Backend & APIs", skills: "REST, auth, databases, deployment", tools: "Node, Postgres, Supabase", outcome: "Full-stack task manager" },
    { week: "Weeks 9–11", title: "Product Thinking", skills: "UX flows, wireframes, prototyping", tools: "Figma, Notion", outcome: "Case study + prototype" },
    { week: "Weeks 12–14", title: "Capstone Project", skills: "Team collaboration, code review, ship", tools: "Full stack", outcome: "Production app in your portfolio" },
    { week: "Weeks 15–16", title: "Career Launch", skills: "Interview prep, portfolio polish, referrals", tools: "Mock interviews", outcome: "Job-ready + offer pipeline" },
  ];
  return (
    <section id="curriculum" className="py-20 sm:py-28 bg-brand-navy text-white relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange">The curriculum</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">16 weeks. 6 modules. One job-ready you.</h2>
          <p className="mt-4 text-white/70">Every module ends with a real project you keep in your portfolio. No filler, no busywork — just the skills employers pay for.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map((m, i) => (
            <article key={m.title} className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur p-6 hover:border-brand-orange/60 hover:bg-white/[0.06] transition-all">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-orange">{m.week}</span>
                <span className="text-xs text-white/40">0{i + 1}</span>
              </div>
              <h3 className="mt-3 text-xl font-bold">{m.title}</h3>
              <dl className="mt-5 space-y-3 text-sm">
                <div>
                  <dt className="text-white/50 text-xs uppercase tracking-wider">Skills</dt>
                  <dd className="mt-1 text-white/90">{m.skills}</dd>
                </div>
                <div>
                  <dt className="text-white/50 text-xs uppercase tracking-wider">Tools</dt>
                  <dd className="mt-1 text-white/90">{m.tools}</dd>
                </div>
                <div>
                  <dt className="text-white/50 text-xs uppercase tracking-wider">Outcome</dt>
                  <dd className="mt-1 text-brand-orange font-medium">{m.outcome}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Btn href="#application">Start your learning journey</Btn>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { t: "Apply", d: "Fill a 5-minute application — no CV required." },
    { t: "Get accepted", d: "Short intro call to check fit and answer questions." },
    { t: "Start learning", d: "Kick off with live onboarding and your first project brief." },
    { t: "Build projects", d: "Ship real work each module with mentor feedback." },
    { t: "Graduate & get hired", d: "Portfolio review, interview prep, and referrals." },
  ];
  return (
    <section id="how-it-works" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange">How it works</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-brand-navy">From application to offer, in five steps.</h2>
        </div>
        <ol className="mt-12 grid md:grid-cols-5 gap-4 relative">
          {steps.map((s, i) => (
            <li key={s.t} className="relative rounded-2xl border border-black/5 bg-white p-5">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-navy text-white text-sm font-bold">{i + 1}</span>
              <h3 className="mt-4 font-bold text-brand-navy">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 flex justify-center">
          <Btn href="#application">Apply in minutes</Btn>
        </div>
      </div>
    </section>
  );
}

function Tracks() {
  const tracks = [
    {
      name: "Web Development",
      color: "var(--gradient-green)",
      badge: "Most popular",
      desc: "Full-stack JavaScript. React, Node, Postgres. Ship apps end-to-end.",
      outcome: "Junior / Mid Frontend or Full-stack Engineer roles",
    },
    {
      name: "UI/UX Design",
      color: "var(--gradient-accent)",
      badge: "Portfolio-focused",
      desc: "Product thinking, research, wireframes, Figma prototyping and design systems.",
      outcome: "Junior Product Designer or UX Designer roles",
    },
    {
      name: "Product & Data",
      color: "linear-gradient(135deg, oklch(0.55 0.15 265), oklch(0.7 0.16 200))",
      badge: "New",
      desc: "Product strategy, analytics, SQL, and prototyping for aspiring PMs.",
      outcome: "Associate PM or Product Analyst roles",
    },
  ];
  return (
    <section id="tracks" className="py-20 sm:py-28 bg-brand-cream">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange">Tracks</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-brand-navy">Pick a path. Commit fully.</h2>
          <p className="mt-4 text-muted-foreground">Three focused tracks. Same mentor-led model, tailored curriculum, real outcomes.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {tracks.map((t) => (
            <article key={t.name} className="group flex flex-col rounded-3xl bg-white border border-black/5 overflow-hidden hover:-translate-y-1 transition-all duration-300 shadow-[0_10px_40px_-30px_rgba(20,30,60,0.4)]">
              <div className="h-32 relative" style={{ background: t.color }}>
                <span className="absolute top-4 left-4 text-[10px] uppercase tracking-widest font-bold text-white/90 bg-black/20 rounded-full px-3 py-1 backdrop-blur">{t.badge}</span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-brand-navy">{t.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground flex-1">{t.desc}</p>
                <div className="mt-5 pt-5 border-t border-black/5">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Outcome</p>
                  <p className="mt-1 text-sm font-semibold text-brand-navy">{t.outcome}</p>
                </div>
                <a href="#application" className="mt-5 inline-flex items-center text-sm font-semibold text-brand-orange group-hover:gap-2 gap-1 transition-all">
                  Choose this track <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const includes = [
    "16 weeks live cohort",
    "1:1 mentorship weekly",
    "12+ portfolio projects",
    "Career coaching & referrals",
    "Lifetime alumni network",
    "Certificate of completion",
  ];
  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange">Investment</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-brand-navy">Priced like a bootcamp. Valued like a career.</h2>
          <p className="mt-4 text-muted-foreground">Flexible payment plans available. Income-share options for eligible applicants.</p>
        </div>

        <div className="mt-12 rounded-3xl p-1" style={{ background: "var(--gradient-accent)" }}>
          <div className="rounded-[calc(1.5rem-4px)] bg-white p-8 sm:p-12 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold text-brand-orange uppercase tracking-widest">Full Cohort</p>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-5xl font-bold text-brand-navy">$2,400</span>
                <span className="text-muted-foreground">or 4 × $650</span>
              </div>
              <p className="mt-3 text-muted-foreground">Everything you need to go from beginner to job-ready. One price, no hidden fees.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Btn href="#application">Secure your spot</Btn>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">Only 24 seats per cohort. Rolling admissions.</p>
            </div>
            <ul className="grid grid-cols-1 gap-3">
              {includes.map((it) => (
                <li key={it} className="flex items-center gap-3 text-brand-navy">
                  <span className="h-6 w-6 rounded-full bg-brand-green/15 text-brand-green flex items-center justify-center text-sm font-bold">✓</span>
                  <span className="text-sm">{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    { q: "Do I need previous coding experience?", a: "No. Codemantix is designed for absolute beginners and career switchers. We start from first principles and ramp fast." },
    { q: "Is the program remote?", a: "Yes — fully remote and live. Sessions are recorded, but the cohort is synchronous so you learn with your peers in real time." },
    { q: "How much time does it take per week?", a: "Plan for 25–35 hours per week. It's intensive by design — that's why our graduates get hired." },
    { q: "What if I can't afford it upfront?", a: "We offer 4-month payment plans and income-share options for eligible applicants. Ask us in the application call." },
    { q: "What happens after graduation?", a: "You get lifetime access to our alumni network, ongoing mentorship, and hiring partner referrals until you land your role." },
  ];
  return (
    <section id="faq" className="py-20 sm:py-28 bg-brand-cream">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange">FAQ</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-brand-navy">Everything you were about to ask.</h2>
        </div>
        <div className="mt-10 space-y-3">
          {items.map((it, i) => (
            <details key={it.q} className="group rounded-2xl border border-black/5 bg-white p-5 open:shadow-[0_10px_30px_-20px_rgba(20,30,60,0.3)]" open={i === 0}>
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-semibold text-brand-navy">
                {it.q}
                <span className="h-7 w-7 rounded-full bg-brand-cream flex items-center justify-center text-brand-orange transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-muted-foreground text-sm">{it.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href="#application" className="text-sm font-semibold text-brand-navy hover:text-brand-orange">Still have questions? Apply and we'll talk →</a>
        </div>
      </div>
    </section>
  );
}

function Application() {
  return (
    <section id="application" className="py-20 sm:py-28 relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div aria-hidden className="absolute -top-24 left-1/2 -translate-x-1/2 h-96 w-[36rem] rounded-full blur-3xl opacity-40" style={{ background: "var(--gradient-accent)" }} />
      <div className="relative mx-auto max-w-4xl px-4 text-center text-white">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange">Your move</p>
        <h2 className="mt-3 text-4xl sm:text-5xl font-bold leading-tight">The next version of your career starts with one form.</h2>
        <p className="mt-5 text-white/70 max-w-2xl mx-auto">Applications for the next cohort close soon. Takes 5 minutes. No CV required.</p>

        <form className="mt-10 mx-auto max-w-2xl grid gap-3 text-left" onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll be in touch within 48 hours."); }}>
          <div className="grid sm:grid-cols-2 gap-3">
            <input required placeholder="Full name" className="rounded-xl bg-white/10 border border-white/15 backdrop-blur px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-brand-orange" />
            <input required type="email" placeholder="Email address" className="rounded-xl bg-white/10 border border-white/15 backdrop-blur px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-brand-orange" />
          </div>
          <select required className="rounded-xl bg-white/10 border border-white/15 backdrop-blur px-4 py-3 text-white focus:outline-none focus:border-brand-orange">
            <option value="" className="text-brand-navy">Which track interests you?</option>
            <option className="text-brand-navy">Web Development</option>
            <option className="text-brand-navy">UI/UX Design</option>
            <option className="text-brand-navy">Product & Data</option>
            <option className="text-brand-navy">Not sure yet</option>
          </select>
          <textarea rows={3} placeholder="Why do you want to join? (a sentence is fine)" className="rounded-xl bg-white/10 border border-white/15 backdrop-blur px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-brand-orange resize-none" />
          <button type="submit" className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-6 py-3.5 text-white font-semibold hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-15px_var(--brand-orange)] transition-all">
            Submit application <span>→</span>
          </button>
          <p className="text-xs text-white/50 text-center mt-1">By applying you agree to our terms & privacy policy.</p>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-navy-deep text-white/70 py-12">
      <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logoAsset.url} alt="" className="h-8 w-8 rounded" />
          <div className="text-sm">
            <p className="font-semibold text-white">Codemantix Collective</p>
            <p className="text-xs text-white/50">© {new Date().getFullYear()} — Built by builders, for builders.</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 text-sm">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-white transition-colors">{n.label}</a>
          ))}
          <a href="#application" className="text-brand-orange font-semibold">Apply</a>
        </div>
      </div>
    </footer>
  );
}

function StickyMobileCTA() {
  return (
    <a
      href="#application"
      className="md:hidden fixed bottom-4 inset-x-4 z-40 inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-6 py-3.5 text-white font-semibold shadow-[0_20px_40px_-10px_var(--brand-orange)]"
    >
      Apply Now <span>→</span>
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Proof />
        <About />
        <Curriculum />
        <HowItWorks />
        <Tracks />
        <Pricing />
        <FAQ />
        <Application />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
}
