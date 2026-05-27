import { createFileRoute } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  CheckCircle, 
  ArrowRight, 
  Brain, 
  Zap, 
  Globe, 
  MessageSquare, 
  Shield, 
  Smartphone, 
  Heart, 
  Users, 
  Briefcase, 
  GraduationCap,
  Play,
  Activity,
  Accessibility,
  Eye,
  Speech,
  Wifi,
  Bluetooth,
  Battery,
  Camera,
  Cpu,
  MonitorPlay
} from 'lucide-react';
import { useRef } from 'react';

import img1 from '@/assets/Shhruti/1.png';
import img2 from '@/assets/Shhruti/2.png';
import img3 from '@/assets/Shhruti/3.png';
import img4 from '@/assets/Shhruti/4.png';
import img5 from '@/assets/Shhruti/9bc27cdc-aa60-4c0e-803e-6bb04d30d0ae.png';
import img6 from '@/assets/Shhruti/bfa1e83c-95cd-465e-8c1f-adeeaccde57e.png';

export const Route = createFileRoute('/shruti-tablet')({
  component: ShrutiTabletPage,
})

const FadeIn = ({ children, delay = 0, className = "" }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

function ShrutiTabletPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <div ref={containerRef} className="min-h-screen bg-[#FAFBFD] font-sans text-[#071B4D] selection:bg-[#2A7FFF] selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-8 lg:pt-12 pb-16 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#2A7FFF]/10 to-[#FF4F95]/5 blur-[120px] -z-10" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#FF8748]/10 to-[#F8C12A]/10 blur-[100px] -z-10" />
        
        {/* Ghost Typography */}
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 0.04, x: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute top-4 lg:top-8 left-[-5%] text-[18vw] font-bold text-[#071B4D] select-none pointer-events-none whitespace-nowrap leading-none tracking-tighter"
          style={{ fontFamily: 'Satoshi, sans-serif' }}
        >
          COMMUNICATION
        </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="max-w-2xl">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-[#2A7FFF]/20 shadow-sm mb-8">
                  <span className="w-2 h-2 rounded-full bg-[#2A7FFF] animate-pulse" />
                  <span className="text-sm font-semibold tracking-wide text-[#2A7FFF] uppercase">AI-Powered Accessibility Technology</span>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.1}>
                <h1 className="text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1] text-[#071B4D]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  Every Word.<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2A7FFF] to-[#FF4F95]">Every Sign.</span><br />
                  Every Voice Matters.
                </h1>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <p className="text-xl text-[#071B4D]/70 mb-10 leading-relaxed font-medium">
                  Shruti Tablet is an AI-powered accessibility device designed to bridge communication barriers for deaf and hard-of-hearing communities through real-time Indian Sign Language translation, inclusive learning tools, and accessible communication support.
                </p>
              </FadeIn>
              
              <FadeIn delay={0.3} className="flex flex-col sm:flex-row gap-4 mb-16">
                <Button className="h-14 px-8 rounded-full bg-[#2A7FFF] hover:bg-[#071B4D] text-white text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                  Request Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="h-14 px-8 rounded-full border-2 border-[#071B4D]/10 hover:border-[#2A7FFF] hover:bg-white text-lg font-medium bg-transparent text-[#071B4D] transition-all duration-300">
                  Contact Us
                </Button>
              </FadeIn>

              {/* Floating Metrics */}
              <FadeIn delay={0.4} className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/40 backdrop-blur-md border border-white/50 shadow-sm">
                  <div className="text-3xl font-bold text-[#2A7FFF] mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>90%+</div>
                  <div className="text-sm font-medium text-[#071B4D]/70">Gesture Accuracy</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/40 backdrop-blur-md border border-white/50 shadow-sm">
                  <div className="text-3xl font-bold text-[#FF8748] mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>10.1"</div>
                  <div className="text-sm font-medium text-[#071B4D]/70">HD Display</div>
                </div>
              </FadeIn>
            </div>

            {/* Right Content - Product Showcase */}
            <div className="relative lg:h-[800px] flex items-center justify-center">
              <motion.div
                animate={{ y: [-15, 15, -15] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-full max-w-lg"
              >
                {/* Glow behind product */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#2A7FFF] to-[#FF4F95] opacity-20 blur-[80px] rounded-full scale-90" />
                
                {/* Main Product Render */}
                <img src={img4} alt="Shruti Tablet" className="relative z-10 w-full object-contain drop-shadow-2xl scale-110" />

                {/* Floating UI Elements */}
                <motion.div 
                  animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -right-8 top-1/4 glass p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 bg-white/80 backdrop-blur-xl border border-white"
                >
                  <div className="w-10 h-10 rounded-full bg-[#2A7FFF]/10 flex items-center justify-center text-[#2A7FFF]">
                    <Brain className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#071B4D]">AI Powered</div>
                    <div className="text-xs text-[#071B4D]/60">Neural Engine</div>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [10, -10, 10], x: [5, -5, 5] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -left-12 bottom-1/3 glass p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 bg-white/80 backdrop-blur-xl border border-white"
                >
                  <div className="w-10 h-10 rounded-full bg-[#FF4F95]/10 flex items-center justify-center text-[#FF4F95]">
                    <Activity className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#071B4D]">Real-Time ISL</div>
                    <div className="text-xs text-[#071B4D]/60">Instant Translation</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 2. PROBLEM SECTION (Dark) */}
      <section className="relative py-16 lg:py-20 bg-[#071B4D] text-white overflow-hidden">
        {/* Ghost Typography */}
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 0.04, x: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute top-1/2 -translate-y-1/2 right-[-5%] text-[15vw] font-bold text-white select-none pointer-events-none whitespace-nowrap leading-none tracking-tighter"
          style={{ fontFamily: 'Satoshi, sans-serif' }}
        >
          ACCESSIBILITY
        </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeIn>
                <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  Communication Should Never Be A Barrier.
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-xl text-white/70 mb-8 leading-relaxed font-light">
                  More than <span className="text-[#F8C12A] font-semibold">233 million</span> people worldwide with hearing disabilities experience communication challenges across education, healthcare, workplaces, and public services due to limited access to sign language-enabled technology.
                </p>
                <p className="text-xl text-white/70 leading-relaxed font-light">
                  Shruti Tablet is designed to reduce these barriers by enabling faster, inclusive, and more accessible communication experiences.
                </p>
              </FadeIn>
            </div>
            
            <div className="grid grid-cols-2 gap-6 relative">
               {/* Decorative connecting lines */}
               <svg className="absolute inset-0 w-full h-full text-white/10" pointerEvents="none">
                  <path d="M50 50 Q 150 150 250 50 T 450 150" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
               </svg>

              {[
                { metric: "233M+", label: "People Impacted", color: "#FF4F95", icon: Users },
                { metric: "<1s", label: "Real-Time Comm.", color: "#2A7FFF", icon: Zap },
                { metric: "AI", label: "Powered Access", color: "#F8C12A", icon: Brain },
                { metric: "100%", label: "Inclusive Tech", color: "#FF8748", icon: Heart },
              ].map((stat, i) => (
                <FadeIn key={i} delay={0.1 * i}>
                  <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors duration-300 group">
                    <stat.icon className="h-8 w-8 mb-6" style={{ color: stat.color }} />
                    <div className="text-4xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif", color: stat.color }}>
                      {stat.metric}
                    </div>
                    <div className="text-lg font-medium text-white/80">{stat.label}</div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section className="py-16 lg:py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 text-center max-w-5xl">
          <FadeIn>
            <div className="text-[#2A7FFF] font-semibold tracking-wide uppercase mb-4">WHAT IS SHRUTI TABLET</div>
            <h2 className="text-5xl font-bold text-[#071B4D] mb-8" style={{ fontFamily: 'Satoshi, sans-serif' }}>
              Built For Communication.<br/>Designed For Inclusion.
            </h2>
            <p className="text-xl text-[#071B4D]/70 mb-20 leading-relaxed font-medium">
              Shruti Tablet is an AI-powered accessible communication tablet that converts Indian Sign Language gestures into speech or text while translating spoken language into animated sign language in real time. Built for schools, hospitals, help desks, workplaces, and public environments, it empowers independence.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h3 className="text-4xl font-bold text-[#071B4D] mb-16" style={{ fontFamily: 'Satoshi, sans-serif' }}>
              Accessibility Made Intelligent.
            </h3>
          </FadeIn>
          
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#2A7FFF]/20 to-transparent -translate-y-1/2" />
            
            <div className="grid lg:grid-cols-4 gap-8 relative z-10">
              {[
                { step: "01", title: "Capture", desc: "AI-powered camera captures ISL gestures.", icon: Camera },
                { step: "02", title: "Process", desc: "AI recognition engine interprets instantly.", icon: Cpu },
                { step: "03", title: "Translate", desc: "Converts gestures into speech or text.", icon: Speech },
                { step: "04", title: "Connect", desc: "Creates smoother experiences for everyone.", icon: Users },
              ].map((item, i) => (
                <FadeIn key={i} delay={0.2 + (i * 0.1)} className="group relative">
                  <div className="h-full p-8 rounded-3xl bg-[#FAFBFD] border border-[#071B4D]/5 shadow-lg shadow-[#071B4D]/5 hover:shadow-2xl hover:shadow-[#2A7FFF]/20 transition-all duration-500 bg-white group-hover:-translate-y-2">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2A7FFF]/10 to-[#2A7FFF]/5 flex items-center justify-center text-[#2A7FFF] mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                      <item.icon className="h-8 w-8" />
                    </div>
                    <div className="text-xs font-bold text-[#2A7FFF] mb-3 tracking-widest uppercase">Step {item.step}</div>
                    <h4 className="text-2xl font-bold text-[#071B4D] mb-3">{item.title}</h4>
                    <p className="text-[#071B4D]/70 font-medium">{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURES (Bento Grid) */}
      <section className="py-16 lg:py-20 bg-[#FAFBFD] relative overflow-hidden">
        {/* Ghost Text */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.03 }}
          className="absolute top-0 left-0 w-full text-center text-[25vw] font-bold text-[#071B4D] select-none pointer-events-none whitespace-nowrap leading-none tracking-tighter"
          style={{ fontFamily: 'Satoshi, sans-serif' }}
        >
          INCLUSION
        </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-5xl lg:text-6xl font-bold text-[#071B4D] mb-6" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                Powering Communication Through AI.
              </h2>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FadeIn delay={0.1} className="lg:col-span-2">
              <div className="h-full p-10 rounded-3xl bg-white border border-[#071B4D]/5 shadow-xl shadow-[#071B4D]/5 group hover:shadow-2xl hover:border-[#2A7FFF]/30 transition-all duration-500 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#2A7FFF]/10 to-transparent rounded-full blur-[50px] group-hover:opacity-100 opacity-0 transition-opacity duration-500" />
                <Brain className="h-12 w-12 text-[#2A7FFF] mb-6" />
                <h3 className="text-3xl font-bold text-[#071B4D] mb-4">AI-Based ISL Assistance</h3>
                <p className="text-[#071B4D]/70 text-lg max-w-md relative z-10">Real-time Indian Sign Language translation powered by advanced neural networks and computer vision.</p>
                <div className="mt-8 flex gap-4">
                  <div className="px-4 py-2 rounded-full bg-[#071B4D]/5 text-sm font-semibold">Real-time</div>
                  <div className="px-4 py-2 rounded-full bg-[#071B4D]/5 text-sm font-semibold">90% Accuracy</div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="h-full p-10 rounded-3xl bg-gradient-to-br from-[#071B4D] to-[#0A266E] text-white border border-[#071B4D]/5 shadow-xl shadow-[#071B4D]/5 group hover:-translate-y-2 transition-all duration-500">
                <Speech className="h-12 w-12 text-[#FF4F95] mb-6" />
                <h3 className="text-2xl font-bold mb-4">Voice To Animated ISL</h3>
                <p className="text-white/70 text-lg">Converts speech into accessible sign language animation instantly.</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="h-full p-10 rounded-3xl bg-white border border-[#071B4D]/5 shadow-xl shadow-[#071B4D]/5 group hover:-translate-y-2 hover:border-[#FF8748]/30 transition-all duration-500">
                <Eye className="h-12 w-12 text-[#FF8748] mb-6" />
                <h3 className="text-2xl font-bold text-[#071B4D] mb-4">Gesture Recognition</h3>
                <p className="text-[#071B4D]/70 text-lg">Advanced AI recognizes complex ISL gestures with high precision.</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="h-full p-10 rounded-3xl bg-white border border-[#071B4D]/5 shadow-xl shadow-[#071B4D]/5 group hover:-translate-y-2 hover:border-[#F8C12A]/30 transition-all duration-500">
                <Globe className="h-12 w-12 text-[#F8C12A] mb-6" />
                <h3 className="text-2xl font-bold text-[#071B4D] mb-4">Multilingual Support</h3>
                <p className="text-[#071B4D]/70 text-lg">English, Hindi, and regional language accessibility out of the box.</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="h-full p-10 rounded-3xl bg-white border border-[#071B4D]/5 shadow-xl shadow-[#071B4D]/5 group hover:-translate-y-2 hover:border-[#2A7FFF]/30 transition-all duration-500">
                <GraduationCap className="h-12 w-12 text-[#2A7FFF] mb-6" />
                <h3 className="text-2xl font-bold text-[#071B4D] mb-4">Inclusive Learning</h3>
                <p className="text-[#071B4D]/70 text-lg">Educational resources supporting communication and learning growth.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 5. SPECIFICATIONS (Apple Style) */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-5xl lg:text-6xl font-bold text-[#071B4D] mb-6 tracking-tight" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                Performance Designed For Everyday Accessibility.
              </h2>
            </FadeIn>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-x-8 gap-y-12">
                {[
                  { label: "Display", value: '10.1" HD', sub: "Touchscreen", icon: MonitorPlay },
                  { label: "Processor", value: "Octa Core", sub: "High Performance", icon: Cpu },
                  { label: "Storage", value: "64GB+", sub: "Expandable", icon: Brain },
                  { label: "RAM", value: "4GB+", sub: "Smooth Multitasking", icon: Activity },
                  { label: "Camera", value: "13MP", sub: "Autofocus AI Lens", icon: Camera },
                  { label: "Battery", value: "8–10h", sub: "All-Day Use", icon: Battery },
                ].map((spec, i) => (
                  <div key={i} className="border-t border-[#071B4D]/10 pt-6">
                    <spec.icon className="h-6 w-6 text-[#2A7FFF] mb-4" />
                    <div className="text-3xl font-bold text-[#071B4D] mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{spec.value}</div>
                    <div className="text-[#071B4D]/90 font-semibold text-lg">{spec.label}</div>
                    <div className="text-[#071B4D]/50 text-sm">{spec.sub}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2} className="order-1 lg:order-2">
              <div className="relative rounded-[3rem] bg-gradient-to-br from-[#FAFBFD] to-white p-12 border border-[#071B4D]/5 shadow-2xl flex justify-center items-center h-full min-h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#2A7FFF]/5 to-[#FF4F95]/5 rounded-[3rem]" />
                <motion.img 
                  src={img1} 
                  alt="Shruti Tablet Specifications" 
                  className="relative z-10 w-full max-w-md drop-shadow-2xl"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 6. USE CASES */}
      <section className="py-16 lg:py-20 bg-[#FAFBFD] relative overflow-hidden">
        {/* Ghost Typography */}
        <div 
          className="absolute top-1/2 -translate-y-1/2 left-0 w-full text-center text-[20vw] font-bold text-[#071B4D] select-none pointer-events-none whitespace-nowrap leading-none tracking-tighter opacity-[0.03]"
          style={{ fontFamily: 'Satoshi, sans-serif' }}
        >
          INCLUSION
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <FadeIn>
            <h2 className="text-5xl lg:text-6xl font-bold text-[#071B4D] mb-16 text-center" style={{ fontFamily: 'Satoshi, sans-serif' }}>
              Built For Everyday Inclusion.
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="w-full h-[350px] rounded-[2.5rem] overflow-hidden mb-16 shadow-xl relative border border-[#071B4D]/10">
              <div className="absolute inset-0 bg-gradient-to-t from-[#071B4D]/60 via-transparent to-transparent z-10 pointer-events-none" />
              <img src={img5} alt="Using Shruti Tablet" className="w-full h-full object-cover object-center" />
              <div className="absolute bottom-10 left-10 z-20 text-white">
                 <h3 className="text-3xl font-bold mb-2 tracking-tight">Designed for Real Life.</h3>
                 <p className="text-white/90 text-lg font-medium">Empowering everyday conversations effortlessly.</p>
              </div>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Schools", desc: "Supporting inclusive education environments.", icon: GraduationCap, color: "#2A7FFF" },
              { title: "Healthcare", desc: "Improving communication in hospitals and clinics.", icon: Heart, color: "#FF4F95" },
              { title: "Public Services", desc: "Reducing barriers at help desks and government services.", icon: Shield, color: "#FF8748" },
              { title: "Workplaces", desc: "Supporting accessibility and professional inclusion.", icon: Briefcase, color: "#071B4D" },
              { title: "Learning Centers", desc: "Building independent communication skills.", icon: Brain, color: "#F8C12A" },
            ].map((useCase, i) => (
              <FadeIn key={i} delay={0.1 * i} className={i === 3 ? "lg:col-start-1" : i === 4 ? "lg:col-start-2" : ""}>
                <div className="p-8 rounded-3xl bg-white border border-[#071B4D]/5 shadow-lg shadow-[#071B4D]/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-center">
                  <useCase.icon className="h-10 w-10 mb-6" style={{ color: useCase.color }} />
                  <h3 className="text-2xl font-bold text-[#071B4D] mb-3">{useCase.title}</h3>
                  <p className="text-[#071B4D]/70 text-lg font-medium">{useCase.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BENEFITS */}
      <section className="py-16 lg:py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#2A7FFF]/5 to-transparent rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <FadeIn>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#2A7FFF]/10 to-[#FF4F95]/10 blur-2xl rounded-[3rem] -z-10" />
                <img src={img6} alt="Shruti Tablet Benefits" className="w-full rounded-[2rem] mix-blend-multiply" />
              </div>
            </FadeIn>
            
            <div>
              <FadeIn delay={0.1}>
                <h2 className="text-5xl font-bold text-[#071B4D] mb-12" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  Technology That Creates Independence.
                </h2>
              </FadeIn>
              
              <div className="space-y-8">
                {[
                  { title: "Better Communication", desc: "Supports two-way communication experiences effortlessly." },
                  { title: "Greater Independence", desc: "Reduces interpreter dependency in daily life." },
                  { title: "Inclusive Learning", desc: "Encourages accessible educational participation." },
                  { title: "Social Integration", desc: "Builds confidence and genuine connection." },
                  { title: "Accessibility Everywhere", desc: "Portable accessibility support across environments." }
                ].map((benefit, i) => (
                  <FadeIn key={i} delay={0.2 + (i * 0.1)} className="flex gap-4 items-start">
                    <div className="mt-1 w-8 h-8 rounded-full bg-[#2A7FFF]/10 flex items-center justify-center shrink-0">
                      <CheckCircle className="h-5 w-5 text-[#2A7FFF]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#071B4D] mb-1">{benefit.title}</h4>
                      <p className="text-[#071B4D]/70 font-medium">{benefit.desc}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. IMPACT */}
      <section className="py-16 lg:py-20 bg-[#071B4D] text-white relative overflow-hidden">
        {/* Abstract Ecosystem Visual */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2A7FFF]/20 rounded-full blur-[150px]" />

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.05 }}
          transition={{ duration: 1 }}
          className="absolute bottom-[-10%] right-[-5%] text-[20vw] font-bold text-white select-none pointer-events-none whitespace-nowrap leading-none tracking-tighter"
          style={{ fontFamily: 'Satoshi, sans-serif' }}
        >
          IMPACT
        </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          <FadeIn>
            <h2 className="text-5xl lg:text-7xl font-bold text-center mb-8" style={{ fontFamily: 'Satoshi, sans-serif' }}>
              Building A More <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2A7FFF] to-[#FF4F95]">Inclusive Future.</span>
            </h2>
            <p className="text-xl text-center text-white/70 max-w-3xl mx-auto mb-20 leading-relaxed font-light">
              Shruti Tablet enables greater independence, inclusion, and accessibility by helping bridge communication gaps between ISL users and non-signers.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Real-Time Communication",
              "Inclusive Education",
              "Accessible Public Spaces",
              "Independent Interaction"
            ].map((metric, i) => (
              <FadeIn key={i} delay={0.2 + (i * 0.1)}>
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md text-center hover:bg-white/10 transition-colors h-full flex items-center justify-center">
                  <h4 className="text-xl font-bold text-white/90">{metric}</h4>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="relative py-16 lg:py-20 overflow-hidden bg-gradient-to-b from-[#071B4D] to-[#2A7FFF]">
        {/* Ghost Typography */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 flex items-center justify-center text-[18vw] font-bold text-white select-none pointer-events-none whitespace-nowrap tracking-tighter"
          style={{ fontFamily: 'Satoshi, sans-serif' }}
        >
          EVERY VOICE
        </motion.div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <FadeIn>
            <h2 className="text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight" style={{ fontFamily: 'Satoshi, sans-serif' }}>
              Communication Without Barriers.
            </h2>
            <p className="text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
              Shruti Tablet represents more than technology. It represents dignity, independence, accessibility, and opportunity for every individual.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.2} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button className="h-16 px-10 rounded-full bg-white text-[#071B4D] hover:bg-[#F8C12A] text-xl font-bold shadow-2xl hover:shadow-[0_0_40px_rgba(248,193,42,0.4)] transition-all duration-300">
              Request Demo
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            <Button variant="outline" className="h-16 px-10 rounded-full border-2 border-white/20 hover:border-white hover:bg-white/10 text-xl font-bold text-white bg-transparent transition-all duration-300">
              Contact Us
            </Button>
          </FadeIn>
        </div>
      </section>

    </div>
  )
}
