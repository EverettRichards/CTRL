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
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            November 15 & 16, 2025
          </p>
          <p className="text-lg text-gray-300 mb-8">
            The Innovate 4 SDSU Hackathon invited all SDSU students to compete in teams to develop 
            projects that benefit the SDSU community. Proudly hosted by CTRL.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="tech-card text-left">
              <h3 className="text-xl font-bold mb-3 text-tech-blue">Event Details</h3>
              <p className="text-gray-300">
                The Innovate 4 SDSU Hackathon took place on <strong>Saturday & Sunday, November 15 & 16, 2025</strong> from 
                9:00am–7:00pm in Montezuma Hall, Aztec Student Union at SDSU.
              </p>
            </div>
            
            <div className="tech-card text-left">
              <h3 className="text-xl font-bold mb-3 text-tech-blue">Event Status</h3>
              <p className="text-gray-300">
                Thank you to all participants, judges, mentors, and sponsors who made the Innovate 4 SDSU Hackathon a success! 
                Stay updated on future events by joining our Discord server.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
