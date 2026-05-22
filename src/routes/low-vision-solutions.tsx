import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Plus,
  Minus
} from "lucide-react";

import logo from "@/assets/torchit-logo.png";

// --- Image Imports ---
import imgMainHero from "@/assets/low-vision/hero-section-image.png";
import imgVideoMag2 from "@/assets/low-vision/video-magnifier-2.webp";
import imgHandHeld7 from "@/assets/low-vision/hand-held7.webp";
import imgLamp21 from "@/assets/low-vision/lamp2-1.webp";
import imgVideoMag11 from "@/assets/low-vision/video-magnifier-1-1.webp";

import imgHersoo from "@/assets/low-vision/hersoo-sectio-image.jpg";
import imgDistanceVision from "@/assets/low-vision/distance-vision-challenge-1779464999360.png";
import imgMedicineId from "@/assets/low-vision/medicine-identification-1779465016373.png";
import imgGrocery from "@/assets/low-vision/grocery.png";
import imgBus from "@/assets/low-vision/bus.png";
import imgMoving from "@/assets/low-vision/moving.png";
import imgMedicineLabel from "@/assets/low-vision/medicine-label.png";
import imgDigitalProblem from "@/assets/low-vision/digital-problrm.png";
import imgStudy from "@/assets/low-vision/study.png";
import imgHeroSectionImage from "@/assets/low-vision/hero-section-image.png";
import imgTech1 from "@/assets/low-vision/tech1.png";
import imgVideoReader from "@/assets/low-vision/video-reader.png";
import imgWorkspaceJyoti from "@/assets/low-vision/workspace-jyoti.png";
import imgFaqFinal from "@/assets/low-vision/faq-final.png";
import imgFaqMain from "@/assets/low-vision/faq-main-illustration-1779465048173.png";
import imgFaqMag from "@/assets/low-vision/faq-float-mag-1779465063892.png";
import imgFaqHandheld from "@/assets/low-vision/faq-float-handheld-1779465077336.png";
import imgCtaLamp from "@/assets/low-vision/cta-float-lamp-1779465092296.png";
import imgCtaMonocular from "@/assets/low-vision/cta-float-monocular-1779465117604.png";
import imgCtaKeyboard from "@/assets/low-vision/cta-float-keyboard-1779465132101.png";

import imgMonocular1 from "@/assets/low-vision/monocular1.webp";
import imgDownload from "@/assets/low-vision/download.webp";
import imgMiscEnablemart13 from "@/assets/low-vision/misc-enablemart-1-3.webp";

import imgVideoMagnifierNew from "@/assets/low-vision/video-magnifier.webp";

import img281 from "@/assets/low-vision/2-8-1.webp";
import imgJyotiProNew from "@/assets/low-vision/jyoti-ai-pro.webp";
import imgJyotiAiReaderNew from "@/assets/low-vision/jyoti-ai-reader.webp";
import imgMiscEnablemart1 from "@/assets/low-vision/misc-enablemart-1.webp";
import imgEducationAccess from "@/assets/low-vision/education-accessibility.png";
import imgNavigation from "@/assets/low-vision/independent-navigation.png";
import imgNavigationNew from "@/assets/low-vision/independent-navigation-new.png";
import imgJyotiSmartGlasses from "@/assets/low-vision/jyoti-ai-smart-eye-glasses.webp";
import imgStudentSupport from "@/assets/low-vision/student-support.png";
import imgStudentSupportNew from "@/assets/low-vision/student-support-new.png";
import imgWorkplaceAccess from "@/assets/low-vision/workplace-accessibility-new.png";
import imgAssistiveTechLifestyle from "@/assets/low-vision/assistive-tech-lifestyle.png";

export const Route = createFileRoute("/low-vision-solutions")({
  head: () => ({
    meta: [
      { title: "Torchit - Low Vision Solutions" },
      { name: "description", content: "Premium accessibility technology for Low Vision Solutions." },
    ],
  }),
  component: LowVisionPage,
});

function LowVisionPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    { q: "What is low vision?", a: "Low vision is reduced eyesight that cannot be fully corrected using standard glasses, contact lenses, medication, or surgery." },
    { q: "What assistive technology helps people with low vision?", a: "Low vision assistive technology includes digital video magnifiers, handheld magnifiers, reading lamps, contrast keyboards, distance viewing devices, and AI-powered accessibility solutions." },
    { q: "How can low vision products improve independence?", a: "Accessibility tools reduce dependency by improving reading, digital access, navigation, learning, and everyday activities." },
    { q: "Who can use low vision accessibility products?", a: "Low vision solutions support students, professionals, older adults, and individuals experiencing reduced vision." },
    { q: "Can low vision technology help with reading?", a: "Yes. Magnifiers, digital reading devices, reading lamps, and AI accessibility solutions improve visibility and make printed information easier to access." }
  ];

  return (
    <div id="PAGE_ROOT" className="flex flex-col w-full bg-[#FFFFFF] font-['Inter',sans-serif] text-[#111827]">
      
      {/* Header removed as requested */}

      {/* 2) HERO SECTION */}
      <section id="HERO_WRAP" className="relative flex flex-col items-center w-full bg-[#FFFFFF] pt-[10px] pb-[60px] md:pt-[20px] md:pb-[80px] lg:pt-[20px] lg:pb-[120px] overflow-hidden">
        {/* Background Blur */}
        <div className="absolute top-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-[#2388FF] opacity-[0.08] blur-[100px] rounded-full z-[1] pointer-events-none" />

        <div id="HERO_INNER" className="relative z-[2] flex flex-col lg:flex-row justify-between items-center w-full max-w-[1400px] px-[20px] md:px-[40px] lg:px-[80px] gap-[40px] lg:gap-[60px]">
          
          {/* LEFT COLUMN */}
          <div id="HERO_CONTENT" className="flex flex-col w-full lg:w-[48%] gap-[24px] lg:gap-[28px] text-center lg:text-left items-center lg:items-start">
            <div className="flex items-center justify-center h-[42px] px-[18px] bg-white/70 backdrop-blur-md rounded-[999px] text-[#2388FF] font-semibold text-[14px] w-fit border border-[#EDF2F7] shadow-sm">
              LOW VISION SOLUTIONS
            </div>
            
            <h1 className="text-[42px] md:text-[56px] lg:text-[72px] font-[800] leading-[1.1] md:leading-[1.08] w-full lg:max-w-[620px] text-[#111827]">
              Independent Living Starts With Better Accessibility
            </h1>
            
            <p className="text-[16px] md:text-[18px] lg:text-[22px] leading-[1.6] md:leading-[1.7] text-[#64748B] max-w-[600px] lg:max-w-[560px]">
              Low vision should never limit independence. Torchit low vision solutions combine assistive technology, magnification tools, digital accessibility products, and AI-powered support systems designed to improve reading, learning, daily living, and accessibility.
            </p>
            
            {/* Buttons Row */}
            <div className="flex flex-col sm:flex-row gap-[16px] sm:gap-[18px] w-full sm:w-auto">
               <a href="#explore" className="inline-flex items-center justify-center h-[52px] px-[32px] bg-[#2388FF] text-white rounded-[999px] font-medium shadow-[0_12px_45px_rgba(15,23,42,0.08)] hover:-translate-y-1 transition-transform w-full sm:w-auto">
                 Explore Solutions
               </a>
               <a href="#expert" className="inline-flex items-center justify-center h-[52px] px-[32px] border-2 border-[#EDF2F7] text-[#111827] bg-white rounded-[999px] font-medium hover:border-[#2388FF] hover:text-[#2388FF] transition-colors w-full sm:w-auto">
                 Talk To Expert
               </a>
            </div>

            {/* Trust Pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-[12px] md:gap-[16px] mt-[12px]">
               {["Reading Support", "Digital Accessibility", "Independent Living"].map(t => (
                 <div key={t} className="px-[16px] py-[8px] bg-white/60 backdrop-blur-sm border border-[#EDF2F7] rounded-[999px] text-[12px] md:text-[14px] font-medium shadow-sm">
                   {t}
                 </div>
               ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div id="HERO_VISUAL" className="w-full lg:w-[52%] flex justify-center items-center mt-[20px] lg:mt-0">
             <div className="relative w-full max-w-[540px] flex justify-center items-center">
                 <img 
                   src={imgHeroSectionImage} 
                   alt="Hero" 
                   className="w-full rounded-[24px] md:rounded-[36px] shadow-[0_12px_45px_rgba(15,23,42,0.08)] relative z-[3] object-cover" 
                 />
                 
                 {/* Floating Cards - Hidden on Mobile */}
                 <div className="hidden md:block absolute top-[-30px] left-[-60px] w-[130px] -rotate-[5deg] z-[4] bg-white/90 backdrop-blur-md p-[10px] rounded-[24px] shadow-[0_12px_45px_rgba(15,23,42,0.08)] border border-white hover:scale-105 transition-transform duration-300">
                   <div className="bg-[#F7FAFC] rounded-[16px] aspect-[4/3] overflow-hidden flex items-center justify-center p-[8px]">
                      <img src={imgJyotiProNew} className="w-full h-full object-contain mix-blend-multiply" alt="Jyoti AI Pro" />
                   </div>
                 </div>

                 <div className="hidden md:block absolute bottom-[-20px] left-[-50px] w-[120px] rotate-[3deg] z-[4] bg-white/90 backdrop-blur-md p-[10px] rounded-[24px] shadow-[0_12px_45px_rgba(15,23,42,0.08)] border border-white hover:scale-105 transition-transform duration-300">
                   <div className="bg-[#F7FAFC] rounded-[16px] aspect-square overflow-hidden flex items-center justify-center p-[8px]">
                      <img src={imgJyotiAiReaderNew} className="w-full h-full object-contain mix-blend-multiply" alt="Jyoti AI Reader" />
                   </div>
                 </div>

                 <div className="hidden md:block absolute top-[-30px] right-[-60px] w-[130px] rotate-[4deg] z-[4] bg-white/90 backdrop-blur-md p-[10px] rounded-[24px] shadow-[0_12px_45px_rgba(15,23,42,0.08)] border border-white hover:scale-105 transition-transform duration-300">
                   <div className="bg-[#F7FAFC] rounded-[16px] aspect-[4/3] overflow-hidden flex items-center justify-center p-[8px]">
                      <img src={imgMiscEnablemart13} className="w-full h-full object-contain mix-blend-multiply" alt="Magnifier" />
                   </div>
                 </div>

                 <div className="hidden md:block absolute bottom-[-20px] right-[-60px] w-[130px] -rotate-[2deg] z-[4] bg-white/90 backdrop-blur-md p-[10px] rounded-[24px] shadow-[0_12px_45px_rgba(15,23,42,0.08)] border border-white hover:scale-105 transition-transform duration-300">
                   <div className="bg-[#F7FAFC] rounded-[16px] aspect-[4/3] overflow-hidden flex items-center justify-center p-[8px]">
                      <img src={imgVideoMag11} className="w-full h-full object-contain" alt="Mag 1-1" />
                   </div>
                 </div>
             </div>
          </div>

        </div>
      </section>

      {/* 2.5) UNDERSTANDING LOW VISION */}
      <section id="UNDERSTANDING_WRAP" className="flex flex-col items-center w-full bg-[#F7FAFC] py-[60px] md:py-[80px] lg:py-[120px] px-[20px] md:px-[40px] lg:px-[80px]">
        <div className="flex flex-col w-full max-w-[1000px] text-center gap-[24px] md:gap-[32px]">
          <h2 className="text-[36px] md:text-[48px] lg:text-[58px] font-[700] text-[#111827] leading-[1.1]">What is Low Vision?</h2>
          <p className="text-[16px] md:text-[18px] lg:text-[22px] leading-[1.6] md:leading-[1.8] text-[#64748B]">
            Low vision is a visual impairment that cannot be fully corrected using standard glasses, contact lenses, medication, or surgery. Individuals with low vision may experience blurred vision, reduced contrast sensitivity, tunnel vision, central vision loss, blind spots, or difficulty recognizing faces and reading printed text.
          </p>
          <div className="flex flex-wrap justify-center gap-[8px] md:gap-[12px] mt-[16px] md:mt-[24px]">
             {["Macular Degeneration", "Diabetic Retinopathy", "Glaucoma", "Retinitis Pigmentosa", "Cataracts", "Albinism", "Optic Nerve Disorders", "Retinopathy of Prematurity", "Inherited Retinal Conditions"].map(condition => (
               <div key={condition} className="px-[16px] md:px-[20px] py-[8px] md:py-[12px] bg-white rounded-[999px] shadow-sm border border-[#EDF2F7] text-[#111827] font-medium text-[14px] md:text-[16px]">
                 {condition}
               </div>
             ))}
          </div>
          <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] md:leading-[1.7] text-[#64748B] mt-[16px] md:mt-[24px] max-w-[800px] self-center">
            Many people with low vision retain some usable sight but require accessibility support and assistive technology to perform daily activities independently.
          </p>
        </div>
      </section>

      {/* 3) CHALLENGE SECTION */}
      <section id="CHALLENGE_WRAP" className="flex flex-col items-center w-full bg-[#FFFFFF] py-[60px] md:py-[80px] lg:py-[120px] px-[20px] md:px-[40px] lg:px-[80px] gap-[40px] md:gap-[60px]">
         <div className="flex flex-col items-center text-center gap-[16px] md:gap-[24px] max-w-[800px]">
           <div className="text-[#FF7A45] font-[700] tracking-wider uppercase text-[12px] md:text-[14px]">Daily Challenges</div>
           <h2 className="text-[36px] md:text-[48px] lg:text-[58px] font-[700] leading-[1.1]">
             Everyday Tasks Can Become Significant Barriers
           </h2>
           <p className="text-[16px] md:text-[18px] lg:text-[20px] text-[#64748B]">
             People with low vision often encounter challenges that affect education, employment, mobility, and independence.
           </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] md:gap-[32px] w-full max-w-[1400px] z-[3]">
            {[
              {img: imgMedicineLabel, t: "Reading Printed Information", d: "Reading textbooks, medicine labels, menus, receipts, or forms may become difficult because of reduced clarity or limited field of vision."},
              {img: imgBus, t: "Identifying Distant Information", d: "Bus numbers, classroom boards, street signs, digital displays, and public information boards may be hard to recognize."},
              {img: imgDigitalProblem, t: "Digital Accessibility", d: "Computers, smartphones, websites, and interfaces can become difficult to use without magnification tools or accessibility adaptations."},
              {img: imgStudy, t: "Education Accessibility", d: "Students with low vision often require accessible learning tools to participate equally in classrooms."},
              {img: imgMoving, t: "Independent Navigation", d: "Moving safely through unfamiliar environments may become challenging when visual details are difficult to detect."},
              {img: imgGrocery, t: "Everyday Independence", d: "Daily tasks like shopping, identifying products, recognizing currency, or locating personal belongings may require additional support."}
            ].map((c, i) => (
              <div key={i} className="rounded-[24px] md:rounded-[32px] bg-[#F7FAFC] shadow-[0_12px_45px_rgba(15,23,42,0.08)] overflow-hidden flex flex-col hover:-translate-y-2 transition-transform duration-300 border border-[#EDF2F7]">
                 <div className="h-[200px] md:h-[240px] w-full overflow-hidden">
                    <img src={c.img} className="w-full h-full object-cover" alt={c.t} />
                 </div>
                 <div className="p-[24px] md:p-[32px] bg-white flex-1 flex flex-col">
                    <h3 className="text-[20px] md:text-[24px] font-[700] mb-[12px] md:mb-[16px]">{c.t}</h3>
                    <p className="text-[14px] md:text-[16px] text-[#64748B] leading-[1.6]">{c.d}</p>
                 </div>
              </div>
            ))}
         </div>
      </section>

      {/* 4) LOW VISION ECOSYSTEM -> ASSISTIVE TECH */}
      <section id="ECOSYSTEM_WRAP" className="flex flex-col items-center w-full bg-[#F7FAFC] py-[60px] md:py-[80px] lg:py-[120px] px-[20px] md:px-[40px] lg:px-[80px]">
        <div className="w-full max-w-[1400px] flex flex-col xl:flex-row gap-[40px] xl:gap-[60px] z-[3]">
          
          <div className="flex flex-col w-full xl:w-[45%] gap-[24px] md:gap-[32px] justify-center text-center xl:text-left items-center xl:items-start">
             <div className="text-[#2388FF] font-[700] tracking-wider uppercase text-[12px] md:text-[14px]">How Assistive Technology Supports Low Vision</div>
             <h2 className="text-[36px] md:text-[48px] lg:text-[58px] font-[700] leading-[1.1] text-[#111827]">
               Technology Creates Better Accessibility
             </h2>
             <p className="text-[16px] md:text-[18px] lg:text-[20px] text-[#64748B] leading-[1.6] md:leading-[1.7]">
               Assistive technology improves independence by helping individuals access information more effectively. Modern accessibility tools can help users:
             </p>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-[12px] md:gap-y-[16px] gap-x-[24px] mt-[8px] md:mt-[16px] text-left w-full sm:w-auto">
               {[
                 "Read printed materials",
                 "Improve digital accessibility",
                 "Enhance contrast and visibility",
                 "Identify objects & surroundings",
                 "Access educational content",
                 "Improve independent living",
                 "Increase mobility confidence",
                 "Support workplace access",
                 "Improve learning outcomes",
                 "Reduce dependency"
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-[12px]">
                   <div className="w-[24px] h-[24px] rounded-full bg-[#2388FF]/10 flex items-center justify-center shrink-0">
                     <span className="text-[#2388FF] text-[14px] font-bold">✓</span>
                   </div>
                   <span className="text-[14px] md:text-[16px] font-[500] text-[#111827]">{item}</span>
                 </div>
               ))}
             </div>
          </div>

          <div className="w-full xl:w-[55%] flex justify-center items-center">
             <img src={imgTech1} alt="Assistive Tech Lifestyle" className="w-full h-auto rounded-[24px] md:rounded-[32px] shadow-[0_20px_60px_rgba(15,23,42,0.12)] object-cover max-h-[500px] md:max-h-[700px]" />
          </div>
          
        </div>
      </section>

      {/* 5) PRODUCT SECTION */}
      <section id="PRODUCT_WRAP" className="flex flex-col items-center w-full bg-[#FFFFFF] py-[60px] md:py-[80px] lg:py-[120px] px-[20px] md:px-[40px] lg:px-[80px] gap-[40px] md:gap-[60px]">
         <div className="flex flex-col items-center text-center gap-[16px] md:gap-[24px] max-w-[800px]">
           <h2 className="text-[36px] md:text-[48px] lg:text-[58px] font-[700] leading-[1.1]">
             Low Vision Solutions Available Through Torchit
           </h2>
           <p className="text-[16px] md:text-[18px] lg:text-[20px] text-[#64748B]">
             Torchit works toward improving accessibility through assistive technology solutions designed to support learning, accessibility, and independence.
           </p>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] md:gap-[32px] w-full max-w-[1400px] z-[3]">
            {[
              {
                img: imgJyotiSmartGlasses, l: "Jyoti AI Glasses", featured: true, 
                desc: "An AI-powered smart device to help visually impaired individuals read text, identify objects, and navigate independently using intelligent vision technology."
              },
              {
                img: imgJyotiProNew, l: "Jyoti AI Pro", featured: true, 
                desc: "Combines AI Smart Glasses, AI Ring, and AI Reader technology to help visually impaired individuals read text, identify objects, recognize currency, and navigate independently."
              },
              {
                img: imgVideoMagnifierNew, l: "Video Magnifier", featured: true,
                desc: "Electronic magnifiers enlarge printed materials onto displays, making text easier to read."
              },
              {
                img: imgJyotiAiReaderNew, l: "Jyoti AI Reader", featured: true,
                desc: "Accessibility tools designed for reading support can improve visibility and reduce visual strain for educational materials."
              },
              {
                img: imgHandHeld7, l: "Portable Magnifier", featured: true,
                desc: "Portable magnification devices help individuals read smaller text while maintaining mobility and convenience."
              },
              {
                img: img281, l: "Magnifying Lamp", featured: true,
                desc: "Reading lamps improve visibility and reduce visual strain for comfortable, extended reading sessions."
              },
              {
                img: imgDownload, l: "High Contrast Keyboard", featured: true,
                desc: "Enhances visibility and reduces visual strain for typing and computer interaction."
              },
              {
                img: imgMonocular1, l: "Distance Viewing Support", featured: true,
                desc: "Distance viewing devices support identification of classroom boards, signs, displays, and information positioned farther away."
              },
              {
                img: imgMiscEnablemart13, l: "Daily Accessibility Tools", featured: true,
                desc: "Everyday tools designed to support independence in daily tasks like reading medication labels and menus."
              }
            ].map((p, i) => (
              <div key={i} className={`relative rounded-[24px] md:rounded-[28px] p-[20px] md:p-[28px] flex flex-col transition-all duration-300 group cursor-pointer ${p.featured ? 'bg-gradient-to-b from-[#F0F7FF] to-[#FFFFFF] border-2 border-[#2388FF] shadow-[0_12px_45px_rgba(35,136,255,0.15)] hover:shadow-[0_20px_60px_rgba(35,136,255,0.25)] hover:-translate-y-[8px] hover:scale-[1.03] z-10' : 'bg-[#F7FAFC] border border-[#EDF2F7] shadow-[0_12px_45px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_45px_rgba(15,23,42,0.12)] hover:-translate-y-[6px] hover:scale-[1.02]'}`}>
                 {p.featured && (
                    <div className="absolute top-[-14px] left-1/2 -translate-x-1/2 bg-[#2388FF] text-white text-[10px] md:text-[12px] font-[700] px-[12px] md:px-[16px] py-[4px] md:py-[6px] rounded-[999px] uppercase tracking-wider shadow-md whitespace-nowrap">
                       Featured Product
                    </div>
                 )}
                 <div className="w-full h-[180px] md:h-[240px] flex items-center justify-center mb-6 pt-4">
                    <img src={p.img} className="max-h-full object-contain mix-blend-multiply group-hover:scale-[1.06] transition-transform duration-500" alt={p.l} />
                 </div>
                 <div className={`text-center p-[20px] md:p-[24px] rounded-[20px] transition-colors duration-300 ${p.featured ? 'bg-[#2388FF] text-white' : 'bg-white text-[#111827]'} flex flex-col gap-2 md:gap-3`}>
                    <span className="font-[700] text-[18px] md:text-[22px]">{p.l}</span>
                    <span className="text-[13px] md:text-[14px] leading-[1.6] opacity-90 line-clamp-3">{p.desc}</span>
                 </div>
              </div>
            ))}
         </div>
      </section>

      {/* 5.5) STUDENTS AND WORKPLACES */}
      <section className="flex flex-col items-center w-full bg-[#F7FAFC] py-[60px] md:py-[80px] lg:py-[120px] px-[20px] md:px-[40px] lg:px-[80px]">
        <div className="flex flex-col w-full max-w-[1400px] gap-[60px] md:gap-[80px] lg:gap-[120px]">
          
          {/* Students */}
          <div className="flex flex-col xl:flex-row items-center gap-[40px] xl:gap-[80px]">
            <div className="w-full xl:w-1/2 flex justify-center">
               <img src={imgVideoReader} alt="Student Support" className="w-full sm:w-[85%] rounded-[24px] md:rounded-[32px] shadow-[0_20px_60px_rgba(15,23,42,0.12)]" />
            </div>
            <div className="w-full xl:w-1/2 flex flex-col gap-[20px] md:gap-[24px] text-center xl:text-left items-center xl:items-start">
               <div className="text-[#2388FF] font-[700] tracking-wider uppercase text-[12px] md:text-[14px]">Low Vision Support For Students</div>
               <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-[700] leading-[1.1] text-[#111827]">
                 Creating Accessible Learning Environments
               </h2>
               <p className="text-[16px] md:text-[18px] lg:text-[20px] text-[#64748B] leading-[1.6] md:leading-[1.7]">
                 Students with low vision benefit significantly from accessible educational environments that remove barriers to learning. Inclusive classrooms support equal participation, better learning outcomes, higher confidence, greater independence, and improved accessibility.
               </p>
               <div className="flex flex-col gap-[12px] mt-[8px] md:mt-[16px] text-left w-full sm:w-auto">
                  {["Read classroom material", "Access digital learning platforms", "Participate independently", "Improve educational engagement", "Build long-term confidence"].map((item, i) => (
                    <div key={i} className="flex items-center gap-[12px]">
                       <div className="w-[24px] h-[24px] rounded-full bg-[#2388FF]/10 flex items-center justify-center shrink-0">
                         <span className="text-[#2388FF] text-[14px] font-bold">✓</span>
                       </div>
                       <span className="text-[14px] md:text-[16px] xl:text-[18px] font-[500] text-[#111827]">{item}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          {/* Workplaces */}
          <div className="flex flex-col xl:flex-row-reverse items-center gap-[40px] xl:gap-[80px]">
            <div className="w-full xl:w-1/2 flex justify-center">
               <img src={imgWorkspaceJyoti} alt="Workplace Accessibility" className="w-full sm:w-[85%] rounded-[24px] md:rounded-[32px] shadow-[0_20px_60px_rgba(15,23,42,0.12)]" />
            </div>
            <div className="w-full xl:w-1/2 flex flex-col gap-[20px] md:gap-[24px] text-center xl:text-left items-center xl:items-start">
               <div className="text-[#2388FF] font-[700] tracking-wider uppercase text-[12px] md:text-[14px]">Low Vision Support For Workplaces</div>
               <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-[700] leading-[1.1] text-[#111827]">
                 Accessibility Creates Better Employment Opportunities
               </h2>
               <p className="text-[16px] md:text-[18px] lg:text-[20px] text-[#64748B] leading-[1.6] md:leading-[1.7]">
                 Workplace accessibility improves participation and independence. Accessible environments contribute toward greater inclusion and equal opportunities for all employees.
               </p>
               <p className="text-[16px] md:text-[18px] lg:text-[20px] text-[#64748B] leading-[1.6] md:leading-[1.7]">
                 Low vision accessibility tools can support reading workplace documents, accessing software systems, viewing presentations, improving productivity, and supporting communication.
               </p>
            </div>
          </div>

        </div>
      </section>



      {/* 7) WHY ACCESSIBILITY MATTERS & COMMITMENT */}
      <section className="flex flex-col items-center w-full bg-[#FFFFFF] text-[#111827] py-[60px] md:py-[80px] lg:py-[120px] px-[20px] md:px-[40px] lg:px-[80px]">
         <div className="flex flex-col lg:flex-row w-full max-w-[1400px] gap-[40px] lg:gap-[80px]">
            {/* Why Accessibility Matters */}
            <div className="w-full lg:w-1/2 flex flex-col gap-[20px] md:gap-[24px] lg:gap-[32px] text-center lg:text-left items-center lg:items-start">
               <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-[700] leading-[1.1]">Why Accessibility Matters</h2>
               <p className="text-[16px] md:text-[18px] lg:text-[20px] text-[#64748B] leading-[1.6] md:leading-[1.7]">
                 Accessibility is not only about technology. Accessibility creates opportunities. Assistive technology helps bridge accessibility gaps and enables greater participation across everyday life.
               </p>
               <div className="flex flex-wrap justify-center lg:justify-start gap-[8px] md:gap-[12px] mt-[8px]">
                  {["Education", "Employment", "Independence", "Social participation", "Mobility", "Confidence", "Equal access"].map((t, i) => (
                    <div key={i} className="px-[16px] md:px-[20px] py-[8px] md:py-[10px] bg-white rounded-[999px] text-[14px] md:text-[16px] font-medium border border-[#EDF2F7] shadow-sm">
                      {t}
                    </div>
                  ))}
               </div>
            </div>

            {/* Torchit Commitment */}
            <div className="w-full lg:w-1/2 flex flex-col gap-[20px] md:gap-[24px] lg:gap-[32px] p-[24px] md:p-[40px] bg-[#F7FAFC] rounded-[24px] md:rounded-[32px] border border-[#EDF2F7] shadow-lg hover:-translate-y-2 transition-transform duration-300">
               <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-[700] leading-[1.1]">Torchit Commitment</h2>
               <p className="text-[16px] lg:text-[18px] text-[#64748B] leading-[1.6] md:leading-[1.7]">
                 Torchit focuses on creating affordable assistive technology solutions that improve accessibility and independence. The goal remains consistent: Creating solutions that improve independence, accessibility, and participation for individuals with disabilities.
               </p>
               <div className="flex flex-col gap-[12px] mt-[12px] md:mt-auto">
                  {["Mobility accessibility", "Learning accessibility", "Assistive technology", "Inclusive education support", "Accessibility awareness initiatives"].map((t, i) => (
                    <div key={i} className="flex items-center gap-[12px]">
                       <div className="w-[8px] h-[8px] rounded-full bg-[#2388FF]"></div>
                       <span className="text-[14px] md:text-[16px] font-[500] text-[#111827]">{t}</span>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* 8) IMPACT NUMBERS */}
      <section id="IMPACT_WRAP" className="flex flex-col items-center justify-center w-full py-[60px] md:py-[80px] lg:py-[120px] bg-[#FFFFFF] px-[20px] md:px-[40px] lg:px-[80px]">
         <div className="flex flex-col items-center text-center gap-[16px] md:gap-[24px] max-w-[800px] mb-[40px] md:mb-[60px]">
           <div className="text-[#FF7A45] font-[700] tracking-wider uppercase text-[12px] md:text-[14px]">Our Impact</div>
           <h2 className="text-[36px] md:text-[48px] lg:text-[58px] font-[700] leading-[1.1] text-[#111827]">
             Accessibility Through Innovation
           </h2>
           <p className="text-[16px] md:text-[18px] lg:text-[20px] text-[#64748B]">
             Global accessibility initiatives across multiple regions. Assistive technology designed for independence and inclusion.
           </p>
         </div>

         <div className="flex flex-col md:flex-row gap-[24px] md:gap-[40px] w-full max-w-[1200px] justify-center">
            <div className="flex-1 flex flex-col items-center justify-center p-[40px] md:p-[60px] bg-[#F7FAFC] rounded-[32px] md:rounded-[40px] border border-[#EDF2F7] shadow-sm hover:-translate-y-2 transition-transform duration-300">
               <span className="text-[48px] md:text-[56px] lg:text-[72px] font-[800] text-[#2388FF] leading-[1]">1,200K+</span>
               <span className="text-[18px] md:text-[20px] lg:text-[24px] font-[600] text-[#111827] mt-[12px] md:mt-[16px]">Lives Impacted</span>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center p-[40px] md:p-[60px] bg-[#F7FAFC] rounded-[32px] md:rounded-[40px] border border-[#EDF2F7] shadow-sm hover:-translate-y-2 transition-transform duration-300">
               <span className="text-[48px] md:text-[56px] lg:text-[72px] font-[800] text-[#FF7A45] leading-[1]">10,000K</span>
               <span className="text-[18px] md:text-[20px] lg:text-[24px] font-[600] text-[#111827] mt-[12px] md:mt-[16px]">Families Targeted By 2030</span>
            </div>
         </div>
      </section>

      {/* 6) FAQ SECTION MOVED DOWN */}
      <section id="FAQ_WRAP" className="flex flex-col items-center w-full bg-[#F7FAFC] py-[60px] md:py-[80px] lg:py-[120px] px-[20px] md:px-[40px] lg:px-[80px] overflow-hidden">
         <div className="flex flex-col lg:flex-row w-full max-w-[1400px] gap-[40px] lg:gap-[60px]">
            {/* LEFT */}
            <div className="flex flex-col w-full lg:w-[50%] z-[3] text-center lg:text-left">
               <h2 className="text-[36px] md:text-[48px] lg:text-[58px] font-[700] mb-[24px] md:mb-[40px]">Frequently Asked Questions</h2>
               
               <div className="flex flex-col gap-[16px] md:gap-[20px] text-left">
                 {faqs.map((f, i) => {
                   const isOpen = openFaqIndex === i;
                   return (
                     <div key={i} className={`rounded-[20px] md:rounded-[24px] bg-white/80 backdrop-blur-md border border-[#EDF2F7] overflow-hidden transition-all duration-300 ${isOpen ? 'shadow-[0_12px_45px_rgba(15,23,42,0.08)]' : 'shadow-sm'}`}>
                       <button onClick={() => setOpenFaqIndex(isOpen ? null : i)} className="w-full p-[20px] md:p-[24px] flex justify-between items-center outline-none text-left">
                         <span className={`text-[16px] md:text-[18px] lg:text-[20px] font-[600] ${isOpen ? 'text-[#2388FF]' : 'text-[#111827]'}`}>{f.q}</span>
                         <div className="shrink-0 bg-[#F7FAFC] p-2 rounded-full text-[#64748B] ml-[12px]">
                           {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                         </div>
                       </button>
                       <AnimatePresence>
                         {isOpen && (
                           <motion.div initial={{height:0}} animate={{height:"auto"}} exit={{height:0}} className="overflow-hidden">
                             <div className="p-[20px] md:p-[24px] pt-0 text-[14px] md:text-[16px] text-[#64748B] leading-[1.6] md:leading-[1.7]">
                               {f.a}
                             </div>
                           </motion.div>
                         )}
                       </AnimatePresence>
                     </div>
                   )
                 })}
               </div>
            </div>

            {/* RIGHT */}
            <div className="relative flex justify-center items-center w-full lg:w-[50%] z-[3] mt-[20px] lg:mt-0">
               <img src={imgFaqFinal} className="w-full md:w-[80%] rounded-[24px] md:rounded-[36px] shadow-[0_12px_45px_rgba(15,23,42,0.08)] relative z-[3] object-cover" alt="FAQ Visual" />
               
               <div className="hidden md:block absolute top-[15%] left-[-20px] z-[5] bg-white/90 backdrop-blur-md p-[16px] rounded-[24px] shadow-[0_12px_45px_rgba(15,23,42,0.08)] border border-white hover:scale-105 transition-transform duration-300">
                 <img src={imgFaqMag} className="w-[180px] object-contain rounded-[12px]" alt="Float Mag" />
               </div>

               <div className="hidden md:block absolute bottom-[20%] right-[-20px] z-[5] bg-white/90 backdrop-blur-md p-[16px] rounded-[24px] shadow-[0_12px_45px_rgba(15,23,42,0.08)] border border-white hover:scale-105 transition-transform duration-300">
                 <img src={imgFaqHandheld} className="w-[140px] object-contain rounded-[12px]" alt="Float Handheld" />
               </div>
            </div>
         </div>
      </section>

    </div>
  );
}
