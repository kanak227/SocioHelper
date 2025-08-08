export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

export interface Listing {
  id: string;
  title: string;
  type: 'buy' | 'sell' | 'rent';
  description: string;
  contact: string;
  date: string;
}

export interface Contact {
  id: string;
  name: string;
  role: string;
  phone: string;
  email?: string;
}

export interface CommunityData {
  announcements: Announcement[];
  events: Event[];
  listings: Listing[];
  contacts: Contact[];
  lastUpdated: string;
}