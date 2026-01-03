"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { CommandMenu } from "./command-menu-simple";
import { ThemeToggle } from "./theme-toggle";

const NAV_ITEMS = [
  { title: "Portfolio", href: "/" },
  { title: "Projects", href: "/projects" },
  { title: "Blog", href: "/blog" },
  { title: "Resume", href: "/resume" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between gap-4 px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center font-bold text-xl">
          ✨
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map(({ title, href }) => {
            const active = pathname === href || (href !== "/" && pathname?.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-foreground",
                  active ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {title}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <CommandMenu />
          <div className="h-4 w-px bg-border" />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

