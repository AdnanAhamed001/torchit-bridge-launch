import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Heart,
  GraduationCap,
  Lightbulb,
  Sparkles,
  Briefcase,
  BookOpen,
  Accessibility,
  Building2,
  Eye,
  Glasses,
  Users,
  Globe,
  ShieldCheck,
  Award,
  HandHeart,
  Megaphone,
  Cpu,
  School,
  ChevronDown,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Quote,
} from "lucide-react";
import logo from "@/assets/torchit-logo.png";
import distributionEvent from "@/assets/distribution-event.jpg";
import ongcEvent from "@/assets/ongc-event.jpg";
import jyotiRecipients from "@/assets/jyoti-recipients.jpg";
import irctcDistribution from "@/assets/irctc-distribution.jpg";
import studentKit from "@/assets/student-kit.jpg";
import careKits from "@/assets/care-kits.jpg";

export const Route = createFileRoute("/csr")({
  head: () => ({
    meta: [
      { title: "CSR Projects Torchit | Disability Inclusion & Assistive Tech Partnerships" },
      {
        name: "description",
        content:
          "Torchit CSR projects deliver assistive technology, inclusive education, accessibility awareness and skill development. Partner with us to scale measurable disability inclusion impact.",
      },
      { property: "og:title", content: "Torchit CSR Projects Disability Inclusion at Scale" },
      {
        property: "og:description",
        content:
          "1.2M+ lives impacted across 18+ countries through assistive devices, inclusive classrooms and accessibility programs.",
      },
    ],
  }),
  component: CSRPage,
});

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

function Nav() {
  const links = [
    ["Home", "/"],
    ["CSR", "/csr"],
  ] as const;
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-4">
        <div className="glass rounded-full pl-4 pr-2 py-2 flex items-center justify-between shadow-card">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Torchit logo" className="h-8 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-foreground/80">
            {links.map(([l, h]) => (
              <Link key={l} to={h} className="hover:text-foreground transition-colors" activeProps={{ className: "text-foreground font-semibold" }}>
                {l}
              </Link>
            ))}

            <a href="#impact" className="hover:text-foreground transition-colors">Impact</a>
            <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
          </nav>
          <a
            href="#partner"
            className="bg-gradient-brand text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-card hover:shadow-glow transition-shadow"
          >
            Partner with us
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative pt-0 pb-20 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div {...fadeUp} className="max-w-4xl">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs font-semibold text-foreground/70 mb-6">
            <HandHeart className="w-3.5 h-3.5 text-[var(--brand-pink)]" />
            CSR Projects · Disability Inclusion · Accessibility
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
            CSR Projects that{" "}
            <span className="text-gradient-brand">unlock accessibility</span> for millions
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Torchit partners with corporations, governments, NGOs and global agencies to bridge the
            accessibility gap combining affordable assistive technology, inclusive education,
            training and community programs into measurable, long-term impact.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#partner"
              className="group bg-gradient-brand text-white px-7 py-4 rounded-full font-semibold shadow-card hover:shadow-glow hover:-translate-y-0.5 transition-all inline-flex items-center gap-2"
            >
              Start a CSR Partnership
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#programs"
              className="px-7 py-4 rounded-full font-semibold border border-border bg-white hover:bg-secondary transition-colors inline-flex items-center gap-2"
            >
              Explore Programs
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {[
            ["1.2M+", "Lives impacted"],
            ["18+", "Countries reached"],
            ["50+", "CSR partners"],
            ["5,000+", "Educators trained"],
          ].map(([n, l]) => (
            <div key={l} className="glass rounded-3xl p-6 text-center shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
              <div className="text-4xl font-extrabold text-gradient-brand">{n}</div>
              <div className="mt-2 text-sm text-muted-foreground">{l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div {...fadeUp} className="relative">
          <div className="absolute -inset-6 bg-gradient-warm opacity-20 blur-3xl rounded-[3rem]" />
          <div className="relative grid grid-cols-2 gap-4">
            <img src={distributionEvent} alt="CSR distribution event" className="rounded-3xl shadow-card aspect-[3/4] object-cover" loading="lazy" />
            <div className="space-y-4 mt-12">
              <img src={jyotiRecipients} alt="Jyoti AI recipients" className="rounded-3xl shadow-card aspect-square object-cover" loading="lazy" />
              <img src={ongcEvent} alt="ONGC CSR program" className="rounded-3xl shadow-card aspect-[4/3] object-cover" loading="lazy" />
            </div>
          </div>
        </motion.div>

        <motion.div {...fadeUp}>
          <span className="text-sm font-semibold text-[var(--brand-pink)] uppercase tracking-widest">What we do</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">
            What are{" "}
            <span className="text-gradient-brand">Torchit CSR Projects?</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Torchit CSR projects bridge the accessibility gap for persons with disabilities by
            combining assistive technology, inclusive education, awareness campaigns, training and
            community support into scalable impact programs focused on long-term empowerment, not
            one-time distribution.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            {[
              "Visually impaired individuals",
              "Students with disabilities",
              "Inclusive schools & institutions",
              "Rehabilitation centers",
              "NGOs & accessibility organizations",
              "Underserved & rural communities",
            ].map((t) => (
              <div key={t} className="flex items-start gap-2 text-foreground/80">
                <CheckCircle2 className="w-5 h-5 text-[var(--brand-blue)] shrink-0 mt-0.5" />
                <span className="text-sm">{t}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ImpactPillars() {
  const items = [
    { icon: Accessibility, t: "Independent mobility", d: "Confident, safer movement in public spaces.", c: "blue" },
    { icon: BookOpen, t: "Access to education", d: "Inclusive classrooms and accessible learning.", c: "pink" },
    { icon: Cpu, t: "Digital accessibility", d: "Smartphones, screen readers, AI tools.", c: "orange" },
    { icon: Megaphone, t: "Communication support", d: "AI-powered reading & assistive devices.", c: "yellow" },
    { icon: Briefcase, t: "Employment readiness", d: "Skill, mentorship and career programs.", c: "orange" },
    { icon: School, t: "Inclusive learning", d: "Teacher training and awareness drives.", c: "blue" },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold text-[var(--brand-blue)] uppercase tracking-widest">How we create impact</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold">
            Six pillars of meaningful change
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            We combine affordable assistive tech with implementation support, training and
            accessibility-first partnerships.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map(({ icon: I, t, d, c }, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-3xl p-7 bg-white border border-border shadow-sm hover:border-[var(--brand-blue)]/40 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-2xl bg-[var(--brand-${c})] text-white flex items-center justify-center mb-5`}>
                <I className="w-5 h-5" />
              </div>
              <div className="font-bold text-lg">{t}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Programs() {
  const programs = [
    {
      icon: Accessibility,
      tone: "blue",
      tag: "Mobility",
      name: "Saarthi Smart Cane Distribution",
      desc: "Ultrasonic obstacle detection and vibration feedback for safer navigation. Distributed through blind schools, rural accessibility initiatives, rehab centers and community camps.",
      benefits: ["Safer navigation", "Reduced collisions", "Mobility confidence", "Independent movement"],
      img: irctcDistribution,
    },
    {
      icon: Glasses,
      tone: "pink",
      tag: "AI Vision",
      name: "Jyoti AI Smart Glasses Programs",
      desc: "AI-powered glasses for object recognition, text reading, currency identification, color detection and multilingual scene understanding improving education, work and daily living.",
      benefits: ["Object recognition", "Text-to-speech", "Currency detection", "Multilingual support"],
      img: jyotiRecipients,
    },
    {
      icon: BookOpen,
      tone: "orange",
      tag: "Education",
      name: "Saksharta Inclusive Education Kit",
      desc: "End-to-end accessibility kit combining smart mobility tools, AI reading devices, accessible smartphones and tactile learning aids built for inclusive classrooms.",
      benefits: ["Smart mobility tools", "AI reading devices", "Tactile aids", "Accessible smartphones"],
      img: studentKit,
    },
  ];
  const toneMap = {
    blue: "bg-[var(--brand-blue)]",
    pink: "bg-[var(--brand-pink)]",
    orange: "bg-[var(--brand-orange)]",
  } as const;

  return (
    <section id="programs" className="py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div {...fadeUp} className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-sm font-semibold text-[var(--brand-orange)] uppercase tracking-widest">Distribution Projects</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold max-w-2xl">
              Assistive technology, delivered at scale
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            CSR-sponsored programs distribute Torchit devices to those who need them most paired
            with training, awareness and on-ground support.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {programs.map((p, i) => (
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
                <span className="absolute top-4 right-4 text-[10px] uppercase tracking-widest font-bold bg-white/90 backdrop-blur px-3 py-1.5 rounded-full">
                  {p.tag}
                </span>
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-bold">{p.name}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{p.desc}</p>
                <ul className="mt-5 grid grid-cols-2 gap-2">
                  {p.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-foreground/75">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand-pink)]" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold text-[var(--brand-blue)] uppercase tracking-widest">Inclusive Education CSR</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold">AI-enabled inclusive classrooms</h2>
          <p className="mt-4 text-muted-foreground text-lg">
            We partner with schools and institutions to make education accessible from smart
            classroom infrastructure to teacher training in inclusive methods.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div {...fadeUp} className="rounded-3xl bg-white border border-border p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1 hover:border-[var(--brand-blue)]/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-gradient-brand text-white flex items-center justify-center mb-5">
              <Lightbulb className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-bold">AI-Enabled Inclusive Classrooms</h3>
            <p className="mt-3 text-muted-foreground">Built for participation and accessibility.</p>
            <ul className="mt-6 space-y-3">
              {[
                "Assistive technology integrated into classrooms",
                "AI-powered educational devices",
                "Reading and communication aids",
                "Inclusive digital learning resources",
              ].map((t) => (
                <li key={t} className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-[var(--brand-blue)] mt-0.5 shrink-0" />
                  <span className="text-foreground/80">{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...fadeUp} className="rounded-3xl bg-white border border-border p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1 hover:border-[var(--brand-blue)]/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-gradient-warm text-white flex items-center justify-center mb-5">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-bold">Teacher Training & Awareness</h3>
            <p className="mt-3 text-muted-foreground">Educators are the multiplier of impact.</p>
            <ul className="mt-6 space-y-3">
              {[
                "Inclusive teaching methods",
                "Assistive technology usage",
                "Disability sensitization",
                "Digital accessibility practices",
              ].map((t) => (
                <li key={t} className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-[var(--brand-pink)] mt-0.5 shrink-0" />
                  <span className="text-foreground/80">{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const cards = [
    {
      icon: Cpu,
      title: "Digital Literacy Programs",
      points: ["Accessible technology usage", "Smartphone accessibility", "Screen reader navigation", "Online learning tools"],
      c: "blue"
    },
    {
      icon: Briefcase,
      title: "Employment & Entrepreneurship",
      points: ["Python programming training", "UI/UX accessibility programs", "Career-readiness workshops", "Entrepreneurship mentoring"],
      c: "yellow"
    },
    {
      icon: Megaphone,
      title: "Awareness & Sensitization",
      points: ["Community workshops", "School awareness sessions", "Accessibility demonstrations", "Inclusive tech awareness"],
      c: "pink"
    },
  ];
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold text-[var(--brand-orange)] uppercase tracking-widest">Skill Development & Awareness</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold">Beyond devices building livelihoods</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map(({ icon: I, title, points, c }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-3xl p-8 bg-white border border-border shadow-sm hover:shadow-card-hover hover:-translate-y-1 hover:border-[var(--brand-blue)]/30 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-2xl bg-[var(--brand-${c})] text-white flex items-center justify-center mb-5`}>
                <I className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-xl">{title}</h3>
              <ul className="mt-5 space-y-2">
                {points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-foreground/75">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand-orange)]" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnerLogos() {
  const modules = import.meta.glob('@/assets/partners/*.png', { eager: true });
  const logos = Object.values(modules).map((mod: any) => mod.default as string);

  return (
    <section className="py-20 border-y border-border bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="text-center text-xs uppercase tracking-[0.25em] text-muted-foreground mb-10">
          Trusted CSR & Partnership Collaborators
        </p>
        <div className="flex flex-wrap justify-center gap-5">
          {logos.map((src, i) => (
            <div
              key={i}
              className="h-32 w-[calc(50%-0.625rem)] sm:w-[calc(25%-0.9375rem)] md:w-[calc(20%-1rem)] lg:w-[calc(14.285%-1.07rem)] shrink-0 rounded-2xl border border-border bg-white flex items-center justify-center p-3 overflow-hidden hover:shadow-card-hover hover:-translate-y-1 hover:border-[var(--brand-blue)]/30 transition-all duration-300"
            >
              <img
                src={src}
                alt={`Partner ${i}`}
                className="max-h-full max-w-full object-contain scale-110 transition-transform duration-300 hover:scale-125"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



function Models() {
  const models = [
    {
      icon: Heart,
      title: "Device Sponsorship",
      desc: "Sponsor assistive devices reaching beneficiaries directly.",
      items: ["Saarthi Smart Cane", "Jyoti AI Smart Glasses", "Saksharta Education Kits", "Accessible learning devices"],
      c: "pink"
    },
    {
      icon: School,
      title: "Inclusive Education Programs",
      desc: "Build accessible classrooms and educator capacity.",
      items: ["Smart inclusive classrooms", "Teacher training initiatives", "Accessible education infrastructure", "Digital learning accessibility"],
      c: "blue"
    },
    {
      icon: Building2,
      title: "Resource Centers & Infrastructure",
      desc: "Long-term hubs for accessibility and rehabilitation.",
      items: ["Inclusive technology libraries", "Accessibility resource centers", "Community support hubs", "Training & rehabilitation spaces"],
      c: "yellow"
    },
  ];
  return (
    <section id="partner" className="py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold text-[var(--brand-blue)] uppercase tracking-widest">CSR Partnership Models</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold">Choose how you want to create impact</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {models.map(({ icon: I, title, desc, items, c }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative rounded-3xl p-8 bg-white border border-border shadow-card hover:-translate-y-2 hover:shadow-card-hover hover:border-[var(--brand-blue)]/30 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl bg-[var(--brand-${c})] text-white flex items-center justify-center mb-5`}>
                <I className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">{title}</h3>
              <p className="mt-2 text-muted-foreground">{desc}</p>
              <ul className="mt-5 space-y-2">
                {items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-sm text-foreground/80">
                    <CheckCircle2 className={`w-4 h-4 text-[var(--brand-${c})] mt-0.5 shrink-0`} />
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Impact() {
  const stats = [
    { n: "1.2M+", l: "Lives impacted", c: "blue" },
    { n: "100K+", l: "Beneficiaries reached", c: "pink" },
    { n: "50+", l: "CSR & institutional partners", c: "orange" },
    { n: "18+", l: "Countries impacted", c: "yellow" },
  ];
  const why = [
    "Affordable assistive technology solutions",
    "Transparent implementation model",
    "Accessibility-focused innovation",
    "Strong disability inclusion expertise",
    "Large-scale outreach capabilities",
    "User-centered product development",
    "Real, measurable impact",
  ];
  return (
    <section id="impact" className="py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-[var(--brand-pink)] uppercase tracking-widest">CSR Impact Metrics</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold">Measurable, scalable, sustainable</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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

        <motion.div {...fadeUp} className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-3xl overflow-hidden shadow-card">
            <img src={careKits} alt="Distribution kits" className="w-full h-full object-cover min-h-[320px]" loading="lazy" />
          </div>
          <div className="rounded-3xl bg-white border border-border p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1 hover:border-[var(--brand-blue)]/30 transition-all duration-300">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--brand-blue)]">Why partner with Torchit</span>
            <h3 className="mt-2 text-3xl font-bold">Innovation, inclusion, impact</h3>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {why.map((w) => (
                <li key={w} className="flex items-start gap-2 text-sm text-foreground/80">
                  <CheckCircle2 className="w-4 h-4 text-[var(--brand-pink)] mt-0.5 shrink-0" />
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Quotation() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div {...fadeUp} className="rounded-[2.5rem] bg-gradient-brand text-white p-12 sm:p-16 shadow-glow relative overflow-hidden">
          <Quote className="w-12 h-12 opacity-60 relative" />
          <p className="mt-6 text-3xl sm:text-4xl font-bold leading-snug relative max-w-3xl">
            "Accessibility should be affordable, scalable, and available to everyone that's how
            we build an inclusive future."
          </p>
          <p className="mt-6 text-white/80 relative">  Torchit CSR Team</p>
        </motion.div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "What are Torchit CSR projects?", a: "Torchit CSR projects focus on disability inclusion, assistive technology distribution, inclusive education, accessibility awareness, and skill development programs." },
    { q: "Which assistive devices are included in Torchit CSR programs?", a: "Programs may include Saarthi Smart Cane, Jyoti AI Smart Glasses, Saksharta Inclusive Education Kit, and accessible learning tools." },
    { q: "Can organizations sponsor assistive devices through Torchit?", a: "Yes. Organizations can sponsor assistive devices, inclusive classrooms, accessibility programs, and education initiatives through CSR collaborations." },
    { q: "Does Torchit support inclusive education initiatives?", a: "Yes. Torchit works with schools and institutions to build accessible classrooms and provide assistive learning technologies." },
    { q: "Which companies and organizations collaborate with Torchit?", a: "Torchit collaborates with organizations including ONGC, HDFC Bank, UNESCO, WHO, Bank of America, NAB, and other accessibility-focused partners." },
    { q: "How does assistive technology improve accessibility?", a: "Assistive technology improves mobility, communication, learning, digital access, safety, and independent living for persons with disabilities." },
    { q: "Does Torchit provide training programs for persons with disabilities?", a: "Yes. Torchit conducts mobility training, digital literacy programs, technology workshops, and employment-focused skill development initiatives." },
    { q: "How can organizations partner with Torchit for CSR projects?", a: "Through device sponsorships, inclusive education initiatives, accessibility infrastructure projects, awareness campaigns, and skill development programs." },
  ];
  return (
    <section id="faq" className="py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-14">
          <span className="text-sm font-semibold text-[var(--brand-pink)] uppercase tracking-widest">FAQ</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold">Frequently asked questions</h2>
        </motion.div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details key={i} className="group rounded-2xl border border-border bg-white p-6 open:shadow-card transition-shadow">
              <summary className="flex items-center justify-between cursor-pointer list-none font-semibold text-lg">
                <span>{f.q}</span>
                <ChevronDown className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform shrink-0 ml-4" />
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
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-white border border-border p-10 sm:p-16 shadow-card">
          <div className="relative grid lg:grid-cols-2 gap-10 items-center text-foreground">
            <div>
              <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                Build an inclusive future, together.
              </h2>
              <p className="mt-5 text-muted-foreground text-lg">
                Partner with Torchit to scale assistive technology and accessibility programs that
                create measurable, lasting change.
              </p>
            </div>
            <div className="space-y-4">
              <a href="mailto:hello@mytorchit.com" className="flex items-center gap-4 border border-border bg-secondary/50 rounded-2xl p-5 text-foreground hover:bg-secondary hover:-translate-y-1 transition-all duration-300">
                <Mail className="w-5 h-5 text-[var(--brand-purple)]" />
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

function CSRPage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <Hero />
        <Intro />
        <ImpactPillars />
        <Programs />
        <Education />
        <Skills />
        <PartnerLogos />
        <Models />
        <Impact />
        <Quotation />
        <FAQ />
        <CTA />
      </main>
      
    </div>
  );
}
