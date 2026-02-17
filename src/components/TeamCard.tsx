import Image from "next/image";
import Link from "next/link";
import { Member } from "@/types";
import { Github, Instagram, Linkedin } from "lucide-react";

export function TeamCard({ member }: { member: Member }) {
  return (
    <div className="group relative flex flex-col items-center rounded-xl border border-white/10 bg-white/5 p-6 text-center transition-colors hover:border-primary/50 hover:bg-white/10">
      <div className="relative mb-4 h-32 w-32 overflow-hidden rounded-full border-2 border-white/10 group-hover:border-primary">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
        />
      </div>
      
      <h3 className="text-xl font-bold text-white">{member.name}</h3>
      <p className="mb-4 text-sm font-medium text-primary">{member.role}</p>
      
      <p className="mb-6 line-clamp-3 text-sm text-white/60">
        {member.bio}
      </p>

      <div className="mt-auto flex gap-4 text-white/40">
        {member.socials.linkedin && (
          <Link href={member.socials.linkedin} className="hover:text-white transition-colors">
            <Linkedin size={18} />
          </Link>
        )}
        {member.socials.instagram && (
          <Link href={member.socials.instagram} className="hover:text-white transition-colors">
            <Instagram size={18} />
          </Link>
        )}
        {member.socials.github && (
          <Link href={member.socials.github} className="hover:text-white transition-colors">
            <Github size={18} />
          </Link>
        )}
      </div>
    </div>
  );
}