import Link from "next/link";
import { Linkedin, Github, Instagram } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { TeamMember } from "@/types";

interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <Card className="flex flex-col items-center p-6 text-center bg-[#FDF6E3]">
      <div className="mb-4 h-32 w-32 overflow-hidden rounded-full border-2 border-[#442D1C] bg-[#E8D1A7] shadow-[2px_2px_0px_#442D1C]">
        {member.image ? (
          <img 
            src={member.image} 
            alt={member.name} 
            className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-4xl font-serif text-[#442D1C]/20">
            {member.name[0]}
          </div>
        )}
      </div>
      
      <h3 className="mb-1 text-xl font-bold text-[#442D1C] font-serif">{member.name}</h3>
      <p className="mb-2 text-sm font-medium text-[#743014] font-mono uppercase tracking-wider">{member.role}</p>
      <p className="mb-6 text-sm text-[#442D1C]/70 italic">"{member.bio}"</p>
      
      <div className="mt-auto flex gap-4">
        {member.socials.linkedin && (
          <Link href={member.socials.linkedin} className="text-[#442D1C]/60 hover:text-[#743014] transition-colors">
            <Linkedin size={20} />
          </Link>
        )}
        {member.socials.github && (
          <Link href={member.socials.github} className="text-[#442D1C]/60 hover:text-[#743014] transition-colors">
            <Github size={20} />
          </Link>
        )}
        {member.socials.instagram && (
          <Link href={member.socials.instagram} className="text-[#442D1C]/60 hover:text-[#743014] transition-colors">
            <Instagram size={20} />
          </Link>
        )}
      </div>
    </Card>
  );
}