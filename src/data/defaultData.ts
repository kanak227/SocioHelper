import { CommunityData } from '../types';

export const defaultData: CommunityData = {
  announcements: [
    {
      id: '1',
      title: 'Water Supply Maintenance',
      content: 'Water supply will be temporarily shut off on Sunday, March 10th from 10 AM to 2 PM for routine maintenance. Please store water in advance.',
      date: '2024-03-08'
    },
    {
      id: '2',
      title: 'New Security Guidelines',
      content: 'Please ensure all visitors are registered at the main gate. New ID verification process is now in effect for enhanced community security.',
      date: '2024-03-05'
    },
    {
      id: '3',
      title: 'Annual General Meeting',
      content: 'The Annual General Meeting is scheduled for March 25th at 6 PM in the community hall. All residents are encouraged to attend.',
      date: '2024-03-01'
    }
  ],
  events: [
    {
      id: '1',
      title: 'Community Holi Celebration',
      date: '2024-03-13',
      time: '4:00 PM - 8:00 PM',
      location: 'Main Garden Area',
      description: 'Join us for a colorful Holi celebration with organic colors, music, and traditional snacks!'
    },
    {
      id: '2',
      title: 'Children\'s Art Workshop',
      date: '2024-03-16',
      time: '10:00 AM - 12:00 PM',
      location: 'Community Hall',
      description: 'Fun art and craft activities for children aged 5-12. Materials provided. Registration required.'
    },
    {
      id: '3',
      title: 'Health Check-up Camp',
      date: '2024-03-20',
      time: '9:00 AM - 1:00 PM',
      location: 'Club House',
      description: 'Free health screening including blood pressure, sugar level, and basic health consultation.'
    }
  ],
  listings: [
    {
      id: '1',
      title: 'Refrigerator for Sale',
      type: 'sell',
      description: 'Samsung 265L double door refrigerator, 3 years old, excellent condition. Moving sale.',
      contact: 'Rajesh - 9876543210',
      date: '2024-03-07'
    },
    {
      id: '2',
      title: '2BHK Apartment for Rent',
      type: 'rent',
      description: '2BHK semi-furnished apartment available from April 1st. Family preferred.',
      contact: 'Priya - 9876543211',
      date: '2024-03-06'
    },
    {
      id: '3',
      title: 'Looking to Buy: Dining Table',
      type: 'buy',
      description: 'Looking for a 6-seater dining table in good condition. Preferably wooden.',
      contact: 'Amit - 9876543212',
      date: '2024-03-05'
    }
  ],
  contacts: [
    {
      id: '1',
      name: 'Security Office',
      role: 'Main Gate Security',
      phone: '9876543200',
      email: 'security@sociohelper.com'
    },
    {
      id: '2',
      name: 'Dr. Sharma',
      role: 'Society President',
      phone: '9876543201',
      email: 'president@sociohelper.com'
    },
    {
      id: '3',
      name: 'Maintenance Team',
      role: 'General Maintenance',
      phone: '9876543202',
      email: 'maintenance@sociohelper.com'
    },
    {
      id: '4',
      name: 'Ravi Kumar',
      role: 'Plumber',
      phone: '9876543203'
    },
    {
      id: '5',
      name: 'Emergency Services',
      role: 'Fire/Police/Medical',
      phone: '108'
    }
  ],
  lastUpdated: new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
};