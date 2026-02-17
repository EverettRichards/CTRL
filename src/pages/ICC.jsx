import SecondaryNav from '../components/SecondaryNav';
import { clubs } from '../utils/clubsData';

const ICC = () => {
  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'clubs', label: 'Affiliated Clubs' },
  ];

  return (
    <div>
      <SecondaryNav sections={sections} />
      
      {/* Hero Section */}
      <section id="overview" className="tech-section bg-gradient-to-b from-tech-darker via-tech-dark to-tech-darker">
        <div className="tech-container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="tech-heading mb-6 animate-pulse-slow">
              Inter-Club Council
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              The Inter-Club Council consists of one voting member from each club affiliated with CTRL. 
              As the governing body of CTRL, the ICC elects executive officers and provides policy guidance 
              to support the organization's mission.
            </p>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              The ICC serves as a representative body and student voice, fostering collaboration between 
              the Department of Computer Science and other affiliated departments across campus.
            </p>
          </div>
        </div>
      </section>

      {/* Clubs Section */}
      <section id="clubs" className="tech-section bg-tech-dark">
        <div className="tech-container">
          <h2 className="tech-subheading text-center mb-12">Affiliated Clubs</h2>
          <div className="tech-grid max-w-6xl mx-auto">
            {clubs.map((club, index) => (
              <div key={index} className="tech-card flex flex-col">
                {/* Club Logo */}
                <div className="w-32 h-32 mx-auto mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-tech-blue to-tech-purple flex items-center justify-center">
                  {club.logo ? (
                    <img 
                      src={club.logo} 
                      alt={`${club.name} logo`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-5xl">🎯</span>
                  )}
                </div>
                
                {/* Club Name */}
                <h3 className="text-xl font-bold text-tech-blue text-center mb-2">
                  {club.name}
                </h3>
                
                {/* Representative */}
                <p className="text-center text-gray-400 mb-4">
                  <span className="font-semibold text-tech-purple">Representative:</span> {club.representative}
                </p>
                
                {/* Description */}
                <p className="text-gray-300 mb-4 flex-grow">
                  {club.description}
                </p>
                
                {/* Meeting Info */}
                <div className="space-y-2 mb-4 text-sm">
                  <p className="text-gray-400">
                    <span className="font-semibold text-tech-blue">📅 Meeting Time:</span> {club.meetingTime}
                  </p>
                  <p className="text-gray-400">
                    <span className="font-semibold text-tech-blue">📍 Location:</span> {club.meetingLocation}
                  </p>
                </div>
                
                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-tech-blue/20">
                  <a 
                    href={club.website} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 text-center py-2 px-3 bg-tech-blue/10 hover:bg-tech-blue/20 text-tech-blue rounded-lg transition-all duration-200 text-sm font-semibold"
                  >
                    🌐 Website
                  </a>
                  <a 
                    href={club.discord} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 text-center py-2 px-3 bg-tech-purple/10 hover:bg-tech-purple/20 text-tech-purple rounded-lg transition-all duration-200 text-sm font-semibold"
                  >
                    💬 Discord
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ICC;
