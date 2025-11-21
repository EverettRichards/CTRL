import SecondaryNav from '../components/SecondaryNav';

const Hack = () => {
  const sections = [
    { id: 'about', label: 'About' },
    { id: 'expect', label: 'What to Expect' },
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
                <span className="text-5xl">💻</span>
              </div>
            </div>
            <h1 className="tech-heading mb-6">
              Innovate 4 SDSU Hackathon
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Where Innovation Meets Collaboration
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="tech-section">
        <div className="tech-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="tech-subheading mb-8">About the Hackathon</h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Innovate 4 SDSU is our flagship hackathon event that brings together students from all majors 
              to collaborate, innovate, and build solutions to real-world problems. Over the course of 24-48 hours, 
              participants work in teams to develop creative projects, learn new technologies, and compete for prizes.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Whether you're a seasoned developer or just starting your coding journey, our hackathon provides 
              a supportive environment where you can learn, grow, and showcase your skills.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="expect" className="tech-section bg-tech-dark">
        <div className="tech-container">
          <h2 className="tech-subheading text-center mb-12">What to Expect</h2>
          <div className="tech-grid">
            <div className="tech-card">
              <h3 className="text-xl font-bold mb-3 text-tech-blue">Team Building</h3>
              <p className="text-gray-300">
                Form teams with fellow students and collaborate on innovative projects that push boundaries.
              </p>
            </div>
            
            <div className="tech-card">
              <h3 className="text-xl font-bold mb-3 text-tech-blue">Workshops & Mentorship</h3>
              <p className="text-gray-300">
                Learn from industry professionals through workshops and receive guidance from experienced mentors.
              </p>
            </div>
            
            <div className="tech-card">
              <h3 className="text-xl font-bold mb-3 text-tech-blue">Prizes & Recognition</h3>
              <p className="text-gray-300">
                Compete for amazing prizes and gain recognition for your innovative solutions.
              </p>
            </div>
            
            <div className="tech-card">
              <h3 className="text-xl font-bold mb-3 text-tech-blue">Networking</h3>
              <p className="text-gray-300">
                Connect with like-minded students, industry sponsors, and potential employers.
              </p>
            </div>
            
            <div className="tech-card">
              <h3 className="text-xl font-bold mb-3 text-tech-blue">Free Food & Swag</h3>
              <p className="text-gray-300">
                Enjoy complimentary meals, snacks, and exclusive event merchandise throughout the hackathon.
              </p>
            </div>
            
            <div className="tech-card">
              <h3 className="text-xl font-bold mb-3 text-tech-blue">Fun Activities</h3>
              <p className="text-gray-300">
                Take breaks with games, activities, and social events designed to keep energy high.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="tech-section">
        <div className="tech-container">
          <div className="tech-card max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-tech-blue">Registration</h2>
            <p className="text-gray-300 mb-6">
              Check back in <span className="text-tech-blue font-semibold">February</span> for registration dates and details.
            </p>
            <p className="text-gray-300">
              The hackathon will take place in <span className="text-tech-purple font-semibold">late March or early April 2026</span>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hack;
