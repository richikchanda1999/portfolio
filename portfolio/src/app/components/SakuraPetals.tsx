"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface Petal {
  x: number
  y: number
  size: number
  rotation: number
  xSpeed: number
  ySpeed: number
  rotationSpeed: number
}

export default function SakuraPetals() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const petalsRef = useRef<Petal[]>([])
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

    // Create petals
    const createPetals = () => {
      const petals: Petal[] = []
      const petalCount = Math.floor(window.innerWidth / 30) // Adjust density based on screen width

      for (let i = 0; i < petalCount; i++) {
        petals.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height - canvas.height,
          size: Math.random() * 10 + 5,
          rotation: Math.random() * 360,
          xSpeed: Math.random() * 2 - 1,
          ySpeed: Math.random() * 1 + 1,
          rotationSpeed: Math.random() * 2 - 1,
        })
      }

      petalsRef.current = petals
    }

    // Draw a petal
    const drawPetal = (petal: Petal) => {
      if (!ctx) return

      ctx.save()
      ctx.translate(petal.x, petal.y)
      ctx.rotate((petal.rotation * Math.PI) / 180)

      // Draw petal shape
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.bezierCurveTo(petal.size / 2, -petal.size / 2, petal.size, -petal.size / 4, petal.size, 0)
      ctx.bezierCurveTo(petal.size, petal.size / 4, petal.size / 2, petal.size / 2, 0, 0)

      // Gradient fill
      const gradient = ctx.createRadialGradient(petal.size / 2, 0, 0, petal.size / 2, 0, petal.size)
      gradient.addColorStop(0, "rgba(255, 223, 230, 0.9)")
      gradient.addColorStop(1, "rgba(255, 182, 193, 0.4)")

      ctx.fillStyle = gradient
      ctx.fill()
      ctx.restore()
    }

    // Animate petals
    const animatePetals = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      petalsRef.current.forEach((petal) => {
        // Update position
        petal.x += petal.xSpeed
        petal.y += petal.ySpeed
        petal.rotation += petal.rotationSpeed

        // Reset if out of bounds
        if (petal.y > canvas.height) {
          petal.y = -petal.size
          petal.x = Math.random() * canvas.width
        }

        // Add some wind effect
        petal.x += Math.sin(Date.now() * 0.001) * 0.5

        drawPetal(petal)
      })

      animationRef.current = requestAnimationFrame(animatePetals)
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()
    createPetals()
    animatePetals()

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
      className="sakura-bg"
    />
  )
}

