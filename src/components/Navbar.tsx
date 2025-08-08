import React from 'react';
import { Home, Megaphone, Calendar, Building, Phone, Shield } from 'lucide-react';

interface NavbarProps {
  onAdminLogin: () => void;
}

export default function Navbar({ onAdminLogin }: NavbarProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white shadow-lg border-b border-blue-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Home className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-xl font-bold text-blue-900">SocioHelper</h1>
              <p className="text-xs text-blue-600">Community Board</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection('announcements')}
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Megaphone className="w-4 h-4" />
              <span>Announcements</span>
            </button>
            <button
              onClick={() => scrollToSection('events')}
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>Events</span>
            </button>
            <button
              onClick={() => scrollToSection('listings')}
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Building className="w-4 h-4" />
              <span>Listings</span>
            </button>
            <button
              onClick={() => scrollToSection('contacts')}
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Contacts</span>
            </button>
          </div>

          {/* Admin Login */}
          <button 
            onClick={onAdminLogin}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            title="Admin Login"
          >
            <Shield className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden pb-4">
          <div className="flex justify-around">
            <button
              onClick={() => scrollToSection('announcements')}
              className="flex flex-col items-center space-y-1 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Megaphone className="w-5 h-5" />
              <span className="text-xs">News</span>
            </button>
            <button
              onClick={() => scrollToSection('events')}
              className="flex flex-col items-center space-y-1 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Calendar className="w-5 h-5" />
              <span className="text-xs">Events</span>
            </button>
            <button
              onClick={() => scrollToSection('listings')}
              className="flex flex-col items-center space-y-1 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Building className="w-5 h-5" />
              <span className="text-xs">Listings</span>
            </button>
            <button
              onClick={() => scrollToSection('contacts')}
              className="flex flex-col items-center space-y-1 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="text-xs">Contacts</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}