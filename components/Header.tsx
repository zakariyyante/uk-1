"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import Link from "next/link";

const navLinks = [
  { href: "#casinos", label: "Top Casinos" },
  { href: "#how-we-rank", label: "How We Rank" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-40 w-full"
      style={{
        background: "linear-gradient(180deg, rgba(10,10,20,0.98) 0%, rgba(15,15,26,0.95) 100%)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(201,168,76,0.15)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" aria-label="UK Casino Picks Home">
            <Logo />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: "rgba(232,232,240,0.75)" }}
                onMouseEnter={(e) => {
                  (e.target as HTMLAnchorElement).style.color = "#c9a84c";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLAnchorElement).style.color = "rgba(232,232,240,0.75)";
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA button */}
          <a
            href="#casinos"
            className="hidden md:inline-flex btn-gold items-center px-5 py-2 rounded-full text-sm font-bold text-gray-900 uppercase tracking-wide"
          >
            View Top Casinos
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md"
            style={{ color: "rgba(232,232,240,0.8)" }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div
          className="md:hidden px-4 pb-4 pt-2"
          style={{ background: "rgba(10,10,20,0.98)", borderTop: "1px solid rgba(201,168,76,0.1)" }}
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200"
                style={{ color: "rgba(232,232,240,0.8)" }}
                onClick={() => setIsOpen(false)}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(201,168,76,0.1)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#c9a84c";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                  (e.currentTarget as HTMLAnchorElement).style.color = "rgba(232,232,240,0.8)";
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#casinos"
              className="btn-gold mt-2 block text-center px-5 py-3 rounded-full text-sm font-bold text-gray-900 uppercase tracking-wide"
              onClick={() => setIsOpen(false)}
            >
              View Top Casinos
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
