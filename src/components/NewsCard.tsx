import { Card } from "@/components/ui/Card";
import { NewsletterItem } from "@/types";
import { Button } from "@/components/ui/Button";

interface NewsCardProps {
  item: NewsletterItem;
}

export function NewsCard({ item }: NewsCardProps) {
  return (
    <Card className="p-6 bg-[#FDF6E3]">
      <div className="mb-4 flex items-center justify-between border-b border-[#442D1C]/20 pb-4">
        <span className="border border-[#743014] px-3 py-1 text-xs font-bold text-[#743014] uppercase tracking-wider">
          {item.month}
        </span>
        <span className="text-xs font-mono text-[#442D1C]/60">Vol. {item.volume}</span>
      </div>
      <h3 className="mb-2 text-xl font-bold text-[#442D1C] font-serif">{item.title}</h3>
      <p className="mb-6 text-sm text-[#442D1C]/80 font-mono leading-relaxed line-clamp-3">
        {item.highlights[0]}
      </p>
      <Button variant="outline" className="w-full text-xs uppercase tracking-widest">
        Read Issue
      </Button>
    </Card>
  );
}