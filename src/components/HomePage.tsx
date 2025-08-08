import React from 'react';
import { Megaphone, Calendar, Home, Phone } from 'lucide-react';
import { CommunityData } from '../types';
import Navbar from './Navbar';
import HeroSection from './HeroSection';

interface HomePageProps {
  data: CommunityData;
  onAdminLogin: () => void;
}

export default function HomePage({ data, onAdminLogin }: HomePageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar onAdminLogin={onAdminLogin} />
      
      {/* Hero Section */}
      <HeroSection lastUpdated={data.lastUpdated} />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Announcements Section */}
        <section id="announcements" className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center">
              <Megaphone className="w-6 h-6 mr-2 text-blue-600" />
               Announcements
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay informed with the latest community updates and important notices
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.announcements.map((announcement) => (
              <div key={announcement.id} className="bg-white rounded-xl shadow-md p-6 border border-blue-100 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-800 mb-3 text-lg">{announcement.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{announcement.content}</p>
                <p className="text-blue-600 text-sm font-medium">
                  {new Date(announcement.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Events Section */}
        <section id="events" className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center">
              <Calendar className="w-6 h-6 mr-2 text-blue-600" />
               Local Events
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join your neighbors at upcoming community events and activities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.events.map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-md p-6 border border-blue-100 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-800 mb-3 text-lg">{event.title}</h3>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-gray-600 flex items-center">
                    <span className="w-4 h-4 mr-2">📅</span>
                    {new Date(event.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                  <p className="text-sm text-gray-600 flex items-center">
                    <span className="w-4 h-4 mr-2">🕐</span>
                    {event.time}
                  </p>
                  <p className="text-sm text-gray-600 flex items-center">
                    <span className="w-4 h-4 mr-2">📍</span>
                    {event.location}
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed">{event.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Listings Section */}
        <section id="listings" className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center">
              <Home className="w-6 h-6 mr-2 text-blue-600" />
               Buy / Sell / Rent
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Community marketplace for residents to buy, sell, or rent items and properties
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.listings.map((listing) => (
              <div key={listing.id} className="bg-white rounded-xl shadow-md p-6 border border-blue-100 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-gray-800 text-lg">{listing.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    listing.type === 'buy' ? 'bg-green-100 text-green-800' :
                    listing.type === 'sell' ? 'bg-orange-100 text-orange-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {listing.type.toUpperCase()}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{listing.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-medium text-sm">{listing.contact}</span>
                  <span className="text-gray-500 text-xs">
                    {new Date(listing.date).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contacts Section */}
        <section id="contacts" className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center">
              <Phone className="w-6 h-6 mr-2 text-blue-600" />
               Important Contacts
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Quick access to essential community contacts and emergency services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.contacts.map((contact) => (
              <div key={contact.id} className="bg-white rounded-xl shadow-md p-6 border border-blue-100 hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <h3 className="font-bold text-gray-800 text-lg mb-2">{contact.name}</h3>
                  <p className="text-gray-600 mb-4">{contact.role}</p>
                  {contact.email && (
                    <p className="text-blue-600 text-sm mb-4">{contact.email}</p>
                  )}
                  <a 
                    href={`tel:${contact.phone}`} 
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center w-full font-medium"
                  >
                    📞 {contact.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Home className="w-8 h-8 text-blue-400 mr-2" />
              <div>
                <h3 className="text-xl font-bold">SocioHelper Community</h3>
                <p className="text-gray-400 text-sm">Residential Society</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Building stronger communities, one connection at a time
            </p>
            <div className="border-t border-gray-700 pt-4">
              <p className="text-gray-500 text-sm">
                © 2025 SocioHelper Residential Society. For residents only.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}