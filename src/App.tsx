import { useEffect, useMemo, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  AudioLines,
  Bird,
  Bot,
  Briefcase,
  Code2,
  Cloud,
  Download,
  Gamepad2,
  GraduationCap,
  Image as ImageIcon,
  Layers,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Mic,
  Phone,
  Radio,
  Rocket,
  Server,
  Smartphone,
  Sparkles,
  Users,
  Vote,
  X,
} from "lucide-react";
import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid";
import { GlassIcon } from "@/components/ui/glass-icon";
import { Timeline } from "@/components/ui/timeline";
import { cn } from "@/lib/utils";
import {
  aiMedia,
  commercial,
  companies,
  deployment,
  education,
  experience,
  gameProjects,
  profile,
  screens,
  skills,
  storeApps,
  stats,
  voiceProjects,
  type Project,
  type Status,
} from "./data";

const nav = [
  { id: "work", label: "Work" },
  { id: "apps", label: "Apps" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const statusClass: Record<Status, string> = {
  Live: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200",
  Active: "bg-blue-50 text-blue-700 ring-1 ring-blue-200",
  Testing: "bg-amber-50 text-amber-700 ring-1 ring-amber-200",
  Shipped: "bg-violet-50 text-violet-700 ring-1 ring-violet-200",
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: "easeOut" },
} as const;

function LinkedinIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function SectionHeading({ eyebrow, title, text, icon }: { eyebrow: string; title: string; text?: string; icon: ReactNode }) {
  return (
    <motion.div {...fadeUp} className="mb-12 max-w-2xl">
      <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand shadow-sm">
        {icon}
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h2>
      {text && <p className="mt-3 text-lg text-muted-foreground">{text}</p>}
    </motion.div>
  );
}

/* ---------------------------------- Navbar --------------------------------- */

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className={cn(
          "mx-auto flex h-14 max-w-5xl items-center justify-between rounded-full border px-5 transition-all",
          scrolled ? "border-border bg-white/80 shadow-lg shadow-slate-900/5 backdrop-blur-xl" : "border-transparent"
        )}
      >
        <a href="#top" className="flex items-center gap-2 font-semibold text-foreground">
          <img src={profile.photo} alt={profile.name} className="size-8 rounded-full object-cover ring-2 ring-white" />
          <span className="hidden sm:inline">Irfan Ullah</span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {n.label}
            </a>
          ))}
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand"
          >
            Hire me
          </a>
        </div>
        <button className="text-foreground md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="mx-auto mt-2 max-w-5xl rounded-2xl border border-border bg-white/95 p-2 shadow-lg backdrop-blur-xl md:hidden">
          {nav.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

/* ----------------------------------- Hero ---------------------------------- */

function VoiceCard() {
  return (
    <div className="rounded-3xl border border-border bg-card p-5 shadow-xl shadow-blue-900/10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-2 text-white">
            <Mic className="size-5" />
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">Nexivo AI</p>
            <p className="text-xs text-muted-foreground">Voice agent · listening</p>
          </div>
        </div>
        <span className={cn("rounded-full px-2.5 py-1 text-xs font-medium", statusClass.Live)}>● Live</span>
      </div>
      <div className="mt-6 flex h-14 items-center justify-center gap-1">
        {Array.from({ length: 28 }).map((_, i) => (
          <motion.span
            key={i}
            className="w-1.5 rounded-full bg-gradient-to-t from-brand to-brand-2"
            animate={{ height: [8, 12 + ((i * 7) % 36), 8] }}
            transition={{ duration: 1.1, repeat: Infinity, delay: i * 0.05, ease: "easeInOut" }}
          />
        ))}
      </div>
      <div className="mt-5 space-y-2 text-sm">
        <p className="w-fit rounded-2xl rounded-bl-sm bg-muted px-3 py-2 text-slate-700">Book a demo for tomorrow at 3 pm.</p>
        <p className="ml-auto w-fit rounded-2xl rounded-br-sm bg-primary px-3 py-2 text-white">Done — you're booked. Anything else?</p>
      </div>
      <p className="mt-4 font-mono text-[11px] text-muted-foreground">sub-second latency &nbsp;|&nbsp; vapi · llm · tts</p>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-16 sm:pt-44">
      <div className="dot-bg absolute inset-0" />
      <div className="absolute -top-32 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-200/60 via-sky-100/60 to-indigo-200/60 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex flex-wrap items-center gap-5"
          >
            <img
              src={profile.photo}
              alt={profile.name}
              className="size-28 rounded-3xl object-cover shadow-xl shadow-blue-900/20 ring-4 ring-white sm:size-32"
            />
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
              <span className="size-2 animate-pulse rounded-full bg-emerald-500" />
              Available for remote & onsite roles
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-6xl"
          >
            Apps that{" "}
            <span className="bg-gradient-to-r from-primary via-brand to-brand-2 bg-clip-text text-transparent">talk, play</span>
            <br className="hidden sm:block" /> & create.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            I'm <span className="font-semibold text-foreground">{profile.name}</span>, a {profile.role.toLowerCase()} in Lahore.{" "}
            {profile.summary.split(" — ")[0]}.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white shadow-lg shadow-blue-900/20 transition-colors hover:bg-brand"
            >
              View my work <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="/Irfan-Ullah-Resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 font-semibold text-foreground shadow-sm transition-colors hover:border-brand/40"
            >
              <Download className="size-4" /> Resume
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex size-12 items-center justify-center rounded-full border border-border bg-card text-primary shadow-sm transition-colors hover:border-brand/40"
            >
              <LinkedinIcon className="size-4" />
            </a>
          </motion.div>
          <p className="mt-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="size-4" /> {profile.location}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30, rotate: 2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="relative"
        >
          <VoiceCard />
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-6 hidden items-center gap-3 rounded-2xl border border-white/70 bg-white/70 px-3 py-2.5 shadow-lg shadow-blue-900/10 backdrop-blur-xl sm:flex"
          >
            <GlassIcon src={gameProjects[0].image!} alt="Nido Bird icon" className="size-14 p-1" />
            <div>
              <p className="text-sm font-semibold text-foreground">{gameProjects[0].title}</p>
              <p className="text-xs text-muted-foreground">60 FPS · Google Play</p>
            </div>
          </motion.div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-4 hidden items-center gap-2 rounded-2xl border border-border bg-card px-3 py-2 shadow-lg shadow-blue-900/10 sm:flex"
          >
            <Sparkles className="size-4 text-violet-500" />
            <span className="text-xs font-semibold text-foreground">Gemini · LiveKit · Vapi</span>
          </motion.div>
        </motion.div>
      </div>

      <motion.dl
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="relative mx-auto mt-20 grid max-w-6xl grid-cols-2 gap-4 px-4 sm:grid-cols-4 sm:px-6"
      >
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-border bg-card/80 p-5 shadow-sm backdrop-blur">
            <dd className="text-3xl font-bold tracking-tight text-primary">{s.value}</dd>
            <dt className="mt-1 text-sm text-muted-foreground">{s.label}</dt>
          </div>
        ))}
      </motion.dl>
    </section>
  );
}

function TechMarquee() {
  const items = skills.flatMap((s) => s.items);
  return (
    <div className="relative overflow-hidden border-y border-border bg-card py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-card to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-card to-transparent" />
      <div className="animate-marquee flex w-max gap-10">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-10 text-sm font-semibold whitespace-nowrap text-slate-400">
            {t}
            <span className="size-1 rounded-full bg-slate-300" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ----------------------------------- Work ---------------------------------- */

type Category = "All" | "Voice AI" | "Generative AI" | "Games" | "Apps";

type WorkItem = BentoItem & { category: Exclude<Category, "All"> };

function toBento(p: Project, icon: ReactNode, category: WorkItem["category"], extra: Partial<BentoItem> = {}): WorkItem {
  return {
    title: p.title,
    meta: p.subtitle,
    description: p.points.join(" "),
    icon,
    image: p.image,
    status: p.status,
    statusClass: statusClass[p.status],
    tags: p.tags,
    href: p.link?.href,
    cta: p.link?.label,
    category,
    ...extra,
  };
}

const workItems: WorkItem[] = [
  toBento(voiceProjects[0], <AudioLines className="size-5" />, "Voice AI", { colSpan: 2, hasPersistentHover: true }),
  toBento(voiceProjects[1], <Radio className="size-5" />, "Voice AI"),
  toBento(voiceProjects[2], <Bot className="size-5" />, "Voice AI"),
  {
    title: aiMedia.title,
    meta: aiMedia.subtitle,
    description: aiMedia.modules.map((m) => `${m.name}: ${m.text}`).join(" "),
    icon: <ImageIcon className="size-5" />,
    status: aiMedia.status,
    statusClass: statusClass[aiMedia.status],
    tags: ["Diffusion", "FaceSwap", "Inpainting", "Video"],
    colSpan: 2,
    category: "Generative AI",
  },
  toBento(gameProjects[0], <Bird className="size-5" />, "Games", { colSpan: 2 }),
  toBento(gameProjects[1], <Gamepad2 className="size-5" />, "Games"),
  toBento(commercial[0], <Users className="size-5" />, "Apps"),
  toBento(commercial[1], <Vote className="size-5" />, "Apps"),
  toBento(commercial[2], <Smartphone className="size-5" />, "Apps"),
];

const categories: Category[] = ["All", "Voice AI", "Generative AI", "Games", "Apps"];

function Work() {
  const [cat, setCat] = useState<Category>("All");
  const items = useMemo(
    () => (cat === "All" ? workItems : workItems.filter((i) => i.category === cat).map((i) => ({ ...i, colSpan: undefined }))),
    [cat]
  );

  return (
    <section id="work" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Selected work"
          title="Voice agents, AI media, games & apps"
          text="Production projects from live voice assistants to Play Store games."
          icon={<Layers className="size-3.5" />}
        />
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
                cat === c
                  ? "border-primary bg-primary text-white"
                  : "border-border bg-card text-muted-foreground hover:border-brand/40 hover:text-foreground"
              )}
            >
              {c}
            </button>
          ))}
        </div>
        <motion.div key={cat} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
          <BentoGrid items={items} className="grid-flow-dense" />
        </motion.div>
      </div>
    </section>
  );
}

/* ----------------------------------- Apps ---------------------------------- */

function Apps() {
  return (
    <section id="apps" className="scroll-mt-24 pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="On the store"
          title="Apps I've worked on"
          text="Flutter apps I've built and shipped, live on Google Play or on the way."
          icon={<Smartphone className="size-3.5" />}
        />
        <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {storeApps.map((app, i) => {
              const Wrapper = app.href ? "a" : "div";
              return (
                <motion.div key={app.name} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.04 }}>
                  <Wrapper
                    {...(app.href ? { href: app.href, target: "_blank", rel: "noreferrer" } : {})}
                    className={cn(
                      "group flex h-full flex-col items-center rounded-2xl border border-border bg-card p-4 text-center transition-all",
                      app.href && "hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg hover:shadow-blue-900/5"
                    )}
                  >
                    <GlassIcon src={app.icon} alt={`${app.name} icon`} className="size-24" />
                    <p className="mt-4 text-sm font-semibold text-foreground">{app.name}</p>
                    <p className="text-xs text-muted-foreground">{app.category}</p>
                    <span
                      className={cn(
                        "mt-3 inline-flex items-center gap-1 text-xs font-semibold",
                        app.href ? "text-brand" : "text-slate-400"
                      )}
                    >
                      {app.href ? (
                        <>
                          Google Play <ArrowUpRight className="size-3" />
                        </>
                      ) : (
                        "Coming soon"
                      )}
                    </span>
                  </Wrapper>
                </motion.div>
              );
            })}
          </div>

          <motion.div {...fadeUp} className="relative mx-auto flex h-[380px] w-full max-w-sm items-center justify-center sm:h-[420px]">
            {screens.map((src, i) => {
              const offset = i - (screens.length - 1) / 2;
              return (
                <img
                  key={src}
                  src={src}
                  alt={`Flutter app screen ${i + 1}`}
                  loading="lazy"
                  style={{ transform: `translateX(${offset * 52}px) rotate(${offset * 6}deg)`, zIndex: 10 - Math.abs(offset) }}
                  className="absolute h-[300px] w-auto rounded-[1.75rem] shadow-xl shadow-slate-900/15 sm:h-[340px]"
                />
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Experience ------------------------------- */

function Experience() {
  const entries = experience.map((e, i) => ({
    title: e.role,
    company: e.company,
    period: e.period,
    points: e.points,
    technologies: e.tech,
    icon: i === 0 ? Briefcase : Code2,
    logo: e.logo,
  }));

  return (
    <section id="experience" className="scroll-mt-24 bg-card py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Career" title="Experience" icon={<Rocket className="size-3.5" />} />
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <motion.div {...fadeUp}>
            <Timeline entries={entries} />
          </motion.div>
          <div className="space-y-4 lg:sticky lg:top-28 lg:self-start">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">Education</p>
            {education.map((ed) => (
              <motion.div key={ed.title} {...fadeUp} className="flex gap-4 rounded-2xl border border-border bg-background p-5">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                  <GraduationCap className="size-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{ed.title}</h3>
                  <p className="text-sm text-muted-foreground">{ed.place}</p>
                  {ed.period && <p className="mt-1 font-mono text-xs text-slate-400">{ed.period}</p>}
                </div>
              </motion.div>
            ))}
            <p className="pt-6 text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">Companies I've worked with</p>
            <div className="flex flex-wrap gap-3">
              {companies.map((c) => (
                <div key={c.name} className="flex items-center gap-2.5 rounded-2xl border border-border bg-background py-2 pr-4 pl-2">
                  <img src={c.logo} alt={`${c.name} logo`} loading="lazy" className="size-9 rounded-xl bg-white object-contain" />
                  <span className="text-sm font-semibold text-foreground">{c.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- Skills --------------------------------- */

const skillIcons = [Smartphone, Sparkles, Cloud, Server];

function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Toolkit" title="Skills & stack" icon={<Code2 className="size-3.5" />} />
        <div className="grid gap-4 sm:grid-cols-2">
          {skills.map((s, i) => {
            const Icon = skillIcons[i];
            return (
              <motion.div
                key={s.group}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.06 }}
                className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg hover:shadow-blue-900/5"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-secondary text-primary">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="font-semibold text-foreground">{s.group}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <span
                      key={it}
                      className="rounded-lg border border-border bg-background px-3 py-1.5 text-sm text-slate-600 transition-colors hover:border-brand/40 hover:text-primary"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-24">
          <SectionHeading
            eyebrow="Shipping"
            title="Idea → store → server"
            text="I handle the whole release, not just the code."
            icon={<Rocket className="size-3.5" />}
          />
          <div className="grid gap-4 md:grid-cols-3">
            {deployment.map((d, i) => (
              <motion.div
                key={d.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="relative overflow-hidden rounded-2xl border border-border bg-card p-6"
              >
                <span className="absolute -top-4 -right-2 text-8xl font-black text-secondary">{i + 1}</span>
                <div className="relative">
                  <h3 className="text-lg font-semibold text-foreground">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Contact --------------------------------- */

function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          {...fadeUp}
          className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-16 text-center sm:px-12 sm:py-20"
        >
          <div className="absolute -top-24 -left-24 size-72 rounded-full bg-brand/60 blur-3xl" />
          <div className="absolute -right-24 -bottom-24 size-72 rounded-full bg-brand-2/40 blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">Let's build something together.</h2>
            <p className="mx-auto mt-4 max-w-xl text-blue-100">
              Flutter app, voice AI agent or a casual game — from idea to store release and server hosting.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-primary transition-transform hover:scale-105"
              >
                <Mail className="size-4" /> {profile.email}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
              >
                <LinkedinIcon className="size-4" /> LinkedIn <ArrowUpRight className="size-4" />
              </a>
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
              >
                <MessageCircle className="size-4" /> WhatsApp
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Phone className="size-4" /> {profile.phone}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <Work />
        <Apps />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-border bg-card py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} {profile.name} · Built with React, Tailwind & 21st.dev components
      </footer>
    </div>
  );
}
