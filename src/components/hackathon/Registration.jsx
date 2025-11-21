const Registration = () => {
  return (
    <section id="registration" className="tech-section bg-tech-dark">
      <div className="tech-container">
        <div className="tech-card max-w-2xl mx-auto text-center">
          <div className="inline-block mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-tech-blue to-tech-purple rounded-2xl flex items-center justify-center mx-auto">
              <span className="text-4xl">📝</span>
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4 text-tech-blue">Registration</h2>
          <p className="text-lg text-gray-300 mb-4">
            Registration for the Innovate 4 SDSU Hackathon is not yet open.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            Please check back in <strong className="text-tech-purple">February 2026</strong> for dates and registration information. 
            The hackathon will take place in <strong className="text-tech-purple">late March or early April 2026</strong>.
          </p>
          <p className="text-gray-400">
            Stay tuned for updates by joining our Discord server or following us on social media!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Registration;
