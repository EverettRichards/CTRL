const Overview = () => {
  return (
    <section id="overview" className="tech-section bg-gradient-to-b from-tech-darker via-tech-dark to-tech-darker">
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
          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            Proudly hosted by CTRL
          </p>
          <p className="text-lg text-gray-300 mb-8">
            The Innovate 4 SDSU Hackathon invites all SDSU students to compete in teams to develop 
            projects that benefit the SDSU community.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="tech-card text-left">
              <h3 className="text-xl font-bold mb-3 text-tech-blue">Time and Location</h3>
              <p className="text-gray-300">
                The Innovate 4 SDSU Hackathon will take place on <strong>Saturday & Sunday, November 15 & 16, 2025</strong> from 
                9:00am–7:00pm in Montezuma Hall, Aztec Student Union.
              </p>
            </div>
            
            <div className="tech-card text-left">
              <h3 className="text-xl font-bold mb-3 text-tech-blue">Registration Status</h3>
              <p className="text-gray-300">
                Registration for Innovate 4 SDSU is now closed. We encourage you to join our Discord server to 
                stay updated on future events!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
