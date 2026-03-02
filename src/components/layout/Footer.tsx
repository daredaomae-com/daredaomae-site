import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-12 bg-background mt-20">
      <div className="container mx-auto max-w-7xl px-4">
        {/*<div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <Link
            href="/rules"
            className="text-sm text-foreground/60 hover:text-primary transition-colors duration-300"
          >
            サーバールール
          </Link>
        </div>*/}

        <div className="pt-4">
          <p className="text-center text-sm text-foreground/50">© 2026 誰だお前</p>
        </div>
      </div>
    </footer>
  )
}
