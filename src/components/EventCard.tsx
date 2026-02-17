import Image from "next/image";
import Link from "next/link";
import { Event } from "@/types";
import { Calendar } from "lucide-react";

export function EventCard({ event }: { event: Event }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-all hover:border-primary/50">
      {/* Image Section */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-2 right-2 rounded-full bg-black/60 px-3 py-1 text-xs font-medium uppercase backdrop-blur-sm">
          {event.category}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5">
        <div className="mb-3 flex items-center gap-2 text-xs text-white/60">
          <Calendar size={14} />
          <span>{event.date}</span>
        </div>
        
        <h3 className="mb-2 text-xl font-bold leading-tight text-white group-hover:text-primary">
          {event.title}
        </h3>
        
        <p className="line-clamp-2 text-sm text-white/70">
          {event.description}
        </p>
      </div>
    </div>
  );
}