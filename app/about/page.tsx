import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black pb-20">
      <Container>
        <PageHeader 
          title="Our Story" 
          description="Debating since 2024. INKSANITY is where logic meets rhetoric." 
        />
        
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: Text Content */}
          <div className="space-y-6 text-lg text-white/70">
            <p>
              <span className="font-bold text-white">Mission:</span> To cultivate a community 
              of critical thinkers who aren't afraid to challenge the status quo. We believe 
              that the power of words can shape reality.
            </p>
            <p>
              Founded in the corridors of [College Name], Inksanity started as a small group 
              of students arguing over coffee. Today, it stands as the premier literary and 
              debate society, hosting inter-college tournaments and publishing thought-provoking 
              literature.
            </p>
            <p>
              <span className="font-bold text-white">Vision:</span> A campus where every 
              voice is heard, and every argument is weighed on its merit, not its volume.
            </p>
          </div>

          {/* Right: Visual */}
          <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-white/5">
             {/* Placeholder for About Image */}
            <div className="absolute inset-0 flex items-center justify-center text-white/20">
              
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}