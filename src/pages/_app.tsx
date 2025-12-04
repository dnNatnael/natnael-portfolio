import type { AppProps } from "next/app"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from "@/components/theme-provider"
import Head from "next/head"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Natnael Builds | Full-Stack Developer Portfolio</title>
        <meta
          name="description"
          content="Full-stack developer specializing in modern web applications, cloud architecture, and scalable solutions. View my projects and get in touch."
        />
        <meta
          name="keywords"
          content="Full-Stack Developer, Web Development, React, Next.js, Python, FastAPI, Portfolio"
        />
        <meta name="author" content="Natnael" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0a0a0a" media="(prefers-color-scheme: dark)" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://natnael.dev" />
        <meta property="og:site_name" content="Natnael Builds" />
        <meta property="og:title" content="Natnael Builds | Full-Stack Developer Portfolio" />
        <meta
          property="og:description"
          content="Full-stack developer specializing in modern web applications, cloud architecture, and scalable solutions."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Natnael Builds | Full-Stack Developer Portfolio" />
        <meta
          name="twitter:description"
          content="Full-stack developer specializing in modern web applications, cloud architecture, and scalable solutions."
        />
        <meta name="robots" content="index, follow" />
        <meta name="generator" content="v0.app" />
      </Head>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    </>
  )
}

