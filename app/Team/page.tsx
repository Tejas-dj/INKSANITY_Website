import { PageHeader } from "@/components/PageHeader";
import { TeamCard } from "@/components/TeamCard";
import { Container } from "@/components/ui/Container";
import { getAllMembers } from "@/lib/data";

export default async function TeamPage() {
  const members = await getAllMembers();

  return (
    <div className="min-h-screen bg-black pb-20">
      <Container>
        <PageHeader 
          title="Meet the Core" 
          description="The voices, organizers, and creative minds behind Inksanity." 
        />
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </Container>
    </div>
  );
}