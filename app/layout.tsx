import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Mutexly — AI Services",
  description:
    "Mutexly partners with forward-thinking teams to design, build, and deploy AI systems that drive real business outcomes. AI consulting, custom development, automation, and data analytics.",
  icons: {
    icon: [
      { url: "/logo/icon-app-purple.png", type: "image/png" },
      { url: "/logo/icon-mark-light.png", type: "image/png" },
    ],
    apple: [{ url: "/logo/icon-app-purple.png", type: "image/png" }],
    shortcut: ["/logo/icon-app-purple.png"],
  },
  openGraph: {
    title: "Mutexly — AI Services",
    description:
      "Enterprise-grade AI consulting, custom development, automation, and analytics.",
    images: [
      {
        url: "/logo/logo-horizontal-gradient-dark.png",
        alt: "Mutexly logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mutexly — AI Services",
    description:
      "Enterprise-grade AI consulting, custom development, automation, and analytics.",
    images: ["/logo/logo-horizontal-gradient-dark.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${spaceGrotesk.variable} ${dmSans.variable} overflow-x-hidden`}
        style={{
          WebkitOverflowScrolling: "touch",
          touchAction: "pan-y",
          overscrollBehavior: "contain",
        }}
      >
        {children}
      </body>
    </html>
  )
}
