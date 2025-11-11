import { useEffect, useRef, useState } from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Check, Loader2, Mail, Phone, Package, Palette, Send, Sparkles } from 'lucide-react'

function Navbar() {
  return (
    <div className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 border-b border-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-md shadow-emerald-500/30 flex items-center justify-center text-white font-bold">IJ</div>
          <span className="text-xl font-extrabold tracking-tight text-emerald-700">InventoJoy</span>
        </div>
        <a href="#preorder" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-colors">
          <Sparkles className="h-4 w-4" /> Pre-order
        </a>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/95Gu7tsx2K-0F3oi/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/90" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="py-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm mb-4">
            <span className="h-2 w-2 rounded-full bg-emerald-500" /> New STEM Toy • Limited pre-orders
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Build, Learn, and Play with InventoJoy
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-xl">
            A creative system of smart building blocks that teaches problem-solving, logic, and engineering through play. Dynamic 3D experience. Kid-approved. Parent-loved.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#preorder" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-colors">
              <Package className="h-5 w-5" /> Reserve yours
            </a>
            <a href="#features" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-emerald-700 ring-1 ring-emerald-200 hover:ring-emerald-300 transition">
              <Sparkles className="h-5 w-5" /> See features
            </a>
          </div>
          <div className="mt-6 text-sm text-gray-500">Ships this season • Early-bird pricing • 100% refundable</div>
        </motion.div>

        <div className="hidden md:block" />
      </div>
    </section>
  )
}

function Features() {
  const items = [
    {
      title: 'Hands-on learning',
      desc: 'Encourages creativity, problem-solving, and early engineering skills.',
    },
    {
      title: 'Safe & durable',
      desc: 'Kid-safe materials designed for long-lasting play sessions.',
    },
    {
      title: 'Modular blocks',
      desc: 'Snap, rotate, and invent limitless combinations and challenges.',
    },
  ]

  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/60 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Thoughtfully engineered for joyful learning</h2>
          <p className="mt-3 text-gray-600">Every piece is designed to spark curiosity and build confidence.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="group rounded-2xl p-6 bg-white/70 backdrop-blur border border-emerald-100 shadow-lg hover:shadow-emerald-200/50 transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-emerald-100 text-emerald-700 grid place-content-center font-bold mb-4">{i + 1}</div>
              <h3 className="text-lg font-semibold text-gray-900">{it.title}</h3>
              <p className="mt-2 text-gray-600">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Input({ label, icon: Icon, ...props }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-gray-700">{label}</span>
      <div className="mt-1.5 relative">
        {Icon && <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-emerald-500" />}
        <input {...props} className={`w-full rounded-xl border border-gray-200 bg-white/80 backdrop-blur px-3 ${Icon ? 'pl-9' : ''} py-2.5 outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition`} />
      </div>
    </label>
  )
}

function Select({ label, icon: Icon, children, ...props }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-gray-700">{label}</span>
      <div className="mt-1.5 relative">
        {Icon && <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-emerald-500" />}
        <select {...props} className={`w-full rounded-xl border border-gray-200 bg-white/80 backdrop-blur px-3 ${Icon ? 'pl-9' : ''} py-2.5 outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition`}>
          {children}
        </select>
      </div>
    </label>
  )
}

function Textarea({ label, ...props }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-gray-700">{label}</span>
      <textarea {...props} className="mt-1.5 w-full rounded-xl border border-gray-200 bg-white/80 backdrop-blur px-3 py-2.5 h-28 outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition" />
    </label>
  )
}

function PreorderForm() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(null)
  const [error, setError] = useState('')
  const formRef = useRef(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(null)

    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      phone: form.get('phone'),
      quantity: Number(form.get('quantity') || 1),
      color: form.get('color') || null,
      message: form.get('message') || null,
      consent: form.get('consent') === 'on',
      source: 'website'
    }

    if (!payload.consent) {
      setLoading(false)
      setError('Please provide consent to be contacted about your pre-order.')
      return
    }

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/preorders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      if (!res.ok) throw new Error(`Request failed: ${res.status}`)
      const data = await res.json()
      setSuccess(data)
      if (formRef.current) formRef.current.reset()
    } catch (err) {
      setError(err.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="preorder" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-emerald-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-start">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="rounded-3xl p-8 bg-white/70 backdrop-blur border border-emerald-100 shadow-xl">
          <h3 className="text-2xl font-bold text-gray-900">Reserve your InventoJoy kit</h3>
          <p className="mt-2 text-gray-600">No payment required today. We’ll notify you before shipping.</p>

          <form ref={formRef} onSubmit={onSubmit} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input name="name" label="Full name" placeholder="Jane Doe" required />
            <Input name="email" label="Email" type="email" placeholder="jane@domain.com" required icon={Mail} />
            <Input name="phone" label="Phone" placeholder="+1 (555) 000-0000" icon={Phone} />
            <Select name="quantity" label="Quantity" icon={Package} defaultValue="1">
              {Array.from({ length: 10 }).map((_, i) => (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              ))}
            </Select>
            <Select name="color" label="Preferred color" icon={Palette} defaultValue="">
              <option value="">No preference</option>
              <option value="Invento Green">Invento Green</option>
              <option value="Sunrise Orange">Sunrise Orange</option>
              <option value="Sky Blue">Sky Blue</option>
              <option value="Playful Purple">Playful Purple</option>
            </Select>
            <div className="sm:col-span-2">
              <Textarea name="message" label="Notes" placeholder="Any special requests?" />
            </div>

            <label className="sm:col-span-2 flex items-start gap-3">
              <input type="checkbox" name="consent" className="mt-1 h-5 w-5 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500" />
              <span className="text-sm text-gray-600">I agree to be contacted about my pre-order and product updates.</span>
            </label>

            {error && (
              <div className="sm:col-span-2 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg p-3">{error}</div>
            )}

            {success && (
              <div className="sm:col-span-2 flex items-center gap-2 text-sm text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg p-3">
                <Check className="h-4 w-4" /> Pre-order received! Reference: {success.id}
              </div>
            )}

            <div className="sm:col-span-2 flex gap-3">
              <button disabled={loading} type="submit" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 disabled:opacity-60">
                {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />} Submit pre-order
              </button>
              <a href="#top" className="px-6 py-3 rounded-xl bg-white text-emerald-700 ring-1 ring-emerald-200 hover:ring-emerald-300">Back to top</a>
            </div>
          </form>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-3xl p-8 bg-gradient-to-br from-emerald-100 to-emerald-50 border border-emerald-200">
          <h4 className="text-xl font-bold text-emerald-900">What you’ll get</h4>
          <ul className="mt-4 space-y-3 text-emerald-900/80">
            <li>• Core set of durable building blocks</li>
            <li>• Challenge cards for progressive learning</li>
            <li>• Access to interactive activities</li>
            <li>• Early-bird bonuses for first 500 orders</li>
          </ul>
          <div className="mt-6 text-sm text-emerald-800/80">Designed for ages 6+. Safe materials. Endless creativity.</div>
        </motion.div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="relative py-10 border-t border-emerald-100 bg-white/70 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-emerald-800">
          <div className="h-8 w-8 rounded-md bg-emerald-500" />
          <span className="font-semibold">InventoJoy</span>
        </div>
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} InventoJoy. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default function App() {
  useEffect(() => {
    // smooth scroll behavior for hash links
    if ('scrollBehavior' in document.documentElement.style) return
  }, [])

  return (
    <div id="top" className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <Hero />
      <Features />
      <PreorderForm />
      <Footer />
    </div>
  )
}
