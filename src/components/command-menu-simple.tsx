"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  HomeIcon,
  CodeIcon,
  FileTextIcon,
  SunIcon,
  MoonIcon,
  MonitorIcon,
  SearchIcon,
  DownloadIcon,
  ShieldCheckIcon,
  AwardIcon,
} from "lucide-react";
import { Button } from "./ui/button";

const MENU_LINKS = [
  { title: "Portfolio", href: "/", icon: HomeIcon },
  { title: "Projects", href: "/projects", icon: CodeIcon },
  { title: "Blog", href: "/blog", icon: FileTextIcon },
  { title: "Resume", href: "/resume", icon: DownloadIcon },
];

export function CommandMenu() {
  const router = useRouter();
  const { setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <Button
        variant="outline"
        className="relative h-9 w-full justify-start rounded-lg bg-background text-sm font-normal text-muted-foreground shadow-none md:w-40 lg:w-64"
        onClick={() => setOpen(true)}
      >
        <SearchIcon className="mr-2 h-4 w-4" />
        <span className="hidden lg:inline-flex">Search...</span>
        <span className="inline-flex lg:hidden">Search</span>
        <kbd className="pointer-events-none absolute right-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Menu">
            {MENU_LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <CommandItem
                  key={link.href}
                  onSelect={() => {
                    router.push(link.href);
                    setOpen(false);
                  }}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {link.title}
                </CommandItem>
              );
            })}
          </CommandGroup>

          <CommandGroup heading="Sections">
            <CommandItem
              onSelect={() => {
                router.push("/#stack");
                setOpen(false);
              }}
            >
              <CodeIcon className="mr-2 h-4 w-4" />
              Stack
            </CommandItem>
            <CommandItem
              onSelect={() => {
                router.push("/#experience");
                setOpen(false);
              }}
            >
              <FileTextIcon className="mr-2 h-4 w-4" />
              Experience
            </CommandItem>
            <CommandItem
              onSelect={() => {
                router.push("/#projects");
                setOpen(false);
              }}
            >
              <CodeIcon className="mr-2 h-4 w-4" />
              Projects (on homepage)
            </CommandItem>
            <CommandItem
              onSelect={() => {
                router.push("/#education");
                setOpen(false);
              }}
            >
              <FileTextIcon className="mr-2 h-4 w-4" />
              Education
            </CommandItem>
            <CommandItem
              onSelect={() => {
                router.push("/#awards");
                setOpen(false);
              }}
            >
              <AwardIcon className="mr-2 h-4 w-4" />
              Honors & Awards
            </CommandItem>
            <CommandItem
              onSelect={() => {
                router.push("/#certifications");
                setOpen(false);
              }}
            >
              <ShieldCheckIcon className="mr-2 h-4 w-4" />
              Certifications
            </CommandItem>
          </CommandGroup>

          <CommandGroup heading="Theme">
            <CommandItem
              onSelect={() => {
                setTheme("light");
                setOpen(false);
              }}
            >
              <SunIcon className="mr-2 h-4 w-4" />
              Light
            </CommandItem>
            <CommandItem
              onSelect={() => {
                setTheme("dark");
                setOpen(false);
              }}
            >
              <MoonIcon className="mr-2 h-4 w-4" />
              Dark
            </CommandItem>
            <CommandItem
              onSelect={() => {
                setTheme("system");
                setOpen(false);
              }}
            >
              <MonitorIcon className="mr-2 h-4 w-4" />
              System
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
