'use client';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/Footer';

export default function MeetingMembers() {
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
            <Link href="/meeting-members" className="text-blue-600 font-medium">
              Meeting Recaps
            </Link>
            <Link href="/members" className="text-gray-700 hover:text-blue-600 transition-colors">
              Members
            </Link>
            <Link href="/resources" className="text-gray-700 hover:text-blue-600 transition-colors">
              Resources
            </Link>
            <Link href="/competitions" className="text-gray-700 hover:text-blue-600 transition-colors">
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
                className="block text-blue-600 font-medium py-2"
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
                className="block text-gray-700 hover:text-blue-600 transition-colors py-2"
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
          Meeting Recaps
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Stay updated with our latest meetings, activities, and club highlights
        </p>
      </section>

      {/* Club Photo Section */}
      <section className="relative z-10 px-6 py-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our 2024–25 Club Photo!</h2>
        <div className="mb-12">
          <div className="w-full max-w-4xl mx-auto">
            <Image
              src="/meeting_images/2025/club_photo_1:18.jpeg"
              alt="CSSS Club Photo 2024-25"
              width={800}
              height={600}
              className="w-full h-auto rounded-lg shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* Meeting Images Grid */}
      <section className="relative z-10 px-6 py-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">2024-25 Meetings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
            <Image
              src="/meeting_images/2025/1:13.jpeg"
              alt="Meeting on January 13, 2025"
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">January 13, 2025</h3>
            <p className="text-gray-600">had a great time learning</p>
          </div>
          
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
            <Image
              src="/meeting_images/2025/1:26.jpeg"
              alt="Meeting on January 26, 2025"
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">January 26, 2025</h3>
            <p className="text-gray-600">had a great time learning</p>
          </div>
          
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
            <Image
              src="/meeting_images/2025/2:10.jpeg"
              alt="Meeting on February 10, 2025"
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">February 10, 2025</h3>
            <p className="text-gray-600">had a great time learning</p>
          </div>
          
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
            <Image
              src="/meeting_images/2025/2:24.jpeg"
              alt="Meeting on February 24, 2025"
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">February 24, 2025</h3>
            <p className="text-gray-600">had a great time learning</p>
          </div>
          
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
            <Image
              src="/meeting_images/2025/3:24.jpeg"
              alt="Meeting on March 24, 2025"
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">March 24, 2025</h3>
            <p className="text-gray-600">had a great time learning</p>
          </div>
          
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
            <Image
              src="/meeting_images/2025/4:7.jpeg"
              alt="Meeting on April 7, 2025"
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">April 7, 2025</h3>
            <p className="text-gray-600">had a great time learning</p>
          </div>

          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
            <Image
              src="/meeting_images/2025/4:28.jpeg"
              alt="Meeting on April 28, 2025"
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">April 28, 2025</h3>
            <p className="text-gray-600">had a great time learning</p>
          </div>

          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
            <Image
              src="/meeting_images/2025/9:30.png"
              alt="Meeting on September 30, 2025"
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">September 30, 2025</h3>
            <p className="text-gray-600">had a great time learning</p>
          </div>

          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
            <Image
              src="/meeting_images/2025/10:7.jpeg"
              alt="Meeting on October 7, 2025"
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">October 7, 2025</h3>
            <p className="text-gray-600">had a great time learning</p>
          </div>

          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
            <Image
              src="/meeting_images/2025/10:14.png"
              alt="Meeting on October 14, 2025"
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">October 14, 2025</h3>
            <p className="text-gray-600">had a great time learning</p>
          </div>

          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
            <Image
              src="/meeting_images/2025/10:28.png"
              alt="Meeting on October 28, 2025"
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">October 28, 2025</h3>
            <p className="text-gray-600">had a great time learning</p>
          </div>

          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
            <Image
              src="/meeting_images/2025/12:2.jpeg"
              alt="Meeting on December 2, 2025"
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">December 2, 2025</h3>
            <p className="text-gray-600">had a great time learning</p>
          </div>

          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
            <Image
              src="/meeting_images/2025/umd_hspc_2:8.jpeg"
              alt="UMD HSPC Competition on February 8, 2025"
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">February 8, 2025 - UMD HSPC</h3>
            <p className="text-gray-600">had a great time learning</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
