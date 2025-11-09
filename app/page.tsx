// app/page.tsx - B2B UX Audit Landing Page
"use client"

import { useEffect, useMemo, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight, CheckCircle2, ChevronDown, Sparkles, Zap, Target, TrendingUp, FileCheck, ClipboardList } from "lucide-react"

// Magic UI components
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"
import { Marquee } from "@/components/ui/marquee"
import { NumberTicker } from "@/components/ui/number-ticker"
import { TextAnimate } from "@/components/ui/text-animate"
import { ShineBorder } from "@/components/ui/shine-border"
import { ShinyButton } from "@/components/ui/shiny-button"
import Particles from "@/components/ui/particles"


// Particles background
function PremiumBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Base dark navy background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Particles effect */}
      <Particles
        className="absolute inset-0"
        quantity={80}
        ease={20}
        color="#FFC300"
        size={0.6}
        staticity={100}
        refresh={false}
      />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/10" />
      
      {/* Top accent glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-radial from-primary/10 via-transparent to-transparent blur-3xl" />
    </div>
  )
}



// Frosted glass card component with optional shine border
function GlassCard({ 
  children, 
  className = "",
  hover = true,
  shine = false
}: { 
  children: React.ReactNode
  className?: string
  hover?: boolean
  shine?: boolean
}) {
  if (shine) {
    return (
      <ShineBorder
        borderRadius={16}
        borderWidth={2}
        duration={10}
        shineColor={["#FFC300", "#FFD60A", "#FFC300"]}
        className={`
          bg-white/[0.02] backdrop-blur-xl dark:bg-white/[0.02]
          ${hover ? 'hover:bg-white/[0.10] transition-all duration-300' : ''}
          ${className}
        `}
      >
        {children}
      </ShineBorder>
    )
  }
  
  return (
    <div 
      className={`
        rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl
        ${hover ? 'hover:bg-white/[0.04] hover:border-white/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  )
}

function SectionContainer(props: React.PropsWithChildren<{ id?: string; className?: string }>) {
  return (
    <section id={props.id} className={`relative px-6 sm:px-8 ${props.className || ""}`}>
      <div className="mx-auto w-full max-w-6xl">{props.children}</div>
    </section>
  )
}

export default function Page() {
  const prefersReducedMotion = useReducedMotion()

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.6 },
  transition: {
    duration: 0.6,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number], // ≈ easeOut
  },
} as const;

  useEffect(() => {
    document.documentElement.style.setProperty("scrollBehavior", "smooth")
  }, [])

  return (
    <main className="relative text-foreground antialiased min-h-screen">
      <PremiumBackground />
      {/* HERO */}
      <SectionContainer id="top" className="pt-12 sm:pt-20 pb-12">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Badge */}
          <motion.div
            {...fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-xl px-5 py-2"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-primary">
              Enterprise UX Audits for European B2B SaaS
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="text-balance text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight"
          >
            Get a Senior Enterprise
            <br />
            UX Audit in{" "}
            <span className="text-primary">
              72 Hours
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="max-w-2xl text-muted-foreground text-balance text-lg sm:text-xl leading-relaxed"
          >
            European agencies take 2-4 weeks and charge €8k+ for a B2B SaaS UX audit.{" "}
            <span className="text-foreground font-semibold">
              I deliver the same strategic depth in 3 days for €3,200
            </span>
            —because AI accelerates research while human expertise drives every decision.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 mt-4"
          >
            <div className="relative">
              <div className="absolute inset-0 blur-xl bg-primary/30 rounded-full animate-pulse" />
              <ShinyButton
                onClick={() => window.open('https://calendly.com/bryan-r-engle/15-minute-discovery-call-b2b-ux-audit', '_blank')}
                className="relative px-6 py-3 text-base font-bold shadow-lg shadow-primary/20 bg-primary text-black border-primary/50"
              >
                <Zap className="h-4 w-4 mr-2 text-black" />
                Book 15-min discovery call
                <ArrowRight className="h-4 w-4 ml-2 text-black" />
              </ShinyButton>
            </div>
<a 
                href="https://buy.stripe.com/cNibJ3a1jcYzbqtbd7gbm01" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-xl px-8 py-4 text-base font-medium hover:bg-primary/10 hover:border-primary/40 transition-colors"
              >
                Buy now - €3,200
                <ArrowRight className="h-5 w-5 text-primary" />
              </a>
          </motion.div>

          {/* Hero stats */}
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.4 }}
            className="mt-12"
          >
            <GlassCard shine className="p-6">
              <div className="grid grid-cols-3 gap-6">
                <Stat label="Issues identified" valueFrom={0} valueTo={25} suffix="" icon={ClipboardList} color="yellow" />
                <Stat label="Workflows audited" valueFrom={0} valueTo={7} suffix="" icon={FileCheck} color="yellow" />
                <Stat label="Delivery time" valueFrom={0} valueTo={72} suffix="h" icon={Zap} color="yellow" />
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </SectionContainer>

      {/* TRUST MARQUEE - Full Width */}
    {/* TRUST MARQUEE — seamless, grayscale, Cometly in, EY out */}
<section className="py-12 border-y border-white/5">
  <p className="mb-8 text-center text-xs uppercase tracking-widest text-muted-foreground">
    Enterprise experience from global corporations & B2B SaaS leaders
  </p>

  <div
    className="marquee-viewport relative mx-auto max-w-6xl px-6"
    style={{
      // soft edge fades so the reset frame is invisible even on sub-pixel layouts
      maskImage:
        "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      WebkitMaskImage:
        "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
    }}
  >
    <div className="marquee-track flex animate-marquee group-hover:pause-marquee">
      {[
        { src: "/united.svg", alt: "United Airlines" },
        { src: "/imo.svg", alt: "Intelligent Medical Objects" },
        { src: "/unilever.svg", alt: "Unilever" },
        { src: "/google.svg", alt: "Google" },
        { src: "/cometly.svg", alt: "Cometly" }, // EY removed, Cometly added
      ]
        // duplicate inline to make the track exactly 2× one sequence
        .concat([
          { src: "/united.svg", alt: "United Airlines" },
          { src: "/imo.svg", alt: "Intelligent Medical Objects" },
          { src: "/unilever.svg", alt: "Unilever" },
          { src: "/google.svg", alt: "Google" },
          { src: "/cometly.svg", alt: "Cometly" },
        ])
        .map((logo, i, arr) => (
          <div
            key={i}
            className="flex h-16 w-56 flex-shrink-0 items-center justify-center"
            aria-hidden={i >= arr.length / 2} // mark the duplicate as decorative
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="marquee-logo max-h-10 w-auto object-contain"
              style={{ paddingLeft: "3rem", paddingRight: "3rem" }}
            />
          </div>
        ))}
    </div>
  </div>
</section>

      {/* WHY THIS WORKS */}
      <SectionContainer id="why" className="py-16 sm:py-24">
        <div className="mb-12 text-center">
          <motion.h2 
            {...fadeUp}
            className="mb-4 text-3xl sm:text-4xl font-bold"
          >
            Why This{" "}
            <span className="text-primary">Actually Works</span>
          </motion.h2>
          <motion.p 
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            Built for European B2B SaaS scale-ups and Series A-C companies that need expert UX insights fast—without the agency price tag or timeline.
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 - Spans 2 columns */}
          <motion.div {...fadeUp} className="lg:col-span-2 flex">
            <GlassCard shine className="p-8 w-full flex flex-col">
              <div className="flex items-start gap-4 mb-4">
                <div className="rounded-xl bg-primary/10 p-3 ring-1 ring-primary/20 flex-shrink-0">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold mb-2">Enterprise Experience Meets Startup Speed</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    I've designed products serving millions at United Airlines and built B2B SaaS platforms at Intelligent Medical Objects.
                    I combine enterprise standards with startup pace to ship pragmatic improvements quickly.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary ring-1 ring-primary/20">8+ years enterprise</span>
                <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs text-secondary-foreground ring-1 ring-secondary/20">B2B SaaS expert</span>
                <span className="rounded-full bg-accent/10 px-3 py-1 text-xs text-accent ring-1 ring-accent/20">AI product development</span>
              </div>
            </GlassCard>
          </motion.div>

          {/* Card 2 */}
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="flex">
            <GlassCard className="p-8 w-full flex flex-col">
              <div className="rounded-xl bg-primary/10 p-3 mb-4 w-fit ring-1 ring-primary/20">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-3">AI-Accelerated Workflow</h4>
              <p className="text-muted-foreground leading-relaxed flex-1">
                I use AI to accelerate research and documentation—without replacing judgment. You get a senior designer who moves faster.
              </p>
            </GlassCard>
          </motion.div>

          {/* Card 3 */}
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }} className="flex">
            <GlassCard className="p-8 w-full flex flex-col">
              <div className="rounded-xl bg-primary/10 p-3 mb-4 w-fit ring-1 ring-primary/20">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Fixed Scope, Fixed Price</h4>
              <p className="text-muted-foreground leading-relaxed flex-1">
                No hourly billing. No scope creep. €3,200 flat fee, 72-hour delivery, comprehensive insights.
              </p>
            </GlassCard>
          </motion.div>

          {/* Card 4 - What you get */}
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 }} className="lg:col-span-2 flex">
            <GlassCard className="p-8 w-full flex flex-col">
              <h4 className="text-xl font-semibold mb-6">What You'll Receive</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                <CheckItem text="5–7 critical workflows audited" />
                <CheckItem text="20–25 annotated issues in Figma" />
                <CheckItem text="Enterprise readiness assessment" />
                <CheckItem text="Priority matrix (ICE scored)" />
                <CheckItem text="90-min strategic kickoff" />
                <CheckItem text="1-hour executive readout" />
                <CheckItem text="30-day implementation roadmap" />
                <CheckItem text="A/B test plans for top opportunities" />
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </SectionContainer>

      {/* PRICING */}
      <SectionContainer id="pricing" className="py-16 sm:py-24">
        <div className="mb-12 text-center">
          <motion.h2 
            {...fadeUp}
            className="mb-4 text-3xl sm:text-4xl font-bold"
          >
            Simple,{" "}
            <span className="text-gradient-warm">Transparent</span>
            {" "}Pricing
          </motion.h2>
          <motion.p 
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="text-muted-foreground max-w-xl mx-auto"
          >
            Fixed scope, fixed price, delivered in 72 hours
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Main Package */}
          <motion.div {...fadeUp} className="flex">
            <GlassCard shine className="p-8 relative border-primary/30 flex flex-col w-full">
              <div className="absolute top-4 right-4">
<span className="inline-flex items-center gap-1 rounded-full bg-yellow-400/10 px-2.5 py-0.5 text-[10px] font-medium text-yellow-300 ring-1 ring-yellow-400/20 shadow-[0_0_8px_rgba(255,195,0,0.15)]">
  <Sparkles className="h-3 w-3 text-yellow-300" />
  Most Popular
</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-2">72-Hour Expert Review</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-primary">€3,200</span>
                <span className="text-muted-foreground ml-2">one-time</span>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                <PricingItem text="Everything you need to fix enterprise adoption" />
                <PricingItem text="90-min strategic kickoff call" />
                <PricingItem text="5-7 critical workflow audits" />
                <PricingItem text="20-25 Figma-annotated issues" />
                <PricingItem text="1-hour executive readout" />
                <PricingItem text="Implementation CSV + A/B test plans" />
                <PricingItem text="2 follow-up Q&A via email" />
              </ul>

              <div className="relative mt-auto">
                <div className="absolute inset-0 blur-xl bg-primary/30 rounded-full animate-pulse" />
                <ShinyButton
                  onClick={() => window.open('https://buy.stripe.com/cNibJ3a1jcYzbqtbd7gbm01', '_blank')}
                  className="w-full relative py-3 px-6 text-base font-bold shadow-lg shadow-primary/20 bg-primary text-black border-primary/50"
                >
                  Buy now - €3,200
                  <ArrowRight className="h-4 w-4 ml-2 text-black" />
                </ShinyButton>
              </div>
            </GlassCard>
          </motion.div>

          {/* Implementation Sprint */}
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="flex">
            <GlassCard className="p-8 border-secondary/20 flex flex-col w-full">
              <h3 className="text-2xl font-bold mb-2">Implementation Sprint</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-accent">€6,000</span>
                <span className="text-muted-foreground ml-2">add-on</span>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                <PricingItem text="Top 5 issues designed in Figma" />
                <PricingItem text="Production-ready components" />
                <PricingItem text="Full responsive breakpoints" />
                <PricingItem text="Developer handoff specs" />
                <PricingItem text="Loom walkthroughs" />
                <PricingItem text="Design system integration notes" />
              </ul>

              <a 
                href="https://calendly.com/bryan-r-engle/15-minute-discovery-call-b2b-ux-audit" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full rounded-full border border-secondary/30 bg-secondary/5 px-6 py-3 text-sm font-medium hover:bg-secondary/10 hover:border-secondary/40 transition-colors mt-auto"
              >
                Discuss implementation
                <ArrowRight className="h-4 w-4 text-primary" />
              </a>
            </GlassCard>
          </motion.div>
        </div>
      </SectionContainer>

      {/* FAQ */}
      <SectionContainer id="faq" className="py-16 sm:py-24">
        <div className="mb-12 text-center">
          <motion.h2 
            {...fadeUp}
            className="mb-4 text-3xl sm:text-4xl font-bold"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="text-muted-foreground"
          >
            Everything you need to know about the audit process
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          <FAQItem
            question="How is this different from automated UX tools?"
            answer="Automated tools flag generic issues. I provide strategic recommendations tailored to your business model, target market, and enterprise ambitions. All findings are validated by 8+ years of B2B product experience."
          />
          <FAQItem
            question="What deliverables do I receive?"
            answer="Annotated Figma issues (20–25), enterprise readiness notes, priority matrix, CSV roadmap for your PM tool, and a 30-day plan with A/B test ideas."
          />
          <FAQItem
            question="Do you help implement the recommendations?"
            answer="I offer a 1-Week Implementation Sprint (€6,000) where I design the top 5 issues in production-ready Figma with developer handoff specs and Loom walkthroughs."
          />
          <FAQItem
            question="How confident are you in the impact estimates?"
            answer="Estimates are grounded in benchmarks, competitive analysis, and heuristics. I share conservative and optimistic ranges; most teams see 10–25% lift after top fixes."
          />
          <FAQItem
            question="What information do you need from us?"
            answer="Product URL, a test account with realistic data, your top 3 workflows, primary metric, and 90 minutes for kickoff. I handle the rest."
          />
          <FAQItem
            question="What's your refund policy?"
            answer="If the audit doesn't provide actionable value that justifies the investment, I'll refund 50% within 7 days of delivery."
          />
        </div>
      </SectionContainer>

      {/* ABOUT */}
      <SectionContainer id="about" className="py-16 sm:py-24">
        <div className="grid gap-12 md:grid-cols-5">
          <motion.div {...fadeUp} className="md:col-span-3 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold">
              About <span className="text-primary">Bryan Engle</span>
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              {/* Profile Photo */}
              <div className="flex-shrink-0">
                <img 
                  src="/bryan-profile.jpg" 
                  alt="Bryan Engle" 
                  className="w-32 h-32 rounded-2xl object-cover ring-2 ring-primary/30 hover:ring-primary/50 transition-all duration-300"
                />
              </div>
              
              <div className="space-y-4 flex-1">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Senior Product Designer with 8+ years building enterprise tools and B2B SaaS products. I've designed 
                  products serving millions at United Airlines, led AI product development at Intelligent Medical Objects, 
                  and created design systems used by 1,000+ users.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  I speak your language: PLG, enterprise sales, RBAC, time to value, seat expansion, admin experience. 
                  I've been in your shoes.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a 
                href="https://bryanengle.me" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-secondary-foreground hover:text-primary transition-colors"
              >
                View portfolio 
                <ArrowRight className="h-4 w-4 text-primary" />
              </a>
              <span className="text-sm text-muted-foreground self-center">Password: beux2025</span>
            </div>
            
            <p className="text-sm text-muted-foreground pt-2">
              Based in Amsterdam, serving European B2B SaaS scale-ups and enterprises across EMEA.
            </p>
          </motion.div>

          <motion.div 
            {...fadeUp} 
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="md:col-span-2"
          >
            <GlassCard className="p-8 h-full">
              <h4 className="text-xl font-semibold mb-6">Proven Results</h4>
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/20 p-1.5 mt-0.5 ring-1 ring-primary/30 flex-shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">43% usability improvement (enterprise risk tools)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/20 p-1.5 mt-0.5 ring-1 ring-primary/30 flex-shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">40% task time reduction (ops dashboards)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/20 p-1.5 mt-0.5 ring-1 ring-primary/30 flex-shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">Design systems serving 1,000+ users</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/20 p-1.5 mt-0.5 ring-1 ring-primary/30 flex-shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">Led first AI product POC at B2B healthcare SaaS</span>
                </li>
              </ul>
            </GlassCard>
          </motion.div>
        </div>
      </SectionContainer>

      {/* FINAL CTA */}
      <SectionContainer id="cta" className="py-20 sm:py-32">
        <motion.div {...fadeUp}>
          <GlassCard shine className="p-12 sm:p-16 text-center border-primary/20">
            <TextAnimate 
              by="word" 
              animation="blurInUp" 
              className="mx-auto mb-6 max-w-3xl text-balance text-2xl sm:text-4xl font-bold leading-tight"
            >
              Ready to see where enterprise buyers hesitate—and what to fix this sprint?
            </TextAnimate>
            <p className="text-muted-foreground mb-8 text-lg">
              Book a 15-minute discovery call or purchase the audit directly
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 blur-xl bg-primary/30 rounded-full animate-pulse" />
                <ShinyButton
                  onClick={() => window.open('https://calendly.com/bryan-r-engle/15-minute-discovery-call-b2b-ux-audit', '_blank')}
                  className="relative px-6 py-3 text-base font-bold shadow-lg shadow-primary/20 bg-primary text-black border-primary/50"
                >
                  Book discovery call 
                  <ArrowRight className="h-4 w-4 ml-2 text-black" />
                </ShinyButton>
              </div>
              <a 
                href="https://buy.stripe.com/cNibJ3a1jcYzbqtbd7gbm01" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-xl px-8 py-4 text-base font-medium hover:bg-primary/10 hover:border-primary/40 transition-colors"
              >
                Buy now - €3,200
                <ArrowRight className="h-5 w-5 text-primary" />
              </a>
            </div>
          </GlassCard>
        </motion.div>
      </SectionContainer>


      {/* FOOTER */}
      <footer className="border-t border-white/5 py-12 backdrop-blur-xl">
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
            <div className="text-muted-foreground">
              © {new Date().getFullYear()} Bryan Engle — B2B UX Audits
            </div>
            <div className="flex items-center gap-6">
              <a href="https://bryanengle.me" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                Portfolio
              </a>
              <a href="https://www.linkedin.com/in/bengle06" target="_blank" rel="noreferrer" className="hover:text-secondary-foreground transition-colors">
                LinkedIn
              </a>
              <a href="mailto:bryan.r.engle@gmail.com" className="hover:text-accent transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

// --- UI Components ---

function Stat({ 
  label, 
  valueFrom = 0, 
  valueTo = 0, 
  suffix = "",
  icon: Icon,
  color 
}: { 
  label: string
  valueFrom?: number
  valueTo?: number
  suffix?: string
  icon: any
  color: 'yellow' | 'blue' | 'light-yellow'
}) {
  const colorClasses = {
    yellow: 'text-primary bg-primary/10 ring-primary/20',
    blue: 'text-secondary bg-secondary/10 ring-secondary/20',
    'light-yellow': 'text-accent bg-accent/10 ring-accent/20'
  }
  
  return (
    <div className="relative min-w-24 text-center">
      <div className={`inline-flex items-center justify-center rounded-xl ${colorClasses[color]} p-2 mb-2 ring-1`}>
        <Icon className="h-4 w-4" />
      </div>
      <div className="text-3xl font-bold">
        <NumberTicker value={valueTo} startValue={valueFrom} decimalPlaces={0} />{suffix}
      </div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  )
}

function LogoTag({ text }: { text: string }) {
  return (
    <div className="mx-2 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-xl px-4 py-2 text-sm text-foreground/90">
      {text}
    </div>
  )
}

function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
      <span className="text-sm text-muted-foreground">{text}</span>
    </div>
  )
}

function PricingItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
      <span className="text-sm">{text}</span>
    </li>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <GlassCard className="p-6">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex w-full items-start justify-between gap-4 text-left"
      >
        <h3 className="font-semibold text-foreground">{question}</h3>
        <ChevronDown 
          className={`h-5 w-5 flex-shrink-0 text-primary transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-4 text-sm text-muted-foreground leading-relaxed overflow-hidden"
        >
          {answer}
        </motion.div>
      )}
    </GlassCard>
  )
}
