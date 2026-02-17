import { PageHeader } from "@/components/PageHeader";
import { EventCard } from "@/components/EventCard"; // From Sprint A
import { Container } from "@/components/ui/Container";
import { getAllEvents } from "@/lib/data";

export default async function EventsPage() {
  const allEvents = await getAllEvents();
  
  // Filtering Logic
  const upcomingEvents = allEvents.filter((e) => e.status === "upcoming");
  const pastEvents = allEvents.filter((e) => e.status === "past");

  return (
    <div className="min-h-screen bg-black pb-20">
      <Container>
        <PageHeader 
          title="Events Archive" 
          description="Join us for our upcoming debates or browse our history of verbal battles." 
        />

        {/* Section 1: Upcoming */}
        <section className="mb-16">
          <h2 className="mb-8 border-b border-white/10 pb-2 text-2xl font-bold text-white">
            Upcoming Events
          </h2>
          {upcomingEvents.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <p className="text-white/40">No upcoming events scheduled at the moment.</p>
          )}
        </section>

        {/* Section 2: Past */}
        <section>
          <h2 className="mb-8 border-b border-white/10 pb-2 text-2xl font-bold text-white">
            Past Events
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pastEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}