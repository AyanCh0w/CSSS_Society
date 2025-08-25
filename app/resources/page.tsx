'use client';
import { ExternalLink, BookOpen, Code, Users, Trophy } from 'lucide-react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Resources() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50 relative">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative z-10 px-6 py-16 max-w-7xl mx-auto text-center mt-20">
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
