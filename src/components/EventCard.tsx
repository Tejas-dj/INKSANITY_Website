import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Event } from "@/types";

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <Card className="flex flex-col h-full group bg-[#FDF6E3]">
      {/* Image Placeholder */}
      <div className="relative h-48 w-full overflow-hidden border-b border-[#442D1C] bg-[#E8D1A7]">
        {event.image ? (
          <img 
            src={event.image} 
            alt={event.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-[#442D1C]/40 font-mono text-sm">
            [NO PHOTOGRAPH]
          </div>
        )}
        <div className="absolute top-4 left-4 border border-[#442D1C] bg-[#FDF6E3] px-2 py-1 text-xs font-bold text-[#442D1C] uppercase shadow-[2px_2px_0px_#442D1C]">
          {event.category}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 text-sm font-mono text-[#743014]">
          {new Date(event.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </div>
        <h3 className="mb-2 text-xl font-bold text-[#442D1C] group-hover:text-[#743014] transition-colors font-serif">
          {event.title}
        </h3>
        <p className="mb-6 flex-1 text-sm text-[#442D1C]/80 leading-relaxed">
          {event.description}
        </p>
        <Link href={`/events/${event.id}`} className="mt-auto block">
          <span className="text-sm font-bold font-mono text-[#743014] underline decoration-wavy underline-offset-4 hover:text-[#442D1C] transition-colors">
            READ DETAILS &rarr;
          </span>
        </Link>
      </div>
    </Card>
  );
}