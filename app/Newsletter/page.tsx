import { PageHeader } from "@/components/PageHeader";
import { NewsCard } from "@/components/NewsCard"; // From Sprint A
import { Container } from "@/components/ui/Container";
import { getLatestNewsletter } from "@/lib/data"; // Assuming this might return a list based on context

export default async function NewsletterPage() {
  // Assuming getLatestNewsletter returns an array of NewsItems for the page
  // If it only returns one, we wrap it: [item]
  const newsItems = await getLatestNewsletter(); 
  
  // Safety check if it returns a single object instead of array
  const newsList = Array.isArray(newsItems) ? newsItems : [newsItems];

  return (
    <div className="min-h-screen bg-black pb-20">
      <Container>
        <PageHeader 
          title="The Inkwell" 
          description="Monthly updates, literary snippets, and club gossip." 
        />
        
        <div className="mx-auto max-w-3xl space-y-6">
          {newsList.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </div>
  );
}