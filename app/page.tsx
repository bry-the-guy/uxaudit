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
import { Button } from "@/components/ui/button"


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

  const fadeUp = useMemo(
    () => ({
      initial: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.3 },
      transition: { duration: prefersReducedMotion ? 0 : 0.6, ease: "easeOut" },
    }),
    [prefersReducedMotion]
  )

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
              Amsterdam-Based • Enterprise UX for European B2B SaaS
            </span>
          </motion.div>

          {/* Problem Statement */}
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.05 }}
            className="max-w-2xl text-muted-foreground text-balance text-base sm:text-lg leading-relaxed px-4"
          >
            Your product works. But enterprise deals stall because buyers cite "admin complexity" or "security concerns"—and you're not sure which UX issues to fix first.
          </motion.p>

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
            European agencies take 2-4 weeks and charge €8k+ to tell you what's broken.{" "}
            <span className="text-foreground font-semibold">
              I deliver 20-25 prioritised fixes you can ship this sprint—in 72 hours for €3,200
            </span>
            —because I use AI to accelerate research while applying 8 years of enterprise UX patterns that actually close deals.
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

          {/* Urgency indicator */}
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.35 }}
            className="text-sm text-muted-foreground mt-4"
          >
            <span className="inline-flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Limited to 4 audits per month to maintain quality
            </span>
          </motion.p>

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

      {/* WHO THIS IS FOR */}
      <SectionContainer className="py-12 sm:py-16">
        <motion.div {...fadeUp}>
          <GlassCard className="p-8 sm:p-10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
              Built for Series A-C B2B SaaS Companies Who:
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <CheckItem text="Recently raised €5-20M and need to move upmarket" />
              <CheckItem text="Keep hearing 'admin complexity' in lost deal feedback" />
              <CheckItem text="Have 20-100 employees with limited design resources" />
              <CheckItem text="Are targeting enterprise customers (€50k+ deals)" />
              <CheckItem text="Need to ship UX improvements this quarter, not next year" />
              <CheckItem text="Lost deals because buyers cited 'security concerns' or 'not enterprise-ready'" />
            </div>
          </GlassCard>
        </motion.div>
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
            Why Enterprise Teams{" "}
            <span className="text-primary">Choose This Approach</span>
          </motion.h2>
          <motion.p 
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            Designed for European B2B SaaS companies at Series A-C stage who require senior-level UX expertise without agency timelines or overhead.
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
                    I've designed enterprise tools at United Airlines serving millions of passengers daily, and led B2B SaaS development at Intelligent Medical Objects—where I learned how to navigate complex multi-role experiences, admin panels, and security requirements that enterprise buyers actually evaluate during procurement.
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

      {/* ENTERPRISE OBJECTIONS */}
      <SectionContainer className="py-16 sm:py-24 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent">
        <div className="mb-12 text-center">
          <motion.h2 
            {...fadeUp}
            className="mb-4 text-3xl sm:text-4xl font-bold"
          >
            Common Enterprise{" "}
            <span className="text-primary">Objections I Address</span>
          </motion.h2>
          <motion.p 
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            These are the specific concerns European enterprise buyers raise in late-stage deals—and what I look for in every audit.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <motion.div {...fadeUp}>
            <GlassCard className="p-6 h-full">
              <h4 className="text-lg font-semibold mb-3 text-primary">Admin Setup Complexity</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The #1 deal killer for Series A products. I identify where admin configuration overwhelms IT teams and recommend streamlined onboarding paths that get teams productive faster.
              </p>
            </GlassCard>
          </motion.div>

          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
            <GlassCard className="p-6 h-full">
              <h4 className="text-lg font-semibold mb-3 text-primary">Security & Compliance Visibility</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Enterprise buyers need to see SSO/SCIM indicators, audit logs, and data handling transparency. I audit whether security settings are visible enough to pass procurement review.
              </p>
            </GlassCard>
          </motion.div>

          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}>
            <GlassCard className="p-6 h-full">
              <h4 className="text-lg font-semibold mb-3 text-primary">Multi-Role Permission Confusion</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                When admin, power user, and end-user experiences blur together, enterprise buyers get nervous about governance. I map role clarity and access control patterns.
              </p>
            </GlassCard>
          </motion.div>

          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 }}>
            <GlassCard className="p-6 h-full">
              <h4 className="text-lg font-semibold mb-3 text-primary">"Not Enterprise-Grade" UI Signals</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Subtle visual and interaction cues that signal either "consumer tool" or "enterprise platform." I identify where your UI undermines enterprise positioning and recommend adjustments.
              </p>
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
            className="text-muted-foreground max-w-xl mx-auto text-lg"
          >
            Fixed scope, fixed price, delivered in 72 hours
          </motion.p>
          <motion.p 
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.15 }}
            className="text-muted-foreground max-w-2xl mx-auto mt-3 text-sm"
          >
            €3,200 is 2 days of your engineering team's time—but it prevents 2 weeks of building the wrong things. One closed €50k enterprise deal pays for 15 audits.
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

      {/* PROCESS TIMELINE */}
      <SectionContainer className="py-16 sm:py-24">
        <div className="mb-12 text-center">
          <motion.h2 
            {...fadeUp}
            className="mb-4 text-3xl sm:text-4xl font-bold"
          >
            Your 72-Hour{" "}
            <span className="text-primary">Audit Timeline</span>
          </motion.h2>
          <motion.p 
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Here's exactly what happens from purchase to delivery
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <motion.div {...fadeUp}>
              <GlassCard className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-primary/10 px-4 py-2 ring-1 ring-primary/20 flex-shrink-0">
                    <span className="text-primary font-bold">Day 0</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-2">Purchase & Intake</h4>
                    <p className="text-sm text-muted-foreground">
                      You complete payment → receive intake form (26 questions about your product, goals, and workflows) → we schedule your 90-minute kickoff call within 48 hours.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
              <GlassCard className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-primary/10 px-4 py-2 ring-1 ring-primary/20 flex-shrink-0">
                    <span className="text-primary font-bold">Day 1</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-2">Strategic Kickoff Call</h4>
                    <p className="text-sm text-muted-foreground">
                      90-minute deep dive into your business goals, user workflows, and enterprise challenges. I come prepared with competitive analysis and strategic questions based on your intake responses.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}>
              <GlassCard className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-primary/10 px-4 py-2 ring-1 ring-primary/20 flex-shrink-0">
                    <span className="text-primary font-bold">Day 2</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-2">Deep Analysis & Documentation</h4>
                    <p className="text-sm text-muted-foreground">
                      I audit your product workflows, create annotated Figma file with 20-25 prioritized issues, apply ICE scoring (Impact × Confidence × Ease), and prepare enterprise readiness assessment.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 }}>
              <GlassCard className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-primary/10 px-4 py-2 ring-1 ring-primary/20 flex-shrink-0">
                    <span className="text-primary font-bold">Day 3</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-2">Executive Readout & Delivery</h4>
                    <p className="text-sm text-muted-foreground">
                      1-hour presentation to your leadership team covering top 3 critical issues, quick wins you can ship this sprint, 30-day implementation roadmap, and Q&A. All deliverables (Figma, CSV, A/B test plans) sent immediately after.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
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
            answer="Automated tools flag generic issues. I provide strategic recommendations tailored to your business model, target market, and enterprise ambitions. All findings are validated by 8+ years of B2B product experience at United Airlines and Fortune 500 companies."
          />
          <FAQItem
            question="Do you understand GDPR and European compliance requirements?"
            answer="Yes. I'm based in Amsterdam and work with European B2B SaaS companies daily. I audit for GDPR-compliant data handling patterns, cookie consent clarity, and privacy policy accessibility. I also evaluate whether your security and compliance signals are visible enough for European enterprise procurement teams."
          />
          <FAQItem
            question="Can you work across European timezones?"
            answer="Absolutely. Based in Amsterdam (CET), I cover UK, DACH, Nordics, and can accommodate US East Coast teams. Calls typically happen 9am-6pm CET, and I deliver work asynchronously so you wake up to progress."
          />
          <FAQItem
            question="What deliverables do I receive?"
            answer="Annotated Figma file (20–25 issues), enterprise readiness assessment, priority matrix with ICE scores, CSV roadmap for your PM tool (Jira/Linear/Asana), 30-day implementation plan, and A/B test recommendations. Everything is designed to ship, not gather dust."
          />
          <FAQItem
            question="Do you sign NDAs?"
            answer="Yes, I'll sign your NDA or we can use mine. All client work is confidential. I won't share case studies or testimonials without explicit permission, and I can anonymize examples if needed."
          />
          <FAQItem
            question="What if our product UI is in Dutch/German/French?"
            answer="Not a problem. I evaluate UX patterns, workflows, and information architecture—which transcend language. For copy-specific issues, I'll note them and can work with your team to address localization concerns."
          />
          <FAQItem
            question="Do you help implement the recommendations?"
            answer="Yes. I offer a 1-Week Implementation Sprint (€6,000) where I design the top 5 issues in production-ready Figma with full responsive breakpoints, developer handoff specs, and Loom walkthroughs."
          />
          <FAQItem
            question="How confident are you in the impact estimates?"
            answer="Impact estimates are grounded in industry benchmarks, competitive analysis, and enterprise UX heuristics. I provide conservative and optimistic ranges. Most B2B SaaS teams see 10–25% improvement in their primary metric after implementing top recommendations."
          />
          <FAQItem
            question="What information do you need from us?"
            answer="Product URL, test account with realistic data, your top 3 workflows to audit, primary metric to improve, and 90 minutes for kickoff call. I handle all the research, competitive analysis, and documentation."
          />
          <FAQItem
            question="What's your refund policy?"
            answer="Zero-risk guarantee: If the audit doesn't identify at least 15 actionable improvements that would unblock your enterprise pipeline, I'll refund 100% within 7 days of delivery. No questions asked."
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
                  Senior Product Designer with 8+ years building enterprise tools and B2B SaaS products for Fortune 500 companies. At United Airlines, I designed enterprise web tools serving millions of passengers daily—where I learned how complex systems must balance power-user efficiency with accessibility. At Intelligent Medical Objects, I led AI product development for B2B healthcare SaaS, navigating HIPAA compliance, multi-role permissions, and enterprise procurement requirements.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  I've created design systems used by 1,000+ users, reduced task completion time by 40% in operations dashboards, and improved usability by 43% in enterprise risk tools. I speak your language: PLG, enterprise sales, RBAC, time to value, seat expansion, admin experience.
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
            
            <div className="pt-4 space-y-2">
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground font-semibold">Based in Amsterdam (CET)</span> — I work European business hours for calls and provide support across UK, DACH, Nordics. I can also accommodate US East Coast teams for strategic discussions.
              </p>
              <p className="text-sm text-muted-foreground">
                Serving European B2B SaaS companies and enterprises across EMEA.
              </p>
            </div>
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
