import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Mail, MapPin, Instagram } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black pb-20">
      <Container>
        <PageHeader 
          title="Get in Touch" 
          description="Have a question? Want to collaborate? Drop us a line." 
        />
        
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
          
          {/* Left: Contact Info */}
          <div className="space-y-8 rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-bold text-white">Contact Information</h3>
            
            <div className="space-y-6 text-white/70">
              <div className="flex items-start gap-4">
                <Mail className="mt-1 text-primary" />
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p>contact@inksanity-college.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 text-primary" />
                <div>
                  <p className="font-semibold text-white">Location</p>
                  <p>Student Activity Center, Room 204<br />[College Name] Campus</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Instagram className="mt-1 text-primary" />
                <div>
                  <p className="font-semibold text-white">Socials</p>
                  <p>@inksanity_official</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Visual Form */}
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Name</label>
                <input 
                  type="text" 
                  placeholder="Your name" 
                  className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-2 text-white placeholder:text-white/20 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Email</label>
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-2 text-white placeholder:text-white/20 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-white">Message</label>
              <textarea 
                rows={5}
                placeholder="How can we help you?" 
                className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-2 text-white placeholder:text-white/20 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            <Button variant="primary" className="w-full">Send Message</Button>
          </div>

        </div>
      </Container>
    </div>
  );
}