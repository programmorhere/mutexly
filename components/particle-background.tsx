"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  connections: number[]
  hue: number
  pulsePhase: number
  type: "primary" | "accent" | "glow"
  originalVx: number
  originalVy: number
  attractionForce: number
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>()
  const mouseRef = useRef({ x: 0, y: 0, isActive: false })
  const deviceOrientationRef = useRef({ x: 0, y: 0 })
  const lastFrameTime = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticles = () => {
      const particles: Particle[] = []
      // Performance guardrails - desktop vs mobile particle count
      const isMobile = window.innerWidth < 768
      const particleCount = isMobile
        ? Math.min(80, Math.floor((canvas.width * canvas.height) / 12000))
        : Math.min(160, Math.floor((canvas.width * canvas.height) / 8000))

      for (let i = 0; i < particleCount; i++) {
        const type = Math.random() < 0.6 ? "primary" : Math.random() < 0.8 ? "accent" : "glow"
        // Reduced speed for mobile performance
        const speedMultiplier = isMobile ? 0.6 : 1
        const vx = (Math.random() - 0.5) * (type === "glow" ? 0.3 : 0.8) * speedMultiplier
        const vy = (Math.random() - 0.5) * (type === "glow" ? 0.3 : 0.8) * speedMultiplier
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx,
          vy,
          size: type === "glow" ? Math.random() * 3 + 2 : Math.random() * 2 + 0.5,
          opacity: type === "glow" ? Math.random() * 0.3 + 0.1 : Math.random() * 0.6 + 0.2,
          connections: [],
          hue: type === "primary" ? 200 : type === "accent" ? 160 : 180,
          pulsePhase: Math.random() * Math.PI * 2,
          type,
          originalVx: vx,
          originalVy: vy,
          attractionForce: Math.random() * 0.5 + 0.3,
        })
      }
      particlesRef.current = particles
    }

    // Throttled mouse move handler for performance
    let mouseMoveTimeout: NodeJS.Timeout
    const handleMouseMove = (e: MouseEvent) => {
      clearTimeout(mouseMoveTimeout)
      mouseMoveTimeout = setTimeout(() => {
        const rect = canvas.getBoundingClientRect()
        mouseRef.current = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
          isActive: true,
        }
      }, 16) // ~60fps throttling
    }

    const handleMouseLeave = () => {
      mouseRef.current.isActive = false
    }

    // Throttled touch handler for mobile performance
    let touchMoveTimeout: NodeJS.Timeout
    const handleTouchMove = (e: TouchEvent) => {
      // Removed e.preventDefault() to allow natural scrolling
      clearTimeout(touchMoveTimeout)
      touchMoveTimeout = setTimeout(() => {
        const rect = canvas.getBoundingClientRect()
        const touch = e.touches[0]
        if (touch) {
          mouseRef.current = {
            x: touch.clientX - rect.left,
            y: touch.clientY - rect.top,
            isActive: true,
          }
        }
      }, 32) // Reduced frequency for mobile
    }

    const handleTouchEnd = () => {
      mouseRef.current.isActive = false
    }

    const handleDeviceOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma !== null && e.beta !== null) {
        // Reduced device orientation influence for smoother mobile experience
        deviceOrientationRef.current = {
          x: (e.gamma / 90) * canvas.width * 0.05,
          y: (e.beta / 90) * canvas.height * 0.05,
        }
      }
    }

    const animate = (currentTime: number) => {
      // FPS cap at 60fps for performance
      if (currentTime - lastFrameTime.current < 16.67) {
        animationRef.current = requestAnimationFrame(animate)
        return
      }
      lastFrameTime.current = currentTime

      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, "rgba(9, 7, 18, 0.95)")
      gradient.addColorStop(0.5, "rgba(9, 7, 18, 0.98)")
      gradient.addColorStop(1, "rgba(9, 7, 18, 1)")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const particles = particlesRef.current
      const time = Date.now() * 0.001
      const mouse = mouseRef.current
      const deviceTilt = deviceOrientationRef.current

      // Update particles
      particles.forEach((particle) => {
        let forceX = 0
        let forceY = 0

        // Improved mouse/touch interaction with proper radius
        if (mouse.isActive) {
          const dx = mouse.x - particle.x
          const dy = mouse.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const interactionRadius = window.innerWidth < 768 ? 120 : 160

          if (distance < interactionRadius && distance > 0) {
            // Gentle attraction with distance falloff
            const force = ((interactionRadius - distance) / interactionRadius) * 0.015 * particle.attractionForce
            forceX += (dx / distance) * force
            forceY += (dy / distance) * force
          }
        }

        // Device orientation influence (mobile)
        if (Math.abs(deviceTilt.x) > 0.1 || Math.abs(deviceTilt.y) > 0.1) {
          forceX += deviceTilt.x * 0.0005
          forceY += deviceTilt.y * 0.0005
        }

        // Apply forces with smooth interpolation back to original velocity
        particle.vx = particle.vx * 0.98 + (particle.originalVx + forceX) * 0.02
        particle.vy = particle.vy * 0.98 + (particle.originalVy + forceY) * 0.02

        particle.x += particle.vx
        particle.y += particle.vy
        particle.pulsePhase += 0.02

        // Bounce behavior to keep particles in viewport
        if (particle.x <= 0 || particle.x >= canvas.width) {
          particle.vx *= -1
          particle.originalVx *= -1
          particle.x = Math.max(0, Math.min(canvas.width, particle.x))
        }
        if (particle.y <= 0 || particle.y >= canvas.height) {
          particle.vy *= -1
          particle.originalVy *= -1
          particle.y = Math.max(0, Math.min(canvas.height, particle.y))
        }
      })

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            let opacity = ((150 - distance) / 150) * 0.12

            // Enhance connections near mouse/touch
            if (mouse.isActive) {
              const midX = (particles[i].x + particles[j].x) / 2
              const midY = (particles[i].y + particles[j].y) / 2
              const mouseDistance = Math.sqrt((mouse.x - midX) ** 2 + (mouse.y - midY) ** 2)
              const enhanceRadius = window.innerWidth < 768 ? 80 : 100
              if (mouseDistance < enhanceRadius) {
                opacity *= 1 + ((enhanceRadius - mouseDistance) / enhanceRadius) * 0.6
              }
            }

            const avgHue = (particles[i].hue + particles[j].hue) / 2
            ctx.strokeStyle = `hsla(${avgHue}, 70%, 60%, ${opacity})`
            ctx.lineWidth = particles[i].type === "glow" || particles[j].type === "glow" ? 1.5 : 1
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw particles
      particles.forEach((particle) => {
        const pulseIntensity = Math.sin(particle.pulsePhase) * 0.3 + 0.7
        let currentOpacity = particle.opacity * pulseIntensity * 0.8
        let currentSize = particle.size * (0.8 + pulseIntensity * 0.4)

        if (mouse.isActive) {
          const mouseDistance = Math.sqrt((mouse.x - particle.x) ** 2 + (mouse.y - particle.y) ** 2)
          const enhanceRadius = window.innerWidth < 768 ? 80 : 100
          if (mouseDistance < enhanceRadius) {
            const enhancement = ((enhanceRadius - mouseDistance) / enhanceRadius) * 0.4
            currentOpacity *= 1 + enhancement
            currentSize *= 1 + enhancement * 0.2
          }
        }

        // Main particle
        ctx.fillStyle = `hsla(${particle.hue}, 70%, 60%, ${currentOpacity})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, currentSize, 0, Math.PI * 2)
        ctx.fill()

        // Enhanced glow effect based on particle type
        if (particle.type === "glow") {
          ctx.shadowColor = `hsla(${particle.hue}, 80%, 70%, 0.6)`
          ctx.shadowBlur = 15
          ctx.fillStyle = `hsla(${particle.hue}, 80%, 70%, ${currentOpacity * 0.25})`
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, currentSize * 2, 0, Math.PI * 2)
          ctx.fill()
          ctx.shadowBlur = 0
        } else {
          ctx.shadowColor = `hsla(${particle.hue}, 70%, 60%, 0.4)`
          ctx.shadowBlur = 6
          ctx.fillStyle = `hsla(${particle.hue}, 80%, 70%, ${currentOpacity * 0.4})`
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, currentSize * 0.6, 0, Math.PI * 2)
          ctx.fill()
          ctx.shadowBlur = 0
        }
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    createParticles()
    animate(0)

    const handleResize = () => {
      resizeCanvas()
      createParticles()
    }

    // Bind events to window/document for click-through behavior
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)
    window.addEventListener("touchmove", handleTouchMove, { passive: true })
    window.addEventListener("touchend", handleTouchEnd)

    // Request device orientation permission on iOS
    if (
      typeof DeviceOrientationEvent !== "undefined" &&
      typeof (DeviceOrientationEvent as any).requestPermission === "function"
    ) {
      ;(DeviceOrientationEvent as any).requestPermission().then((response: string) => {
        if (response === "granted") {
          window.addEventListener("deviceorientation", handleDeviceOrientation)
        }
      })
    } else {
      window.addEventListener("deviceorientation", handleDeviceOrientation)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("touchend", handleTouchEnd)
      window.removeEventListener("deviceorientation", handleDeviceOrientation)
      window.removeEventListener("resize", handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      clearTimeout(mouseMoveTimeout)
      clearTimeout(touchMoveTimeout)
    }
  }, [])

  // Set z-index to 0 to ensure click-through behavior
  return <canvas ref={canvasRef} className="absolute inset-0" style={{ zIndex: 0 }} />
}
