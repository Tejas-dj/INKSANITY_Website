import { Event, Member, NewsItem } from '@/types';
import eventsData from '@/data/events.json';
import teamData from '@/data/team.json';
import newsData from '@/data/newsletter.json';

// Type assertion makes sure the JSON data adheres to the strict interfaces
const events = eventsData as Event[];
const members = teamData as Member[];
const news = newsData as NewsItem[];

export function getAllEvents(): Event[] {
    return events;
}

export function getUpcomingEvents(): Event[] {
    return events.filter(event => event.status === 'upcoming');
}

export function getAllMembers(): Member[] {
    return members;
}

export function getLatestNewsletter(): NewsItem[] {
  // Returns news sorted by date (newest first) if not already sorted in JSON
    return news.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}