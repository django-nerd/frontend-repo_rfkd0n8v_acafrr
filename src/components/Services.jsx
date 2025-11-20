function Services() {
  const items = [
    {
      title: 'Executive Protection',
      desc: 'Low-profile personal security for founders, VIPs and families with precision planning and intelligent advance work.'
    },
    {
      title: 'Residential & Estate',
      desc: 'Discreet perimeter, access control and monitoring tailored to high-end homes and private estates.'
    },
    {
      title: 'Retail & Hospitality',
      desc: 'Luxury boutique and venue protection that enhances brand experience while neutralising risk.'
    },
    {
      title: 'Events & Travel',
      desc: 'From airport to afterparty — coordinated secure movement, venue sweeps and crowd management.'
    }
  ]

  return (
    <section id="services" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">What we do</h2>
          <p className="mt-3 text-zinc-400 max-w-2xl">A security partner with taste. We blend advanced risk methodology with a refined, non-intrusive presence.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-zinc-200 to-zinc-500 text-black flex items-center justify-center font-bold mb-4 shadow-[0_0_30px_rgba(255,255,255,0.15)]">ND</div>
              <h3 className="text-lg font-medium text-white">{it.title}</h3>
              <p className="mt-2 text-zinc-400 text-sm">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
