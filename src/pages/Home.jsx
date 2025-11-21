import SecondaryNav from '../components/SecondaryNav';

const Home = () => {
  const sections = [
    { id: 'about', label: 'About Us' },
    { id: 'events', label: 'Events' },
    { id: 'officers', label: 'Officers' },
    { id: 'mission', label: 'Mission' },
  ];

  return (
    <div>
      <SecondaryNav sections={sections} />
      
      {/* Hero Section */}
      <section id="about" className="tech-section bg-gradient-to-b from-tech-darker via-tech-dark to-tech-darker">
        <div className="tech-container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="tech-heading mb-6 animate-pulse-slow">
              Coalition of Tech Representatives and Leadership
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Empowering the next generation of tech leaders at San Diego State University
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#join" className="tech-button" aria-label="Join CTRL organization">
                Join CTRL
              </a>
              <a href="#about" className="tech-button-outline" aria-label="Learn more about CTRL">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="tech-section">
        <div className="tech-container">
          <h2 className="tech-subheading text-center mb-12">Our Events</h2>
          <div className="tech-grid">
            <div className="tech-card">
              <div className="w-12 h-12 bg-gradient-to-br from-tech-blue to-tech-purple rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-tech-blue">Innovate 4 SDSU Hackathon</h3>
              <p className="text-gray-300 mb-4">
                Join us for our annual hackathon where students collaborate to build innovative solutions to real-world problems.
              </p>
              <a href="/hack" className="text-tech-blue hover:text-tech-purple transition-colors">
                Learn More →
              </a>
            </div>

            <div className="tech-card">
              <div className="w-12 h-12 bg-gradient-to-br from-tech-blue to-tech-purple rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-tech-blue">CTRL Career Symposium</h3>
              <p className="text-gray-300 mb-4">
                Network with industry professionals and explore career opportunities in technology and leadership.
              </p>
              <a href="/symposium" className="text-tech-blue hover:text-tech-purple transition-colors">
                Learn More →
              </a>
            </div>

            <div className="tech-card">
              <div className="w-12 h-12 bg-gradient-to-br from-tech-blue to-tech-purple rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-tech-blue">High School Exposition</h3>
              <p className="text-gray-300 mb-4">
                Inspiring the next generation of tech leaders by showcasing technology and innovation to high school students.
              </p>
              <a href="/highschool" className="text-tech-blue hover:text-tech-purple transition-colors">
                Learn More →
              </a>
            </div>

            <div className="tech-card">
              <div className="w-12 h-12 bg-gradient-to-br from-tech-blue to-tech-purple rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-tech-blue">NXP Capstone Event</h3>
              <p className="text-gray-300 mb-4">
                Showcasing senior capstone projects in partnership with NXP Semiconductors and industry leaders.
              </p>
              <a href="/nxp" className="text-tech-blue hover:text-tech-purple transition-colors">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Officers Section */}
      <section id="officers" className="tech-section">
        <div className="tech-container">
          <h2 className="tech-subheading text-center mb-12">Our Team</h2>
          
          {/* Executive Officers */}
          <div className="mb-16">
            <h3 className="text-xl md:text-2xl font-semibold text-tech-purple mb-8 text-center">Executive Officers</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="tech-card text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-tech-blue to-tech-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">👤</span>
                </div>
                <h4 className="text-lg font-bold text-tech-blue mb-1">President</h4>
                <p className="text-gray-400">TBD</p>
              </div>
              
              <div className="tech-card text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-tech-blue to-tech-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">👤</span>
                </div>
                <h4 className="text-lg font-bold text-tech-blue mb-1">Vice President</h4>
                <p className="text-gray-400">TBD</p>
              </div>
              
              <div className="tech-card text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-tech-blue to-tech-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">👤</span>
                </div>
                <h4 className="text-lg font-bold text-tech-blue mb-1">Treasurer</h4>
                <p className="text-gray-400">TBD</p>
              </div>
            </div>
          </div>
          
          {/* Events Committee */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-tech-purple mb-8 text-center">Events Committee</h3>
            <div className="tech-grid">
              <div className="tech-card text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-tech-blue to-tech-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">👤</span>
                </div>
                <h4 className="text-lg font-bold text-tech-blue mb-1">Secretary</h4>
                <p className="text-gray-400">TBD</p>
              </div>
              
              <div className="tech-card text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-tech-blue to-tech-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">👤</span>
                </div>
                <h4 className="text-lg font-bold text-tech-blue mb-1">Volunteer Coordinator</h4>
                <p className="text-gray-400">TBD</p>
              </div>
              
              <div className="tech-card text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-tech-blue to-tech-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">👤</span>
                </div>
                <h4 className="text-lg font-bold text-tech-blue mb-1">Event Logistics Coordinator</h4>
                <p className="text-gray-400">TBD</p>
              </div>
              
              <div className="tech-card text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-tech-blue to-tech-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">👤</span>
                </div>
                <h4 className="text-lg font-bold text-tech-blue mb-1">Industry Outreach Coordinator</h4>
                <p className="text-gray-400">TBD</p>
              </div>
              
              <div className="tech-card text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-tech-blue to-tech-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">👤</span>
                </div>
                <h4 className="text-lg font-bold text-tech-blue mb-1">Media Director</h4>
                <p className="text-gray-400">TBD</p>
              </div>
              
              <div className="tech-card text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-tech-blue to-tech-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">👤</span>
                </div>
                <h4 className="text-lg font-bold text-tech-blue mb-1">Webmaster</h4>
                <p className="text-gray-400">TBD</p>
              </div>
              
              <div className="tech-card text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-tech-blue to-tech-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">💻</span>
                </div>
                <h4 className="text-lg font-bold text-tech-blue mb-1">Hackathon Chair</h4>
                <p className="text-gray-400">TBD</p>
              </div>
              
              <div className="tech-card text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-tech-blue to-tech-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">🎯</span>
                </div>
                <h4 className="text-lg font-bold text-tech-blue mb-1">Symposium Chair</h4>
                <p className="text-gray-400">TBD</p>
              </div>
              
              <div className="tech-card text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-tech-blue to-tech-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">🎓</span>
                </div>
                <h4 className="text-lg font-bold text-tech-blue mb-1">High School Chair</h4>
                <p className="text-gray-400">TBD</p>
              </div>
              
              <div className="tech-card text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-tech-blue to-tech-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">🔧</span>
                </div>
                <h4 className="text-lg font-bold text-tech-blue mb-1">NXP Capstone Chair</h4>
                <p className="text-gray-400">TBD</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="tech-section bg-tech-dark">
        <div className="tech-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="tech-subheading mb-6">Our Mission</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              CTRL is dedicated to fostering innovation, leadership, and collaboration within the tech community 
              at San Diego State University. Through our diverse events and initiatives, we create opportunities 
              for students to develop their skills, connect with industry professionals, and make a lasting impact 
              in the world of technology.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
