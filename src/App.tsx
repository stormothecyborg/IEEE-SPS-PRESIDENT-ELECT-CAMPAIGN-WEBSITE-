import React, { useState } from 'react';
import { Menu, X, Mail, Linkedin, ChevronRight, Calendar, Award, BookOpen, Users, Target } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Vision & Goals', id: 'vision' },
    { name: 'Experience', id: 'experience' },
    { name: 'Publications', id: 'publications' },
    { name: 'Endorsements', id: 'endorsements' },
    { name: 'Contact', id: 'contact' }
  ];

  const visionPoints = [
    { icon: Target, title: 'Research Innovation', description: 'Expanding funding opportunities and fostering cutting-edge research initiatives' },
    { icon: Users, title: 'Global Collaboration', description: 'Strengthening industry-academia partnerships worldwide' },
    { icon: Calendar, title: 'Member Engagement', description: 'Enhancing member benefits and professional development programs' },
    { icon: Award, title: 'Excellence Recognition', description: 'Establishing new awards and recognition programs for emerging researchers' }
  ];

  const experience = [
    { year: '2020-2024', title: 'IEEE SPS Vice President', organization: 'Technical Directions Board' },
    { year: '2018-2020', title: 'Editor-in-Chief', organization: 'IEEE Transactions on Signal Processing' },
    { year: '2015-2018', title: 'Distinguished Lecturer', organization: 'IEEE Signal Processing Society' }
  ];

  const publications = [
    { title: 'Advanced Signal Processing in 5G Networks', journal: 'IEEE Transactions on Signal Processing', year: 2023 },
    { title: 'Deep Learning for Wireless Communications', journal: 'IEEE Signal Processing Magazine', year: 2022 },
    { title: 'Next-Generation Signal Processing Systems', journal: 'Proceedings of the IEEE', year: 2021 }
  ];

  const endorsements = [
    {
      quote: "An exceptional leader with a clear vision for the future of signal processing.",
      author: "Prof. Sarah Chen",
      title: "IEEE Fellow, Stanford University"
    },
    {
      quote: "Brings both academic excellence and industry perspective to the role.",
      author: "Dr. James Martinez",
      title: "IEEE Life Fellow, MIT"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <BookOpen className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-semibold text-gray-900">Dr. Elena Richardson</span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-6">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium ${
                    activeSection === item.id
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block px-3 py-2 text-base font-medium w-full text-left ${
                    activeSection === item.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
              <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block">Advancing Signal Processing</span>
                    <span className="block text-blue-600">Together</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Candidate for IEEE Signal Processing Society President-Elect (2025-27)
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <button
                        onClick={() => setActiveSection('vision')}
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                      >
                        View Vision & Goals
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                About Me
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                  alt="Dr. Elena Richardson"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-600">
                  As a Professor of Electrical Engineering at Stanford University and a Fellow of the IEEE, I have dedicated my career to advancing the field of signal processing and its applications in modern technology.
                </p>
                <p className="text-lg text-gray-600">
                  With over two decades of experience in research and leadership roles, I have contributed to groundbreaking developments in wireless communications, machine learning applications in signal processing, and 5G technologies.
                </p>
                <p className="text-lg text-gray-600">
                  My commitment to the IEEE Signal Processing Society spans 25 years, during which I've served in various leadership positions, including Vice President of Technical Directions and Editor-in-Chief of IEEE Transactions on Signal Processing.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-4xl font-bold text-blue-600">25+</p>
                    <p className="text-sm text-gray-600">Years in IEEE</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-4xl font-bold text-blue-600">200+</p>
                    <p className="text-sm text-gray-600">Publications</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-4xl font-bold text-blue-600">50+</p>
                    <p className="text-sm text-gray-600">Patents</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-4xl font-bold text-blue-600">30+</p>
                    <p className="text-sm text-gray-600">Awards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Goals */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Vision & Goals
              </h2>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                A forward-thinking approach to advancing signal processing research and education
              </p>
            </div>

            <div className="mt-10">
              <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                {visionPoints.map((point, index) => (
                  <div key={index} className="relative">
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                      <point.icon className="h-6 w-6" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{point.title}</p>
                    <p className="mt-2 ml-16 text-base text-gray-500">{point.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-12">
              Experience & Leadership
            </h2>
            <div className="space-y-8">
              {experience.map((item, index) => (
                <div key={index} className="relative">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center">
                        <Calendar className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                      <p className="mt-1 text-gray-500">{item.organization}</p>
                      <p className="text-sm text-blue-600">{item.year}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Publications */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-12">
              Selected Publications
            </h2>
            <div className="space-y-8">
              {publications.map((pub, index) => (
                <div key={index} className="bg-white shadow overflow-hidden rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg font-medium text-gray-900">{pub.title}</h3>
                    <p className="mt-1 text-gray-500">{pub.journal}</p>
                    <p className="text-sm text-blue-600">{pub.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Endorsements */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-12">
              Endorsements
            </h2>
            <div className="grid gap-8 lg:grid-cols-2">
              {endorsements.map((endorsement, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-600 italic">"{endorsement.quote}"</p>
                  <div className="mt-4">
                    <p className="text-gray-900 font-medium">{endorsement.author}</p>
                    <p className="text-gray-500">{endorsement.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-12">
              Contact
            </h2>
            <div className="max-w-lg mx-auto">
              <div className="flex justify-center space-x-6">
                <a href="mailto:elena.richardson@ieee.org" className="text-gray-400 hover:text-gray-500">
                  <Mail className="h-6 w-6" />
                </a>
                <a href="https://linkedin.com" className="text-gray-400 hover:text-gray-500">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <p className="text-center text-base text-gray-400">
              © {new Date().getFullYear()} Dr. Elena Richardson. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;