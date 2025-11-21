import { useEffect, useState } from 'react';

// Constants for header heights
const MAIN_HEADER_HEIGHT = 73;
const SECONDARY_HEADER_HEIGHT = 77;
const SCROLL_OFFSET = MAIN_HEADER_HEIGHT + SECONDARY_HEADER_HEIGHT;

const SecondaryNav = ({ sections }) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + SCROLL_OFFSET;

      // Find which section is currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial active section

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -(MAIN_HEADER_HEIGHT + SECONDARY_HEADER_HEIGHT + 10);
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  if (!sections || sections.length === 0) {
    return null;
  }

  return (
    <nav className="bg-tech-dark/60 backdrop-blur-md border-b border-tech-blue/10 sticky z-40" style={{ top: `${MAIN_HEADER_HEIGHT}px` }}>
      <div className="tech-container py-3">
        <div className="flex items-center justify-center gap-1 overflow-x-auto scrollbar-hide">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                activeSection === section.id
                  ? 'bg-tech-blue/20 text-tech-blue border border-tech-blue/30'
                  : 'text-gray-400 hover:text-tech-blue hover:bg-tech-blue/10'
              }`}
              aria-current={activeSection === section.id ? 'location' : undefined}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default SecondaryNav;
