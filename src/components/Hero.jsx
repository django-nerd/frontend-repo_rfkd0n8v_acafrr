function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24">
      {/* Glow gradients */}
      <div className="pointer-events-none absolute -top-40 -right-32 h-96 w-96 rounded-full bg-white/10 blur-3xl"/>
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-white/5 blur-3xl"/>

      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-200"/> Elite Private Security
          </div>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-white leading-[1.05]">
            Discreet. Precise. Uncompromising.
          </h1>
          <p className="mt-6 text-lg text-zinc-300 max-w-xl">
            Nolaka Defence provides ultra-premium protection for individuals and brands who demand flawless execution — without the spotlight.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-zinc-100 to-zinc-300 text-black px-6 py-3 font-medium shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_50px_rgba(255,255,255,0.25)] transition">
              Book a Confidential Consult
            </a>
            <a href="#services" className="inline-flex items-center gap-2 rounded-full border border-white/15 text-white px-6 py-3 font-medium hover:bg-white/10 transition">
              Explore Services
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-zinc-400 text-sm">
            <div className="flex -space-x-2">
              <img src="https://i.pravatar.cc/40?img=12" alt="client" className="w-8 h-8 rounded-full border border-zinc-700"/>
              <img src="https://i.pravatar.cc/40?img=22" alt="client" className="w-8 h-8 rounded-full border border-zinc-700"/>
              <img src="https://i.pravatar.cc/40?img=32" alt="client" className="w-8 h-8 rounded-full border border-zinc-700"/>
            </div>
            Trusted by founders, HNW families and luxury brands
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-zinc-900 to-black">
            <img src="https://images.unsplash.com/photo-1521133573892-e44906baee46?q=80&w=1600&auto=format&fit=crop" alt="Executive protection" className="w-full h-full object-cover mix-blend-luminosity opacity-90"/>
          </div>
          <div className="absolute -bottom-6 -left-6 backdrop-blur bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-sm text-zinc-200 shadow-lg">
            24/7 Coverage • Global Reach • Non-invasive Presence
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
