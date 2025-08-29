"use client"

import { Button } from "@/components/ui/button"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedCounter } from "@/components/animated-counter"
import { ParticleBackground } from "@/components/particle-background"
import { TypewriterText } from "@/components/typewriter-text"
import { GlassmorphismCard } from "@/components/glassmorphism-card"
import { MobileMenu } from "@/components/mobile-menu"
import { ComingSoonButton } from "@/components/coming-soon-tooltip"
import Swal from "sweetalert2"
import {
  CheckCircle,
  ArrowRight,
  Zap,
  Brain,
  BarChart3,
  MessageSquare,
  ImageIcon,
  Code,
  Target,
  TrendingUp,
  Heart,
  Eye,
} from "lucide-react"

const products = [
  {
    name: "Flowmind AI",
    tagline: "Workflow automation with AI",
    description:
      "Streamline your business processes with intelligent automation that learns and adapts to your workflow patterns.",
    icon: Zap,
    pricing: { weekly: 15, monthly: 50, yearly: 500 },
  },
  {
    name: "Lexora",
    tagline: "AI writing & content generation",
    description:
      "Create compelling content at scale with our advanced AI writing assistant that understands your brand voice.",
    icon: Brain,
    pricing: { weekly: 10, monthly: 35, yearly: 350 },
  },
  {
    name: "DataPulse",
    tagline: "AI-powered analytics dashboard",
    description: "Transform raw data into actionable insights with intelligent analytics and predictive modeling.",
    icon: BarChart3,
    pricing: { weekly: 25, monthly: 85, yearly: 850 },
  },
  {
    name: "EchoChat",
    tagline: "AI customer support chatbot",
    description:
      "Provide 24/7 customer support with an AI chatbot that understands context and delivers personalized responses.",
    icon: MessageSquare,
    pricing: { weekly: 20, monthly: 70, yearly: 700 },
  },
  {
    name: "Visionary",
    tagline: "AI image generation tool",
    description: "Create stunning visuals and artwork with our state-of-the-art AI image generation technology.",
    icon: ImageIcon,
    pricing: { weekly: 12, monthly: 40, yearly: 400 },
  },
  {
    name: "CodeMate",
    tagline: "AI coding assistant",
    description:
      "Accelerate your development workflow with intelligent code completion, debugging, and optimization suggestions.",
    icon: Code,
    pricing: { weekly: 18, monthly: 60, yearly: 600 },
  },
  {
    name: "AdWise AI",
    tagline: "AI marketing & ad optimization",
    description: "Maximize your advertising ROI with AI-driven campaign optimization and audience targeting.",
    icon: Target,
    pricing: { weekly: 30, monthly: 100, yearly: 1000 },
  },
  {
    name: "Insightly",
    tagline: "Predictive analytics for businesses",
    description: "Make data-driven decisions with advanced predictive analytics and business intelligence tools.",
    icon: TrendingUp,
    pricing: { weekly: 35, monthly: 120, yearly: 1200 },
  },
  {
    name: "HealthifyAI",
    tagline: "AI health & wellness tracker",
    description: "Monitor and improve your health with personalized AI recommendations and wellness insights.",
    icon: Heart,
    pricing: { weekly: 8, monthly: 25, yearly: 250 },
  },
  {
    name: "TrendLens",
    tagline: "AI social media trend analyzer",
    description: "Stay ahead of social media trends with AI-powered analysis and content strategy recommendations.",
    icon: Eye,
    pricing: { weekly: 22, monthly: 75, yearly: 750 },
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 glass-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center animate-neural-pulse">
              <span className="text-primary-foreground font-bold text-lg">M</span>
            </div>
            <span className="text-2xl font-bold font-[family-name:var(--font-heading)] hologram-text">Mutexly</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#products"
              className="text-foreground hover:text-primary transition-all duration-300 premium-hover"
            >
              Products
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-all duration-300 premium-hover">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-all duration-300 premium-hover">
              Contact
            </a>
          </nav>
          <MobileMenu />
        </div>
      </header>

      <section className="py-20 px-4 text-center relative overflow-hidden min-h-[80vh] flex items-center">
        <ParticleBackground />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 animate-morphing-gradient"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.2),transparent_50%)] animate-parallax-drift"></div>

        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-quantum-float"></div>
        <div
          className="absolute bottom-20 right-20 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-quantum-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/30 rounded-full blur-lg animate-quantum-float"
          style={{ animationDelay: "4s" }}
        ></div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <ScrollReveal direction="up" delay={100}>
            <h1 className="text-6xl md:text-8xl font-bold font-[family-name:var(--font-heading)] mb-6">
              <TypewriterText text="Mutexly" delay={500} speed={150} className="hologram-text animate-neon-flicker" />
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-float">
              Powering the Future of AI SaaS Products
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={300}>
            <p className="text-lg text-foreground/80 mb-10 max-w-3xl mx-auto leading-relaxed">
              Mutexly is the umbrella company behind multiple AI-powered SaaS products. We build innovative solutions
              that empower businesses and individuals to harness the power of artificial intelligence.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={400}>
            <Button
              size="lg"
              className="text-lg px-8 py-6 premium-hover animate-holographic-glow cyber-border relative overflow-hidden"
              onClick={() => {
                document.getElementById("products")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }}
            >
              Explore Our Products
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 px-4 relative">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal direction="up">
            <GlassmorphismCard className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="transform-3d">
                  <AnimatedCounter end={10} suffix="+" className="text-4xl font-bold hologram-text" />
                  <p className="text-muted-foreground mt-2">AI Products</p>
                </div>
                <div className="transform-3d">
                  <AnimatedCounter end={50000} suffix="+" className="text-4xl font-bold hologram-text" />
                  <p className="text-muted-foreground mt-2">Active Users</p>
                </div>
                <div className="transform-3d">
                  <AnimatedCounter end={99} suffix="%" className="text-4xl font-bold hologram-text" />
                  <p className="text-muted-foreground mt-2">Uptime</p>
                </div>
                <div className="transform-3d">
                  <AnimatedCounter end={24} suffix="/7" className="text-4xl font-bold hologram-text" />
                  <p className="text-muted-foreground mt-2">Support</p>
                </div>
              </div>
            </GlassmorphismCard>
          </ScrollReveal>
        </div>
      </section>

      <section id="products" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold font-[family-name:var(--font-heading)] mb-4 hologram-text">
                Our AI Products
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover our suite of AI-powered tools designed to transform how you work and create.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <GlassmorphismCard className="group cursor-pointer card-3d-hover transform-3d h-full flex flex-col">
                  <CardHeader className="pb-4 pt-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-all duration-500 animate-neural-pulse">
                        <product.icon className="h-6 w-6 text-primary transition-transform duration-300 group-hover:rotate-12" />
                      </div>
                      <Badge
                        variant="secondary"
                        className="text-xs group-hover:bg-primary/20 transition-colors duration-300 animate-holographic-glow"
                      >
                        AI Powered
                      </Badge>
                    </div>
                    <CardTitle className="font-[family-name:var(--font-heading)] text-xl group-hover:text-primary transition-colors duration-300">
                      {product.name}
                    </CardTitle>
                    <CardDescription className="text-primary font-medium">{product.tagline}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between py-4">
                    <p className="text-muted-foreground mb-6 leading-relaxed flex-1">{product.description}</p>

                    <div className="space-y-6">
                      <Tabs defaultValue="monthly" className="mb-4">
                        <TabsList className="grid w-full grid-cols-3 glass-card">
                          <TabsTrigger value="weekly" className="premium-hover">
                            Weekly
                          </TabsTrigger>
                          <TabsTrigger value="monthly" className="premium-hover">
                            Monthly
                          </TabsTrigger>
                          <TabsTrigger value="yearly" className="premium-hover">
                            Yearly
                          </TabsTrigger>
                        </TabsList>
                        <TabsContent value="weekly" className="text-center py-4">
                          <div className="text-3xl font-bold font-[family-name:var(--font-heading)] hologram-text">
                            ${product.pricing.weekly}
                          </div>
                          <div className="text-muted-foreground">per week</div>
                        </TabsContent>
                        <TabsContent value="monthly" className="text-center py-4">
                          <div className="text-3xl font-bold font-[family-name:var(--font-heading)] hologram-text">
                            ${product.pricing.monthly}
                          </div>
                          <div className="text-muted-foreground">per month</div>
                        </TabsContent>
                        <TabsContent value="yearly" className="text-center py-4">
                          <div className="text-3xl font-bold font-[family-name:var(--font-heading)] hologram-text">
                            ${product.pricing.yearly}
                          </div>
                          <div className="text-muted-foreground">per year</div>
                          <Badge variant="outline" className="mt-2 text-accent border-accent animate-holographic-glow">
                            Save 20%
                          </Badge>
                        </TabsContent>
                      </Tabs>

                      <ComingSoonButton className="interactive-button w-full premium-hover animate-neural-pulse cyber-border">
                        Learn More
                      </ComingSoonButton>
                    </div>
                  </CardContent>
                </GlassmorphismCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 animate-parallax-drift"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <ScrollReveal direction="up">
            <h2 className="text-5xl md:text-6xl font-bold font-[family-name:var(--font-heading)] mb-8 hologram-text">
              About Mutexly
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left" delay={200}>
              <GlassmorphismCard className="text-left p-8 card-3d-hover">
                <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] mb-4 text-primary">
                  Our Mission
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Mutexly focuses on building world-class AI SaaS tools that empower businesses and individuals to
                  achieve more through intelligent automation and insights.
                </p>
                <div className="flex items-center space-x-2 text-accent">
                  <CheckCircle className="h-5 w-5 animate-neural-pulse" />
                  <span className="font-medium">Innovation-driven development</span>
                </div>
              </GlassmorphismCard>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={400}>
              <GlassmorphismCard className="text-left p-8 card-3d-hover">
                <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] mb-4 text-primary">
                  Our Vision
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Advancing innovation by creating AI products that solve real-world problems and make artificial
                  intelligence accessible to everyone.
                </p>
                <div className="flex items-center space-x-2 text-accent">
                  <CheckCircle className="h-5 w-5 animate-neural-pulse" />
                  <span className="font-medium">Real-world problem solving</span>
                </div>
              </GlassmorphismCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
        <div className="container mx-auto max-w-2xl relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-6xl font-bold font-[family-name:var(--font-heading)] mb-4 hologram-text">
                Get in Touch
              </h2>
              <p className="text-xl text-muted-foreground">Ready to transform your business with AI? Let's talk.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <GlassmorphismCard className="card-3d-hover">
              <CardHeader className="pb-6 pt-6">
                <CardTitle className="font-[family-name:var(--font-heading)]">Contact Us</CardTitle>
                <CardDescription>Send us a message and we'll get back to you soon.</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <form
                    className="space-y-8"
                    onSubmit={async (e) => {
                      e.preventDefault();

                      const btn = e.currentTarget.querySelector("button[type='submit']") as HTMLButtonElement;
                      const name = (document.getElementById("name") as HTMLInputElement).value.trim();
                      const email = (document.getElementById("email") as HTMLInputElement).value.trim();
                      const message = (document.getElementById("message") as HTMLTextAreaElement).value.trim();

                      // Validation
                      if (!name || !email || !message) {
                        Swal.fire({
                          icon: "warning",
                          title: "Missing Fields",
                          text: "Please fill in all fields before sending.",
                        });
                        return;
                      }

                      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                      if (!emailRegex.test(email)) {
                        Swal.fire({
                          icon: "error",
                          title: "Invalid Email",
                          text: "Please enter a valid email address.",
                        });
                        return;
                      }

                      try {
                        btn.disabled = true;
                        btn.innerText = "Sending...";

                        const res = await fetch("/api/send-email", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({
                            subject: `Contact from ${name}`,
                            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
                          }),
                        });

                        const data = await res.json();
                        if (data.success) {
                          Swal.fire({
                            icon: "success",
                            title: "Message Sent!",
                            text: "Thanks for reaching out. We’ll get back to you soon.",
                          });
                          (document.getElementById("name") as HTMLInputElement).value = "";
                          (document.getElementById("email") as HTMLInputElement).value = "";
                          (document.getElementById("message") as HTMLTextAreaElement).value = "";
                        } else {
                          Swal.fire({
                            icon: "error",
                            title: "Failed",
                            text: data.error || "Something went wrong. Please try again later.",
                          });
                        }
                      } catch (err: any) {
                        Swal.fire({
                          icon: "error",
                          title: "Error",
                          text: err.message,
                        });
                      } finally {
                        btn.disabled = false;
                        btn.innerText = "Send Message";
                      }
                    }}
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-3">
                      Name
                    </label>
                    <Input
                        id="name"
                        placeholder="Your name"
                        className="premium-hover glass-card focus:animate-holographic-glow h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-3">
                      Email
                    </label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="premium-hover glass-card focus:animate-holographic-glow h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-3">
                      Message
                    </label>
                    <Textarea
                        id="message"
                        placeholder="Tell us about your project or question..."
                        rows={6}
                        className="premium-hover glass-card focus:animate-holographic-glow resize-none"
                    />
                  </div>
                  <Button
                      type="submit"
                      className="w-full premium-hover animate-neural-pulse cyber-border h-12"
                  >
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </form>


                <div className="mt-10 pt-8 pb-8 border-t border-border text-center">
                  <p className="text-muted-foreground">
                    Or reach us directly at{" "}
                    <a
                        href="mailto:info@mutexly.com"
                        className="text-primary hover:underline transition-all duration-300 premium-hover hologram-text"
                    >
                      info@mutexly.com
                    </a>
                  </p>
                </div>
              </CardContent>


            </GlassmorphismCard>
          </ScrollReveal>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border glass-card relative">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center animate-neural-pulse">
                  <span className="text-primary-foreground font-bold text-lg">M</span>
                </div>
                <span className="text-xl font-bold font-[family-name:var(--font-heading)]">Mutexly</span>
              </div>
              <p className="text-muted-foreground">
                Powering the future of AI SaaS products with innovative solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold font-[family-name:var(--font-heading)] mb-4">Products</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Flowmind AI
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Lexora
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    DataPulse
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    EchoChat
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold font-[family-name:var(--font-heading)] mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#about" className="hover:text-primary transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  {/*<a href="#" className="hover:text-primary transition-colors">*/}
                  {/*  Careers*/}
                  {/*</a>*/}
                </li>
                <li>
                  {/*<a href="#" className="hover:text-primary transition-colors">*/}
                  {/*  Blog*/}
                  {/*</a>*/}
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold font-[family-name:var(--font-heading)] mb-4">Legal</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a
                      href="/privacy-policy.pdf"
                      download
                      className="hover:text-primary transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                      href="/terms-of-service.pdf"
                      download
                      className="hover:text-primary transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                      href="/cookie-policy.pdf"
                      download
                      className="hover:text-primary transition-colors"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>

          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; 2025 Mutexly. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
