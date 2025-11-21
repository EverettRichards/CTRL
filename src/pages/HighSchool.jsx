import SecondaryNav from '../components/SecondaryNav';

const HighSchool = () => {
  const sections = [
    { id: 'about', label: 'About' },
    { id: 'activities', label: 'Activities' },
    { id: 'why-attend', label: 'Why Attend' },
    { id: 'committee', label: 'Committee' },
    { id: 'contact', label: 'Contact' },
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
                <span className="text-5xl">🎓</span>
              </div>
            </div>
            <h1 className="tech-heading mb-6">
              High School Exposition
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Inspiring the Next Generation of Innovators
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="tech-section">
        <div className="tech-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="tech-subheading mb-8">About the Exposition</h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              The High School Exposition is a dynamic outreach event designed to introduce high school students 
              to the exciting world of technology, engineering, and innovation. Through interactive demonstrations, 
              hands-on activities, and engaging presentations, we inspire young minds to pursue careers in STEM fields.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              We believe in planting the seeds of innovation early. This event showcases cutting-edge projects, 
              provides insights into college life, and demonstrates the real-world applications of technology 
              in solving important problems.
            </p>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="tech-section bg-tech-dark">
        <div className="tech-container">
          <h2 className="tech-subheading text-center mb-12">Event Activities</h2>
          <div className="tech-grid">
            <div className="tech-card">
              <h3 className="text-xl font-bold mb-3 text-tech-blue">Interactive Demos</h3>
              <p className="text-gray-300">
                Experience hands-on demonstrations of robotics, AI, VR/AR, and other cutting-edge technologies.
              </p>
            </div>
            
            <div className="tech-card">
              <h3 className="text-xl font-bold mb-3 text-tech-blue">Student Projects</h3>
              <p className="text-gray-300">
                See innovative projects created by SDSU students and learn about their development process.
              </p>
            </div>
            
            <div className="tech-card">
              <h3 className="text-xl font-bold mb-3 text-tech-blue">Coding Workshops</h3>
              <p className="text-gray-300">
                Participate in beginner-friendly coding workshops and create your first program.
              </p>
            </div>
            
            <div className="tech-card">
              <h3 className="text-xl font-bold mb-3 text-tech-blue">Campus Tours</h3>
              <p className="text-gray-300">
                Explore the SDSU campus and learn about programs, clubs, and opportunities for future students.
              </p>
            </div>
            
            <div className="tech-card">
              <h3 className="text-xl font-bold mb-3 text-tech-blue">Career Talks</h3>
              <p className="text-gray-300">
                Hear from industry professionals about diverse career paths in technology and engineering.
              </p>
            </div>
            
            <div className="tech-card">
              <h3 className="text-xl font-bold mb-3 text-tech-blue">Q&A Sessions</h3>
              <p className="text-gray-300">
                Ask questions about college admissions, majors, and life as a tech student at SDSU.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="why-attend" className="tech-section">
        <div className="tech-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="tech-subheading mb-8 text-center">Why Attend</h2>
            <div className="space-y-4">
              <div className="tech-card">
                <h3 className="text-lg font-bold text-tech-blue mb-2">Discover Your Passion</h3>
                <p className="text-gray-300">
                  Explore different areas of technology and find what excites you most.
                </p>
              </div>
              <div className="tech-card">
                <h3 className="text-lg font-bold text-tech-blue mb-2">Learn from Students</h3>
                <p className="text-gray-300">
                  Connect with current SDSU students and learn about their experiences firsthand.
                </p>
              </div>
              <div className="tech-card">
                <h3 className="text-lg font-bold text-tech-blue mb-2">Hands-On Experience</h3>
                <p className="text-gray-300">
                  Get practical experience with technology through interactive activities and workshops.
                </p>
              </div>
              <div className="tech-card">
                <h3 className="text-lg font-bold text-tech-blue mb-2">Plan Your Future</h3>
                <p className="text-gray-300">
                  Gain insights into college programs and career opportunities in STEM fields.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Committee Section */}
      <section id="committee" className="tech-section">
        <div className="tech-container">
          <h2 className="tech-subheading text-center mb-12">High School Committee</h2>
          <div className="tech-grid">
            <div className="tech-card text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-tech-blue to-tech-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">🎓</span>
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
      <section id="contact" className="tech-section bg-tech-dark">
        <div className="tech-container">
          <div className="tech-card max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-tech-blue">Bring Your School</h2>
            <p className="text-gray-300 mb-6">
              Interested in bringing your high school students to our exposition? Contact us to learn more!
            </p>
            <a href="#contact" className="tech-button" aria-label="Get more information about the high school exposition">
              Get More Information
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HighSchool;
