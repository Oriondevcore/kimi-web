'use client'

import { useEffect } from 'react'

export function ParticleBackground() {
  useEffect(() => {
    // Create particles dynamically
    const container = document.getElementById('particles-container')
    if (!container) return

    const particleCount = 40
    const particles: HTMLElement[] = []

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div')
      particle.className = 'particle'
      
      const size = Math.random() * 2 + 0.5
      const duration = Math.random() * 20 + 10
      const delay = Math.random() * 5
      const left = Math.random() * 100
      
      particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${left}%;
        animation-duration: ${duration}s;
        animation-delay: ${delay}s;
      `
      
      container.appendChild(particle)
      particles.push(particle)
    }

    return () => {
      particles.forEach(p => p.remove())
    }
  }, [])

  return (
    <>
      <style>{`
        #particles-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
          overflow: hidden;
        }

        .particle {
          position: absolute;
          bottom: 0;
          border-radius: 50%;
          background: #D4A84B;
          opacity: 0;
          animation: float-particle linear infinite;
        }

        @keyframes float-particle {
          0% {
            transform: translateY(100vh) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 0.4;
          }
          90% {
            opacity: 0.1;
          }
          100% {
            transform: translateY(-10vh) scale(1);
            opacity: 0;
          }
        }
      `}</style>
      <div id="particles-container" />
    </>
  )
}
