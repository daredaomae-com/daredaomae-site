import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "誰だお前",
  description: "誰だお前 - サーバータグ「誰だお前」が貰える雑談Discordサーバー",
  generator: "v0.app",
  appleWebApp: {
    title: "誰だお前",
  },
  icons: {
    icon: [
      {
        url: "/favicons/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        url: "/favicons/favicon.svg",
        type: "image/svg+xml",
      }
    ],
    apple: [
      { url: "/favicons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicons/favicon.ico"],
  },
  manifest: "favicons/site.webmanifest",

  openGraph: {
    title: "誰だお前",
    description: "誰だお前 - サーバータグ「誰だお前」が貰える雑談Discordサーバー",
    url: "https://daredaomae.com",
    siteName: "誰だお前",
    images: [
      {
        url: "/favicons/web-app-manifest-512x512.png",
        width: 512,
        height: 512,
        alt: "誰だお前のアイコン",
      }
    ],
    locale: "ja_JP",
    type: "website",
  },

  twitter: {
    card: "summary"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
