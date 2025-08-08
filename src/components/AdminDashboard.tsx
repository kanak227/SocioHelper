import React, { useState } from 'react';
import { Save, LogOut, Plus, Trash2, Edit3 } from 'lucide-react';
import { CommunityData, Announcement, Event, Listing, Contact } from '../types';

interface AdminDashboardProps {
  data: CommunityData;
  onSave: (data: CommunityData) => void;
  onLogout: () => void;
}

export default function AdminDashboard({ data, onSave, onLogout }: AdminDashboardProps) {
  const [editData, setEditData] = useState<CommunityData>(data);
  const [activeTab, setActiveTab] = useState<'announcements' | 'events' | 'listings' | 'contacts'>('announcements');

  const handleSave = () => {
    onSave(editData);
    alert('Changes saved successfully!');
  };

  const addAnnouncement = () => {
    const newAnnouncement: Announcement = {
      id: Date.now().toString(),
      title: 'New Announcement',
      content: 'Enter announcement content here...',
      date: new Date().toISOString().split('T')[0]
    };
    setEditData({
      ...editData,
      announcements: [...editData.announcements, newAnnouncement]
    });
  };

  const updateAnnouncement = (id: string, field: keyof Announcement, value: string) => {
    setEditData({
      ...editData,
      announcements: editData.announcements.map(item => 
        item.id === id ? { ...item, [field]: value } : item
      )
    });
  };

  const deleteAnnouncement = (id: string) => {
    setEditData({
      ...editData,
      announcements: editData.announcements.filter(item => item.id !== id)
    });
  };

  const addEvent = () => {
    const newEvent: Event = {
      id: Date.now().toString(),
      title: 'New Event',
      date: new Date().toISOString().split('T')[0],
      time: '10:00 AM - 12:00 PM',
      location: 'Community Hall',
      description: 'Enter event description here...'
    };
    setEditData({
      ...editData,
      events: [...editData.events, newEvent]
    });
  };

  const updateEvent = (id: string, field: keyof Event, value: string) => {
    setEditData({
      ...editData,
      events: editData.events.map(item => 
        item.id === id ? { ...item, [field]: value } : item
      )
    });
  };

  const deleteEvent = (id: string) => {
    setEditData({
      ...editData,
      events: editData.events.filter(item => item.id !== id)
    });
  };

  const addListing = () => {
    const newListing: Listing = {
      id: Date.now().toString(),
      title: 'New Listing',
      type: 'sell',
      description: 'Enter listing description here...',
      contact: 'Your Name - Phone Number',
      date: new Date().toISOString().split('T')[0]
    };
    setEditData({
      ...editData,
      listings: [...editData.listings, newListing]
    });
  };

  const updateListing = (id: string, field: keyof Listing, value: string) => {
    setEditData({
      ...editData,
      listings: editData.listings.map(item => 
        item.id === id ? { ...item, [field]: value } : item
      )
    });
  };

  const deleteListing = (id: string) => {
    setEditData({
      ...editData,
      listings: editData.listings.filter(item => item.id !== id)
    });
  };

  const addContact = () => {
    const newContact: Contact = {
      id: Date.now().toString(),
      name: 'New Contact',
      role: 'Role/Department',
      phone: 'Phone Number'
    };
    setEditData({
      ...editData,
      contacts: [...editData.contacts, newContact]
    });
  };

  const updateContact = (id: string, field: keyof Contact, value: string) => {
    setEditData({
      ...editData,
      contacts: editData.contacts.map(item => 
        item.id === id ? { ...item, [field]: value } : item
      )
    });
  };

  const deleteContact = (id: string) => {
    setEditData({
      ...editData,
      contacts: editData.contacts.filter(item => item.id !== id)
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-blue-100">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-blue-900 flex items-center">
                <Edit3 className="w-6 h-6 mr-2" />
                Admin Dashboard
              </h1>
              <p className="text-blue-600 text-sm">Edit community notice board content</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleSave}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                Save Changes
              </button>
              <button
                onClick={onLogout}
                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex flex-wrap gap-2 mb-6">
          {(['announcements', 'events', 'listings', 'contacts'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors capitalize ${
                activeTab === tab
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Announcements Tab */}
        {activeTab === 'announcements' && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-800">📰 Announcements</h2>
              <button
                onClick={addAnnouncement}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Add Announcement
              </button>
            </div>
            {editData.announcements.map((announcement) => (
              <div key={announcement.id} className="bg-white p-6 rounded-xl shadow-md border border-blue-100">
                <div className="flex justify-between items-start mb-4">
                  <input
                    type="text"
                    value={announcement.title}
                    onChange={(e) => updateAnnouncement(announcement.id, 'title', e.target.value)}
                    className="text-lg font-semibold bg-transparent border-b border-gray-300 focus:border-blue-500 outline-none flex-1 mr-4"
                  />
                  <button
                    onClick={() => deleteAnnouncement(announcement.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <textarea
                  value={announcement.content}
                  onChange={(e) => updateAnnouncement(announcement.id, 'content', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={3}
                />
                <input
                  type="date"
                  value={announcement.date}
                  onChange={(e) => updateAnnouncement(announcement.id, 'date', e.target.value)}
                  className="mt-3 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            ))}
          </div>
        )}

        {/* Events Tab */}
        {activeTab === 'events' && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-800">📅 Local Events</h2>
              <button
                onClick={addEvent}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Add Event
              </button>
            </div>
            {editData.events.map((event) => (
              <div key={event.id} className="bg-white p-6 rounded-xl shadow-md border border-blue-100">
                <div className="flex justify-between items-start mb-4">
                  <input
                    type="text"
                    value={event.title}
                    onChange={(e) => updateEvent(event.id, 'title', e.target.value)}
                    className="text-lg font-semibold bg-transparent border-b border-gray-300 focus:border-blue-500 outline-none flex-1 mr-4"
                  />
                  <button
                    onClick={() => deleteEvent(event.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <input
                    type="date"
                    value={event.date}
                    onChange={(e) => updateEvent(event.id, 'date', e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    value={event.time}
                    onChange={(e) => updateEvent(event.id, 'time', e.target.value)}
                    placeholder="Time"
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <input
                  type="text"
                  value={event.location}
                  onChange={(e) => updateEvent(event.id, 'location', e.target.value)}
                  placeholder="Location"
                  className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <textarea
                  value={event.description}
                  onChange={(e) => updateEvent(event.id, 'description', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={3}
                  placeholder="Event description"
                />
              </div>
            ))}
          </div>
        )}

        {/* Listings Tab */}
        {activeTab === 'listings' && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-800">🏠 Buy / Sell / Rent</h2>
              <button
                onClick={addListing}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Add Listing
              </button>
            </div>
            {editData.listings.map((listing) => (
              <div key={listing.id} className="bg-white p-6 rounded-xl shadow-md border border-blue-100">
                <div className="flex justify-between items-start mb-4">
                  <input
                    type="text"
                    value={listing.title}
                    onChange={(e) => updateListing(listing.id, 'title', e.target.value)}
                    className="text-lg font-semibold bg-transparent border-b border-gray-300 focus:border-blue-500 outline-none flex-1 mr-4"
                  />
                  <button
                    onClick={() => deleteListing(listing.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <select
                    value={listing.type}
                    onChange={(e) => updateListing(listing.id, 'type', e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="buy">Buy</option>
                    <option value="sell">Sell</option>
                    <option value="rent">Rent</option>
                  </select>
                  <input
                    type="date"
                    value={listing.date}
                    onChange={(e) => updateListing(listing.id, 'date', e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <textarea
                  value={listing.description}
                  onChange={(e) => updateListing(listing.id, 'description', e.target.value)}
                  className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={2}
                  placeholder="Description"
                />
                <input
                  type="text"
                  value={listing.contact}
                  onChange={(e) => updateListing(listing.id, 'contact', e.target.value)}
                  placeholder="Contact information"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            ))}
          </div>
        )}

        {/* Contacts Tab */}
        {activeTab === 'contacts' && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-800">📇 Important Contacts</h2>
              <button
                onClick={addContact}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Add Contact
              </button>
            </div>
            {editData.contacts.map((contact) => (
              <div key={contact.id} className="bg-white p-6 rounded-xl shadow-md border border-blue-100">
                <div className="flex justify-between items-start mb-4">
                  <input
                    type="text"
                    value={contact.name}
                    onChange={(e) => updateContact(contact.id, 'name', e.target.value)}
                    className="text-lg font-semibold bg-transparent border-b border-gray-300 focus:border-blue-500 outline-none flex-1 mr-4"
                  />
                  <button
                    onClick={() => deleteContact(contact.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={contact.role}
                    onChange={(e) => updateContact(contact.id, 'role', e.target.value)}
                    placeholder="Role/Department"
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="tel"
                    value={contact.phone}
                    onChange={(e) => updateContact(contact.id, 'phone', e.target.value)}
                    placeholder="Phone number"
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <input
                  type="email"
                  value={contact.email || ''}
                  onChange={(e) => updateContact(contact.id, 'email', e.target.value)}
                  placeholder="Email (optional)"
                  className="w-full mt-4 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}