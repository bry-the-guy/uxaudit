<section className="py-12 border-y border-white/5 overflow-hidden">
  <p className="mb-8 text-center text-xs uppercase tracking-widest text-muted-foreground">
    Enterprise experience from global corporations & B2B SaaS leaders
  </p>
  <div className="relative">
    <div className="flex animate-marquee">
      {/* First set of logos */}
      {[
        { src: "/united.svg", alt: "United Airlines" },
        { src: "/imo.svg", alt: "Intelligent Medical Objects" },
        { src: "/ey.svg", alt: "Ernst & Young" },
        { src: "/unilever.svg", alt: "Unilever" },
        { src: "/google.svg", alt: "Google" },
        { src: "/cometly.svg", alt: "Cometly" },
      ].map((logo, i) => (
        <div
          key={`first-${i}`}
          className="flex items-center justify-center h-16 w-56 flex-shrink-0 mx-8 bg-white/[0.03] rounded-xl backdrop-blur-sm border border-white/10"
        >
          <img
            src={logo.src}
            alt={logo.alt}
            className="h-10 w-auto object-contain brightness-125 contrast-110"
          />
        </div>
      ))}
      {/* Duplicate set for seamless loop */}
      {[
        { src: "/united.svg", alt: "United Airlines" },
        { src: "/imo.svg", alt: "Intelligent Medical Objects" },
        { src: "/ey.svg", alt: "Ernst & Young" },
        { src: "/unilever.svg", alt: "Unilever" },
        { src: "/google.svg", alt: "Google" },
        { src: "/cometly.svg", alt: "Cometly" },
      ].map((logo, i) => (
        <div
          key={`second-${i}`}
          className="flex items-center justify-center h-16 w-56 flex-shrink-0 mx-8 bg-white/[0.03] rounded-xl backdrop-blur-sm border border-white/10"
        >
          <img
            src={logo.src}
            alt={logo.alt}
            className="h-10 w-auto object-contain brightness-125 contrast-110"
          />
        </div>
      ))}
    </div>
  </div>
</section>
