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
        {
          name: "SDSU Artificial Intelligence (AI) Club",
          logo: require("../../images/hack25/aiclub_banner.jpg"),
          url: "https://aiclub.sdsu.edu/"
        },
        {
          name: "SDSU Association for Computing Machinery (ACM)",
          logo: null,//require("../../images/hack25/acm_banner.jpg"),
          url: "https://acm.sdsu.edu/"
        },
      ]
    },
    {
      level: "Byte Supporters",
      amount: "$500+",
      sponsors: [
        {
          name: "Sony Electronics",
          logo: null,//require("../../images/hack25/Sony_Logo_K_Nrule-black.jpg"),
          url: "https://www.sony.com/"
        },
        {
          name: "Society of American Military Engineers (SAME)",
          logo: null,//require("../../images/hack25/same.png"),
          url: "https://same.org/"
        }
      ]
    },
    {
      level: "Bit Supporters",
      amount: "$250+",
      sponsors: [
        {
          name: "Girls Who Code",
          logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQic3yRLq7DnSa78uICVXLu2Mf5r3NGOgR7A&s",
          url: "https://www.instagram.com/sdsu.gwc/?hl=en"
        },
        {
          name: "World Computing Organization (WCO)",
          logo: "https://media.licdn.com/dms/image/v2/D4E0BAQHWLibSwnkGMQ/company-logo_200_200/company-logo_200_200/0/1734993524761/wcosdsu_logo?e=2147483647&v=beta&t=egpTDcruaLsCbt-Fa6Gj9-S-42OHE_TKycTDYCZtHq0",
          url: "https://worldcomputing.org/",
        },
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
