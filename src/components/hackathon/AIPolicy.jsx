const AIPolicy = () => {
  return (
    <section id="ai-policy" className="tech-section bg-tech-dark">
      <div className="tech-container">
        <h2 className="tech-subheading text-center mb-8">Generative AI Policy</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="tech-card border-2 border-tech-blue text-center mb-8 bg-gradient-to-br from-tech-dark to-tech-darker">
            <p className="text-2xl font-bold text-tech-blue">
              Use GenAI to <em>accelerate</em> your work, not <em>replace</em> it.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="tech-card border-2 border-tech-purple">
              <h3 className="text-xl font-bold text-tech-purple mb-3">What's Allowed:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Coding help (debugging, boilerplate, explanations)</li>
                <li>Design mockups (logos, UI, visuals)</li>
                <li>Brainstorming (ideas, starter text)</li>
                <li>Documentation support (README, slides, pitch)</li>
              </ul>
            </div>

            <div className="tech-card border-2 border-tech-purple">
              <h3 className="text-xl font-bold text-tech-purple mb-3">What's <u>NOT</u> Allowed:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Submitting end-to-end AI-generated projects</li>
                <li>Hiding AI usage or claiming AI's work as your own</li>
                <li>Feeding real student/private data into AI tools</li>
                <li>Training large AI models from scratch</li>
              </ul>
            </div>

            <div className="tech-card border-2 border-tech-purple">
              <h3 className="text-xl font-bold text-tech-purple mb-3">Expectations:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Judges will look at your process as much as your demo</li>
                <li>Be ready to explain what you built vs. what AI generated</li>
                <li>Bonus points for showing ethical and effective AI use</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIPolicy;
