"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useEffect, useState, useCallback } from "react"
import { Icon } from "@iconify/react"

const SOCIAL_LINKS = [
  {
    name: "X",
    icon: "prime:twitter",
    url: "https://x.com/ashyrxn",
    hoverColor: "hover:text-white",
    bgColor: "hover:bg-white-300/10",
    description: "Follow me on X (Twitter)",
  },
  {
    name: "Instagram",
    icon: "mdi:instagram",
    url: "https://instagram.com/ashyrxn",
    hoverColor: "hover:text-purple-300",
    bgColor: "hover:bg-purple-500/10",
    description: "Follow me on Instagram",
  },
  {
    name: "Reddit",
    icon: "ri:reddit-line",
    url: "https://reddit.com/u/ashyrxn",
    hoverColor: "hover:text-orange-300",
    bgColor: "hover:bg-orange-500/10",
    description: "Follow me on Reddit",
  },
  {
    name: "Bluesky",
    icon: "ri:bluesky-line",
    url: "https://bsky.app/profile/ashyrxn.xyz",
    hoverColor: "hover:text-blue-300",
    bgColor: "hover:bg-blue-500/10",
    description: "Follow me on Bluesky",
  },
  {
    name: "Discord",
    icon: "ic:baseline-discord",
    url: "https://discord.com/users/1375275000642277467",
    hoverColor: "hover:text-indigo-300",
    bgColor: "hover:bg-indigo-500/10",
    description: "Connect with me on Discord",
  },
  {
    name: "Github",
    icon: "mingcute:github-line",
    url: "https://github.com/ashyrxn",
    hoverColor: "hover:text-gray-300",
    bgColor: "hover:bg-gray-500/10",
    description: "View my GitHub profile",
  },
] as const

const PROFILE = {
  name: "Ash",
  title: "I'm not quite alive, not quite gone",
  bio: "I'm Ash, I'm 15 and I'm just a random portuguese person on the Internet that loves yapping!",
  avatar: "/int/avatar.webp",
  backgroundImageDesktop: "/int/background.webp",
  backgroundImageMobile: "/int/background.webp",
  githubUrl: "https://github.com/ashyrxn/www",
  email: "ash@ashyrxn.xyz",
} as const

const FLOATING_ELEMENTS = [
  { size: "w-2 h-2", color: "bg-orange-400/20", position: "top-1/4 left-4", delay: "0s" },
  { size: "w-1 h-1", color: "bg-purple-400/30", position: "top-1/3 right-8", delay: "1s" },
  { size: "w-1.5 h-1.5", color: "bg-blue-400/25", position: "bottom-1/4 left-8", delay: "2s" },
  { size: "w-1 h-1", color: "bg-pink-400/20", position: "top-1/2 right-4", delay: "3s" },
  { size: "w-2 h-2", color: "bg-cyan-400/15", position: "bottom-1/3 right-12", delay: "4s" },
] as const

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isMounted) return
      const rect = e.currentTarget.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    },
    [isMounted],
  )

  const handleLinkClick = useCallback((url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }, [])

  const handleEmailClick = useCallback(() => {
    window.location.href = `mailto:${PROFILE.email}`
  }, [])

  if (!isMounted) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-100 flex flex-col items-center justify-center px-4 py-8 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/5 via-transparent to-blue-500/5 z-0" />

        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={PROFILE.backgroundImageDesktop || "/placeholder.svg"}
            alt=""
            fill
            className="object-cover opacity-5"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-zinc-950/80 to-zinc-950/90" />
        </div>

        <div className="absolute inset-0 z-0 block md:hidden">
          <Image
            src={PROFILE.backgroundImageMobile || "/placeholder.svg"}
            alt=""
            fill
            className="object-cover opacity-5"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-zinc-950/80 to-zinc-950/90" />
        </div>

        <div className="fixed top-6 right-6 z-30">
          <Button
            onClick={() => handleLinkClick(PROFILE.githubUrl)}
            className="group h-12 w-12 bg-zinc-900/60 hover:bg-zinc-800/80 backdrop-blur-xl border border-zinc-700/50 hover:border-zinc-600/70 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-zinc-900/50"
            variant="ghost"
            aria-label="Visit GitHub Repository"
          >
            <Icon
              icon="mdi:github"
              className="h-6 w-6 text-zinc-300 group-hover:text-white transition-all duration-300 group-hover:scale-110"
            />
          </Button>
        </div>

        <div className="w-full max-w-sm sm:max-w-md space-y-8 text-center relative z-20 opacity-0">
          <article className="group relative bg-zinc-900/40 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-zinc-700/50 shadow-2xl">
            <div className="relative z-10 space-y-6">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 rounded-full opacity-20 blur-sm animate-pulse" />
                  <div className="relative h-24 w-24 sm:h-28 sm:w-28 rounded-full overflow-hidden shadow-2xl ring-2 ring-orange-400/20">
                    <Image
                      src={PROFILE.avatar || "/placeholder.svg"}
                      alt={`${PROFILE.name} avatar`}
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 640px) 96px, 112px"
                    />
                  </div>
                </div>
              </div>

              <header className="space-y-3">
                <h1 className="text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
                  {PROFILE.name}
                </h1>
                <p className="text-base sm:text-lg text-zinc-400 font-medium italic opacity-90">{PROFILE.title}</p>
              </header>

              <section className="pt-2 space-y-2">
                <h2 className="text-zinc-200 text-base sm:text-base leading-relaxed font-medium">Hey there! 👋</h2>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed opacity-90">{PROFILE.bio}</p>
              </section>

              <div className="flex justify-center pt-4">
                <Button
                  onClick={handleEmailClick}
                  className="group h-12 px-6 bg-zinc-800/60 hover:bg-zinc-700/80 backdrop-blur-xl border border-zinc-600/50 hover:border-zinc-500/70 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-zinc-900/50 text-zinc-200 hover:text-white"
                  variant="ghost"
                  aria-label="Send Email"
                >
                  <Icon
                    icon="mdi:email-outline"
                    className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-300"
                  />
                  <span className="font-medium text-sm">Send me a message</span>
                </Button>
              </div>
            </div>
          </article>

          <nav className="space-y-3 pt-2">
            {SOCIAL_LINKS.map((link, index) => (
              <Button
                key={link.name}
                onClick={() => handleLinkClick(link.url)}
                className={`group w-full h-14 sm:h-16 bg-zinc-900/40 hover:bg-zinc-800/60 backdrop-blur-xl text-zinc-100 justify-center gap-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-zinc-900/50 cursor-pointer border border-zinc-700/30 hover:border-zinc-600/50 rounded-xl ${link.bgColor}`}
                variant="ghost"
                aria-label={link.description}
              >
                <Icon
                  icon={link.icon}
                  className={`h-7 w-7 ${link.hoverColor} transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
                />
                <span className="font-medium text-base sm:text-lg group-hover:text-zinc-50 transition-colors duration-300">
                  {link.name}
                </span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </Button>
            ))}
          </nav>
        </div>

        {FLOATING_ELEMENTS.map((element, index) => (
          <div
            key={index}
            className={`absolute ${element.size} ${element.color} ${element.position} rounded-full animate-pulse opacity-60`}
            style={{
              animationDelay: element.delay,
              animationDuration: `${3 + index}s`,
            }}
          />
        ))}
      </main>
    )
  }

  return (
    <main
      className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-100 flex flex-col items-center justify-center px-4 py-8 sm:px-6 lg:px-8 relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/5 via-transparent to-blue-500/5 z-0" />

      {isHovering && (
        <div
          className="absolute pointer-events-none z-10 transition-opacity duration-300"
          style={{
            left: mousePosition.x - 200,
            top: mousePosition.y - 200,
            width: 400,
            height: 400,
            background: "radial-gradient(circle, rgba(251, 146, 60, 0.1) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
      )}

      <div className="absolute inset-0 z-0 hidden md:block">
        <Image
          src={PROFILE.backgroundImageDesktop || "/placeholder.svg"}
          alt=""
          fill
          className="object-cover opacity-5"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-zinc-950/80 to-zinc-950/90" />
      </div>

      <div className="absolute inset-0 z-0 block md:hidden">
        <Image
          src={PROFILE.backgroundImageMobile || "/placeholder.svg"}
          alt=""
          fill
          className="object-cover opacity-5"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-zinc-950/80 to-zinc-950/90" />
      </div>

      <div className="fixed top-6 right-6 z-30">
        <Button
          onClick={() => handleLinkClick(PROFILE.githubUrl)}
          className="group h-12 w-12 bg-zinc-900/60 hover:bg-zinc-800/80 backdrop-blur-xl border border-zinc-700/50 hover:border-zinc-600/70 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-zinc-900/50"
          variant="ghost"
          aria-label="Visit GitHub Repository"
        >
          <Icon
            icon="mdi:github"
            className="h-6 w-6 text-zinc-300 group-hover:text-white transition-all duration-300 group-hover:scale-110"
          />
        </Button>
      </div>

      <div
        className={`w-full max-w-sm sm:max-w-md space-y-8 text-center relative z-20 transition-all duration-1000 ease-out ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <article className="group relative bg-zinc-900/40 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-zinc-700/50 hover:border-zinc-600/70 transition-all duration-500 hover:bg-zinc-900/60 hover:scale-[1.02] shadow-2xl hover:shadow-orange-500/10">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10 space-y-6">
            <div className="flex justify-center">
              <div className="relative group/avatar">
                <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 rounded-full opacity-20 group-hover/avatar:opacity-40 transition-all duration-500 blur-sm animate-pulse" />
                <div className="relative h-24 w-24 sm:h-28 sm:w-28 rounded-full overflow-hidden shadow-2xl ring-2 ring-orange-400/20 group-hover/avatar:ring-orange-400/40 transition-all duration-500 group-hover/avatar:scale-110">
                  <Image
                    src={PROFILE.avatar || "/placeholder.svg"}
                    alt={`${PROFILE.name} avatar`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover/avatar:scale-125"
                    priority
                    sizes="(max-width: 640px) 96px, 112px"
                  />
                </div>
              </div>
            </div>

            <header className="space-y-3">
              <h1 className="text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
                {PROFILE.name}
              </h1>
              <p className="text-base sm:text-lg text-zinc-400 font-medium italic opacity-90">{PROFILE.title}</p>
            </header>

            <section className="pt-2 space-y-2">
              <h2 className="text-zinc-200 text-base sm:text-base leading-relaxed font-medium">Hey there! 👋</h2>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed opacity-90">{PROFILE.bio}</p>
            </section>

            <div className="flex justify-center pt-4">
              <Button
                onClick={handleEmailClick}
                className="group h-12 px-6 bg-zinc-800/60 hover:bg-zinc-700/80 backdrop-blur-xl border border-zinc-600/50 hover:border-zinc-500/70 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-zinc-900/50 text-zinc-200 hover:text-white"
                variant="ghost"
                aria-label="Send Email"
              >
                <Icon
                  icon="mdi:email-outline"
                  className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-300"
                />
                <span className="font-medium text-sm">Send me a message</span>
              </Button>
            </div>
          </div>
        </article>

        <nav className="space-y-3 pt-2">
          {SOCIAL_LINKS.map((link, index) => (
            <Button
              key={link.name}
              onClick={() => handleLinkClick(link.url)}
              className={`group w-full h-14 sm:h-16 bg-zinc-900/40 hover:bg-zinc-800/60 backdrop-blur-xl text-zinc-100 justify-center gap-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-zinc-900/50 cursor-pointer border border-zinc-700/30 hover:border-zinc-600/50 rounded-xl ${link.bgColor}`}
              variant="ghost"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
              aria-label={link.description}
            >
              <Icon
                icon={link.icon}
                className={`h-7 w-7 ${link.hoverColor} transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
              />
              <span className="font-medium text-base sm:text-lg group-hover:text-zinc-50 transition-colors duration-300">
                {link.name}
              </span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </Button>
          ))}
        </nav>
      </div>

      {FLOATING_ELEMENTS.map((element, index) => (
        <div
          key={index}
          className={`absolute ${element.size} ${element.color} ${element.position} rounded-full animate-pulse opacity-60`}
          style={{
            animationDelay: element.delay,
            animationDuration: `${3 + index}s`,
          }}
        />
      ))}

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-white/10 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
    </main>
  )
}
