import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    setTimeout(() => setStatus('Thanks — a director will contact you shortly.'), 800)
  }

  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Begin discreetly</h2>
          <p className="mt-3 text-zinc-400">Share only what you’re comfortable with. We’ll arrange a private consultation and risk review.</p>
          <div className="mt-8 grid sm:grid-cols-2 gap-4 text-zinc-300">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-zinc-400">Email</p>
              <p className="font-medium text-white">ops@nolakadefence.co.za</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-zinc-400">Phone</p>
              <p className="font-medium text-white">+27 (0) 10 123 4567</p>
            </div>
          </div>
        </div>
        <form onSubmit={submit} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="grid gap-4">
            <input className="rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Name" required/>
            <input type="email" className="rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Email" required/>
            <input className="rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Company (optional)"/>
            <textarea rows="4" className="rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="How can we help?"/>
            <button className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-zinc-100 to-zinc-300 text-black px-6 py-3 font-medium shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_50px_rgba(255,255,255,0.25)] transition">Request Coverage</button>
            {status && <p className="text-sm text-zinc-400">{status}</p>}
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
