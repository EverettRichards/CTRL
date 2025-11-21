const Contact = () => {
  return (
    <section id="contact" className="tech-section bg-tech-dark">
      <div className="tech-container">
        <h2 className="tech-subheading text-center mb-8">Contact Us</h2>
        
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl text-gray-300 mb-8">
            Join the CTRL Discord Server to stay up-to-date with the Hackathon and other upcoming events.
            <br /><br />
            If you have any questions or concerns, please don't hesitate to reach out!
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <a 
              href="https://discord.com/invite/6MTk5wcH9T" 
              target="_blank"
              rel="noopener noreferrer"
              className="tech-button flex items-center gap-3"
            >
              <img 
                className="w-7 h-7" 
                src="https://cdn.iconscout.com/icon/free/png-256/free-discord-3691244-3073764.png?f=webp"
                alt="Discord"
              />
              CTRL Discord Server
            </a>
            
            <a 
              href="mailto:ctrl@sdsu.edu" 
              target="_blank"
              rel="noopener noreferrer"
              className="tech-button-outline flex items-center gap-3"
            >
              <img 
                className="w-8 h-8" 
                src="https://cdn-icons-png.flaticon.com/256/281/281769.png"
                alt="Email"
              />
              ctrl@sdsu.edu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
