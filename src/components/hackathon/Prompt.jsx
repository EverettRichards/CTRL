const Prompt = () => {
  return (
    <section id="prompt" className="tech-section">
      <div className="tech-container">
        <h2 className="tech-subheading text-center mb-8">Hackathon Theme: Innovate 4 SDSU</h2>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Main Prompt */}
          <div className="tech-card border-2 border-tech-blue bg-gradient-to-br from-tech-dark to-tech-darker">
            <h3 className="text-2xl font-bold text-tech-blue mb-3">
              PROMPT: Innovate to transform the SDSU student experience.
            </h3>
            <p className="text-lg text-gray-300 italic">
              Choose one of the following challenge areas and design a creative, impactful solution.
            </p>
          </div>

          {/* Challenge Areas */}
          <div className="tech-card">
            <h4 className="text-xl font-bold text-tech-purple mb-2">
              1) Campus Experience & Third Spaces
            </h4>
            <p className="text-gray-300 italic mb-3">
              How can we create safe and flexible ways for students to study, collaborate, or hang out after hours?
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-300">
              <li>An app to crowd-share safe study locations</li>
              <li>A booking system for classrooms at night</li>
              <li>A "virtual third space" for late-night collaboration</li>
            </ul>
          </div>

          <div className="tech-card">
            <h4 className="text-xl font-bold text-tech-purple mb-2">
              2) AI & Privacy
            </h4>
            <p className="text-gray-300 italic mb-3">
              How can AI be used responsibly to support students without invading their privacy?
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-300">
              <li>A study buddy chatbot that doesn't store personal data</li>
              <li>An AI tool that helps with scheduling while keeping info local on-device</li>
            </ul>
          </div>

          <div className="tech-card">
            <h4 className="text-xl font-bold text-tech-purple mb-2">
              3) Safety & Security
            </h4>
            <p className="text-gray-300 italic mb-3">
              How can students feel safer moving around campus, especially at night or during emergencies?
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-300">
              <li>A campus safety alert app</li>
              <li>A "walk-with-me" buddy system</li>
              <li>A low-cost IoT panic button</li>
            </ul>
          </div>

          <div className="tech-card">
            <h4 className="text-xl font-bold text-tech-purple mb-2">
              4) Student Success & Wellbeing
            </h4>
            <p className="text-gray-300 italic mb-3">
              How can we reduce stress and give students the right support at the right time?
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-300">
              <li>An app that connects students to tutors or study groups instantly</li>
              <li>A tool that matches students with wellness resources based on their needs</li>
            </ul>
          </div>

          <div className="tech-card">
            <h4 className="text-xl font-bold text-tech-purple mb-2">
              5) Sustainability & Community Impact
            </h4>
            <p className="text-gray-300 italic mb-3">
              How can students lead the way in making campus life more sustainable?
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-300">
              <li>An app that tracks recycling points or food waste</li>
              <li>IoT sensors that monitor classroom energy use</li>
              <li>Gamified challenges for green behavior</li>
            </ul>
          </div>

          {/* Deliverables */}
          <div className="tech-card border-2 border-tech-blue bg-gradient-to-br from-tech-dark to-tech-darker">
            <h3 className="text-2xl font-bold text-tech-blue mb-3">Deliverables</h3>
            <p className="text-gray-300 italic mb-3">
              You only have 2 days. Keep it simple and working.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>
                <span className="font-bold text-tech-blue">Software:</span> A mobile app, web app, or dashboard 
                with basic functionality. Doesn't need full features, but must show a working demo.
              </li>
              <li>
                <span className="font-bold text-tech-blue">Hardware:</span> A low-cost prototype (Arduino, 
                Raspberry Pi, sensors). Show at least one working feature.
              </li>
              <li>
                <span className="font-bold text-tech-blue">Hybrid:</span> Show how hardware and software 
                connect (even one interaction counts).
              </li>
            </ul>
            <p className="text-gray-300 italic mt-3">
              Judges care more about clarity, creativity, and your demo than polish. Show us how your 
              project makes SDSU student life better.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prompt;
