'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import AfricaScene from '@/components/AfricaScene'
import AIVoiceAgent from '@/components/AIVoiceAgent'
import DemoShowcase from '@/components/DemoShowcase'

export default function Home() {
  const [showAgent, setShowAgent] = useState(false)

  useEffect(() => {
    // Auto-show AI agent after 1 second
    const timer = setTimeout(() => setShowAgent(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen">
      {/* Hero Section with 3D */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <AfricaScene />
        
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-4 glow"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            ORION DEV CORE
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-3xl text-orion-gold mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            AI Hospitality Solutions for Africa
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-lg text-gray-300"
          >
            🗣️ Voice-First | 🌍 Multi-Language | 🤖 AI-Powered
          </motion.div>
        </div>
      </section>

      {/* AI Voice Agent */}
      {showAgent && <AIVoiceAgent />}

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-orion-orange">
            Our Solutions
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {demos.map((demo, i) => (
              <DemoShowcase key={i} {...demo} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Live Demos Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-orion-gold">
            Live Demonstrations
          </h2>

          <div className="space-y-12">
            <DemoFrame 
              title="AI Live Chat"
              url="https://odc-chat.pagedrop.io/"
              description="24/7 multilingual guest support with intelligent upselling"
            />
            
            <DemoFrame 
              title="Smart Dashboard"
              url="https://odc2026.pagedrop.io/"
              description="Real-time analytics and property management"
            />
            
            <DemoFrame 
              title="Rack Rate Optimizer"
              url="https://rack-rate.pagedrop.io/"
              description="AI-powered dynamic pricing for maximum revenue"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-orion-blue py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2024 Orion Dev Core | AI Hospitality Solutions</p>
          <p className="mt-2">🇿🇦 Proudly serving Africa's hospitality industry</p>
        </div>
      </footer>
    </main>
  )
}

const demos = [
  {
    title: "AI Chat Agent",
    description: "Speak in Zulu, Xhosa, Afrikaans & more",
    icon: "💬",
    color: "from-blue-600 to-blue-800"
  },
  {
    title: "Dynamic Pricing",
    description: "Maximize revenue with AI rack rates",
    icon: "💰",
    color: "from-green-600 to-green-800"
  },
  {
    title: "Guest Itineraries",
    description: "Personalized AI trip planning",
    icon: "🗺️",
    color: "from-purple-600 to-purple-800"
  },
  {
    title: "Smart Responses",
    description: "Automated guest communications",
    icon: "✉️",
    color: "from-orange-600 to-orange-800"
  },
  {
    title: "Ghost LAN",
    description: "Invisible network management",
    icon: "👻",
    color: "from-gray-600 to-gray-800"
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time insights & reporting",
    icon: "📊",
    color: "from-red-600 to-red-800"
  }
]

function DemoFrame({ title, url, description }: any) {
  return (
    <motion.div 
      className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="bg-gradient-to-r from-orion-blue to-orion-orange p-6">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-gray-200 mt-2">{description}</p>
      </div>
      <div className="relative h-[600px]">
        <iframe 
          src={url}
          className="w-full h-full"
          style={{ border: 'none' }}
          title={title}
        />
      </div>
    </motion.div>
  )
}