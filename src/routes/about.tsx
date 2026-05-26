import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Eye,
  Heart,
  Users,
  Globe,
  Quote,
  MapPin,
  CheckCircle2,
  Trophy,
  Link as LinkIcon
} from "lucide-react";
import teamImage from "@/assets/ongc-event.jpg";
import mapPlaceholder from "@/assets/irctc-distribution.jpg";
import internationalImg from "@/assets/leadership page/international.jpeg";

import digantImg from "@/assets/leadership page/Digant.png";
import dineshImg from "@/assets/leadership page/Dinesh.png";
import drBhushanImg from "@/assets/leadership page/Dr Bhushan.png";
import drHomiImg from "@/assets/leadership page/Dr. Homiyar Mobedji.png";
import drRitaImg from "@/assets/leadership page/Dr Rita Poptani.png";
import hunnyImg from "@/assets/leadership page/Hunny.png";
import hunny1Img from "@/assets/leadership page/Hunny 1.jpg";
import mrAshishImg from "@/assets/leadership page/Mr Ashish.png";
import mrsGitaImg from "@/assets/leadership page/Mrs Gita.png";
import nirmalImg from "@/assets/leadership page/Nirmal.png";
import premImg from "@/assets/leadership page/Prem.png";
import mrKelanImg from "@/assets/leadership page/mr Kelan Dosh.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Building an Inclusive World, Together | Torchit Leadership" },
      {
        name: "description",
        content: "Meet the young, mission-driven team working alongside seasoned leaders, researchers, and disability champions to make accessibility mainstream.",
      },
    ],
  }),
  component: AboutPage,
});

function GhostText({ 
  text, 
  positionClass, 
  vertical = false, 
  theme = "blue", 
  size = "text-[20vw]", 
  delay = 0,
  customOpacity
}: { 
  text: string, 
  positionClass: string, 
  vertical?: boolean, 
  theme?: "blue" | "white" | "gold" | "pink" | "yellow" | "orange" | "premium-blue", 
  size?: string, 
  delay?: number,
  customOpacity?: number
}) {
  let fillColor = "rgba(42, 127, 255, 0.06)";
  let strokeColor = "rgba(42, 127, 255, 0.10)";

  if (theme === "white") {
    fillColor = "rgba(255, 255, 255, 0.03)";
    strokeColor = "rgba(255, 255, 255, 0.08)";
  } else if (theme === "gold") {
    fillColor = "rgba(248, 193, 42, 0.04)";
    strokeColor = "rgba(248, 193, 42, 0.10)";
  } else if (theme === "pink") {
    fillColor = "rgba(255, 79, 149, 0.04)";
    strokeColor = "rgba(255, 79, 149, 0.10)";
  } else if (theme === "yellow") {
    fillColor = "rgba(248, 193, 42, 0.05)";
    strokeColor = "rgba(248, 193, 42, 0.10)";
  } else if (theme === "orange") {
    fillColor = "rgba(255, 135, 72, 0.04)";
    strokeColor = "rgba(255, 135, 72, 0.10)";
  } else if (theme === "premium-blue") {
    fillColor = "rgba(90, 130, 220, 0.05)";
    strokeColor = "rgba(90, 130, 220, 0.10)";
  }
  return (
    <div 
      className={`absolute ${positionClass} z-0 select-none pointer-events-none ${vertical ? 'origin-center -rotate-90 flex items-center justify-center' : ''}`}
      style={customOpacity ? { opacity: customOpacity } : {}}
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay, ease: "easeOut" }}
        className={`${size} font-black font-satoshi leading-none uppercase tracking-tighter whitespace-nowrap`}
        style={{ 
          color: fillColor,
          WebkitTextStroke: `1px ${strokeColor}` 
        }}
      >
        {text}
      </motion.div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[80vh] pt-10 pb-32 flex flex-col justify-center bg-[#FAFBFD] overflow-hidden">
      {/* Hero Ghost Typography */}
      <GhostText text="INCLUSION" positionClass="top-0 left-0 w-full flex justify-center pt-8" size="text-[18vw] lg:text-[20vw]" delay={0.1} />

      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-[#2A7FFF]/5 to-transparent pointer-events-none z-0" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 h-full flex flex-col justify-center z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 z-10"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-gray-200 shadow-sm text-sm font-semibold text-[#0A1733] mb-8">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2A7FFF] animate-pulse" />
              Building an Inclusive World, Together
            </div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-[1.02] tracking-tight font-satoshi text-[#0A1733] mb-8">
              Making Accessibility<br />
              <span className="text-[#2A7FFF]">Feel Invisible.</span>
            </h1>
            
            <p className="text-lg sm:text-2xl text-[#0A1733]/70 max-w-2xl leading-relaxed mb-8 font-manrope font-medium">
              A young, mission-driven team working alongside seasoned leaders, researchers, and disability champions to make accessibility mainstream—not exceptional.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-5">
              <button className="px-10 py-4 sm:py-5 rounded-full bg-[#0A1733] text-white font-bold text-lg hover:bg-[#2A7FFF] hover:-translate-y-1 transition-all duration-300 shadow-xl flex items-center justify-center gap-3 w-full sm:w-auto">
                Meet Our Leadership <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-10 py-4 sm:py-5 rounded-full bg-white text-[#0A1733] font-bold text-lg border border-gray-200 hover:border-[#2A7FFF] hover:text-[#2A7FFF] transition-all duration-300 shadow-sm w-full sm:w-auto justify-center flex">
                Join Our Mission
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative z-10 hidden lg:block"
          >
            <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl group border-[6px] border-white">
              <img 
                src={hunny1Img} 
                alt="Torchit Leadership" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1733]/80 via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-10 left-10 right-10">
                <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/20 shadow-2xl">
                  <div className="text-white font-bold text-2xl font-satoshi mb-1">Inclusion by Design</div>
                  <div className="text-white/80 font-medium font-manrope">Focusing on abilities, dignity, and possibility.</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ImpactStrip() {
  const stats = [
    { value: "2M+", label: "Lives Impacted" },
    { value: "40+", label: "Countries" },
    { value: "8+ Yrs", label: "Innovation" },
    { value: "Affordable", label: "Technology" },
  ];

  return (
    <div className="relative z-20 -mt-16 max-w-6xl mx-auto px-4 sm:px-6">

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="bg-white rounded-[2rem] shadow-[0_20px_80px_rgba(10,23,51,0.08)] border border-gray-100 p-10 sm:p-12 relative z-10"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 lg:gap-6">
          {stats.map((stat, i) => (
            <div key={i} className={`text-center px-1 sm:px-4 ${i > 1 ? 'pt-2 md:pt-0' : ''}`}>
              <div className="text-2xl sm:text-3xl lg:text-5xl font-black text-[#2A7FFF] font-space-grotesk mb-1 sm:mb-2 tracking-tighter sm:tracking-tight">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-sm font-bold text-[#0A1733]/60 font-manrope uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function FounderMessage() {
  return (
    <section className="py-40 bg-white overflow-hidden relative">
      <GhostText text="DIGNITY" positionClass="top-0 left-0 w-full flex justify-center pt-8" size="text-[22vw] lg:text-[25vw]" delay={0.1} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl border-[8px] border-[#FAFBFD]">
              <img 
                src={hunnyImg} 
                alt="Hunny Bhagchandani - Founder" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1733]/90 via-[#0A1733]/20 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
                <div className="text-white font-black text-4xl font-satoshi mb-2">Hunny Bhagchandani</div>
                <div className="text-[#FF4F95] font-bold text-lg font-manrope uppercase tracking-wider">Founder, Torchit</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 bg-white/60 backdrop-blur-3xl rounded-[3rem] p-8 sm:p-12 border border-gray-100 shadow-[0_20px_80px_rgba(10,23,51,0.05)]"
          >
            <Quote className="w-16 h-16 sm:w-20 sm:h-20 text-[#2A7FFF]/20 mb-6 sm:mb-8" />
            
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A1733] mb-8 sm:mb-10 leading-tight font-satoshi">
              <span className="text-[#2A7FFF]">Accessibility is not charity.</span><br/>
              It is dignity.
            </h3>
            
            <div className="space-y-6 text-[#0A1733]/80 font-manrope text-lg sm:text-xl leading-relaxed font-medium">
              <p>
                "I have always believed that accessibility is not charity. It is dignity.
                Inclusion is not about helping a few people—it is about designing a better world for everyone.
              </p>
              <p>
                Every person has some form of limitation at some stage in life—temporary, permanent, visible, or invisible.
              </p>
              <p className="font-bold text-[#0A1733] text-2xl border-l-4 border-[#F8C12A] pl-6 py-4 my-8 bg-gray-50 rounded-r-2xl">
                The question is not whether someone has a disability.<br/>
                The question is whether society chooses to see ability.
              </p>
              <p>
                At Torchit, we choose possibility over limitation.
                We choose dignity over dependence.
                We choose inclusion by design.
              </p>
              <p className="font-bold text-[#FF4F95]">
                Our team—young innovators and experienced leaders—is united by one belief: Everyone deserves the freedom to thrive."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function BeliefSection() {
  const beliefs = [
    { title: "Everyone is Able", desc: "Ability looks different for everyone.", icon: Users, color: "#2A7FFF", bg: "bg-blue-50" },
    { title: "Accessibility Benefits All", desc: "Designing for inclusion improves life for everyone—not just persons with disabilities.", icon: Globe, color: "#F8C12A", bg: "bg-yellow-50" },
    { title: "Technology with Dignity", desc: "Innovation should restore independence, not create dependence.", icon: CheckCircle2, color: "#FF4F95", bg: "bg-pink-50" },
    { title: "Inclusion is Perspective", desc: "Is the glass half full or half empty? We choose to see possibility.", icon: Eye, color: "#FF8748", bg: "bg-orange-50" },
    { title: "Impact Over Optics", desc: "We build solutions that create measurable, real-world change.", icon: Trophy, color: "#2A7FFF", bg: "bg-blue-50" },
  ];

  return (
    <section className="py-40 bg-[#FAFBFD] relative overflow-hidden">
      <GhostText text="PERSPECTIVE" positionClass="top-0 left-0 w-full flex justify-center pt-8" size="text-[16vw] lg:text-[18vw]" delay={0.1} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <h2 className="text-5xl sm:text-6xl font-black text-[#0A1733] font-satoshi mb-6">What We Believe</h2>
          <div className="w-24 h-2 bg-[#2A7FFF] mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {beliefs.map((belief, i) => (
            <motion.div
              key={belief.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-white hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 group w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm"
            >
              <div 
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 ${belief.bg}`}
              >
                <belief.icon className="w-8 h-8" style={{ color: belief.color }} />
              </div>
              <h3 className="text-2xl font-black text-[#0A1733] mb-4 font-satoshi leading-tight">{belief.title}</h3>
              <p className="text-[#0A1733]/70 font-manrope text-lg leading-relaxed font-medium">{belief.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeadershipTeam() {
  const leaders = [
    { name: "Hunny Bhagchandani", title: "Founder & Director", bio: "MIT Media Lab Fellow, Royal Academy of Engineering Fellow, National Awardee, Forbes recognition, Shark Tank India entrepreneur.", img: hunnyImg },
    { name: "Prem Katar", title: "Head – EnableMart", bio: "10+ years in accessibility ecosystem development, outreach, and inclusive distribution. Driving last-mile accessibility.", img: premImg },
    { name: "Dinesh Bahal", title: "Head – Partnerships", bio: "25+ years of leadership experience across strategic partnerships, business development, and ecosystem building.", img: dineshImg },
    { name: "Dr Rita Poptani", title: "Leadership / Strategy", bio: "Focused on organizational growth, execution excellence, and people-first systems.", img: drRitaImg },
    { name: "Dr. Homi R. Mobedji", title: "Research & Accessibility Advisor", bio: "Global accessibility expert with deep experience in print disability inclusion, accessible education, and assistive ecosystems.", img: drHomiImg },
    { name: "Nirmal Pillai", title: "Business Development", bio: "14+ years of experience in public sector partnerships and institutional engagement. Helping scale impact through government collaboration.", img: nirmalImg },
    { name: "Digant Darji", title: "Head – Operations", bio: "12+ years in operations, execution, and delivery systems. Ensuring innovation reaches communities reliably and efficiently.", img: digantImg },
  ];

  return (
    <section className="py-40 bg-white overflow-hidden relative">
      <GhostText text="BUILDERS" positionClass="top-0 left-0 w-full flex justify-center pt-8" theme="pink" size="text-[20vw] lg:text-[22vw]" delay={0.1} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-24"
        >
          <h2 className="text-5xl sm:text-6xl font-black text-[#0A1733] font-satoshi mb-6">Meet The People Building Inclusion</h2>
          <p className="text-xl text-[#0A1733]/60 font-manrope font-medium">A diverse team united by a single purpose.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {leaders.map((leader, i) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group bg-white/90 backdrop-blur-md rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden transition-all duration-500 flex flex-col hover:-translate-y-2"
            >
              <div className="w-full aspect-[4/5] bg-gray-50 overflow-hidden relative">
                <img 
                  src={leader.img} 
                  alt={leader.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 object-top" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1733]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <a href="#" className="absolute bottom-5 right-5 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#0077b5] transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                  <LinkIcon className="w-4 h-4" />
                </a>
              </div>
              
              <div className="p-6 flex flex-col flex-grow bg-white relative z-10">
                <h3 className="text-2xl font-black text-[#0A1733] font-satoshi mb-1">{leader.name}</h3>
                <div className="text-[#2A7FFF] font-bold text-xs font-manrope mb-4 uppercase tracking-widest">{leader.title}</div>
                <p className="text-[#0A1733]/60 font-manrope text-sm leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                  {leader.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AdvisoryBoard() {
  const advisors = [
    { name: "Ashish kumar Chauhan", title: "MD & CEO, NSE", bio: "One of the founding architects of modern India’s financial market infrastructure.", img: mrAshishImg },
    { name: "Dr. Bhushan Punani", title: "Disability Inclusion Pioneer", bio: "Decades of leadership empowering persons with visual disabilities.", img: drBhushanImg },
    { name: "Geeta Dang", title: "Investor | Ecosystem Builder", bio: "An experienced investor and ecosystem leader supporting innovation-led impact ventures.", img: mrsGitaImg },
    { name: "Kelan Doshi", title: "Advisor & Mentor", bio: "Guiding Torchit's strategic growth and inclusive innovation initiatives.", img: mrKelanImg },
  ];

  return (
    <section className="py-40 bg-[#05122F] relative overflow-hidden">
      <GhostText text="EXPERIENCE" positionClass="top-0 left-0 w-full flex justify-center pt-8" theme="premium-blue" size="text-[18vw] lg:text-[20vw]" delay={0.1} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-lg font-bold text-[#D9B66B] uppercase tracking-[0.3em] mb-4 block">Mentorship</span>
          <h2 className="text-5xl sm:text-6xl font-black text-white font-satoshi">Advisors & Mentors</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {advisors.map((advisor, i) => (
            <motion.div
              key={advisor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center group bg-[#0A1733]/50 backdrop-blur-md p-8 rounded-[2rem] border border-white/5 hover:border-[#D9B66B]/50 transition-colors"
            >
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-[#05122F] group-hover:border-[#D9B66B] transition-colors duration-500 relative bg-gray-100">
                <img 
                  src={advisor.img} 
                  alt={advisor.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 object-top" 
                />
              </div>
              <h3 className="text-2xl font-black text-white font-satoshi mb-3">{advisor.name}</h3>
              <div className="text-[#D9B66B] text-sm font-bold uppercase tracking-widest mb-4">{advisor.title}</div>
              <p className="text-white/60 text-base font-manrope leading-relaxed">{advisor.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCulture() {
  return (
    <section className="py-40 bg-white overflow-hidden relative">
      <GhostText text="TOGETHER" positionClass="top-0 left-0 w-full flex justify-center pt-8" theme="yellow" size="text-[20vw] lg:text-[22vw]" delay={0.1} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-5xl mx-auto mb-20 bg-white/60 backdrop-blur-2xl p-12 rounded-[3rem] shadow-[0_20px_80px_rgba(10,23,51,0.05)] border border-gray-100"
        >
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#0A1733] font-satoshi leading-tight mb-8 sm:mb-10">
            Young Hearts.<br/>
            Deep Experience.<br/>
            <span className="text-[#2A7FFF]">Shared Mission.</span>
          </h2>
          
          <div className="text-lg sm:text-2xl text-[#0A1733]/70 font-manrope leading-relaxed font-medium">
            Torchit brings together engineers, educators, accessibility experts, operators, researchers, and changemakers. 
            Some of us are young builders. Some are seasoned professionals. Some are disability advocates. Some are technology dreamers. 
            But all of us are united by one purpose: <strong className="text-[#0A1733] font-bold">to make independence, dignity, and opportunity accessible to all.</strong>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function ImpactVideo() {
  return (
    <section className="py-32 bg-[#FAFBFD] relative overflow-hidden">
      <GhostText text="CHANGE" positionClass="top-0 left-0 w-full flex justify-center pt-8" size="text-[22vw] lg:text-[25vw]" delay={0.2} />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative w-full aspect-video rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_40px_100px_rgba(10,23,51,0.15)] bg-black border border-white"
        >
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/-nd2_vGGu8s?si=je9c8vn9AsGjWRLr" 
            title="Torchit Impact Video" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}

function GlobalImpactMap() {
  const pins = [
    { name: "India", x: "70%", y: "45%" },
    { name: "Middle East", x: "60%", y: "40%" },
    { name: "Europe", x: "50%", y: "30%" },
    { name: "US", x: "20%", y: "35%" },
    { name: "South East Asia", x: "80%", y: "55%" },
  ];

  return (
    <section className="py-40 bg-[#05122F] relative overflow-hidden">
      <GhostText text="GLOBAL" positionClass="top-0 left-0 w-full flex justify-center pt-8" theme="orange" size="text-[25vw] lg:text-[28vw]" delay={0.1} customOpacity={0.12} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white bg-[#0A1733]/50 backdrop-blur-xl p-8 lg:p-12 rounded-[2rem] lg:rounded-[3rem] border border-white/5"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-satoshi mb-6 lg:mb-8">A Global Movement for Inclusion</h2>
            <p className="text-white/70 text-lg lg:text-xl font-manrope font-medium mb-12 lg:mb-16 leading-relaxed">
              From local communities to international stages, our solutions are breaking barriers worldwide.
            </p>
            
            <div className="grid grid-cols-2 gap-8 lg:gap-12">
              {[
                { n: "40+", l: "Countries" },
                { n: "2M+", l: "Lives" },
                { n: "1000s", l: "Devices" },
                { n: "100+", l: "Communities" }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-5xl font-black text-[#F8C12A] font-space-grotesk mb-2">{stat.n}</div>
                  <div className="text-white/60 font-manrope font-bold uppercase tracking-widest text-sm">{stat.l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-square rounded-[2rem] lg:rounded-[3rem] bg-[#0A1733] border border-white/5 overflow-hidden flex items-center justify-center shadow-2xl"
          >
            <img src={internationalImg} alt="Global Impact Event" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-48 relative overflow-hidden bg-[#2A7FFF]">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 z-0 mix-blend-overlay pointer-events-none" />
      
      <GhostText text="FUTURE" positionClass="top-0 left-0 w-full flex justify-center pt-8" theme="white" size="text-[22vw] lg:text-[25vw]" delay={0.1} />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white font-satoshi leading-tight mb-8 lg:mb-10">
            Join Us In Building<br/>
            A More Inclusive Future
          </h2>
          
          <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 font-manrope font-medium mb-12 lg:mb-16 leading-relaxed">
            Accessibility is not optional.<br/>
            Inclusion is not a feature.<br/>
            <span className="text-[#0A1733] font-black">It is the future.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6">
            <button className="px-8 lg:px-12 py-5 lg:py-6 rounded-full bg-[#0A1733] text-white font-black text-lg lg:text-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 w-full sm:w-auto">
              Partner With Us
            </button>
            <a href="mailto:hello@mytorchit.com" className="px-8 lg:px-12 py-5 lg:py-6 rounded-full bg-white text-[#2A7FFF] font-black text-lg lg:text-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 w-full sm:w-auto flex justify-center items-center">
              Join Our Mission
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function GlobalEdges() {
  return (
    <>
      <div className="fixed top-1/2 left-0 -translate-y-1/2 -rotate-90 origin-left z-0 select-none pointer-events-none opacity-20 hidden 2xl:block mix-blend-multiply">
        <div className="text-xl font-bold tracking-[1em] text-[#0A1733] whitespace-nowrap ml-20">MAKE MORE POSSIBLE</div>
      </div>
      <div className="fixed top-1/2 right-0 -translate-y-1/2 rotate-90 origin-right z-0 select-none pointer-events-none opacity-20 hidden 2xl:block mix-blend-multiply">
        <div className="text-xl font-bold tracking-[1em] text-[#0A1733] whitespace-nowrap mr-20">TORCHIT</div>
      </div>
    </>
  );
}

function AboutPage() {
  return (
    <main className="font-inter bg-white selection:bg-[#2A7FFF]/20 relative overflow-hidden">
      <GlobalEdges />
      <HeroSection />
      <ImpactStrip />
      <FounderMessage />
      <BeliefSection />
      <LeadershipTeam />
      <AdvisoryBoard />
      <TeamCulture />
      <ImpactVideo />
      <GlobalImpactMap />
      <FinalCTA />
    </main>
  );
}
