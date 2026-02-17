import Link from "next/link";
import { NewsItem } from "@/types";
import { ArrowUpRight } from "lucide-react";

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <div className="flex flex-col justify-between rounded-lg border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10">
      <div>
        <div className="mb-4 flex items-center justify-between">
          <span className="text-xs font-medium text-primary">{item.date}</span>
          <ArrowUpRight size={16} className="text-white/40" />
        </div>
        <h3 className="mb-2 text-lg font-bold text-white">{item.headline}</h3>
        <p className="text-sm text-white/60">{item.snippet}</p>
      </div>
      
      <Link 
        href={item.link} 
        className="mt-4 text-sm font-medium text-white underline decoration-white/30 underline-offset-4 hover:decoration-primary"
      >
        Read more
      </Link>
    </div>
  );
}