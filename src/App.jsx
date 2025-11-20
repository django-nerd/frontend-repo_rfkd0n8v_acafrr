import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Clients from './components/Clients'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* subtle noise texture */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(255,255,255,0.08),rgba(0,0,0,0)_60%)]"/>

      <Navbar />
      <main>
        <Hero />
        <Services />
        <Clients />
        <Contact />
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-400">
          <p>© {new Date().getFullYear()} Nolaka Defence. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
