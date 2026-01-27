const Committee = () => {
  const committeeMembers = [
    {
      name: 'Isabella King',
      role: 'Committee Chair',
      image: null
    },
    {
      name: 'Manju Muralidharan Priya',
      role: 'Faculty Advisor',
      image: null
    },
    {
      name: 'Everett Richards',
      role: 'Member, Webmaster, ACM President, CTRL VP',
      image: null
    },
    {
      name: 'Justin Pelak',
      role: 'Member, CTRL President, AI Club President',
      image: null
    },
    {
      name: 'Tanish Gheewala',
      role: 'Member, CTRL Secretary',
      image: null
    },
    {
      name: 'Amelia Grevin',
      role: 'Member, GWC President',
      image: null
    },
    {
      name: 'Enzo Weiss',
      role: 'Member, WCO President',
      image: null
    },
    {
      name: 'Caleb Dickson',
      role: 'Member',
      image: null
    },
    {
      name: 'Richie Walcher',
      role: 'Member',
      image: null
    },
    {
      name: 'Paul Steitz',
      role: 'Member',
      image: null
    },
    {
      name: 'Mathew Hernandez',
      role: 'Member',
      image: null
    },
    {
      name: 'Patricia Alfonso',
      role: 'Member',
      image: null
    },
    {
      name: 'Avishka Wickramaratna',
      role: 'Member',
      image: null
    },
    {
      name: 'Brandon Garate',
      role: 'Member',
      image: null
    }
  ];

  return (
    <section id="committee" className="tech-section">
      <div className="tech-container">
        <h2 className="tech-subheading text-center mb-12">Planning Committee</h2>
        <div className="tech-grid">
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
              <h4 className="text-lg font-bold text-tech-blue mb-1">{member.name}</h4>
              <p className="text-gray-400 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Committee;
