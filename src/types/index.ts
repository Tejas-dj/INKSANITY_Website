export interface Event {
    id: string;
    title: string;
  date: string; // ISO 8601 format: "YYYY-MM-DD"
    category: 'debate' | 'literary' | 'workshop';
    status: 'upcoming' | 'past';
    image: string;
    description: string;
}

export interface Member {
    id: string;
    name: string;
    role: string;
    bio: string;
    image: string;
    socials: {
    linkedin?: string;
    instagram?: string;
    github?: string;
    };
}

export interface NewsItem {
    id: string;
    headline: string;
    snippet: string;
    date: string;
    link: string;
}