"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Events", href: "/events" },
  { name: "Team", href: "/team" },
  { name: "Newsletter", href: "/newsletter" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b-4 border-double border-[#9D9167] bg-[#E8D1A7] shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tighter text-[#442D1C] font-serif">
          INKSANITY
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium font-mono text-[#442D1C] uppercase tracking-widest transition-colors hover:text-[#743014] hover:underline hover:decoration-wavy"
            >
              {link.name}
            </Link>
          ))}
          <Button variant="primary" className="h-9 px-4">Join Club</Button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#442D1C] hover:text-[#743014] md:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-b-4 border-double border-[#9D9167] bg-[#E8D1A7] md:hidden"
          >
            <div className="flex flex-col space-y-4 p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium font-mono text-[#442D1C] uppercase tracking-widest hover:text-[#743014] hover:underline hover:decoration-wavy"
                >
                  {link.name}
                </Link>
              ))}
              <Button variant="primary" className="w-full">Join Club</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}