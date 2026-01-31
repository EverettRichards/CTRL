import SecondaryNav from '../components/SecondaryNav';

// Import your images here
// Example: import hackImage1 from '../images/slideshow/ctrl_screen.png';
import ctrl_screen from '../images/slideshow/ctrl_screen_cropped.png';
import hack_team from '../images/slideshow/hack_team.jpg';
import long_exposure from '../images/slideshow/long_exposure.jpg';

const Hack = () => {
  const sections = [
    { id: 'overview', label: 'Home' },
    { id: 'gallery', label: 'Past Events' },
    { id: 'about', label: 'About' },
    { id: 'next', label: 'What\'s Next' },
  ];

  // Gallery Images - Import your images above and reference them here
  const galleryImages = [
    {
      image: ctrl_screen, // Use imported image variable here, e.g., hackImage1
      title: 'Leadership & Impact',
      description: 'Hackathon projects are designed to improve campus life in the SDSU community.'
    },
    {
      image: hack_team,
      title: 'Team Collaboration',
      description: 'Students team up to develop innovative projects.'
    },
    {
      image: long_exposure,
      title: 'Energy and Innovation',
      description: 'Capturing the excitement of the weekend-long grind.'
    }
  ];

  return (
    <div>
      <SecondaryNav sections={sections} />
      
      {/* Hero Section */}
      <section id="overview" className="tech-section pb-6 pt-12 bg-gradient-to-b from-tech-darker via-tech-dark to-tech-darker">
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
              Building innovative solutions for the SDSU community
            </p>
            <a 
              href="https://acm.sdsu.edu/hack" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gradient-to-r from-tech-blue to-tech-purple text-white font-bold text-lg rounded-lg hover:shadow-lg hover:shadow-tech-blue/50 transition-all duration-300 mb-6"
            >
              View Fall 2025 Hackathon Details →
            </a>
            <p className="text-gray-400 text-sm">
              For comprehensive information about the November 2025 hackathon, visit acm.sdsu.edu/hack
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="tech-section pt-6">
        <div className="tech-container">
          {/* <h2 className="tech-subheading text-center mb-12">Past Hackathons</h2> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((item, index) => (
              <div key={index} className="tech-card overflow-hidden hover:scale-105 transition-transform">
                <div className="w-full h-48 bg-gradient-to-br from-tech-blue/20 to-tech-purple/20 flex items-center justify-center border-2 border-dashed border-tech-blue/30 overflow-hidden">
                  {item.image ? (
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-6xl text-tech-blue/40">🖼️</span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-tech-blue mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="tech-section bg-tech-dark">
        <div className="tech-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="tech-subheading mb-8">About the Hackathon</h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                The Innovate 4 SDSU Hackathon is an annual competition where students from San Diego State University 
                collaborate in teams to develop innovative projects that benefit the SDSU community. Whether you're interested 
                in web development, machine learning, embedded systems, or any other technology, there's a place for you.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our hackathons bring together students, industry professionals, and mentors to create an environment 
                where creativity meets technical expertise. Participants have the opportunity to showcase their skills, 
                network with industry leaders, win prizes, and most importantly, build something meaningful.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                The event is proudly hosted by CTRL, SDSU's premier computing organization, in collaboration with 
                industry partners, faculty advisors, and volunteer mentors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Next Section */}
      <section id="next" className="tech-section">
        <div className="tech-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="tech-subheading mb-8">What's Next?</h2>
            <div className="tech-card mb-8">
              <h3 className="text-3xl font-bold text-tech-blue mb-4">Innovate 4 SDSU 2026</h3>
              <p className="text-xl text-gray-300 mb-6">
                Mark your calendars! The next Innovate 4 SDSU Hackathon is coming in <strong>Fall 2026</strong>.
              </p>
              <p className="text-gray-300 mb-6">
                Be part of the innovation. Whether you're a developer, designer, or dreamer, we'd love to have you 
                participate. Stay tuned for registration details and exciting announcements coming soon.
              </p>
              <div className="space-y-3">
                <p className="text-gray-400">Want to get involved or have questions?</p>
                <a 
                  href="https://discord.gg/AebudRt4Ch" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
                >
                  💬 Join Our Discord
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hack;
