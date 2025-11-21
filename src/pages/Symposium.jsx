import SecondaryNav from '../components/SecondaryNav';

const Symposium = () => {
  const sections = [
    { id: 'about', label: 'About' },
    { id: 'opportunities', label: 'Opportunities' },
    { id: 'who-should-attend', label: 'Who Should Attend' },
    { id: 'register', label: 'Register' },
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
                <span className="text-5xl">🎯</span>
              </div>
            </div>
            <h1 className="tech-heading mb-6">
              CTRL Career Symposium
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Connecting Students with Industry Leaders
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="tech-section">
        <div className="tech-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="tech-subheading mb-8">About the Symposium</h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              The CTRL Career Symposium is a premier professional development event that bridges the gap between 
              students and the tech industry. This event provides a unique opportunity to network with recruiters, 
              attend insightful panel discussions, and explore career paths in technology and leadership.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Whether you're looking for internships, full-time positions, or simply want to learn more about 
              the tech industry, our symposium offers invaluable connections and insights to help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section id="opportunities" className="tech-section bg-tech-dark">
        <div className="tech-container">
          <h2 className="tech-subheading text-center mb-12">Opportunities</h2>
          <div className="tech-grid">
            <div className="tech-card">
              <h3 className="text-xl font-bold mb-3 text-tech-blue">Company Booths</h3>
              <p className="text-gray-300">
                Meet directly with recruiters from leading tech companies and learn about open positions.
              </p>
            </div>
            
            <div className="tech-card">
              <h3 className="text-xl font-bold mb-3 text-tech-blue">Panel Discussions</h3>
              <p className="text-gray-300">
                Gain insights from industry experts on career development, emerging technologies, and leadership.
              </p>
            </div>
            
            <div className="tech-card">
              <h3 className="text-xl font-bold mb-3 text-tech-blue">Resume Reviews</h3>
              <p className="text-gray-300">
                Get personalized feedback on your resume from professionals in the field.
              </p>
            </div>
            
            <div className="tech-card">
              <h3 className="text-xl font-bold mb-3 text-tech-blue">Mock Interviews</h3>
              <p className="text-gray-300">
                Practice your interview skills with experienced recruiters and receive constructive feedback.
              </p>
            </div>
            
            <div className="tech-card">
              <h3 className="text-xl font-bold mb-3 text-tech-blue">Networking Sessions</h3>
              <p className="text-gray-300">
                Build meaningful connections with peers, alumni, and industry professionals.
              </p>
            </div>
            
            <div className="tech-card">
              <h3 className="text-xl font-bold mb-3 text-tech-blue">Career Workshops</h3>
              <p className="text-gray-300">
                Participate in workshops covering topics like personal branding, negotiation, and career planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Attend */}
      <section id="who-should-attend" className="tech-section">
        <div className="tech-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="tech-subheading mb-8 text-center">Who Should Attend</h2>
            <div className="space-y-4">
              <div className="tech-card">
                <h3 className="text-lg font-bold text-tech-blue mb-2">Students Seeking Internships</h3>
                <p className="text-gray-300">
                  Perfect for students looking to gain practical experience through internships.
                </p>
              </div>
              <div className="tech-card">
                <h3 className="text-lg font-bold text-tech-blue mb-2">Graduating Seniors</h3>
                <p className="text-gray-300">
                  Ideal for seniors searching for full-time positions after graduation.
                </p>
              </div>
              <div className="tech-card">
                <h3 className="text-lg font-bold text-tech-blue mb-2">Career Changers</h3>
                <p className="text-gray-300">
                  Great for those looking to transition into the tech industry.
                </p>
              </div>
              <div className="tech-card">
                <h3 className="text-lg font-bold text-tech-blue mb-2">Networking Enthusiasts</h3>
                <p className="text-gray-300">
                  Anyone interested in building professional relationships in tech.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="register" className="tech-section bg-tech-dark">
        <div className="tech-container">
          <div className="tech-card max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-tech-blue">Join Us at the Symposium</h2>
            <p className="text-gray-300 mb-6">
              Take the next step in your career journey and connect with industry leaders.
            </p>
            <a href="#register" className="tech-button" aria-label="Register for the symposium">
              Register for Event
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Symposium;
