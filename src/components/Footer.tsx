import Link from "next/link";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12 text-white/60">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3">
        {/* Column 1: Brand */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-white">INKSANITY</h3>
          <p className="max-w-xs text-sm">
            The official Literary & Debate Society. Fostering critical thinking and creative expression since 2024.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/events" className="hover:text-primary">Upcoming Events</Link></li>
            <li><Link href="/team" className="hover:text-primary">Our Team</Link></li>
            <li><Link href="/newsletter" className="hover:text-primary">Newsletter</Link></li>
            <li><Link href="/contact" className="hover:text-primary">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3: Socials & Contact */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Connect</h4>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white"><Instagram size={20} /></a>
            <a href="#" className="hover:text-white"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-white"><Github size={20} /></a>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Mail size={16} />
            <a href="mailto:contact@inksanity.com" className="hover:text-white">contact@inksanity.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}