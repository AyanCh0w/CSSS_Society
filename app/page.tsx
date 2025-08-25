'use client';
import Image from 'next/image';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50 relative">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20 text-center max-w-7xl mx-auto mt-20">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
          Wootton Computer Science Club
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          Computer Science Scholar Society
        </p>
        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLSdlmr3sPk-aGvsA940uYbndY_ZR9iH-WaJgFvDQtCg8A70oVA/viewform"
          className="inline-block bg-gradient-to-r from-red-500 via-white to-blue-500 text-gray-800 px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity transform hover:scale-105 border border-gray-300"
        >
          Join Today!
        </a>
      </section>

      {/* Secondary CTA */}
      <section className="relative z-10 px-6 py-8 max-w-7xl mx-auto">
        <div className="text-center">
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSekLdNhQiyTjbMRb0ZY4XdqUiV173uCkxQUTwycskcSOlMBmw/viewform?pli=1"
            className="inline-block w-full md:w-auto bg-gradient-to-r from-red-500 to-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity"
          >
            ATTENDANCE FORM!
          </a>
        </div>
      </section>

      {/* Learn New Skills Section */}
      <section className="relative z-10 px-6 py-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Learn new skills</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Join groups of like-minded students who collaborate and create projects, then show off your skills in our competitions!
            </p>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSdlmr3sPk-aGvsA940uYbndY_ZR9iH-WaJgFvDQtCg8A70oVA/viewform"
              className="inline-block bg-gradient-to-r from-red-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Join the email list!
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/website_images/patriot_girl.png"
              alt="Student working on computer science project"
              width={200}
              height={200}
              className="w-full aspect-square object-cover rounded-lg"
            />
            <Image
              src="/website_images/patriot_guy.png"
              alt="Student collaborating on coding project"
              width={200}
              height={200}
              className="w-full aspect-square object-cover rounded-lg"
            />
            <Image
              src="/website_images/wootton-compsci.jpg"
              alt="Wootton Computer Science classroom"
              width={200}
              height={200}
              className="w-full aspect-square object-cover rounded-lg"
            />
            <Image
              src="/website_images/csss.jpg"
              alt="CSSS club activities"
              width={200}
              height={200}
              className="w-full aspect-square object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Meeting Info Section */}
      <section className="relative z-10 px-6 py-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 border border-gray-200 rounded-lg bg-white/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Monday</h3>
            <p className="text-gray-600">We meet every other Monday</p>
          </div>
          <div className="text-center p-6 border border-gray-200 rounded-lg bg-white/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Room 110</h3>
            <p className="text-gray-600">Find us in Room 110 (Mr. McTimoney)</p>
          </div>
          <div className="text-center p-6 border border-gray-200 rounded-lg bg-white/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Lunch</h3>
            <p className="text-gray-600">Join us during Lunch</p>
          </div>
        </div>
      </section>

      {/* Join Today Section */}
      <section className="relative z-10 px-6 py-16 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Join today</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Get access to a personal member bio website to advertise your new skills for internships and more.
        </p>
        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLSdlmr3sPk-aGvsA940uYbndY_ZR9iH-WaJgFvDQtCg8A70oVA/viewform"
          className="inline-block bg-gradient-to-r from-red-500 to-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity"
        >
          Get Started
        </a>
      </section>

      {/* About the Club Section */}
      <section className="relative z-10 px-6 py-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Collaborative Workspace</h3>
            <p className="text-gray-600 leading-relaxed">
              Dive into tech projects, brainstorm with friends, and bring ideas to life.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Assistance on Schoolwork</h3>
            <p className="text-gray-600 leading-relaxed">
              Support for coding tasks and tech projects to make coursework easier.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Advanced Topics</h3>
            <p className="text-gray-600 leading-relaxed">
              Explore areas like AI, CAD design, and more.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Expansive Competitions</h3>
            <p className="text-gray-600 leading-relaxed">
              Hackathons and coding challenges across the county—show your skills and meet other enthusiasts.
            </p>
          </div>
        </div>
      </section>

      {/* Club Photo Section */}
      <section className="relative z-10 px-6 py-16 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our 2024–25 Club Photo!</h2>
        <div className="mb-8">
          <div className="w-full max-w-2xl mx-auto">
            <Image
              src="/meeting_images/2025/club_photo_1:18.jpeg"
              alt="CSSS Club Photo 2024-25"
              width={800}
              height={600}
              className="w-full h-auto rounded-lg shadow-sm"
            />
          </div>
        </div>
        <a 
          href="https://csssociety.net/?page_id=37"
          className="inline-block bg-gradient-to-r from-red-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
        >
          See what we&apos;ve been up to
        </a>
      </section>

      <Footer />
    </div>
  );
}
