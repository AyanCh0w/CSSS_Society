'use client';
import { Menu, X, ExternalLink, BookOpen, Code, Users, Trophy } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/Footer';

export default function Resources() {
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
            <Link href="/resources" className="text-blue-600 font-medium">
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
                className="block text-blue-600 font-medium py-2"
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
          Resources
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Essential tools, tutorials, and resources to help you excel in computer science
        </p>
      </section>

      {/* Learning Resources */}
      <section className="relative z-10 px-6 py-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Learning Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-gray-200">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Programming Fundamentals</h3>
            <ul className="space-y-2 text-gray-600 mb-4">
              <li>• Python for Beginners</li>
              <li>• Java Programming</li>
              <li>• Web Development (HTML/CSS/JS)</li>
              <li>• Data Structures & Algorithms</li>
            </ul>
            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
              Explore Resources <ExternalLink size={16} className="ml-1" />
            </a>
          </div>

          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-gray-200">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Code className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Advanced Topics</h3>
            <ul className="space-y-2 text-gray-600 mb-4">
              <li>• Machine Learning & AI</li>
              <li>• Mobile App Development</li>
              <li>• Database Design</li>
              <li>• Cybersecurity</li>
            </ul>
            <a href="#" className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center">
              Explore Resources <ExternalLink size={16} className="ml-1" />
            </a>
          </div>

          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-gray-200">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Collaboration Tools</h3>
            <ul className="space-y-2 text-gray-600 mb-4">
              <li>• Git & GitHub</li>
              <li>• Team Communication</li>
              <li>• Project Management</li>
              <li>• Code Review</li>
            </ul>
            <a href="#" className="text-green-600 hover:text-green-700 font-medium inline-flex items-center">
              Explore Resources <ExternalLink size={16} className="ml-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Competition Resources */}
      <section className="relative z-10 px-6 py-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Competition Preparation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-gray-200">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
              <Trophy className="w-6 h-6 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Practice Problems</h3>
            <p className="text-gray-600 mb-4">
              Sharpen your problem-solving skills with curated practice problems from past competitions.
            </p>
            <a href="#" className="text-yellow-600 hover:text-yellow-700 font-medium inline-flex items-center">
              Start Practicing <ExternalLink size={16} className="ml-1" />
            </a>
          </div>

          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-gray-200">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <Code className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Competition Strategies</h3>
            <p className="text-gray-600 mb-4">
              Learn effective strategies and techniques used by successful competition participants.
            </p>
            <a href="#" className="text-red-600 hover:text-red-700 font-medium inline-flex items-center">
              Learn Strategies <ExternalLink size={16} className="ml-1" />
            </a>
          </div>
        </div>
      </section>

      {/* External Links */}
      <section className="relative z-10 px-6 py-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Useful External Links</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer" className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">LeetCode</h3>
            <p className="text-gray-600">Practice coding problems and prepare for technical interviews</p>
          </a>

          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">GitHub</h3>
            <p className="text-gray-600">Collaborate on projects and showcase your work</p>
          </a>

          <a href="https://stackoverflow.com" target="_blank" rel="noopener noreferrer" className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Stack Overflow</h3>
            <p className="text-gray-600">Find solutions to programming problems and ask questions</p>
          </a>

          <a href="https://kaggle.com" target="_blank" rel="noopener noreferrer" className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Kaggle</h3>
            <p className="text-gray-600">Data science competitions and datasets</p>
          </a>

          <a href="https://hackerrank.com" target="_blank" rel="noopener noreferrer" className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">HackerRank</h3>
            <p className="text-gray-600">Practice coding skills and participate in challenges</p>
          </a>

          <a href="https://codeforces.com" target="_blank" rel="noopener noreferrer" className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Codeforces</h3>
            <p className="text-gray-600">Competitive programming contests and practice</p>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
