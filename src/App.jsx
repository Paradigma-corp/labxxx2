import React, { useState, useEffect } from 'react'
import {
  MoveRight,
  Scale, Scroll, LayoutGrid, Users,
  ArrowUpRight, Sparkles, MapPin, 
  Terminal, Activity, Hexagon, Asterisk,
  Lock, CheckCircle, Loader2, X,
  Shield, FileText, Zap, AlertTriangle, Globe, Cpu, TrendingUp
} from 'lucide-react'

/* -------------------------------------------------------------------------- */
/* CONSTANTS & DATA                            */
/* -------------------------------------------------------------------------- */

const CONTENT = {
  nav: { method: 'Methodology', oracle: 'DeepNet Oracle', services: 'Capabilities', journal: 'The Codex', contact: 'Secure Comms' },
  hero: {
    pre: 'PROTOCOL: SCALING_ARCHITECTURE_V.2.5',
    title: 'Excellence is not an act.',
    titleHigh: 'It is a Habit.',
    subtitle: 'We deploy rigorous data science and stoic logic to architect scalable business infrastructures.',
    cta: 'Initialize Sequence'
  },
  oracle: {
    title: 'DeepNet Oracle',
    desc: 'Establish connection with the algorithmic substrate. Define your constraint.',
    input1: '> Input Industry Sector',
    input2: '> Input Current Bottleneck',
    button: 'Execute Strategy Protocol',
    loading: 'Deciphering Market Patterns...',
    resultTitle: 'Strategic Output',
    labels: ['Axiom', 'Experiment', 'Metric']
  },
  method: {
    title: 'The Method',
    subtitle: 'Systematic Scaling Procedure',
    steps: [
      { id: '01', title: 'Diagnosis', desc: 'Forensic analysis of structural inefficiencies and revenue leaks.' },
      { id: '02', title: 'Experimentum', desc: 'High-frequency hypothesis testing within controlled feedback loops.' },
      { id: '03', title: 'Analysis', desc: 'Rigorous interpretation of data artifacts to extract intelligence.' },
      { id: '04', title: 'Expansion', desc: 'Automated replication of validated models for exponential scale.' }
    ]
  },
  services: {
    title: 'Core Pillars',
    subtitle: 'Architectural Modules for Growth',
    items: [
      { title: 'Genesis', desc: 'Foundational Modeling', detail: 'Market Calibration / Unit Economics' },
      { title: 'Momentum', desc: 'Velocity Acceleration', detail: 'Retention Architecture / Feedback Loops' },
      { title: 'Imperium', desc: 'Market Hegemony', detail: 'Monopoly Strategy / M&A Logic' }
    ]
  },
  journal: {
    title: 'The Codex',
    subtitle: 'Classified blueprints for the modern market.',
    readMore: 'Request Access',
    items: [
      { id: 'I', category: 'Whitepaper', date: 'OCT 2025', title: 'The Algorithm of Scale: Why Funnels Fail', desc: 'A mathematical critique of traditional acquisition funnels vs. retention loops.' },
      { id: 'II', category: 'Simulation', date: 'FEB 2026', title: 'Synthetic Demand: The Consumer Simulation', desc: 'Predictive modeling of aggregate human behavior through large-scale agent-based simulations.' },
      { id: 'III', category: 'Complex Statistics', date: 'PENDING', title: 'Hyper-Statistical Avatars', desc: 'Development of a hyperrealistic system of conscious avatars: Statistical frameworks for digital sentience.' }
    ]
  },
  social: {
    title: 'Scaled Entities',
    hover: 'Hover to reveal metrics'
  },
  footer: {
    network: 'Global Nodes',
    rights: '© 2025 Labxxx. Systems Active.'
  }
}

const CITIES = [
  { name: 'AMS', full: 'Amsterdam', zone: 'Europe/Amsterdam' },
  { name: 'LIM', full: 'Lima', zone: 'America/Lima' },
  { name: 'MAD', full: 'Madrid', zone: 'Europe/Madrid' },
  { name: 'MEX', full: 'Mexico City', zone: 'America/Mexico_City' },
  { name: 'MIA', full: 'Miami', zone: 'America/New_York' },
  { name: 'SAO', full: 'São Paulo', zone: 'America/Sao_Paulo' },
]

const CLIENTS = [
  { name: 'AETERNA', result: 'EFF: +45%', logo: 'AE' },
  { name: 'VENTUS', result: 'REV: 3.0X', logo: 'VT' },
  { name: 'OCULUS', result: 'CR: -60%', logo: 'OD' },
  { name: 'TERRA', result: 'MKT: DOM', logo: 'TF' },
]

/* -------------------------------------------------------------------------- */
/* COMPONENTS                                  */
/* -------------------------------------------------------------------------- */

const NoiseOverlay = () => (
  <div className="fixed inset-0 z-[1] pointer-events-none opacity-[0.04] mix-blend-overlay" 
       style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
  </div>
)

const StarryBackground = () => {
  const canvasRef = React.useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationFrameId
    let width, height
    let particles = []

    const resize = () => {
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
    }

    const createParticles = () => {
      particles = []
      const count = Math.floor((width * height) / 12000) 
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          size: Math.random() > 0.9 ? Math.random() * 2 : 1
        })
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      const isDark = document.documentElement.classList.contains('dark')
      
      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = i % 5 === 0 
          ? (isDark ? 'rgba(220, 38, 38, 0.8)' : 'rgba(185, 28, 28, 0.8)') 
          : (isDark ? 'rgba(16, 185, 129, 0.4)' : 'rgba(5, 150, 105, 0.4)')
        ctx.fill()
      })

      ctx.strokeStyle = isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)'
      ctx.lineWidth = 1
      const gridSize = 100
      
      for(let x = 0; x < width; x += gridSize) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke()
      }
      for(let y = 0; y < height; y += gridSize) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke()
      }

      animationFrameId = requestAnimationFrame(draw)
    }

    window.addEventListener('resize', resize)
    resize()
    createParticles()
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />
}

const RomanLogo = () => (
  <svg viewBox="0 0 100 100" className="w-8 h-8 fill-current">
    <rect x="10" y="45" width="20" height="55" />
    <rect x="40" y="25" width="20" height="75" />
    <rect x="70" y="0" width="20" height="100" />
  </svg>
)

const CityClock = ({ name, full, zone }) => {
  const [time, setTime] = useState('')
  const [active, setActive] = useState(false)

  useEffect(() => {
    const update = () => {
      const now = new Date()
      const timeString = new Intl.DateTimeFormat('en-US', {
        timeZone: zone,
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }).format(now)
      
      const hour = parseInt(timeString.split(':')[0])
      setActive(hour >= 9 && hour < 18)
      setTime(timeString)
    }
    update()
    const interval = setInterval(update, 60000)
    return () => clearInterval(interval)
  }, [zone])

  return (
    <div className="flex items-center justify-between py-2 border-b border-zinc-200 dark:border-zinc-800 text-xs font-mono uppercase tracking-widest hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors px-2 cursor-crosshair group">
      <span className="text-zinc-600 dark:text-zinc-400 font-bold group-hover:text-red-600 transition-colors">{name}</span>
      <span className="hidden sm:inline text-zinc-400 dark:text-zinc-500">{full}</span>
      <div className="flex items-center gap-2">
        <span className="text-zinc-900 dark:text-zinc-300">{time}</span>
        <div className={`w-1.5 h-1.5 ${active ? 'bg-emerald-500 animate-pulse' : 'bg-red-600'}`}></div>
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* MAIN APP                                    */
/* -------------------------------------------------------------------------- */

const App = () => {
  const [scrolled, setScrolled] = useState(false)
  
  // Data States
  const [industry, setIndustry] = useState('')
  const [obstacle, setObstacle] = useState('')
  const [loading, setLoading] = useState(false)
  const [strategy, setStrategy] = useState(null)

  // Modals State
  const [accessModalOpen, setAccessModalOpen] = useState(false)
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false)
  const [termsModalOpen, setTermsModalOpen] = useState(false)
  const [joinModalOpen, setJoinModalOpen] = useState(false)
  
  const [accessStep, setAccessStep] = useState('form')
  const [formData, setFormData] = useState({ name: '', company: '', role: '' })

  useEffect(() => {
    document.documentElement.classList.add('dark')
    return () => document.documentElement.classList.remove('dark')
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const t = CONTENT

  const handleOracleConsult = async (e) => {
    e.preventDefault()
    if (!industry || !obstacle) return
    setLoading(true)
    setStrategy(null)
    setTimeout(() => {
       setStrategy({
        axiom: "Chaos is merely unorganized data.",
        experiment: "Implement a triple-loop feedback mechanism on your core funnel.",
        metric: "Net Efficiency Ratio > 1.5 within 30 days."
      })
      setLoading(false)
    }, 2000)
  }

  const handleAccessSubmit = (e) => {
    e.preventDefault()
    setAccessStep('processing')
    setTimeout(() => setAccessStep('success'), 2000)
  }

  const closeAllModals = () => {
    setAccessModalOpen(false)
    setPrivacyModalOpen(false)
    setTermsModalOpen(false)
    setJoinModalOpen(false)
    setAccessStep('form')
    setFormData({ name: '', company: '', role: '' })
  }

  return (
    <div className="relative min-h-screen transition-colors duration-500 font-sans selection:bg-red-500/30 bg-[#050505] text-zinc-100">
      
      <NoiseOverlay />

      {/* --- GENERIC MODAL WRAPPER --- */}
      {(accessModalOpen || privacyModalOpen || termsModalOpen || joinModalOpen) && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-2xl bg-[#0a0a0a] border border-zinc-800 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative max-h-[90vh] overflow-y-auto custom-scrollbar">
            
            {/* Close Button */}
            <button onClick={closeAllModals} className="absolute top-4 right-4 text-zinc-500 hover:text-red-600 transition-colors z-50">
              <X size={24} />
            </button>

            {/* --- ACCESS MODAL CONTENT --- */}
            {accessModalOpen && (
              <div className="p-8 border border-red-600/30">
                <div className="flex items-center gap-2 text-red-600 font-mono text-xs uppercase tracking-widest mb-8">
                  <Lock size={14} /> <span>Restricted_Access // Codex_Gate</span>
                </div>
                {accessStep === 'form' && (
                  <form onSubmit={handleAccessSubmit} className="space-y-6">
                    <p className="font-mono text-xs text-zinc-400 mb-6">// Identify yourself to request access to classified Codex documents.</p>
                    <div className="space-y-4">
                      {['Identity_Name', 'Entity_Corp', 'Clearance_Role'].map((label, i) => (
                        <div className="group" key={i}>
                          <label className="block font-mono text-[10px] text-red-600 uppercase mb-2">{label}</label>
                          <input required type="text" className="w-full bg-zinc-900 border border-zinc-800 p-3 text-zinc-200 font-mono text-sm focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600 transition-all" placeholder="..." />
                        </div>
                      ))}
                    </div>
                    <button type="submit" className="w-full py-4 bg-red-700 hover:bg-red-600 text-white font-mono text-xs font-bold uppercase tracking-widest transition-colors mt-4">Submit Credentials</button>
                  </form>
                )}
                {accessStep === 'processing' && (
                  <div className="text-center py-12">
                    <Loader2 size={40} className="text-red-600 animate-spin mx-auto mb-6" />
                    <p className="font-mono text-xs text-zinc-400 animate-pulse">Verifying Clearance Level...</p>
                  </div>
                )}
                {accessStep === 'success' && (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-6 border border-zinc-700"><CheckCircle size={32} className="text-emerald-500" /></div>
                    <h3 className="font-serif text-2xl text-white mb-2">Request Received</h3>
                    <p className="font-mono text-xs text-zinc-400 mb-8 leading-relaxed">Your credentials have been logged. <br/><span className="text-red-500">Status: PENDING EVALUATION</span></p>
                    <button onClick={closeAllModals} className="px-8 py-3 border border-zinc-700 hover:border-red-600 text-zinc-300 hover:text-white font-mono text-[10px] uppercase tracking-widest transition-all">Terminate Session</button>
                  </div>
                )}
              </div>
            )}

            {/* --- PRIVACY POLICY MODAL --- */}
            {privacyModalOpen && (
              <div className="p-10">
                <div className="flex items-center gap-2 text-emerald-600 font-mono text-xs uppercase tracking-widest mb-8">
                  <Shield size={14} /> <span>Global_Privacy_Standard_2025</span>
                </div>
                <h2 className="font-serif text-4xl text-white mb-6">Data Sovereignty Protocol</h2>
                <div className="space-y-4 font-mono text-xs text-zinc-400 leading-relaxed h-[50vh] overflow-y-auto pr-4">
                  <p><strong>1. ZERO KNOWLEDGE PRINCIPLE:</strong> Labxxx operates on a minimal-retention architecture. We do not hoard data; we process it through ephemeral streams.</p>
                  <p><strong>2. ENCRYPTION STANDARDS:</strong> All client telemetry is encrypted using AES-256-GCM at rest and TLS 1.3 in transit. Our keys are sharded globally.</p>
                  <p><strong>3. INTERNATIONAL COMPLIANCE:</strong> We adhere to the strictest interpretations of GDPR (EU), CCPA (California), and the 2024 Global Digital Rights Accord.</p>
                  <p><strong>4. DATA TELEMETRY:</strong> The 'DeepNet Oracle' processes inputs via isolated sandboxes. No prompt data is used for model training without explicit, signed consent.</p>
                  <p><strong>5. RIGHT TO ERASURE:</strong> Upon request, we execute a cryptographic shredding of your entity's profile from our nodes.</p>
                  <br/>
                  <p className="text-zinc-600 uppercase">// END OF FILE // SIGNED: LABXXX LEGAL KERNEL</p>
                </div>
              </div>
            )}

            {/* --- TERMS OF USE MODAL --- */}
            {termsModalOpen && (
              <div className="p-10">
                <div className="flex items-center gap-2 text-emerald-600 font-mono text-xs uppercase tracking-widest mb-8">
                  <FileText size={14} /> <span>Terms_of_Engagement_v3</span>
                </div>
                <h2 className="font-serif text-4xl text-white mb-6">Operational Protocols</h2>
                <div className="space-y-4 font-mono text-xs text-zinc-400 leading-relaxed h-[50vh] overflow-y-auto pr-4">
                  <p><strong>1. ACCEPTANCE OF RISK:</strong> Scaling a business using Labxxx architectures involves high-velocity structural changes. You acknowledge that rapid growth may destabilize legacy systems.</p>
                  <p><strong>2. INTELLECTUAL PROPERTY:</strong> All algorithmic outputs generated by the DeepNet Oracle remain the joint intellectual property of the user and Labxxx until a commercial license is procured.</p>
                  <p><strong>3. LIABILITY CAP:</strong> Our liability is limited to the cost of the computational resources expended during the query session.</p>
                  <p><strong>4. JURISDICTION:</strong> All disputes are arbitrated under the International Digital Chamber of Commerce (The Hague).</p>
                  <p><strong>5. CODE OF CONDUCT:</strong> Any attempt to reverse-engineer our predictive models will result in an immediate IP ban and legal pursuit.</p>
                  <br/>
                  <p className="text-zinc-600 uppercase">// EXECUTE //</p>
                </div>
              </div>
            )}

            {/* --- JOIN TEAM MODAL (THE IMPOSSIBLE PROFILE) --- */}
            {joinModalOpen && (
              <div className="p-10 bg-red-950/10 border-l-4 border-red-600">
                <div className="flex items-center gap-2 text-red-600 font-mono text-xs uppercase tracking-widest mb-8">
                  <Zap size={14} /> <span>Executive_Recruitment_Protocol</span>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl text-white mb-3">Seeking: Principal Architect</h2>
                <p className="font-mono text-sm text-zinc-300 mb-8 border-b border-red-900 pb-4 leading-relaxed">
                  We do not hire employees—we assimilate intellects. You will collaborate with outstanding individuals who bring a cosmopolitan worldview, and you will be expected to elevate the standard with disciplined delivery.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-red-500 font-bold text-xs uppercase tracking-widest mb-4">Profile</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed font-light">
                      Polymath builder with an obsession for precision and resilience. Comfortable translating board-level objectives into architecture, leading senior engineers, and navigating cross-market growth with cultural intelligence.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-red-500 font-bold text-xs uppercase tracking-widest mb-4">Expertise</h4>
                    <ul className="text-zinc-400 text-xs font-mono space-y-2">
                      <li>&gt; Systems engineering (Rust / Go / C++)</li>
                      <li>&gt; WebAssembly / WebGPU and runtime performance</li>
                      <li>&gt; Distributed systems at scale (Kubernetes, service mesh)</li>
                      <li>&gt; Cryptographic primitives / ZK-Snarks and security architectures</li>
                      <li>&gt; Neural network architecture (PyTorch / JAX) and data platforms</li>
                      <li>&gt; Global product delivery with multi-market, multi-cultural teams</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-zinc-900/60 border border-red-900/40 p-4 mb-6 text-left">
                  <h4 className="text-red-500 font-bold text-[11px] uppercase tracking-widest mb-2">Engagement</h4>
                  <p className="text-zinc-400 text-xs font-mono leading-relaxed">
                    Operate within a high-frequency collective of exceptional peers. The mission: craft scalable infrastructures, align stakeholders across continents, and prove impact with disciplined metrics.
                  </p>
                </div>

                <a href="mailto:recruitment@labxxx.io" className="block w-full py-5 bg-red-700 hover:bg-red-600 text-white font-mono text-sm font-bold uppercase tracking-[0.2em] text-center transition-all shadow-lg hover:shadow-red-900/50">
                  Submit Professional Profile
                </a>
                <p className="text-center text-zinc-500 text-[10px] font-mono mt-4 uppercase">
                  Confidentiality is maintained throughout the evaluation process.
                </p>
              </div>
            )}

          </div>
        </div>
      )}

      {/* --- VERTICAL GRID LINES (GLOBAL) --- */}
      <div className="fixed inset-0 pointer-events-none z-0 flex justify-between px-6 max-w-7xl mx-auto opacity-10 dark:opacity-5">
         <div className="w-px h-full bg-zinc-500"></div>
         <div className="w-px h-full bg-zinc-500 hidden md:block"></div>
         <div className="w-px h-full bg-zinc-500 hidden md:block"></div>
         <div className="w-px h-full bg-zinc-500"></div>
      </div>

      {/* --- NAVBAR --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-zinc-200/20 dark:border-zinc-800/50 ${scrolled ? 'bg-[#f4f4f5]/90 dark:bg-[#050505]/90 backdrop-blur-md py-3' : 'py-6 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-20">
          <div className="flex items-center gap-3">
            <div className="text-emerald-600 dark:text-emerald-500">
              <RomanLogo />
            </div>
            <span className="font-serif text-xl tracking-[0.2em] font-bold">LABXXX</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-xs font-mono font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            <a href="#method" className="hover:text-red-600 transition-colors">[ {t.nav.method} ]</a>
            <a href="#oracle" className="hover:text-red-600 transition-colors">[ {t.nav.oracle} ]</a>
            <a href="#services" className="hover:text-red-600 transition-colors">[ {t.nav.services} ]</a>
            <a href="#journal" className="hover:text-red-600 transition-colors">[ {t.nav.journal} ]</a>
          </div>

        </div>
      </nav>

      {/* --- HERO SECTION: BRUTALIST --- */}
      <header className="relative min-h-screen flex flex-col justify-center pt-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-emerald-600/5 rounded-full blur-[150px] pointer-events-none translate-x-1/3 -translate-y-1/4"></div>
        
        <div className="max-w-7xl w-full mx-auto relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
           
           <div className="md:col-span-8 relative">
              <div className="mb-8 flex items-center gap-4">
                 <div className="w-12 h-[2px] bg-red-600"></div>
                 <span className="font-mono text-xs text-red-600 font-bold tracking-[0.2em] uppercase">
                    {t.hero.pre}
                 </span>
              </div>

              <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.85] text-zinc-900 dark:text-zinc-100 uppercase mb-8">
                 {t.hero.title} <br/>
                 {/* Main Title Highlight: Emerald (Success) - Changed font-light to font-black for maximum boldness */}
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-emerald-500 dark:from-emerald-400 dark:to-emerald-600 italic font-black ml-4">
                    {t.hero.titleHigh}
                 </span>
              </h1>

              <div className="md:pl-20 border-l border-zinc-300 dark:border-zinc-800 ml-2 pl-6">
                 <p className="font-mono text-sm md:text-base text-zinc-600 dark:text-zinc-400 max-w-md leading-relaxed mb-8">
                    // {t.hero.subtitle}
                 </p>
                 <a href="#oracle" className="inline-flex items-center gap-4 px-8 py-4 bg-red-700 dark:bg-red-600 text-white font-mono text-xs font-bold uppercase tracking-widest hover:bg-red-800 dark:hover:bg-red-500 transition-all group shadow-[0_0_20px_rgba(220,38,38,0.3)]">
                    {t.hero.cta}
                    <MoveRight size={14} className="group-hover:translate-x-1 transition-transform" />
                 </a>
              </div>
           </div>

           <div className="md:col-span-4 hidden md:flex flex-col justify-between h-[60vh] border-l border-dashed border-zinc-300 dark:border-zinc-800 pl-8">
              <div className="font-mono text-[10px] text-zinc-400 space-y-2">
                 <p>SYS.STATUS: ONLINE</p>
                 <p>LOC: 12.0464° S, 77.0428° W</p>
                 <p>ENV: PRODUCTION</p>
              </div>
              <div className="animate-pulse">
                 <Hexagon size={48} strokeWidth={1} className="text-red-600/50" />
              </div>
              <div className="font-mono text-right text-[10px] text-zinc-400">
                 <p>SCROLL_Y: {scrolled ? 'ACTIVE' : 'IDLE'}</p>
              </div>
           </div>

        </div>

        <div className="absolute bottom-12 left-6 md:left-auto md:right-12 flex items-center gap-4">
           <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">Explore</span>
           <div className="w-16 h-[1px] bg-zinc-400"></div>
        </div>
      </header>

      {/* --- RECRUITMENT NOTICE (THE NEXUS REQUIREMENT) --- */}
      <section className="py-20 px-6 bg-[#050505] border-t border-zinc-800 relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(220,38,38,0.03)_0%,_transparent_70%)]"></div>
         <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 text-red-500 border border-red-900/50 bg-red-900/10 px-4 py-1 rounded-full mb-6">
               <AlertTriangle size={12} />
               <span className="text-[10px] font-mono font-bold uppercase tracking-widest">Strategic Talent Brief</span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Executive Search: Lead Architect</h2>

            <div className="max-w-3xl mx-auto text-zinc-400 font-mono text-sm leading-relaxed mb-10 space-y-4">
               <p>
                  We are not looking for employees. We are engaging a <strong className="text-white">NEXUS NODE</strong>: someone with an obsession for excellence who can partner with outstanding individuals holding a truly international cosmovision.
               </p>
               <p>
                  The mandate is to fuse <span className="text-emerald-500">software architecture</span>, <span className="text-emerald-500">data-intensive systems</span>, and <span className="text-emerald-500">business strategy</span> into a single operating model. You will architect resilient platforms, steer governance, and translate executive objectives into actionable programs.
               </p>
               <p>
                  If you are a polymath who thrives in high-frequency collaboration and can align global teams toward measurable impact, we want to meet you.
               </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 mb-10 text-xs font-mono uppercase tracking-wider text-zinc-500">
               <span className="flex items-center gap-2"><Globe size={14} className="text-red-600" /> Remote / Global</span>
               <span className="flex items-center gap-2"><Cpu size={14} className="text-red-600" /> Systems Leadership</span>
               <span className="flex items-center gap-2"><TrendingUp size={14} className="text-red-600" /> Business Alignment</span>
            </div>

            <button onClick={() => setJoinModalOpen(true)} className="px-10 py-4 border border-zinc-700 hover:border-red-600 hover:bg-red-600/10 text-white font-mono text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300">
               Coordinate Executive Conversation
            </button>
         </div>
      </section>

      {/* --- METHOD --- */}
      <section id="method" className="py-32 px-6 border-t border-zinc-200 dark:border-zinc-800 relative bg-zinc-50 dark:bg-[#0a0a0a]">
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 pb-6 border-b-2 border-zinc-900 dark:border-zinc-100">
               <div>
                  <div className="flex items-center gap-2 text-red-600 font-mono text-xs uppercase tracking-[0.2em] mb-2">
                     <Activity size={14} />
                     <span>Process.exe</span>
                  </div>
                  <h2 className="font-serif text-5xl md:text-6xl text-zinc-900 dark:text-zinc-100 uppercase">{t.method.title}</h2>
               </div>
               <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest mt-4 md:mt-0">
                  {t.method.subtitle}
               </p>
            </div>

            <div className="grid grid-cols-1 gap-0">
               {t.method.steps.map((step, idx) => (
                 <div key={idx} className="group grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-b border-zinc-300 dark:border-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-900 transition-colors">
                    <div className="md:col-span-2">
                       <span className="font-mono text-5xl text-zinc-300 dark:text-zinc-800 group-hover:text-red-600 transition-colors">
                          {step.id}
                       </span>
                    </div>
                    <div className="md:col-span-4">
                       <h3 className="font-serif text-3xl text-zinc-900 dark:text-zinc-100 uppercase mb-2 group-hover:translate-x-2 transition-transform">{step.title}</h3>
                    </div>
                    <div className="md:col-span-6 flex items-center">
                       <p className="font-mono text-sm text-zinc-600 dark:text-zinc-400 border-l border-red-600 pl-4 max-w-md">
                          {step.desc}
                       </p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- SERVICES --- */}
      <section id="services" className="py-32 px-6 bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 overflow-hidden">
         <div className="max-w-7xl mx-auto">
            <div className="mb-20">
               <span className="font-mono text-xs text-red-500 dark:text-red-600 uppercase tracking-[0.2em] mb-4 block">
                  /// {t.services.subtitle}
               </span>
               <h2 className="font-serif text-5xl md:text-7xl uppercase border-b border-zinc-700 dark:border-zinc-300 pb-8 inline-block">
                  {t.services.title}
               </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-zinc-800 dark:border-zinc-300">
               {t.services.items.map((item, idx) => (
                  <div key={idx} className="group border-r border-b border-zinc-800 dark:border-zinc-300 p-8 md:p-12 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all duration-300 relative">
                     <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Asterisk size={24} className="text-red-500 dark:text-red-600 animate-spin-slow" />
                     </div>
                     <div className="h-48 flex flex-col justify-between">
                        <div>
                           <h3 className="font-serif text-3xl md:text-4xl uppercase mb-2">{item.title}</h3>
                           <p className="font-mono text-xs text-zinc-400 dark:text-zinc-600 uppercase tracking-wider">{item.desc}</p>
                        </div>
                        <div className="pt-8 border-t border-zinc-800 dark:border-zinc-300 mt-auto">
                           <p className="font-mono text-sm text-red-400 dark:text-red-700">
                              {item.detail}
                           </p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- ORACLE --- */}
      <section id="oracle" className="relative py-32 px-6 bg-[#050505] min-h-screen flex items-center justify-center border-t border-zinc-800">
         <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1548544149-4835e62ee5b3?q=80&w=2574&auto=format&fit=crop" alt="Ruins" className="w-full h-full object-cover opacity-20 grayscale contrast-125" />
            <div className="absolute inset-0 bg-[#050505]/80"></div>
         </div>
         <div className="absolute inset-0 z-10 opacity-30">
            <StarryBackground />
         </div>
         <div className="relative z-20 max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-5 bg-black border border-zinc-800 p-8 shadow-2xl relative">
               <div className="absolute top-0 left-0 w-full h-1 bg-red-600"></div>
               <div className="flex items-center gap-2 mb-8 text-zinc-500 font-mono text-xs uppercase">
                  <Terminal size={14} /> <span>/usr/bin/oracle_v2</span>
               </div>
               <h2 className="font-serif text-4xl text-white mb-2">{t.oracle.title}</h2>
               <p className="font-mono text-xs text-zinc-400 mb-8 border-b border-zinc-800 pb-4">{t.oracle.desc}</p>
               <form onSubmit={handleOracleConsult} className="space-y-6">
                  <div className="group">
                     <label className="block font-mono text-xs text-red-600 mb-2">{t.oracle.input1}</label>
                     <input type="text" value={industry} onChange={(e) => setIndustry(e.target.value)} className="w-full bg-zinc-900/50 border border-zinc-700 p-3 text-zinc-200 font-mono text-sm focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600 transition-all placeholder-zinc-700" placeholder="Ex: Fintech" />
                  </div>
                  <div className="group">
                     <label className="block font-mono text-xs text-red-600 mb-2">{t.oracle.input2}</label>
                     <input type="text" value={obstacle} onChange={(e) => setObstacle(e.target.value)} className="w-full bg-zinc-900/50 border border-zinc-700 p-3 text-zinc-200 font-mono text-sm focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600 transition-all placeholder-zinc-700" placeholder="Ex: Churn Rate" />
                  </div>
                  <button type="submit" disabled={loading || !industry || !obstacle} className="w-full mt-4 py-4 bg-zinc-200 text-black font-mono text-xs font-bold uppercase tracking-widest hover:bg-red-600 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                     {loading ? `[ ${t.oracle.loading} ]` : `[ ${t.oracle.button} ]`}
                  </button>
               </form>
            </div>
            <div className="md:col-span-7 bg-zinc-900/50 backdrop-blur-sm border-l border-zinc-700 p-8 flex flex-col justify-center min-h-[400px] relative">
               <div className="absolute inset-0 pointer-events-none opacity-5 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,6px_100%]"></div>
               {!strategy && !loading && (
                  <div className="text-center">
                     <div className="w-16 h-16 border border-zinc-700 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse"><div className="w-2 h-2 bg-red-600"></div></div>
                     <p className="font-mono text-zinc-500 text-sm">Awaiting Input Parameters...</p>
                  </div>
               )}
               {loading && (
                  <div className="space-y-2 font-mono text-xs text-emerald-500/70">
                     <p className="typing-effect">Initializing connection...</p>
                     <p className="typing-effect delay-100">Accessing historical patterns...</p>
                     <p className="typing-effect delay-200">Calculating growth vector...</p>
                     <div className="w-full h-1 bg-zinc-800 mt-4 overflow-hidden"><div className="h-full bg-emerald-600 w-1/3 animate-loading-bar"></div></div>
                  </div>
               )}
               {strategy && (
                  <div className="relative z-10 space-y-8 animate-fade-in">
                     <div className="flex justify-between items-center border-b border-zinc-700 pb-2">
                        <h3 className="font-serif text-2xl text-white">{t.oracle.resultTitle}</h3>
                        <span className="bg-emerald-900/30 text-emerald-500 px-2 py-0.5 text-[10px] font-mono border border-emerald-900">SUCCESS</span>
                     </div>
                     <div className="space-y-1">
                        <span className="font-mono text-[10px] text-zinc-500 uppercase">{t.oracle.labels[0]}</span>
                        <p className="font-serif text-xl text-zinc-200 leading-snug">"{strategy.axiom}"</p>
                     </div>
                     <div className="grid grid-cols-2 gap-4">
                        <div className="bg-zinc-950 p-4 border border-zinc-800">
                           <span className="font-mono text-[10px] text-zinc-500 uppercase block mb-2">{t.oracle.labels[1]}</span>
                           <p className="font-mono text-xs text-red-500">{strategy.experiment}</p>
                        </div>
                        <div className="bg-zinc-950 p-4 border border-zinc-800">
                           <span className="font-mono text-[10px] text-zinc-500 uppercase block mb-2">{t.oracle.labels[2]}</span>
                           <p className="font-mono text-lg text-emerald-500 font-bold">{strategy.metric}</p>
                        </div>
                     </div>
                  </div>
               )}
            </div>
         </div>
      </section>

      {/* --- JOURNAL --- */}
      <section id="journal" className="py-40 px-6 bg-zinc-50 dark:bg-[#050505] border-t border-zinc-200 dark:border-zinc-800 relative overflow-hidden">
         <div className="absolute left-8 md:left-1/4 top-0 bottom-0 w-[1px] bg-red-600/30 z-0 hidden md:block"></div>
         <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row items-end gap-12 mb-24">
               <div className="md:w-1/4">
                  <div className="flex items-center gap-2 text-red-600 dark:text-red-600 font-mono text-xs uppercase tracking-[0.2em] mb-4">
                     <Asterisk size={14} className="animate-spin-slow" />
                     <span>Classified_Docs_v.1</span>
                  </div>
                  <h2 className="font-serif text-6xl md:text-7xl leading-[0.9] text-zinc-900 dark:text-zinc-100 mix-blend-difference uppercase">
                     {t.journal.title}
                  </h2>
               </div>
               <div className="md:w-3/4 pb-2 border-b-2 border-zinc-900 dark:border-zinc-100">
                  <p className="text-zinc-500 dark:text-zinc-400 max-w-xl font-mono text-sm uppercase tracking-wide">
                     / {t.journal.subtitle}
                  </p>
               </div>
            </div>
            <div className="flex flex-col gap-0">
               {t.journal.items.map((item, idx) => (
                  <div key={idx} onClick={() => setAccessModalOpen(true)} className="group relative border-b border-zinc-300 dark:border-zinc-800 hover:bg-white dark:hover:bg-zinc-900/50 transition-colors duration-300 py-12 md:py-16 cursor-pointer">
                     <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                        <div className="md:col-span-3 pl-4 md:pl-12 relative">
                           <span className="font-mono text-5xl md:text-6xl text-zinc-200 dark:text-zinc-800 group-hover:text-red-600/50 transition-colors block -mt-4">{item.id}</span>
                           <div className="absolute top-2 left-0 w-2 h-2 bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                        <div className="md:col-span-7 pr-4 md:pr-12">
                           <div className="flex flex-wrap gap-4 items-center mb-4 text-xs font-mono font-bold uppercase tracking-wider text-zinc-500">
                              <span className="bg-zinc-200 dark:bg-zinc-800 px-2 py-1 text-zinc-900 dark:text-zinc-100">{item.category}</span>
                              <span className="flex items-center gap-1"><MoveRight size={10} /> {item.date}</span>
                           </div>
                           <h3 className="font-serif text-3xl md:text-5xl uppercase leading-none mb-6 text-zinc-900 dark:text-white group-hover:translate-x-2 transition-transform duration-300">{item.title}</h3>
                           <p className="text-zinc-600 dark:text-zinc-400 font-mono text-xs md:text-sm max-w-lg leading-relaxed border-l-2 border-zinc-300 dark:border-zinc-700 pl-4">{item.desc}</p>
                        </div>
                        <div className="md:col-span-2 flex justify-end items-center md:items-start h-full">
                            <div className="w-12 h-12 border border-zinc-900 dark:border-zinc-100 rounded-full flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-600 group-hover:text-white transition-all transform group-hover:rotate-45"><ArrowUpRight size={20} /></div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- SOCIAL PROOF --- */}
      <section className="py-24 px-6 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-[#050505]">
         <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
               <div className="w-4 h-4 bg-zinc-900 dark:bg-zinc-100"></div>
               <p className="text-xs font-mono font-bold tracking-[0.2em] text-zinc-500 uppercase">{t.social.title}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-300 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-800">
               {CLIENTS.map((client, idx) => (
                  <div key={idx} className="bg-zinc-100 dark:bg-[#050505] p-8 aspect-square flex flex-col justify-between hover:bg-white dark:hover:bg-zinc-900 transition-colors group cursor-crosshair">
                     <div className="flex justify-between items-start">
                        <span className="font-mono text-xs text-zinc-400">0{idx+1}</span>
                        <ArrowUpRight size={14} className="text-zinc-300 group-hover:text-red-600 transition-colors" />
                     </div>
                     <div>
                        <h4 className="font-serif text-xl md:text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">{client.name}</h4>
                        <p className="font-mono text-xs text-emerald-600 dark:text-emerald-500 font-bold">{client.result}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-zinc-200 dark:bg-[#050505] border-t border-zinc-300 dark:border-zinc-800 pt-16 pb-8 px-6">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-4">
               <div className="flex items-center gap-2 mb-6 text-zinc-900 dark:text-zinc-100">
                  <RomanLogo />
                  <span className="font-serif text-2xl font-bold tracking-widest">LABXXX</span>
               </div>
               <div className="font-mono text-[10px] text-zinc-500 uppercase space-y-2 border-l border-zinc-400 pl-4">
                  <p>STATUS: OPERATIONAL</p>
                  <p>VERSION: 2.5.0</p>
                  <p>SERVER: EU-WEST-1</p>
               </div>
            </div>
            <div className="md:col-span-4">
               <h4 className="font-mono text-xs font-bold uppercase mb-6 text-zinc-500 flex items-center gap-2">
                  <MapPin size={12} /> {t.footer.network}
               </h4>
               <div className="grid grid-cols-1 gap-0 border-t border-zinc-300 dark:border-zinc-800">
                  {CITIES.map(city => (
                     <CityClock key={city.name} {...city} />
                  ))}
               </div>
            </div>
            <div className="md:col-span-4 flex flex-col justify-between">
                <div className="space-y-4">
                   <button onClick={() => setAccessModalOpen(true)} className="block font-serif text-2xl hover:text-red-600 transition-colors text-left">Start Project</button>
                   <button onClick={() => setJoinModalOpen(true)} className="block font-serif text-2xl hover:text-red-600 transition-colors text-left">Join Team</button>
                </div>
            </div>
         </div>
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-300 dark:border-zinc-800 text-[10px] font-mono uppercase text-zinc-500 tracking-widest">
            <p>{t.footer.rights}</p>
            <div className="flex gap-6 mt-4 md:mt-0">
               <button onClick={() => setPrivacyModalOpen(true)} className="hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors">Privacy_Policy</button>
               <button onClick={() => setTermsModalOpen(true)} className="hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors">Terms_of_Use</button>
            </div>
         </div>
      </footer>
    </div>
  )
}

export default App
