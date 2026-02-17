import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { EventCard } from "@/components/EventCard";
import { NewsCard } from "@/components/NewsCard";
import { Button } from "@/components/ui/Button";
import { getUpcomingEvents, getLatestNewsletter } from "@/lib/data"; 

export default async function Home() {
  // Fetch data
  const events = await getUpcomingEvents();
  const latestNews = await getLatestNewsletter(); 
  const featuredEvents = events.slice(0, 3);

  return (
    <div className="min-h-screen text-foreground">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
          {/* Subtle vignette instead of black void */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-background/50 to-background opacity-80" />
          
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <h1 className="mb-6 text-6xl font-extrabold tracking-tighter text-foreground md:text-8xl">
              INKSANITY
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-foreground/80 md:text-xl">
              The Literary & Debate Club of BMSCE. Where words collide, ideas ignite, and voices matter.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/join">
                <Button variant="primary" className="h-12 px-8 text-base">Explore the Club</Button>
              </Link>
              <Link href="/events">
                <Button variant="outline" className="h-12 px-8 text-base">View Events</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Latest Events */}
        <section className="border-t border-primary/20 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 flex items-end justify-between">
              <h2 className="text-3xl font-bold text-foreground">Upcoming Debates</h2>
              <Link href="/events" className="hidden text-sm text-primary hover:underline md:block">
                View all events →
              </Link>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Teaser */}
        {latestNews && (
          <section className="bg-primary/5 py-24">
            <div className="mx-auto max-w-7xl px-6">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div>
                  <h2 className="mb-4 text-3xl font-bold text-foreground">The Inkwell</h2>
                  <p className="mb-8 text-foreground/80">
                    Stay updated with our Monthly digest of literary snippets, debate topics, and club gossip.
                  </p>
                  <Button variant="outline">Subscribe Now</Button>
                </div>
                <div className="grid gap-4">
                  <NewsCard item={latestNews[0]} />
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}