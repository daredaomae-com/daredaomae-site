"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowUpRight, Tag, MessagesSquare, Megaphone, Cctv } from "lucide-react"
import Link from "next/link"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

const SERVER_INVITE = process.env.NEXT_PUBLIC_SERVER_INVITE || "#"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="relative overflow-hidden py-24 md:py-40">
        <div className="absolute inset-0 bg-background" />

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <div className="flex justify-center gap-2 mb-4">
                <span className="text-xs bg-secondary text-primary px-4 py-2 rounded-full border border-primary/30">
                  Discord Server
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-balance leading-tight">
                <span className="text-primary">誰だお前</span>
              </h1>
            </div>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto text-balance leading-relaxed">
              サーバータグ「誰だお前」が貰える雑談サーバー
            </p>
            <div className="flex gap-4 justify-center flex-wrap pt-4">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/80 transition-all duration-300"
              >
                <Link href="/#join-server">サーバに参加する<ArrowRight/></Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border border-primary/30 text-primary hover:bg-primary/5 transition-all duration-300 backdrop-blur bg-transparent"
              >
                <Link href="#features">詳しく見る</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 relative">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">サーバーの特徴</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Tag,
                title: "サーバータグ",
                description: "個性的なサーバータグ「誰だお前」をゲットすることができます！",
              },
              {
                icon: MessagesSquare,
                title: "たくさんのチャンネル",
                description: "雑談やゲーム、宣伝など様々なチャンネルが充実しています！",
              },
              {
                icon: Megaphone,
                title: "宣伝チャンネル",
                description: "宣伝を行うことができるチャンネルがあります！Discordサーバーに限らず、ルールに違反さえしなければ何でも宣伝可能です！",
              },
              {
                icon: Cctv,
                title: "荒らし対策",
                description: "荒らし対策BotやAutoModなどを使用して、荒らし行為を未然に防止することで安全な環境を提供しています！",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="glass-effect p-6 group border-primary/50 transition-all duration-300 hover:-translate-y-2"
              >
                <feature.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-bold text-lg mb-2 text-foreground">{feature.title}</h3>
                <p className="text-sm text-foreground/60">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="join-server" className="py-20 bg-background">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col gap-8 items-center">
            <div className="w-full max-w-2xl text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Discordサーバー</h2>
              <p className="text-foreground/60 mb-8">
                絵文字やチャンネルが充実しているサーバーです！<br/>
                参加することでサーバータグ「誰だお前」も貰えます！
              </p>
              <Button
                asChild
                size="lg"
                className="bg-[#e0e3ff] hover:bg-[#e0e3ff] hover:shadow-lg text-foreground/75 transition-all duration-300"
              >
                <Link href={SERVER_INVITE}><img src="/discord.svg" alt="Discord Logo" width={24} height={24} />Discordサーバーに参加する<ArrowUpRight/></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
