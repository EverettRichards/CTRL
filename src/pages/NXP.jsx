import SecondaryNav from '../components/SecondaryNav';

const NXP = () => {
  const sections = [
    { id: 'about', label: 'About' },
    { id: 'project-areas', label: 'Project Areas' },
    { id: 'highlights', label: 'Event Highlights' },
    { id: 'partnership', label: 'Partnership' },
    { id: 'committee', label: 'Committee' },
    { id: 'details', label: 'Details' },
  ];

  return (
    <div>
      <SecondaryNav sections={sections} />
      
      {/* Hero Section */}
      <section id="about" className="tech-section bg-gradient-to-b from-tech-darker via-tech-dark to-tech-darker">
        <div className="tech-container">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-tech-blue to-tech-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-5xl">🔧</span>
              </div>
            </div>
            <h1 className="tech-heading mb-6">
              NXP Capstone Event
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Showcasing Excellence in Engineering Innovation
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="tech-section">
        <div className="tech-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="tech-subheading mb-8">About the NXP Capstone</h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              The NXP Capstone Event is a prestigious showcase of senior engineering projects completed in 
              partnership with NXP Semiconductors and other industry leaders. This culminating experience 
              represents the pinnacle of undergraduate engineering education at SDSU, where students apply 
              their knowledge to solve real-world technical challenges.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Students work throughout their senior year to design, develop, and implement comprehensive 
              engineering solutions. The capstone event provides a platform to demonstrate their projects 
              to industry professionals, faculty, and peers, while competing for recognition and awards.
            </p>
          </div>
        </div>
      </section>

      {/* Project Areas Section */}
      <section id="project-areas" className="tech-section bg-tech-dark">
        <div className="tech-container">
          <h2 className="tech-subheading text-center mb-12">Project Areas</h2>
          <div className="tech-grid">
            <div className="tech-card">
              <h3 className="text-xl font-bold mb-3 text-tech-blue">Embedded Systems</h3>
              <p className="text-gray-300">
                Development of sophisticated embedded solutions using NXP microcontrollers and processors.
              </p>
            </div>
            
            <div className="tech-card">
              <h3 className="text-xl font-bold mb-3 text-tech-blue">IoT Solutions</h3>
              <p className="text-gray-300">
                Internet of Things applications connecting devices and creating smart, networked systems.
              </p>
            </div>
            
            <div className="tech-card">
              <h3 className="text-xl font-bold mb-3 text-tech-blue">Robotics & Automation</h3>
              <p className="text-gray-300">
                Autonomous systems and robotic applications for industrial and consumer use cases.
              </p>
            </div>
            
            <div className="tech-card">
              <h3 className="text-xl font-bold mb-3 text-tech-blue">Automotive Technology</h3>
              <p className="text-gray-300">
                Advanced automotive systems including ADAS, infotainment, and vehicle networking.
              </p>
            </div>
            
            <div className="tech-card">
              <h3 className="text-xl font-bold mb-3 text-tech-blue">Security Solutions</h3>
              <p className="text-gray-300">
                Hardware and software security implementations for protecting critical systems.
              </p>
            </div>
            
            <div className="tech-card">
              <h3 className="text-xl font-bold mb-3 text-tech-blue">Machine Learning</h3>
              <p className="text-gray-300">
                Edge AI and machine learning applications on resource-constrained embedded devices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Highlights Section */}
      <section id="highlights" className="tech-section">
        <div className="tech-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="tech-subheading mb-8 text-center">Event Highlights</h2>
            <div className="space-y-4">
              <div className="tech-card">
                <h3 className="text-lg font-bold text-tech-blue mb-2">Project Demonstrations</h3>
                <p className="text-gray-300">
                  Teams present working prototypes and demonstrate the capabilities of their solutions.
                </p>
              </div>
              <div className="tech-card">
                <h3 className="text-lg font-bold text-tech-blue mb-2">Industry Judging</h3>
                <p className="text-gray-300">
                  Projects are evaluated by panels of engineers and professionals from NXP and partner companies.
                </p>
              </div>
              <div className="tech-card">
                <h3 className="text-lg font-bold text-tech-blue mb-2">Poster Sessions</h3>
                <p className="text-gray-300">
                  Technical posters detail the design process, implementation, and results of each project.
                </p>
              </div>
              <div className="tech-card">
                <h3 className="text-lg font-bold text-tech-blue mb-2">Awards Ceremony</h3>
                <p className="text-gray-300">
                  Recognition and prizes for outstanding projects in various categories and technical areas.
                </p>
              </div>
              <div className="tech-card">
                <h3 className="text-lg font-bold text-tech-blue mb-2">Networking Reception</h3>
                <p className="text-gray-300">
                  Opportunities to connect with industry representatives and discuss career opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section id="partnership" className="tech-section bg-tech-dark">
        <div className="tech-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="tech-subheading mb-6">Industry Partnership</h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Our partnership with NXP Semiconductors provides students with access to cutting-edge technology, 
              mentorship from industry experts, and real-world engineering challenges. This collaboration ensures 
              that capstone projects align with industry needs and prepare students for successful careers.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              NXP's support includes hardware donations, technical guidance, and direct involvement in project 
              evaluation, creating an invaluable bridge between academic learning and professional practice.
            </p>
          </div>
        </div>
      </section>

      {/* Committee Section */}
      <section id="committee" className="tech-section">
        <div className="tech-container">
          <h2 className="tech-subheading text-center mb-12">NXP Capstone Committee</h2>
          <div className="tech-grid">
            <div className="tech-card text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-tech-blue to-tech-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">🔧</span>
              </div>
              <h4 className="text-lg font-bold text-tech-blue mb-1">Chair</h4>
              <p className="text-gray-400">TBD</p>
            </div>
            
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="details" className="tech-section">
        <div className="tech-container">
          <div className="tech-card max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-tech-blue">Attend the Showcase</h2>
            <p className="text-gray-300 mb-6">
              Join us to witness the innovative capstone projects from SDSU's brightest engineering students.
            </p>
            <a href="#details" className="tech-button" aria-label="View NXP Capstone event details">
              Event Details
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NXP;
