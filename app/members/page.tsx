'use client';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Members() {
  const members = [
    {
      id: 1,
      name: "Ayan Chowdhary",
      grade: "Senior",
      role: "President",
      bio: "I’m Ayan Chowdhary, a student and developer passionate about using technology to create meaningful impact. My work spans projects in education, the environment, and community engagement, and I enjoy combining problem-solving with creativity to bring ideas to life. Alongside my technical projects, I’ve built leadership and communication skills through founding clubs and competing in academic events, experiences that have strengthened my ability to collaborate and share knowledge effectively.",
      image: "/website_images/patriot_guy.png"
    },
    {
      id: 2,
      name: "Erica",
      grade: "Senior",
      role: "Vice President",
      bio: "[temp] I’m Erica, a senior at Wootton. I’m interested in computer science and math, and I’m excited to help the CSSS club grow and succeed!",
      image: "/website_images/patriot_girl.png"
    },
    {
      id: 3,
      name: "Jacob",
      grade: "Senior",
      role: "AI/ML Officer",
      bio: "Jacob is a high school senior passionate about computer science, algorithms, and artificial intelligence. He has experience in Java, Python, and machine learning, and enjoys applying technical skills to real-world projects—most recently developing an AI-powered volleyball position predictor. Outside of coding, Jacob is a varsity volleyball player and loves spending time with friends and family. He hopes to pursue computer science in college with a focus on solving meaningful problems through technology.",
      image: "/website_images/patriot_guy.png"
    },
    {
      id: 4,
      name: "Nicholas",
      grade: "Senior",
      role: "AI/ML Officer",
      bio: "I’m Nicholas, a senior at Wootton High School. I enjoy programming because it allows me to make interesting and useful things. I also enjoy ice hockey and video games.",
      image: "/website_images/patriot_guy.png"
    },
    {
      id: 5,
      name: "Andrew",
      grade: "Senior",
      role: "AI/ML Officer",
      bio: "I’m a senior who enjoys programming and the challenge it brings. In my spare time I like to go camping, run, and play video games.",
      image: "/website_images/patriot_guy.png"
    },
    {
      id: 6,
      name: "Rai",
      grade: "Senior",
      role: "CAD Officer",
      bio: "Hello everyone, I’m Rai, a senior at Wootton. I like learning how to code in different languages and making shaders and models, which I’m eager to present in my sessions!",
      image: "/website_images/patriot_girl.png"
    },
    {
      id: 7,
      name: "Ari",
      grade: "Senior",
      role: "Game Dev Officer",
      bio: "From a young age, I was captivated by technology. Watching TV shows like Back to the Future and seeing advanced sports cars up close sparked my love with tech and engineering. This interest quickly developed into a personal goal to create my own engineering feats and start to build things myself. My dedication to this field is reflected through my academic choices, extracurricular activities, and personal hobbies, each of which has strengthened my love and resolve to contribute to the world of engineering.",
      image: "/website_images/patriot_guy.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50 relative">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative z-10 px-6 py-16 max-w-7xl mx-auto text-center mt-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Our Members
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Meet the talented students who make CSSS a vibrant community of computer science enthusiasts
        </p>
      </section>

      {/* Members Grid */}
      <section className="relative z-10 px-6 py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member) => (
            <div key={member.id} className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="text-center mb-6">
                <div className="w-24 h-24 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={`${member.name} profile`}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover rounded-full border-4 border-white shadow-sm"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                <div className="flex items-center justify-center space-x-3 mb-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    {member.grade}
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
                    {member.role}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed text-center">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Join the Club Section */}
      <section className="relative z-10 px-6 py-16 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Want to Join Our Team?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Become part of our growing community and showcase your skills alongside these talented members.
        </p>
        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLSdlmr3sPk-aGvsA940uYbndY_ZR9iH-WaJgFvDQtCg8A70oVA/viewform"
          className="inline-block bg-gradient-to-r from-red-500 to-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity"
        >
          Join CSSS Today
        </a>
      </section>

      <Footer />
    </div>
  );
}
