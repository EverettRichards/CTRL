import SecondaryNav from '../components/SecondaryNav'
import Slideshow from '../components/Slideshow'
import { homeSlides } from '../utils/homeSlides'
import { scrollToSection } from '../utils/scrollUtils'

const Home = () => {
  const sections = [
    { id: 'about', label: 'About Us' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'events', label: 'Events' },
    { id: 'officers', label: 'Officers' },
    { id: 'mission', label: 'Mission' },
  ]

  // Executive Officers - Add officer details here
  const executiveOfficers = [
    {
      name: 'Justin Pelak',
      role: 'President',
      image: null,
    },
    {
      name: 'Everett Richards',
      role: 'Vice President',
      image: null,
    },
    {
      name: 'Matthew Long',
      role: 'Treasurer',
      image: null,
    },
    {
      name: 'Isabella King',
      role: 'CodeBlitz Committee Chair',
      image: null,
    },
    {
      name: 'Michael Corn',
      role: 'NXP Bootcamp Committee Chair',
      image: null,
    },
    {
      name: 'Manju Muralidharan Priya',
      role: 'Faculty Advisor',
      image: null,
    },
    // {
    //   name: 'Amelia Grevin',
    //   role: 'Officer',
    //   image: null
    // },
    // {
    //   name: 'Mathew Hernandez',
    //   role: 'Officer',
    //   image: null
    // },
    // {
    //   name: 'Tanish Gheewala',
    //   role: 'Officer',
    //   image: null
    // },
    // {
    //   name: 'Shelvy Millado',
    //   role: 'Officer',
    //   image: null
    // },
  ]

  return (
    <div>
      <SecondaryNav sections={sections} />

      {/* Hero Section */}
      <section
        id="about"
        className="tech-section bg-gradient-to-b from-tech-darker via-tech-dark to-tech-darker"
      >
        <div className="tech-container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="tech-heading mb-6 animate-pulse-slow">
              Coalition of Tech Representatives and Leadership
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Empowering the next generation of tech leaders at San Diego State
              University
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://discord.gg/AebudRt4Ch"
                target="_blank"
                rel="noopener noreferrer"
                className="tech-button"
                aria-label="Join CTRL organization"
              >
                CTRL Discord Server
              </a>
              <button
                onClick={() => scrollToSection('mission')}
                className="tech-button-outline"
                aria-label="Learn more about CTRL"
              >
                Learn More
              </button>
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
              slides={homeSlides}
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
          <div className="tech-grid grid-cols-2 mx-auto lg:w-[80%]">
            {/* <div className="tech-card">
              <div className="w-12 h-12 bg-gradient-to-br from-tech-blue to-tech-purple rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-tech-blue">Innovate 4 SDSU Hackathon</h3>
              <p className="text-gray-300 mb-4">
                Join us for our annual hackathon where students collaborate to build innovative solutions to real-world problems.
              </p>
              <a href="/#/hack" className="text-tech-blue hover:text-tech-purple transition-colors">
                Learn More →
              </a>
            </div>*/}

            {/* <div className="tech-card">
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
            </div> */}

            {/* <div className="tech-card">
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
            </div> */}
            <div className="tech-card">
              <div className="w-12 h-12 bg-gradient-to-br from-tech-blue to-tech-purple rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-tech-blue">
                Code Blitz
              </h3>
              <p className="text-gray-300 mb-4">
                Join us for a High Speed Coding Competition where students solve
                algorithmic challenges in a fun space and win $450 in prizes!
              </p>
              <a
                href="/#/codeblitz"
                className="text-tech-blue hover:text-tech-purple transition-colors"
              >
                Learn More →
              </a>
            </div>

            <div className="tech-card">
              <div className="w-12 h-12 bg-gradient-to-br from-tech-blue to-tech-purple rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-tech-blue">
                NXP Engineering Bootcamp
              </h3>
              <p className="text-gray-300 mb-4">
                Industry-guided engineering bootcamp in partnership with NXP
                Semiconductors.
              </p>
              <a
                href="/#/nxp"
                className="text-tech-blue hover:text-tech-purple transition-colors"
              >
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Officers Section */}
      <section id="officers" className="tech-section">
        <div className="tech-container">
          <h2 className="tech-subheading text-center mb-12">
            Executive Officers
          </h2>

          <div className="tech-grid max-w-5xl mx-auto">
            {executiveOfficers.map((officer, index) => (
              <div key={index} className="tech-card text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-tech-blue to-tech-purple rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  {officer.image ? (
                    <img
                      src={officer.image}
                      alt={officer.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-3xl">👤</span>
                  )}
                </div>
                <h4 className="text-lg font-bold text-tech-blue mb-1">
                  {officer.role}
                </h4>
                <p className="text-gray-200 text-xl">{officer.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="tech-section bg-tech-dark">
        <div className="tech-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="tech-subheading mb-6">Our Mission</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              CTRL is dedicated to fostering innovation, leadership, and
              collaboration within the tech community at San Diego State
              University. Through our diverse events and initiatives, we create
              opportunities for students to develop their skills, connect with
              industry professionals, and make a lasting impact in the world of
              technology.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
