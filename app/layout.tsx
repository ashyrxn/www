import type { Metadata } from "next"
import type React from "react"
import "./globals.css"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"



const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Ash's Boundary ⭐️",
  description: "I'm not quite alive, not quite gone. Just me and my links in the space between.",
  authors: [{ name: "Ash" }],
  creator: "Ash",
  keywords: ["Ash", "ashyrxn", "portfolio", "developer", "portugal", "social links"],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/int/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/int/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" }
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/int/favicon/apple-touch-icon.png", sizes: "180x180" }
    ],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ashyrxn.xyz",
    title: "Ash's Boundary ⭐️",
    description: "I'm not quite alive, not quite gone. Just me and my links in the space between.",
    siteName: "Ash's Boundary",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Ash's Boundary",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ash's Boundary",
    description: "I'm not quite alive, not quite gone. Just me and my links in the space between.",
    creator: "@ashyrxn",
    images: ["/og.png"],
  },
  generator: "v0",
  metadataBase: new URL("https://ashyrxn.xyz"),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <Analytics/>
      <SpeedInsights/>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-zinc-950 text-zinc-100`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ash",
              description: "Not quite alive, not quite gone. A personal space between the boundaries",
              url: "https://ashyrxn.xyz",
              sameAs: [
                "https://github.com/ashyrxn",
                "https://x.com/ashyrxn",
                "https://instagram.com/ashyrxn",
                "https://reddit.com/u/ashyrxn",
                "https://bsky.app/profile/ashyrxn.xyz",
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}