"use client"

import Image from "next/image";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-background mx-auto border-b border-border">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image src="favicons/favicon-96x96.png" alt="アイコン" width={32} height={32} />
            <span className="text-xl font-bold text-primary">
              誰だお前
            </span>
          </Link>
        </div>

        <nav className="hidden gap-8 md:flex">
          <Link
            href="#features"
            className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-300"
          >
            サーバーの特徴
          </Link>
          <Link
            href="#join-server"
            className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-300"
          >
            Discordサーバー
          </Link>
        </nav>

        <Button
          asChild
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/80 transition-all duration-300"
        >
          <Link href="/#join-server">サーバに参加する<ArrowRight/></Link>
        </Button>
      </div>
    </header>
  )
}
