import SecondaryNav from '../components/SecondaryNav';

const NXP = () => {
  const sections = [
    { id: 'about', label: 'About' },
    { id: 'project-areas', label: 'Project Areas' },
    { id: 'highlights', label: 'Event Highlights' },
    { id: 'partnership', label: 'Partnership' },
    { id: 'committee', label: 'Committee' },
    { id: 'details', label: 'Details' },
  ];

  const ctrlLeaders = [
    {
      name: 'Michael Corn',
      role: 'Chair',
      image: null
    },
    {
      name: 'Ella Lamie',
      role: 'Vice Chair',
      image: null
    },
    {
      name: 'Munazza Nagori',
      role: 'Secretary',
      image: null
    },
    {
      name: 'Matthew Long',
      role: 'Treasurer',
      image: null
    },
    {
      name: 'Everett Richards',
      role: 'Webmaster',
      image: null
    },
    {
      name: 'Manju Muralidharan Priya',
      role: 'Faculty Advisor',
      image: null
    }
  ];

  const nxpRepresentatives = [
    {
      name: 'Lea Hagen',
      role: 'NXP Representative',
      image: null
    },
    {
      name: 'Narasimhan Narayanan',
      role: 'NXP Representative',
      image: null
    },
    {
      name: 'Sreyesh Kalathiparambil',
      role: 'NXP Representative',
      image: null
    }
  ];

  return (
    <div>
      <SecondaryNav sections={sections} />
      
      {/* Hero Section */}
      <section id="about" className="tech-section bg-gradient-to-b from-tech-darker via-tech-dark to-tech-darker">
        <div className="tech-container">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-tech-blue to-tech-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-5xl">🔧</span>
              </div>
            </div>
            <h1 className="tech-heading mb-6">
              NXP Capstone Series
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Showcasing Excellence in Engineering Innovation
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="tech-section">
        <div className="tech-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="tech-subheading mb-8">About the NXP Capstone</h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Join us for an NXP and SDSU collaboration project starting **February 16th! This program is an unprecedented opportunity for SDSU students, as they will be able to learn from NXP engineers in their very own lab, gaining hands-on experience in industry-relevant topics such as edge AI, cloud AI, and electronic design automation. Students will learn how to develop edge applications that minimize reliance on cloud processing, utilizing NXP hardware and SDKs. The 10 week track will culminate in students creating their own projects with the help of their NXP mentors.
            </p>
          </div>
        </div>
      </section>

            {/* Details Section */}
      <section id="details" className="tech-section bg-tech-dark">
        <div className="tech-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="tech-subheading mb-12 text-center">Program Details</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="tech-card">
                <h3 className="text-xl font-bold text-tech-blue mb-4">When</h3>
                <p className="text-gray-300 mb-3">
                  <span className="font-semibold">Tuesdays and Thursdays</span>
                </p>
                <p className="text-gray-300 mb-3">
                  <span className="font-semibold">9:00am - 12:00pm</span> or <span className="font-semibold">10:00am - 1:00pm</span>
                </p>
                <p className="text-gray-300">
                  <span className="font-semibold">February 16th - April 20th</span>
                </p>
              </div>
              
              <div className="tech-card">
                <h3 className="text-xl font-bold text-tech-blue mb-4">Where</h3>
                <p className="text-gray-300 mb-4">
                  <span className="font-semibold">Tuesdays:</span> NXP Offices
                </p>
                <p className="text-gray-300">
                  <span className="font-semibold">Thursdays:</span> SDSU Classrooms
                </p>
              </div>
            </div>
            
            {/* <div className="text-center">
              <p className="text-gray-300 mb-6">Ready to join the capstone?</p>
              <a 
                href="https://forms.google.com/your-form-link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-gradient-to-r from-tech-blue to-tech-purple text-white font-bold text-lg rounded-lg hover:shadow-lg hover:shadow-tech-blue/50 transition-all duration-300"
              >
                Apply Now
              </a>
            </div> */}

            <div className="text-center">
              <p className="text-gray-300 mb-6">Ready to join the capstone?</p>
              <p 
                className="inline-block px-8 py-4 bg-gradient-to-r from-tech-blue to-tech-purple text-white font-bold text-lg rounded-lg hover:shadow-lg hover:shadow-tech-blue/50 transition-all duration-300"
              >
                Application Coming Soon
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* AI Projects Flyer Section */}
      <section className="tech-section bg-tech-dark">
        <style>{`
          :root {
            --bg-dark: #0a0a0f;
            --accent-cyan: #00f5ff;
            --accent-magenta: #ff00aa;
            --accent-yellow: #f0ff00;
            --text-light: #e8e8e8;
            --card-bg: rgba(20, 20, 30, 0.85);
          }

          .ai-flyer {
            position: relative;
            padding: 2rem;
            overflow: hidden;
          }

          .ai-flyer-grid-bg {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: 
              linear-gradient(rgba(0, 245, 255, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 245, 255, 0.03) 1px, transparent 1px);
            background-size: 30px 30px;
            animation: gridPulse 4s ease-in-out infinite;
          }

          @keyframes gridPulse {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 1; }
          }

          .ai-flyer-orb {
            position: absolute;
            border-radius: 50%;
            filter: blur(60px);
            animation: float 8s ease-in-out infinite;
          }

          .ai-flyer-orb-1 {
            width: 300px;
            height: 300px;
            background: var(--accent-cyan);
            opacity: 0.15;
            top: -100px;
            right: -50px;
            animation-delay: 0s;
          }

          .ai-flyer-orb-2 {
            width: 250px;
            height: 250px;
            background: var(--accent-magenta);
            opacity: 0.12;
            bottom: 200px;
            left: -80px;
            animation-delay: -3s;
          }

          .ai-flyer-orb-3 {
            width: 200px;
            height: 200px;
            background: var(--accent-yellow);
            opacity: 0.1;
            bottom: -50px;
            right: 100px;
            animation-delay: -5s;
          }

          @keyframes float {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(20px, -20px) scale(1.05); }
            66% { transform: translate(-10px, 15px) scale(0.95); }
          }

          .ai-flyer-header {
            position: relative;
            z-index: 10;
            text-align: center;
            margin-bottom: 2rem;
          }

          .ai-flyer-badge {
            display: inline-block;
            font-family: 'Space Mono', monospace;
            font-size: 0.65rem;
            letter-spacing: 0.25em;
            text-transform: uppercase;
            color: var(--accent-cyan);
            border: 1px solid var(--accent-cyan);
            padding: 0.4em 1.2em;
            margin-bottom: 0.8rem;
            animation: glowPulse 2s ease-in-out infinite;
          }

          @keyframes glowPulse {
            0%, 100% { box-shadow: 0 0 10px rgba(0, 245, 255, 0.3); }
            50% { box-shadow: 0 0 25px rgba(0, 245, 255, 0.6); }
          }

          .ai-flyer-title {
            font-size: 2.5rem;
            font-weight: 800;
            line-height: 1;
            letter-spacing: -0.03em;
            margin-bottom: 0.5rem;
          }

          .ai-flyer-title-line-1 {
            display: block;
            background: linear-gradient(90deg, var(--accent-cyan), var(--accent-magenta));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .ai-flyer-title-line-2 {
            display: block;
            color: var(--text-light);
          }

          .ai-flyer-subtitle {
            font-family: 'Space Mono', monospace;
            font-size: 0.75rem;
            color: rgba(232, 232, 232, 0.6);
            letter-spacing: 0.1em;
          }

          .ai-flyer-projects {
            position: relative;
            z-index: 10;
            display: flex;
            flex-direction: column;
            gap: 1.4rem;
          }

          .ai-flyer-project-card {
            background: var(--card-bg);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 16px;
            padding: 1.2rem 1.4rem;
            position: relative;
            overflow: hidden;
          }

          .ai-flyer-project-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
          }

          .ai-flyer-project-card:nth-child(1)::before {
            background: linear-gradient(90deg, var(--accent-cyan), transparent);
          }

          .ai-flyer-project-card:nth-child(2)::before {
            background: linear-gradient(90deg, var(--accent-magenta), transparent);
          }

          .ai-flyer-project-card:nth-child(3)::before {
            background: linear-gradient(90deg, var(--accent-yellow), transparent);
          }

          .ai-flyer-project-number {
            font-family: 'Space Mono', monospace;
            font-size: 0.65rem;
            letter-spacing: 0.2em;
            margin-bottom: 0.5rem;
          }

          .ai-flyer-project-card:nth-child(1) .ai-flyer-project-number { color: var(--accent-cyan); }
          .ai-flyer-project-card:nth-child(2) .ai-flyer-project-number { color: var(--accent-magenta); }
          .ai-flyer-project-card:nth-child(3) .ai-flyer-project-number { color: var(--accent-yellow); }

          .ai-flyer-project-title {
            font-size: 1.4rem;
            font-weight: 700;
            margin-bottom: 0.6rem;
            line-height: 1.2;
          }

          .ai-flyer-project-card:nth-child(1) .ai-flyer-project-title { color: var(--accent-cyan); }
          .ai-flyer-project-card:nth-child(2) .ai-flyer-project-title { color: var(--accent-magenta); }
          .ai-flyer-project-card:nth-child(3) .ai-flyer-project-title { color: var(--accent-yellow); }

          .ai-flyer-project-desc {
            font-size: 0.85rem;
            line-height: 1.5;
            color: rgba(232, 232, 232, 0.8);
            margin-bottom: 0.8rem;
          }

          .ai-flyer-tech-stack {
            display: flex;
            flex-wrap: wrap;
            gap: 0.4rem;
          }

          .ai-flyer-tech-tag {
            font-family: 'Space Mono', monospace;
            font-size: 0.6rem;
            padding: 0.3em 0.7em;
            border-radius: 4px;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            color: rgba(232, 232, 232, 0.7);
          }

          .ai-flyer-project-details {
            margin-bottom: 0.7rem;
            display: flex;
            flex-direction: column;
            gap: 0.35rem;
          }

          .ai-flyer-detail-section {
            font-size: 0.75rem;
            line-height: 1.4;
          }

          .ai-flyer-detail-label {
            font-weight: 600;
            color: rgba(232, 232, 232, 0.9);
            margin-right: 0.3rem;
          }

          .ai-flyer-project-card:nth-child(1) .ai-flyer-detail-label { color: var(--accent-cyan); }
          .ai-flyer-project-card:nth-child(2) .ai-flyer-detail-label { color: var(--accent-magenta); }
          .ai-flyer-project-card:nth-child(3) .ai-flyer-detail-label { color: var(--accent-yellow); }

          .ai-flyer-detail-text {
            color: rgba(232, 232, 232, 0.65);
          }

          .ai-flyer-cta-section {
            position: relative;
            z-index: 10;
            margin-top: 2rem;
            text-align: center;
          }

          .ai-flyer-cta-box {
            background: linear-gradient(135deg, rgba(0, 245, 255, 0.1), rgba(255, 0, 170, 0.1));
            border: 1px solid rgba(255, 255, 255, 0.15);
            border-radius: 12px;
            padding: 1.2rem 1.5rem;
          }

          .ai-flyer-cta-title {
            font-size: 1.3rem;
            font-weight: 700;
            margin-bottom: 0.4rem;
            background: linear-gradient(90deg, var(--accent-cyan), var(--accent-magenta), var(--accent-yellow));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .ai-flyer-cta-text {
            font-size: 0.85rem;
            color: rgba(232, 232, 232, 0.7);
            margin-bottom: 0.8rem;
          }

          .ai-flyer-cta-details {
            display: flex;
            justify-content: center;
            gap: 2rem;
            flex-wrap: wrap;
          }

          .ai-flyer-cta-item {
            font-family: 'Space Mono', monospace;
            font-size: 0.7rem;
            display: flex;
            align-items: center;
            gap: 0.4rem;
          }

          .ai-flyer-footer {
            position: relative;
            z-index: 10;
            margin-top: 1.4rem;
            text-align: center;
            padding-top: 1.2rem;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
          }

          .ai-flyer-footer-text {
            font-family: 'Space Mono', monospace;
            font-size: 0.6rem;
            color: rgba(232, 232, 232, 0.4);
            letter-spacing: 0.15em;
            text-transform: uppercase;
          }

          .ai-flyer-benefits {
            display: flex;
            justify-content: center;
            gap: 1.5rem;
            margin-bottom: 0.6rem;
            flex-wrap: wrap;
          }

          .ai-flyer-benefit {
            font-size: 0.75rem;
            color: rgba(232, 232, 232, 0.7);
            display: flex;
            align-items: center;
            gap: 0.3rem;
          }

          .ai-flyer-benefit::before {
            content: '✦';
            color: var(--accent-cyan);
            font-size: 0.6rem;
          }
        `}</style>
        <div className="tech-container">
          <div className="ai-flyer">
            <div className="ai-flyer-grid-bg"></div>
            <div className="ai-flyer-orb ai-flyer-orb-1"></div>
            <div className="ai-flyer-orb ai-flyer-orb-2"></div>
            <div className="ai-flyer-orb ai-flyer-orb-3"></div>

            <div className="ai-flyer-header">
              <div className="ai-flyer-badge">🚀 Now Recruiting</div>
              <h1 className="ai-flyer-title">
                <span className="ai-flyer-title-line-1">BUILD THE FUTURE</span>
                <span className="ai-flyer-title-line-2">WITH AI</span>
              </h1>
              <p className="ai-flyer-subtitle">Three cutting-edge project tracks • Real-world experience • Join now</p>
            </div>

            <div className="ai-flyer-projects">
              <div className="ai-flyer-project-card">
                <div className="ai-flyer-project-number">PROJECT 01</div>
                <h2 className="ai-flyer-project-title">Edge AI Development</h2>
                <p className="ai-flyer-project-desc">Build embedded AI applications that run at the edge. Develop real-time inference systems using NXP's i.MX 8M Plus FRDM development boards and the eIQ machine learning SDK.</p>
                <div className="ai-flyer-project-details">
                  <div className="ai-flyer-detail-section">
                    <span className="ai-flyer-detail-label">Preferred Skills:</span>
                    <span className="ai-flyer-detail-text">C/C++ programming, basic electronics, Linux command line, interest in hardware</span>
                  </div>
                  <div className="ai-flyer-detail-section">
                    <span className="ai-flyer-detail-label">You'll Learn:</span>
                    <span className="ai-flyer-detail-text">Embedded systems development, model optimization & quantization, real-time ML inference, hardware-software integration, edge deployment pipelines</span>
                  </div>
                </div>
                <div className="ai-flyer-tech-stack">
                  <span className="ai-flyer-tech-tag">i.MX 8M Plus FRDM</span>
                  <span className="ai-flyer-tech-tag">eIQ SDK</span>
                  <span className="ai-flyer-tech-tag">TensorFlow Lite</span>
                  <span className="ai-flyer-tech-tag">Embedded C/C++</span>
                  <span className="ai-flyer-tech-tag">Linux</span>
                </div>
              </div>

              <div className="ai-flyer-project-card">
                <div className="ai-flyer-project-number">PROJECT 02</div>
                <h2 className="ai-flyer-project-title">Agentic AI in the Cloud</h2>
                <p className="ai-flyer-project-desc">Design and deploy autonomous AI agents that reason, plan, and execute complex tasks. Build scalable cloud infrastructure for next-generation intelligent systems.</p>
                <div className="ai-flyer-project-details">
                  <div className="ai-flyer-detail-section">
                    <span className="ai-flyer-detail-label">Preferred Skills:</span>
                    <span className="ai-flyer-detail-text">Python programming, REST APIs, basic cloud concepts, familiarity with LLMs</span>
                  </div>
                  <div className="ai-flyer-detail-section">
                    <span className="ai-flyer-detail-label">You'll Learn:</span>
                    <span className="ai-flyer-detail-text">Agentic design patterns, prompt engineering, RAG architectures, cloud deployment (AWS/GCP), multi-agent orchestration, tool use & function calling</span>
                  </div>
                </div>
                <div className="ai-flyer-tech-stack">
                  <span className="ai-flyer-tech-tag">LLM APIs</span>
                  <span className="ai-flyer-tech-tag">LangChain</span>
                  <span className="ai-flyer-tech-tag">AWS/GCP</span>
                  <span className="ai-flyer-tech-tag">Python</span>
                  <span className="ai-flyer-tech-tag">RAG Systems</span>
                </div>
              </div>

              <div className="ai-flyer-project-card">
                <div className="ai-flyer-project-number">PROJECT 03</div>
                <h2 className="ai-flyer-project-title">AI/ML for EDA</h2>
                <p className="ai-flyer-project-desc">Apply machine learning to revolutionize electronic design automation. Tackle chip placement, routing optimization, timing analysis, and design verification challenges.</p>
                <div className="ai-flyer-project-details">
                  <div className="ai-flyer-detail-section">
                    <span className="ai-flyer-detail-label">Preferred Skills:</span>
                    <span className="ai-flyer-detail-text">Python, ML fundamentals, linear algebra, interest in chip design or optimization problems</span>
                  </div>
                  <div className="ai-flyer-detail-section">
                    <span className="ai-flyer-detail-label">You'll Learn:</span>
                    <span className="ai-flyer-detail-text">Graph neural networks for circuits, reinforcement learning for optimization, EDA tool flows, VLSI design fundamentals, ML model deployment for CAD</span>
                  </div>
                </div>
                <div className="ai-flyer-tech-stack">
                  <span className="ai-flyer-tech-tag">PyTorch</span>
                  <span className="ai-flyer-tech-tag">Graph Neural Networks</span>
                  <span className="ai-flyer-tech-tag">Reinforcement Learning</span>
                  <span className="ai-flyer-tech-tag">VLSI CAD</span>
                </div>
              </div>
            </div>

            <div className="ai-flyer-cta-section">
              <div className="ai-flyer-cta-box">
                <h3 className="ai-flyer-cta-title">Ready to Make an Impact?</h3>
                <p className="ai-flyer-cta-text">No prior experience required — just curiosity and drive. We'll provide mentorship, resources, and real projects.</p>
                <div className="ai-flyer-cta-details">
                  <div className="ai-flyer-cta-item">
                    📧 projects@example.edu
                  </div>
                  <div className="ai-flyer-cta-item">
                    ✓ Apply by Feb 15
                  </div>
                  <div className="ai-flyer-cta-item">
                    📍 Info Session: Room 204
                  </div>
                </div>
              </div>
            </div>

            <div className="ai-flyer-footer">
              <div className="ai-flyer-benefits">
                <span className="ai-flyer-benefit">Hands-on Experience</span>
                <span className="ai-flyer-benefit">Industry Mentors</span>
                <span className="ai-flyer-benefit">Portfolio Projects</span>
                <span className="ai-flyer-benefit">All Majors Welcome</span>
              </div>
              <p className="ai-flyer-footer-text">Scan QR or visit apply.aiprojects.edu</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section
      <section id="partnership" className="tech-section bg-tech-dark">
        <div className="tech-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="tech-subheading mb-6">Industry Partnership</h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Our partnership with NXP Semiconductors provides students with access to cutting-edge technology, 
              mentorship from industry experts, and real-world engineering challenges. This collaboration ensures 
              that capstone projects align with industry needs and prepare students for successful careers.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              NXP's support includes hardware donations, technical guidance, and direct involvement in project 
              evaluation, creating an invaluable bridge between academic learning and professional practice.
            </p>
          </div>
        </div>
      </section> */}

      {/* Committee Section */}
      <section id="committee" className="tech-section">
        <div className="tech-container">
          {/* CTRL Student Leaders */}
          <div className="mb-16">
            <h2 className="tech-subheading text-center mb-12">CTRL Student Leaders</h2>
            <div className="tech-grid">
              {ctrlLeaders.map((leader, index) => (
                <div key={index} className="tech-card text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-tech-blue to-tech-purple rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                    {leader.image ? (
                      <img 
                        src={leader.image} 
                        alt={leader.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-3xl">👤</span>
                    )}
                  </div>
                  <h4 className="text-lg font-bold text-tech-blue mb-1">{leader.role}</h4>
                  <p className="text-xl text-gray-200">{leader.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* NXP Industry Representatives */}
          <div>
            <h2 className="tech-subheading text-center mb-12">NXP Industry Representatives</h2>
            <div className="tech-grid">
              {nxpRepresentatives.map((rep, index) => (
                <div key={index} className="tech-card text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-tech-blue to-tech-purple rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                    {rep.image ? (
                      <img 
                        src={rep.image} 
                        alt={rep.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-3xl">👤</span>
                    )}
                  </div>
                  <h4 className="text-lg font-bold text-tech-blue mb-1">{rep.role}</h4>
                  <p className="text-xl text-gray-200">{rep.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NXP;
