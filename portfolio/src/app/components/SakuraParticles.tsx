"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  rotation: number
  rotationSpeed: number
}

export default function SakuraParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    // Create particles
    const createParticles = () => {
      const particles: Particle[] = []
      // Fewer particles for a more minimalist look
      const particleCount = Math.floor(window.innerWidth / 150)

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 4 + 2, // Smaller petals
          speedX: Math.random() * 0.3 - 0.15, // Slower movement
          speedY: Math.random() * 0.15 + 0.05,
          opacity: Math.random() * 0.3 + 0.1, // More transparent
          rotation: Math.random() * 360,
          rotationSpeed: Math.random() * 0.3 - 0.15,
        })
      }

      particlesRef.current = particles
    }

    // Draw a petal
    const drawPetal = (particle: Particle) => {
      if (!ctx) return

      ctx.save()
      ctx.translate(particle.x, particle.y)
      ctx.rotate((particle.rotation * Math.PI) / 180)
      ctx.globalAlpha = particle.opacity

      // Draw petal shape - simpler, more minimalist
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.bezierCurveTo(particle.size / 2, -particle.size / 2, particle.size, -particle.size / 4, particle.size, 0)
      ctx.bezierCurveTo(particle.size, particle.size / 4, particle.size / 2, particle.size / 2, 0, 0)

      // Subtle pink fill
      ctx.fillStyle = "rgba(255, 121, 198, 0.6)"
      ctx.fill()
      ctx.restore()
    }

    // Animate particles
    const animateParticles = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach((particle) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY
        particle.rotation += particle.rotationSpeed

        // Add very gentle swaying motion
        particle.x += Math.sin(Date.now() * 0.001) * 0.1

        // Reset if out of bounds
        if (particle.y > canvas.height) {
          particle.y = -particle.size
          particle.x = Math.random() * canvas.width
          particle.opacity = Math.random() * 0.3 + 0.1
        }

        drawPetal(particle)
      })

      animationRef.current = requestAnimationFrame(animateParticles)
    }

    createParticles()
    animateParticles()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return (
    <motion.canvas
      ref={canvasRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-10"
    />
  )
}

