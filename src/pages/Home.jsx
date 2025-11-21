import SecondaryNav from '../components/SecondaryNav';
import Slideshow from '../components/Slideshow';
import { defaultSlides } from '../utils/placeholderImages';

const Home = () => {
  const sections = [
    { id: 'about', label: 'About Us' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'events', label: 'Events' },
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

      {/* Gallery Slideshow Section */}
      <section id="gallery" className="tech-section bg-tech-dark">
        <div className="tech-container">
          <h2 className="tech-subheading text-center mb-8">Event Gallery</h2>
          <div className="max-w-6xl mx-auto">
            <Slideshow 
              slides={defaultSlides}
              autoPlayInterval={5000}
              showControls={true}
              showIndicators={true}
              className="h-[400px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden shadow-2xl shadow-tech-blue/20 border border-tech-blue/20"
            />
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
