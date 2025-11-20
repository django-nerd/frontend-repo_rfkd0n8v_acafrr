function Clients() {
  const brands = ['AURUM', 'ATELIER NOIR', 'LUXECO', 'VANTABLACK', 'ST. ROQUE', 'VELORUM']
  return (
    <section id="clients" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">Trusted clientele</h2>
            <p className="mt-3 text-zinc-400 max-w-2xl">We operate quietly within high-expectation environments — from private households to flagship retail.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 rounded-full border border-white/15 text-white px-6 py-3 font-medium hover:bg-white/10 transition">Request case studies</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {brands.map((b) => (
            <div key={b} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center text-zinc-300 tracking-widest text-sm">{b}</div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients
