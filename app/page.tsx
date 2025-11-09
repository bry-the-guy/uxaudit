// app/page.tsx
"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, Zap, ArrowRight, CheckCircle2 } from "lucide-react"

// Local UI (present in your project)
import Particles from "@/components/ui/particles"
import { ShinyButton } from "@/components/ui/shiny-button"
import { Marquee } from "@/components/ui/marquee"
import { NumberTicker } from "@/components/ui/number-ticker"

// ---------- Shared helpers ----------
const fadeUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: "easeOut" },
}

function Section({
  id,
  className = "",
  children,
}: React.PropsWithChildren<{ id?: string; className?: string }>) {
  return (
    <section id={id} className={`relative px-6 sm:px-8 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  )
}

function Pill({ children }: React.PropsWithChildren) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary/90 backdrop-blur">
      <Zap className="h-3.5 w-3.5" />
      {children}
    </span>
  )
}

// ---------- FAQ item (chevron vertically centered) ----------
function FAQItem({
  question,
  answer,
  defaultOpen = false,
}: {
  question: string
  answer: React.ReactNode
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6">
      <button
        className="group w-full text-left"
        onClick={() => setOpen((v) => !v)}
      >
        <div className="pr-10 text-lg font-semibold tracking-tight text-white/95">
          {question}
        </div>

        {/* Chevron pinned right, centered vertically */}
        <ChevronDown
          className={`absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-yellow-400 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="overflow-hidden"
      >
        <div className="mt-4 text-sm leading-relaxed text-white/70">{answer}</div>
      </motion.div>
    </div>
  )
}

// ---------- Page ----------
export default function Page() {
  return (
    <main className="relative overflow-hidden">
      {/* Background particles */}
      <Particles
        className="pointer-events-none absolute inset-0 -z-10"
        quantity={60}
        ease={50}
        color="#C7A21F"
        refresh
      />

      {/* HERO */}
      <Section className="pt-20 pb-16 sm:pt-28 sm:pb-20">
        <div className="flex flex-col items-center text-center gap-8">
          <motion.div {...fadeUp} className="flex justify-center">
            <Pill>Amsterdam • Enterprise UX for European B2B SaaS</Pill>
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.05 }}
            className="font-display text-4xl sm:text-6xl md:text-7xl leading-[1.05] text-white"
          >
            Get a Senior Enterprise{" "}
            <span className="text-white/90">UX Audit in</span>{" "}
            <span className="text-yellow-400">72 Hours</span>
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="max-w-3xl text-lg sm:text-xl text-white/80"
          >
            European agencies take 2–4 weeks and charge €8k+ for a B2B SaaS UX
            audit. I deliver the same strategic depth in 3 days for €3,200—
            because AI accelerates research while human expertise drives every
            decision.
          </motion.p>

          {/* CTA group (mobile both full-width) */}
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.15 }}
            className="flex w-full max-w-2xl flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-center"
          >
            <div className="w-full sm:w-auto">
              <Link href="#book">
                <ShinyButton className="w-full sm:w-auto justify-center">
                  Book 15-min discovery call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </ShinyButton>
              </Link>
            </div>

            {/* Secondary button matches width on mobile */}
            <div className="w-full sm:w-auto">
              <Link href="#pricing" className="block">
                <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-2xl border border-yellow-400/40 bg-white/5 px-6 py-3 text-base font-semibold text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] ring-1 ring-black/10 backdrop-blur transition hover:bg-white/7.5">
                  Buy now – €3,200
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Small stats */}
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="mt-4 grid w-full max-w-3xl grid-cols-3 gap-4 rounded-2xl border border-yellow-400/30 bg-white/5 p-4 text-center"
          >
            <div>
              <div className="text-2xl font-bold text-white">
                <NumberTicker value={25} />
              </div>
              <div className="text-xs text-white/60">Issues identified</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">
                <NumberTicker value={7} />
              </div>
              <div className="text-xs text-white/60">Workflows audited</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">72h</div>
              <div className="text-xs text-white/60">Delivery time</div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* LOGO MARQUEE */}
      <Section className="pb-10">
        <Marquee className="opacity-80 grayscale hover:grayscale-0 transition">
          <Image src="/logos/united.svg" alt="United" width={132} height={40} />
          <Image src="/logos/imohealth.svg" alt="IMO Health" width={132} height={40} />
          <Image src="/logos/unilever.svg" alt="Unilever" width={132} height={40} />
          <Image src="/logos/google.svg" alt="Google" width={132} height={40} />
          <Image src="/logos/cometly.svg" alt="Cometly" width={132} height={40} />
        </Marquee>
      </Section>

      {/* WHAT YOU GET */}
      <Section id="pricing" className="pb-6">
        <motion.div {...fadeUp} className="rounded-3xl border border-yellow-400/40 bg-white/5 p-6 md:p-8">
          <div className="flex items-baseline gap-3">
            <h2 className="font-display text-2xl md:text-3xl text-white">
              72-Hour Expert Review
            </h2>
            <span className="rounded-full bg-yellow-400/10 px-3 py-1 text-xs font-semibold text-yellow-400 ring-1 ring-yellow-400/30">
              Most popular
            </span>
          </div>

          <div className="mt-4 flex items-end gap-3">
            <div className="font-display text-4xl md:text-5xl text-yellow-400">€3,200</div>
            <div className="text-white/60">one-time</div>
          </div>

          <ul className="mt-6 grid gap-3 text-white/80">
            {[
              "Everything you need to fix enterprise adoption",
              "90-min strategic kickoff call",
              "5-7 critical workflow audits",
              "20-25 Figma-annotated issues",
              "1-hour executive readout",
              "Implementation CSV + A/B test plans",
              "2 follow-up Q&A via email",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-yellow-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="#book">
              <ShinyButton className="w-full sm:w-auto justify-center">
                Book discovery call
                <ArrowRight className="ml-2 h-4 w-4" />
              </ShinyButton>
            </Link>

            <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-2xl border border-yellow-400/40 bg-white/5 px-6 py-3 text-base font-semibold text-white ring-1 ring-black/10 backdrop-blur transition hover:bg-white/7.5">
              Buy now – €3,200
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </motion.div>
      </Section>

      {/* FAQ */}
      <Section className="pb-24">
        <motion.h2
          {...fadeUp}
          className="mb-6 text-center font-display text-2xl md:text-3xl text-white/90"
        >
          Everything you need to know about the audit process
        </motion.h2>

        <div className="grid gap-4">
          <FAQItem
            question="How is this different from automated UX tools?"
            answer="Automated tools flag surface-level heuristics. I combine enterprise heuristics with sales-qualified objections and workflow validation across roles (admin, IT, end-user) to pinpoint why enterprise buyers hesitate."
            defaultOpen
          />
          <FAQItem
            question="What deliverables do I receive?"
            answer="A prioritized CSV backlog, a Figma file annotated with issues and fixes, and a 1-hour readout recording. You can drop the CSV straight into Linear/Jira."
          />
          <FAQItem
            question="Do you help implement the recommendations?"
            answer="Yes—optionally via a scoped implementation sprint with ready-to-ship components and responsive specs."
          />
          <FAQItem
            question="What's your refund policy?"
            answer="Zero-risk: if the audit doesn’t identify at least 15 actionable improvements that would unblock enterprise pipeline, I’ll refund 100% within 7 days of delivery."
          />
        </div>
      </Section>

      {/* FOOTER CTA */}
      <Section id="book" className="pb-28">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 text-center">
          <h3 className="font-display text-2xl md:text-3xl text-white">
            Ready to see where enterprise buyers hesitate—and what to fix this sprint?
          </h3>
          <div className="mt-5 flex w-full flex-col items-stretch gap-3 sm:flex-row sm:justify-center">
            <Link href="https://cal.com/your-link" target="_blank" className="w-full sm:w-auto">
              <ShinyButton className="w-full sm:w-auto justify-center">
                Book 15-min discovery call
                <ArrowRight className="ml-2 h-4 w-4" />
              </ShinyButton>
            </Link>
            <Link href="#pricing" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-2xl border border-yellow-400/40 bg-white/5 px-6 py-3 text-base font-semibold text-white ring-1 ring-black/10 backdrop-blur transition hover:bg-white/7.5">
                Buy now – €3,200
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </Link>
          </div>
        </div>
      </Section>
    </main>
  )
}
