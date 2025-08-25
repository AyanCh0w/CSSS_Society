'use client';
import { Menu, X, Calendar, MapPin, Trophy, Users, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/Footer';

export default function Competitions() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50 relative">
      {/* Navigation */}
      <nav className="relative z-10 px-6 py-4 max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src="/website_images/csss.jpg"
                alt="CSSS Logo"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <Link href="/" className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                Wootton Computer Science Scholar Society
              </Link>
              <p className="text-sm text-gray-600">CSSS</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/meeting-members" className="text-gray-700 hover:text-blue-600 transition-colors">
              Meeting Recaps
            </Link>
            <Link href="/members" className="text-gray-700 hover:text-blue-600 transition-colors">
              Members
            </Link>
            <Link href="/resources" className="text-gray-700 hover:text-blue-600 transition-colors">
              Resources
            </Link>
            <Link href="/competitions" className="text-blue-600 font-medium">
              Upcoming Competitions
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg">
            <div className="px-6 py-4 space-y-4">
              <Link 
                href="/meeting-members" 
                className="block text-gray-700 hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Meeting Recaps
              </Link>
              <Link 
                href="/members" 
                className="block text-gray-700 hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Members
              </Link>
              <Link 
                href="/resources" 
                className="block text-gray-700 hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Resources
              </Link>
              <Link 
                href="/competitions" 
                className="block text-blue-600 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Upcoming Competitions
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-16 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Congressional App Challenge
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Create an original app that serves your community and compete for recognition from Congress
        </p>
      </section>

      {/* Featured Competition */}
      <section className="relative z-10 px-6 py-16 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-red-500 via-white to-blue-500 rounded-2xl p-8 text-gray-800 text-center border border-gray-300">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Trophy className="w-8 h-8 text-gray-700" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Congressional App Challenge 2025</h2>
          <p className="text-xl mb-6 opacity-90">
            Design and code an original application that addresses a real-world problem in your community
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Submission Deadline: October 24, 2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span>Maryland&apos;s 8th Congressional District</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span>Individual or Teams of up to 4</span>
            </div>
          </div>
          <a 
            href="https://www.congressionalappchallenge.us/"
            className="inline-block bg-gradient-to-r from-red-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-colors"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Upcoming Competitions */}
      <section className="relative z-10 px-6 py-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Competition Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-gray-200">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Registration Period</h3>
            <p className="text-gray-600 mb-4">Open now through October 2025</p>
            <div className="space-y-2 text-sm text-gray-500 mb-4">
              <div>📅 June 1 - October 24, 2025</div>
              <div>📍 Online Registration</div>
              <div>⏰ Rolling Deadline</div>
            </div>
            <a href="https://www.congressionalappchallenge.us/" className="text-green-600 hover:text-green-700 font-medium inline-flex items-center">
              Register Now <ExternalLink size={16} className="ml-1" />
            </a>
          </div>

          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-gray-200">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Trophy className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">App Development</h3>
            <p className="text-gray-600 mb-4">Create your app using any programming language</p>
            <div className="space-y-2 text-sm text-gray-500 mb-4">
              <div>📅 June - October 2025</div>
              <div>📍 Your Choice</div>
              <div>⏰ 4+ months</div>
            </div>
            <a href="https://www.congressionalappchallenge.us/students/" className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center">
              Guidelines <ExternalLink size={16} className="ml-1" />
            </a>
          </div>

          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-gray-200">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Judging & Awards</h3>
            <p className="text-gray-600 mb-4">Winners announced in December 2025</p>
            <div className="space-y-2 text-sm text-gray-500 mb-4">
              <div>📅 November 2025</div>
              <div>📍 Congressional Recognition</div>
              <div>⏰ TBD</div>
            </div>
            <a href="https://www.congressionalappchallenge.us/prizes/" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
              Prize Info <ExternalLink size={16} className="ml-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative z-10 px-6 py-16 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Build Something Amazing?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          The Congressional App Challenge is your chance to showcase your coding skills, solve real community problems, and gain recognition from Congress. Start planning your app today!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://www.congressionalappchallenge.us/"
            className="inline-block bg-gradient-to-r from-red-500 to-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Start Your App
          </a>
          <a 
            href="/resources"
            className="inline-block bg-white text-gray-800 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-gray-300 hover:bg-gray-50 transition-colors"
          >
            View Resources
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
