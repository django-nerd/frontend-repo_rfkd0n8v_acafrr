import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 backdrop-blur-md bg-black/40 border border-white/10 rounded-2xl shadow-2xl">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-zinc-200 to-zinc-500 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-black" fill="currentColor" aria-hidden>
                  <path d="M12 2c2.5 0 4.8 1.2 6.2 3.1.4.5-.1 1.2-.7 1-1.2-.4-2.6-.2-3.5.7-1.3 1.2-1.7 3.1-2 4.7-.3 1.6-1.1 3.1-2.4 4.1-1.6 1.1-3.7 1.2-5.5.5-.7-.2-.9-1.1-.4-1.6C5 12.7 6 10.5 7.7 9c1.5-1.3 2.5-2.6 2.9-3.8.3-1 .9-1.7 1.4-2 .3-.2.6-.2 1-.2Z"/>
                  <path d="M8.5 19.5c2.6 1.2 5.8.8 8.1-1.1 2.6-2.1 3.7-5.6 2.7-8.8-.2-.6.5-1.1 1-.7 2.2 1.6 3.7 4.3 3.7 7.2 0 5-4 9-9 9-2.8 0-5.3-1.3-7-3.3-.4-.4-.2-1.1.5-1.3Z"/>
                </svg>
              </div>
              <div className="text-left">
                <p className="text-sm tracking-widest text-zinc-300">NOLAKA</p>
                <p className="text-lg font-semibold text-white -mt-1">DEFENCE</p>
              </div>
            </a>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-zinc-300 hover:text-white transition">Services</a>
              <a href="#clients" className="text-zinc-300 hover:text-white transition">Clients</a>
              <a href="#contact" className="text-zinc-300 hover:text-white transition">Contact</a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-zinc-100 to-zinc-400 text-black px-5 py-2 font-medium shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_50px_rgba(255,255,255,0.25)] transition">Request Coverage</a>
            </nav>
            <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7"><path d="M3.75 6.75h16.5v1.5H3.75zm0 4.5h16.5v1.5H3.75zm0 4.5h16.5v1.5H3.75z"/></svg>
            </button>
          </div>
          {open && (
            <div className="md:hidden px-6 pb-6">
              <div className="grid gap-3">
                <a href="#services" className="text-zinc-300 hover:text-white transition" onClick={() => setOpen(false)}>Services</a>
                <a href="#clients" className="text-zinc-300 hover:text-white transition" onClick={() => setOpen(false)}>Clients</a>
                <a href="#contact" className="text-zinc-300 hover:text-white transition" onClick={() => setOpen(false)}>Contact</a>
                <a href="#contact" className="inline-flex justify-center items-center gap-2 rounded-full bg-gradient-to-r from-zinc-100 to-zinc-400 text-black px-5 py-2 font-medium shadow-[0_0_30px_rgba(255,255,255,0.15)]">Request Coverage</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
