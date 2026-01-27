const Mentors = () => {
  const mentors = [
    {
      name: 'Jianshu Liu',
      role: 'Professor of Computer Science, SDSU',
      image: null
    },
    {
      name: 'Dominic Dabish',
      role: 'Computer Scientist, Google',
      image: null
    },
    {
      name: 'Aishwariya Chunduru',
      role: 'Product Manager, Resmed',
      image: null
    },
    {
      name: 'Uday Kiran Chilakalapalli',
      role: 'Senior Data Analyst, LPL Financial',
      image: null
    },
    {
      name: 'Juhi Godhwani',
      role: 'Electrical / Hardware Engineer, Google',
      image: null
    },
    {
      name: 'Isabella Messina',
      role: 'Cyber Security Engineer, Viasat',
      image: null
    },
    {
      name: 'Anishek Kamal',
      role: 'Founder, Debtzero',
      image: null
    }
  ];

  return (
    <section id="mentors" className="tech-section bg-tech-dark">
      <div className="tech-container">
        <h2 className="tech-subheading text-center mb-4">Project Mentors</h2>
        <p className="text-center text-lg text-gray-300 max-w-3xl mx-auto mb-12">
          We had a diverse group of experienced mentors from various fields in technology who guided and supported participants throughout the hackathon.
        </p>

        <div className="tech-grid">
          {mentors.map((mentor, index) => (
            <div key={index} className="tech-card text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-tech-blue to-tech-purple rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                {mentor.image ? (
                  <img 
                    src={mentor.image} 
                    alt={mentor.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-3xl">👤</span>
                )}
              </div>
              <h4 className="text-lg font-bold text-tech-blue mb-1">{mentor.name}</h4>
              <p className="text-gray-400 text-sm">{mentor.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentors;
