import SecondaryNav from '../components/SecondaryNav'

import ctrl_logo from '../images/media/nxp_flyer/ctrl_logo.jpg'
import sdsu_logo from '../images/media/nxp_flyer/sdsu_logo.png'
import codeblitz_flyer from '../images/flyers/Code_Blitz_Finalized.png'
import codeblitz_logo from '../images/misc/Code_Blitz.png'

const CodeBlitz = () => {
  const sections = [
    { id: 'about', label: 'About' },
    { id: 'details', label: 'Details' },
    { id: 'flyer', label: 'Flyer' },
    { id: 'committee', label: 'Committee' },
  ]

  const ctrlLeaders = [
    { name: 'Isabella King', role: 'Committee Chair', image: null },
    { name: 'Ella Lamie', role: 'Committee Vice Chair', image: null },
    { name: 'Justin Pelak', role: 'CTRL President', image: null },
    { name: 'Everett Richards', role: 'CTRL Vice President', image: null },
    {
      name: 'Manju Muralidharan Priya',
      role: 'Faculty Advisor',
      image: null,
    },
  ]

  const nxpRepresentatives = [
    {
      name: 'Aadi Bery',
      role: 'Event Logistics, Industry Outreach',
      image: null,
    },
    {
      name: 'Brandon Garate',
      role: 'Industry Outreach, Marketing',
      image: null,
    },
    {
      name: 'Bricen Humphrey-Schaefer',
      role: 'Competition Layout, Website',
      image: null,
    },
    { name: 'Dhruv Ramgiri', role: 'Finances', image: null },
    { name: 'Jose Hernandez Sanchez', role: 'Helper', image: null },
    {
      name: 'Kurt Lara-Rosales',
      role: 'Competition Layout, Website',
      image: null,
    },
    { name: 'Mathew Hernandez', role: 'Emailer, Secretary', image: null },
    { name: 'Matthew Long', role: 'Competition Layout, Finances', image: null },
    {
      name: 'Nitin Chatlani',
      role: 'Competition Layout, Industry Outreach',
      image: null,
    },
    { name: 'Patricia Alfonso', role: 'Marketing, Merch', image: null },
    {
      name: 'Robert Fuller',
      role: 'Competition Layout, Website Testing',
      image: null,
    },
    { name: 'Shamikh Quazi', role: 'Finances', image: null },
    { name: 'Shelvy Millado', role: 'Instagram, Reels, LinkedIn', image: null },
  ]

  const committeeMembers = [...ctrlLeaders, ...nxpRepresentatives]

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
            <div className="w-full mx-auto mb-4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              <div className="w-full h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden rounded-2xl">
                <img
                  src={codeblitz_logo}
                  alt="Code Blitz logo"
                  className="w-full h-full object-contain scale-110"
                />
              </div>
            </div>
            <h1 className="tech-heading mb-6">Code Blitz</h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              A high-speed coding competition for teams of up to 3
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              {/* <a
                href="https://forms.gle/LUR4Camwt38tjnBP9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 text-lg font-bold text-white rounded-xl bg-gradient-to-r from-tech-purple to-tech-blue shadow-lg shadow-tech-purple/50 hover:scale-105 hover:shadow-tech-blue/70 transition-all duration-300 animate-pulse"
              >
                Sign up
              </a> */}
              <a
                  href="https://forms.gle/LUR4Camwt38tjnBP9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-12 py-4 text-4xl font-bold text-white rounded-xl bg-gradient-to-r from-tech-purple to-tech-blue shadow-lg shadow-tech-purple/50 hover:scale-105 hover:shadow-tech-blue/70 transition-all duration-300 animate-pulse"
                >
                  Sign Up
                </a>
            </div>
            <p className="text-gray-400 max-w-3xl mx-auto mt-6">
              Hosted by CTRL at San Diego State University. Compete for $450 in
              prizes!
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="tech-section">
        <div className="tech-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="tech-subheading mb-8">About Code Blitz</h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Join us for a high-speed coding competition where groups of up to
              3 will band together to fight for the chance to win $450. The
              fastest, most accurate competitors will win it all. Sign-ups are
              capped at 70 participants. There is a $5 entry fee that must be
              paid prior to the event.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Brought to you by the Coalition of Tech Representatives and
              Leadership, CTRL, at San Diego State University.
            </p>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section id="details" className="tech-section pt-12 bg-tech-dark">
        <div className="tech-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="tech-subheading mb-12 text-center">Event Details</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="tech-card">
                <h3 className="text-xl font-bold text-tech-blue mb-4">When</h3>
                <p className="text-gray-300 mb-3">
                  <span className="font-semibold">Event Date:</span> Saturday, March 21
                </p>
                <p className="text-gray-300">
                  <span className="font-semibold">Time:</span> 9:00am - 1:00pm
                </p>
              </div>

              <div className="tech-card">
                <h3 className="text-xl font-bold text-tech-blue mb-4">Where</h3>
                <p className="text-gray-300">
                  <span className="font-semibold">Venue:</span> Templo Mayor
                </p>
                <p className="text-gray-400 italic mt-1">
                  Second floor of the Conrad Prebys Aztec Student Union
                </p>
              </div>

              <div className="tech-card">
                <h3 className="text-xl font-bold text-tech-blue mb-4">Teams</h3>
                <p className="text-gray-300 mb-3">
                  <span className="font-semibold">Team Size:</span> Up to 3 people
                </p>
                <p className="text-gray-300">
                  <span className="font-semibold">Capacity:</span> 70
                  participants
                </p>
              </div>

              <div className="tech-card">
                <h3 className="text-xl font-bold text-tech-blue mb-4">
                  Prizes & Entry
                </h3>
                <p className="text-gray-300 mb-3">
                  <span className="font-semibold">Prizes:</span> $450 total
                </p>
                <p className="text-gray-300">
                  <span className="font-semibold">Entry Fee:</span> $5, paid
                  before the event
                </p>
              </div>
            </div>

            <div className="text-center">
              {/* <p className="text-gray-300 mb-3">Sign-up window</p> */}
              {/* <p className="inline-block px-8 py-4 bg-gradient-to-r from-tech-blue to-tech-purple text-white font-bold text-lg rounded-lg hover:shadow-lg hover:shadow-tech-blue/50 transition-all duration-300">
                February 23 - March 16
              </p> */}
              <p className="inline-block tech-card text-xl">
                Sign-Up Deadline: <span className="font-semibold">March 16, 2026</span>  at 11:59pm
              </p>
              <div className="mt-6">
                <a
                  href="https://forms.gle/LUR4Camwt38tjnBP9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-12 py-4 text-4xl font-bold text-white rounded-xl bg-gradient-to-r from-tech-purple to-tech-blue shadow-lg shadow-tech-purple/50 hover:scale-105 hover:shadow-tech-blue/70 transition-all duration-300 animate-pulse"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flyer Section */}
      <section id="flyer" className="tech-section bg-tech-dark">
        <div className="tech-container">
          <div className="max-w-5xl mx-auto">
            <h2 className="tech-subheading mb-8 text-center">Flyer</h2>
            <div className="tech-card p-4 md:p-6 lg:h-[75vh] w-auto mx-auto aspect-[12/16]">
              <a href={codeblitz_flyer} target="_blank" rel="noopener noreferrer">
                <img
                  src={codeblitz_flyer}
                  alt="Code Blitz flyer"
                  className="w-auto h-full rounded-lg mx-auto"
                />
              </a>
            </div>
            <p className="text-gray-400 text-sm text-center mt-4">
              If the flyer looks blurry, <a href={codeblitz_flyer} target="_blank" rel="noopener noreferrer" className="underline">open it in a new tab</a> or zoom in.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Section
      <section id="partnership" className="tech-section bg-tech-dark">
        <div className="tech-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="tech-subheading mb-6">Industry Partnership</h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Our partnership with NXP Semiconductors provides students with access to cutting-edge technology, 
              mentorship from industry experts, and real-world engineering challenges. This collaboration ensures 
              that bootcamp projects align with industry needs and prepare students for successful careers.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              NXP's support includes hardware donations, technical guidance, and direct involvement in project 
              evaluation, creating an invaluable bridge between academic learning and professional practice.
            </p>
          </div>
        </div>
      </section> */}

      {/* Committee Section */}
      <section id="committee" className="tech-section">
        <div className="tech-container">
          <h2 className="tech-subheading text-center mb-12">Committee</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {committeeMembers.map((member, index) => (
              <div key={index} className="tech-card text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-tech-blue to-tech-purple rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-3xl">👤</span>
                  )}
                </div>
                <h4 className="text-lg font-bold text-tech-blue mb-1">
                  {member.name}
                </h4>
                <p className="text-gray-300">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default CodeBlitz
