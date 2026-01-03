"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MoonIcon } from "./animated-icons/moon";
import { SunMediumIcon } from "./animated-icons/sun-medium";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="flex h-9 w-9 items-center justify-center rounded-md">
        <div className="h-4 w-4" />
      </button>
    );
  }

  const switchTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={switchTheme}
      className="flex h-9 w-9 items-center justify-center rounded-md hover:bg-accent transition-colors"
      aria-label="Toggle theme"
    >
      <MoonIcon className="hidden dark:block" size={20} />
      <SunMediumIcon className="block dark:hidden" size={20} />
    </button>
  );
}
