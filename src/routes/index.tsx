import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Eye,
  Glasses,
  GraduationCap,
  Heart,
  ShieldCheck,
  Sparkles,
  Users,
  Globe,
  Briefcase,
  BookOpen,
  Accessibility,
  Building2,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  Quote,
  Award,
  Lightbulb,
} from "lucide-react";
import logo from "@/assets/torchit-logo.png";
import heroDevices from "@/assets/hero-devices.png";
import distributionEvent from "@/assets/distribution-event.jpg";
import ongcEvent from "@/assets/ongc-event.jpg";
import jyotiRecipients from "@/assets/jyoti-recipients.jpg";
import irctcDistribution from "@/assets/irctc-distribution.jpg";
import studentKit from "@/assets/student-kit.jpg";
import careKits from "@/assets/care-kits.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Torchit Empowering Millions Through Assistive Innovation" },
      {
        name: "description",
        content:
          "Torchit builds affordable assistive technology Saarthi Smart Cane, Jyoti AI Smart Glasses, Saksharta Inclusive Education Kit and partners with corporations on CSR for disability inclusion.",
      },
      { property: "og:title", content: "Torchit Assistive Technology & CSR for Disability Inclusion" },
      {
        property: "og:description",
        content:
          "1.2M+ lives impacted across 18+ countries through assistive devices, inclusive education, and CSR partnerships.",
      },
    ],
  }),
  component: Index,
});

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

function Nav() {
  const links: Array<[string, string, boolean]> = [
    ["About", "#about", false],
    ["Products", "#products", false],
    ["CSR Projects", "/csr", true],
    ["Education", "#education", false],
    ["Impact", "#impact", false],
    ["Contact", "#contact", false],
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-4">
        <div className="glass rounded-full pl-4 pr-2 py-2 flex items-center justify-between shadow-card">
          <a href="/" className="flex items-center gap-2">
            <img src={logo} alt="Torchit logo" className="h-8 w-auto" />
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-foreground/80">
            {links.map(([l, h, isRoute]) =>
              isRoute ? (
                <Link key={l} to={h} className="hover:text-foreground transition-colors">
                  {l}
                </Link>
              ) : (
                <a key={l} href={h} className="hover:text-foreground transition-colors">
                  {l}
                </a>
              ),
            )}
          </nav>
          <Link
            to="/csr"
            className="bg-gradient-brand text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-card hover:shadow-glow transition-shadow"
          >
            Partner with us
          </Link>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative pt-0 pb-24 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div {...fadeUp}>
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs font-semibold text-foreground/70 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[var(--brand-pink)]" />
            Accessibility is opportunity
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
            Empowering Millions Through{" "}
            <span className="text-gradient-brand">Assistive Innovation</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Affordable assistive technologies for mobility, education, communication, and
            independent living built for the next billion.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#products"
              className="group bg-gradient-brand text-white px-7 py-4 rounded-full font-semibold shadow-card hover:shadow-glow hover:-translate-y-0.5 transition-all inline-flex items-center gap-2"
            >
              Explore Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#csr"
              className="px-7 py-4 rounded-full font-semibold border border-border bg-white hover:bg-secondary transition-colors inline-flex items-center gap-2"
            >
              CSR Partnerships
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              ["1.2M+", "Lives"],
              ["18+", "Countries"],
              ["50+", "Partners"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="text-2xl font-bold text-gradient-brand">{n}</div>
                <div className="text-xs text-muted-foreground mt-1">{l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative aspect-square">
            <div className="absolute inset-8 rounded-[3rem] bg-gradient-warm opacity-30 blur-2xl" />
            <div className="relative glass rounded-[2.5rem] p-6 shadow-glow animate-float">
              <img
                src={heroDevices}
                alt="Saarthi Smart Cane and Jyoti AI Smart Glasses"
                className="w-full h-full object-contain"
                width={1024}
                height={1024}
              />
            </div>
            <FloatingCard
              className="absolute -left-4 top-12"
              icon={<Eye className="w-4 h-4" />}
              title="Jyoti AI"
              sub="80+ languages"
              tone="pink"
            />
            <FloatingCard
              className="absolute -right-4 bottom-16"
              icon={<Accessibility className="w-4 h-4" />}
              title="Saarthi"
              sub="Obstacle detection"
              tone="blue"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FloatingCard({
  className,
  icon,
  title,
  sub,
  tone,
}: {
  className?: string;
  icon: React.ReactNode;
  title: string;
  sub: string;
  tone: "pink" | "blue";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className={`glass rounded-2xl p-3 pr-5 flex items-center gap-3 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 ${className ?? ""}`}
    >
      <div
        className={`w-9 h-9 rounded-xl flex items-center justify-center text-white ${
          tone === "pink" ? "bg-[var(--brand-pink)]" : "bg-[var(--brand-blue)]"
        }`}
      >
        {icon}
      </div>
      <div>
        <div className="text-sm font-semibold leading-tight">{title}</div>
        <div className="text-xs text-muted-foreground">{sub}</div>
      </div>
    </motion.div>
  );
}

function LogoWall() {
  const logos = [
    "ONGC",
    "HDFC Bank",
    "Bank of America",
    "UNESCO",
    "WHO",
    "Syngenta",
    "Wagh Bakri",
    "Meta",
    "USAID",
    "NAB",
    "BPA",
    "UNICEF",
  ];
  return (
    <section className="py-16 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
          Trusted by leaders in CSR & global development
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
          {logos.map((l) => (
            <div
              key={l}
              className="h-16 rounded-2xl border border-border bg-white flex items-center justify-center text-sm font-bold text-muted-foreground hover:text-foreground hover:border-[var(--brand-blue)] transition-colors"
            >
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div {...fadeUp} className="relative">
          <div className="absolute -inset-6 bg-gradient-warm opacity-20 blur-3xl rounded-[3rem]" />
          <div className="relative grid grid-cols-2 gap-4">
            <img src={distributionEvent} alt="Device distribution" className="rounded-3xl shadow-card aspect-[3/4] object-cover" loading="lazy" />
            <div className="space-y-4 mt-12">
              <img src={jyotiRecipients} alt="Jyoti recipients" className="rounded-3xl shadow-card aspect-square object-cover" loading="lazy" />
              <img src={ongcEvent} alt="ONGC CSR event" className="rounded-3xl shadow-card aspect-[4/3] object-cover" loading="lazy" />
            </div>
          </div>
        </motion.div>

        <motion.div {...fadeUp}>
          <span className="text-sm font-semibold text-[var(--brand-pink)] uppercase tracking-widest">About Torchit</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">
            CSR Programs for{" "}
            <span className="text-gradient-brand">Disability Inclusion</span> & Assistive Technology
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Torchit partners with corporations, government organizations, NGOs, educational
            institutions, and global agencies to build a more inclusive world through assistive
            technology, accessibility programs, and disability empowerment initiatives.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Our CSR programs improve mobility, education, communication, digital accessibility, and
            independent living for persons with disabilities through affordable, impactful solutions.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {[
              { icon: ShieldCheck, t: "Companies Act 2013", d: "CSR-aligned execution" },
              { icon: Globe, t: "ESG & SDG", d: "Sustainability impact" },
              { icon: Users, t: "DEI & Inclusion", d: "Disability-first design" },
              { icon: GraduationCap, t: "Inclusive Education", d: "Accessible classrooms" },
            ].map(({ icon: I, t, d }) => (
              <div key={t} className="flex gap-3 items-start p-4 rounded-2xl border border-border bg-white shadow-sm hover:shadow-card-hover hover:-translate-y-1 hover:border-[var(--brand-blue)]/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[var(--brand-orange)] text-white flex items-center justify-center shrink-0">
                  <I className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold">{t}</div>
                  <div className="text-sm text-muted-foreground">{d}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Impact() {
  const stats = [
    { n: "1.2M+", l: "Lives Impacted", c: "blue" },
    { n: "10K+", l: "Families Target by 2030", c: "pink" },
    { n: "50+", l: "CSR Partners", c: "orange" },
    { n: "18+", l: "Countries Reached", c: "yellow" },
  ];
  return (
    <section id="impact" className="py-28 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-[var(--brand-blue)] uppercase tracking-widest">
            Measurable Impact
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold">
            Creating real change across communities
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Accessibility is not charity accessibility is opportunity.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-[var(--brand-${s.c})] rounded-3xl opacity-0 group-hover:opacity-15 blur-xl transition-opacity`} />
              <div className="relative bg-white rounded-3xl p-8 border border-border shadow-card hover:-translate-y-2 hover:shadow-card-hover hover:border-[var(--brand-blue)]/30 transition-all duration-300">
                <div className={`text-5xl font-extrabold text-[var(--brand-${s.c})]`}>
                  {s.n}
                </div>
                <div className="mt-3 text-foreground font-medium">{s.l}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            ["100,000+", "Assistive technology beneficiaries"],
            ["200+", "Inclusive institutions supported"],
            ["5,000+", "Educators trained"],
          ].map(([n, l]) => (
            <div key={l} className="glass rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-gradient-brand">{n}</div>
              <div className="text-sm text-muted-foreground mt-2">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Products() {
  const products = [
    {
      icon: Accessibility,
      tone: "blue",
      name: "Saarthi Smart Cane",
      desc: "AI-powered mobility aid using ultrasonic obstacle detection and vibration feedback for safer, more confident navigation.",
      tags: ["Obstacle Detection", "Vibration Feedback", "Long Battery"],
      img: irctcDistribution,
    },
    {
      icon: Glasses,
      tone: "pink",
      name: "Jyoti AI Smart Glasses",
      desc: "Identify objects, read text in 80+ languages, recognize currency, detect colors, and understand surroundings with AI.",
      tags: ["80+ Languages", "Text-to-Speech", "Object Detection"],
      img: jyotiRecipients,
    },
    {
      icon: BookOpen,
      tone: "orange",
      name: "Saksharta Education Kit",
      desc: "An end-to-end ecosystem combining mobility tools, accessible learning devices, AI reading tools and tactile aids.",
      tags: ["Inclusive Classrooms", "Tactile Aids", "AI Reading"],
      img: studentKit,
    },
  ];
  const toneMap = {
    blue: "bg-[var(--brand-blue)]",
    pink: "bg-[var(--brand-pink)]",
    orange: "bg-[var(--brand-orange)]",
  } as const;

  return (
    <section id="products" className="py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div {...fadeUp} className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-sm font-semibold text-[var(--brand-orange)] uppercase tracking-widest">Products</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold max-w-2xl">
              Affordable assistive devices, designed for real life
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Each product is co-designed with users built to navigate, learn, communicate and live independently.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group rounded-3xl border border-border bg-white overflow-hidden shadow-card hover:-translate-y-2 hover:shadow-card-hover hover:border-[var(--brand-blue)]/30 transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                <div className={`absolute top-4 left-4 w-12 h-12 rounded-2xl ${toneMap[p.tone as keyof typeof toneMap]} text-white flex items-center justify-center shadow-card`}>
                  <p.icon className="w-5 h-5" />
                </div>
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-bold">{p.name}</h3>
                <p className="mt-3 text-muted-foreground">{p.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs font-medium px-3 py-1.5 rounded-full bg-secondary text-foreground/70">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CSR() {
  const items = [
    { icon: Heart, t: "Assistive device distribution" },
    { icon: GraduationCap, t: "Inclusive education programs" },
    { icon: Lightbulb, t: "Smart classroom development" },
    { icon: Sparkles, t: "Accessibility awareness campaigns" },
    { icon: Briefcase, t: "Skill development programs" },
    { icon: BookOpen, t: "Digital literacy programs" },
    { icon: Accessibility, t: "Mobility training camps" },
    { icon: Building2, t: "Inclusive technology centers" },
  ];
  return (
    <section id="csr" className="py-28 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative">
        <motion.div {...fadeUp} className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <span className="text-sm font-semibold text-[var(--brand-pink)] uppercase tracking-widest">CSR Partnerships</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">
              End-to-end CSR programs that{" "}
              <span className="text-gradient-brand">create measurable impact</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg">
            We work closely with partners to ensure transparent implementation, measurable
            outcomes, and long-term community impact aligned with the Companies Act 2013, ESG,
            DEI, and SDG frameworks.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map(({ icon: I, t }, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-6 rounded-3xl bg-white border border-border shadow-sm hover:border-[var(--brand-pink)]/40 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-[var(--brand-pink)] text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <I className="w-5 h-5" />
              </div>
              <div className="font-semibold">{t}</div>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp} className="mt-16 grid lg:grid-cols-2 gap-6">
          <div className="rounded-3xl overflow-hidden shadow-card">
            <img src={careKits} alt="Distribution kits ready to ship" className="w-full h-80 object-cover" loading="lazy" />
          </div>
          <div className="rounded-3xl bg-gradient-brand text-white p-10 flex flex-col justify-center shadow-glow">
            <Quote className="w-10 h-10 opacity-60" />
            <p className="mt-4 text-2xl font-semibold leading-snug">
              "Accessibility is not charity. Accessibility is opportunity."
            </p>
            <p className="mt-6 text-white/80">
              Sponsor smart canes, AI glasses, education kits, or build inclusive classrooms with
              our team.
            </p>
            <a href="#contact" className="mt-6 inline-flex items-center gap-2 bg-white text-foreground px-6 py-3 rounded-full font-semibold w-fit hover:bg-secondary transition-colors">
              Become a partner <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div {...fadeUp}>
          <span className="text-sm font-semibold text-[var(--brand-blue)] uppercase tracking-widest">Inclusive Education</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold">
            AI-enabled classrooms for every learner
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            We partner with schools, NGOs and institutions to build accessible learning
            environments from assistive learning tech to teacher training in inclusive methods.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              "Assistive learning technologies & accessible devices",
              "AI-powered reading and accessibility tools",
              "Tactile and digital learning aids",
              "Teacher training in inclusive classroom methods",
              "Accessibility awareness for educators",
            ].map((t) => (
              <li key={t} className="flex gap-3 items-start">
                <div className="mt-1 w-5 h-5 rounded-full bg-gradient-brand flex items-center justify-center shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>
                <span className="text-foreground/80">{t}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div {...fadeUp} className="relative">
          <img src={studentKit} alt="Student receiving education kit" className="rounded-[2rem] shadow-glow w-full aspect-[4/5] object-cover" loading="lazy" />
          <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-5 shadow-card max-w-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[var(--brand-yellow)] text-foreground flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold">5,000+ Educators</div>
                <div className="text-xs text-muted-foreground">Trained in inclusive methods</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Partners() {
  const groups = [
    {
      title: "Corporate & PSU",
      list: ["ONGC", "Oil India Limited", "HDFC Bank", "Bank of America", "Wagh Bakri", "Syngenta", "Meta", "MLM India"],
    },
    {
      title: "International",
      list: ["United Nations", "WHO", "UNESCO", "USAID", "RNIB", "IDA", "GDI Hub"],
    },
    {
      title: "Academic",
      list: ["IIT Madras", "IIT Bombay", "PDEU"],
    },
    {
      title: "NGO & Disability Sector",
      list: ["NAB", "Blind People's Association", "Enable India", "Sightsavers", "Bangladesh Protibandhi Foundation"],
    },
  ];
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold text-[var(--brand-orange)] uppercase tracking-widest">Collaborators</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold">Built with the world's leading institutions</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {groups.map((g) => (
            <div key={g.title} className="rounded-3xl border border-border p-7 bg-white shadow-sm hover:shadow-card-hover hover:-translate-y-1 hover:border-[var(--brand-blue)]/30 transition-all duration-300">
              <h3 className="font-bold text-lg text-gradient-brand">{g.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-foreground/80">
                {g.list.map((n) => (
                  <li key={n} className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-[var(--brand-pink)]" />
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "What are Torchit CSR programs?",
      a: "Torchit CSR programs focus on assistive technology distribution, inclusive education, accessibility awareness, mobility support, and skill development for persons with disabilities.",
    },
    {
      q: "Which assistive devices are included in Torchit CSR initiatives?",
      a: "Programs may include the Saarthi Smart Cane, Jyoti AI Smart Glasses, Saksharta Inclusive Education Kit, accessible learning tools, and mobility aids.",
    },
    {
      q: "Can companies sponsor assistive devices through Torchit?",
      a: "Yes. Organizations can sponsor smart canes, AI glasses, educational kits, inclusive classrooms, and accessibility programs through CSR partnerships.",
    },
    {
      q: "Does Torchit support inclusive education programs?",
      a: "Yes. Torchit works with schools and organizations to build accessible classrooms, train teachers, and provide assistive learning technologies.",
    },
    {
      q: "Which organizations collaborate with Torchit?",
      a: "Torchit collaborates with corporations, NGOs, educational institutions, PSUs, and international organizations including ONGC, HDFC Bank, UNESCO, WHO, NAB, and Bank of America.",
    },
    {
      q: "How does assistive technology improve disability inclusion?",
      a: "Assistive technology improves mobility, communication, education access, digital inclusion, safety, and independence for persons with disabilities.",
    },
    {
      q: "Does Torchit provide training programs for persons with disabilities?",
      a: "Yes. Torchit conducts digital literacy, mobility, entrepreneurship, and technology training programs for persons with disabilities.",
    },
    {
      q: "How can organizations partner with Torchit for CSR projects?",
      a: "Through device sponsorships, inclusive education initiatives, awareness campaigns, skill development programs, and accessibility infrastructure projects.",
    },
  ];
  return (
    <section className="py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-14">
          <span className="text-sm font-semibold text-[var(--brand-pink)] uppercase tracking-widest">FAQ</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold">Frequently asked questions</h2>
        </motion.div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="group rounded-2xl border border-border bg-white p-6 open:shadow-card transition-shadow"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none font-semibold text-lg">
                {f.q}
                <ChevronDown className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-4 text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-white border border-border p-10 sm:p-16 shadow-card">
          <div className="relative grid lg:grid-cols-2 gap-10 items-center text-foreground">
            <div>
              <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                Build a more inclusive future, together.
              </h2>
              <p className="mt-5 text-muted-foreground text-lg">
                Partner with Torchit to scale assistive technology and accessibility programs that
                create measurable, lasting change.
              </p>
            </div>
            <div className="space-y-4">
              <a href="mailto:hello@mytorchit.com" className="flex items-center gap-4 border border-border bg-secondary/50 rounded-2xl p-5 text-foreground hover:bg-secondary hover:-translate-y-1 transition-all duration-300">
                <Mail className="w-5 h-5 text-[var(--brand-pink)]" />
                <span>hello@mytorchit.com</span>
              </a>
              <a href="tel:+917383635420" className="flex items-center gap-4 border border-border bg-secondary/50 rounded-2xl p-5 text-foreground hover:bg-secondary hover:-translate-y-1 transition-all duration-300">
                <Phone className="w-5 h-5 text-[var(--brand-orange)]" />
                <span>+91 73836 35420</span>
              </a>
              <div className="flex items-center gap-4 border border-border bg-secondary/50 rounded-2xl p-5 text-foreground hover:bg-secondary hover:-translate-y-1 transition-all duration-300 cursor-default">
                <MapPin className="w-5 h-5 text-[var(--brand-blue)]" />
                <span>Ahmedabad, India · Global delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex flex-col sm:flex-row justify-between gap-6 items-center">
        <div className="flex items-center gap-3">
          <span className="font-display text-lg font-bold">Torchit</span>
        </div>
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Torchit. Make more possible.</p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <Hero />
        <LogoWall />
        <About />
        <Impact />
        <Products />
        <CSR />
        <Education />
        <Partners />
        <FAQ />
        <CTA />
      </main>
      
    </div>
  );
}
