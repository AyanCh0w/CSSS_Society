'use client';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function MeetingMembers() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50 relative">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative z-10 px-6 py-16 max-w-7xl mx-auto text-center mt-20">
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
