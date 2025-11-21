const Sponsors = () => {
  const sponsorLevels = [
    {
      level: "Mega Supporters",
      amount: "$1,000+",
      sponsors: [
        {
          name: "LPL Financial",
          logo: "https://prosperion.us/wp-content/uploads/2017/02/LPL-Financial-Logo-e1488394897806.jpg",
          url: "https://www.lpl.com/"
        },
      ]
    },
    {
      level: "Byte Supporters",
      amount: "$500+",
      sponsors: [
        {
          name: "Sony Electronics",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sony_logo.svg/2560px-Sony_logo.svg.png",
          url: "https://www.sony.com/"
        },
      ]
    },
    {
      level: "Bit Supporters",
      amount: "$250+",
      sponsors: [
        {
          name: "San Diego VR",
          logo: "https://www.sandiegovr.com/_next/image?url=%2Flogo-light.png&w=1080&q=75",
          url: "https://www.sandiegovr.com/",
        },
      ]
    }
  ];

  const getLogoClass = (levelName) => {
    switch (levelName) {
      case "Mega Supporters":
        return "max-w-[350px] max-h-[140px]";
      case "Bit Supporters":
        return "max-w-[220px] max-h-[110px]";
      default: // Byte Supporters
        return "max-w-[280px] max-h-[130px]";
    }
  };

  return (
    <section id="sponsors" className="tech-section">
      <div className="tech-container">
        <h2 className="tech-subheading text-center mb-12">Sponsors</h2>
        
        <div className="max-w-5xl mx-auto">
          {sponsorLevels.map((level) => (
            <div key={level.level} className="mb-12">
              <h3 className="text-2xl font-bold text-tech-blue mb-6 text-center">
                {level.level} <span className="text-gray-400 text-lg">({level.amount})</span>
              </h3>
              <div className="flex flex-wrap justify-center gap-8 items-center">
                {level.sponsors.map((sponsor) => (
                  <a
                    key={sponsor.name}
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center transition-transform hover:scale-105"
                  >
                    <div className="tech-card border-2 border-tech-blue p-4">
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name + " logo"}
                        className={`${getLogoClass(level.level)} object-contain`}
                      />
                    </div>
                    <span className="text-lg text-gray-300 mt-3 text-center">{sponsor.name}</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 max-w-3xl mx-auto">
          <p className="text-xl text-gray-300">
            Interested in sponsoring Innovate 4 SDSU? Contact us for our sponsorship packet and partnership opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
