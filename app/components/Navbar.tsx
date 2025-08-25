'use client';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="px-6 py-4 max-w-7xl mx-auto">
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
            <Link 
              href="/meeting-members" 
              className={`transition-colors ${
                isActive('/meeting-members') 
                  ? 'text-blue-600 font-medium' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Meeting Recaps
            </Link>
            <Link 
              href="/members" 
              className={`transition-colors ${
                isActive('/members') 
                  ? 'text-blue-600 font-medium' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Members
            </Link>
            <Link 
              href="/resources" 
              className={`transition-colors ${
                isActive('/resources') 
                  ? 'text-blue-600 font-medium' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Resources
            </Link>
            <Link 
              href="/competitions" 
              className={`transition-colors ${
                isActive('/competitions') 
                  ? 'text-blue-600 font-medium' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Upcoming Competitions
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
            <div className="px-6 py-4 space-y-2">
              <Link 
                href="/meeting-members" 
                className={`block py-3 px-3 rounded-lg transition-colors ${
                  isActive('/meeting-members')
                    ? 'text-blue-600 font-medium bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Meeting Recaps
              </Link>
              <Link 
                href="/members" 
                className={`block py-3 px-3 rounded-lg transition-colors ${
                  isActive('/members')
                    ? 'text-blue-600 font-medium bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Members
              </Link>
              <Link 
                href="/resources" 
                className={`block py-3 px-3 rounded-lg transition-colors ${
                  isActive('/resources')
                    ? 'text-blue-600 font-medium bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Resources
              </Link>
              <Link 
                href="/competitions" 
                className={`block py-3 px-3 rounded-lg transition-colors ${
                  isActive('/competitions')
                    ? 'text-blue-600 font-medium bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Upcoming Competitions
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
