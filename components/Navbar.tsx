"use client";

import { useState } from "react";
import Logo from "./Logo";
import { siteConfig } from "@/lib/site-config";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#story", label: "Story" },
  { href: "#visit", label: "Visit" },
  { href: "#disclaimer", label: "Water Disclaimer" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-forest/10 bg-sand/90 backdrop-blur-sm">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4"
      >
        <a
          href="#home"
          className="flex items-center gap-2 font-display text-lg text-forest"
        >
          <Logo className="h-8 w-8" />
          <span>{siteConfig.name}</span>
        </a>

        <ul className="hidden gap-8 font-body text-sm text-stone md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="border-b border-transparent pb-1 transition-colors hover:border-water hover:text-water"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={siteConfig.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-sm bg-forest px-4 py-2 text-sm font-medium text-sand transition-colors hover:bg-forest-light md:inline-flex"
        >
          Get Directions
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-sm text-forest md:hidden"
        >
          <span className="sr-only">Toggle navigation</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-forest/10 bg-sand px-6 pb-6 md:hidden"
        >
          <ul className="flex flex-col gap-4 pt-4 font-body text-base text-stone">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-1"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex rounded-sm bg-forest px-4 py-2 text-sand"
              >
                Get Directions
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
