import SecondaryNav from '../components/SecondaryNav';

import ctrl_logo from "../images/media/nxp_flyer/ctrl_logo.jpg";
import NXP_Logo_RGB_White from "../images/media/nxp_flyer/NXP_Logo_RGB_White.png";
import nxp_qr from "../images/media/nxp_flyer/nxp_qr.png";
import sdsu_logo from "../images/media/nxp_flyer/sdsu_logo.png";

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
              NXP Engineering Bootcamp
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
            <h2 className="tech-subheading mb-8">About the NXP Engineering Bootcamp</h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              CTRL invites you to join us for a unique opportunity for SDSU students: the NXP-CTRL Collaboration Bootcamp! This 10 week program will start on the week of February 23rd and end the week of April 27th, with two sessions per week at 2-3 hours per day. Not only will you be working with mentors from the Design & Automation Team at NXP to learn about edge AI, cloud AI, and electronic design automation, but you will split your time between an SDSU classroom and the NXP offices! The meetings will be every Monday from 12:30PM-2:30PM and another virtual day of your team’s choosing. The 10 week track will culminate in students creating their own projects with the help of their NXP mentors. Apply by Tuesday, February 10th at 11:59PM. Kickoff will be finalized by Friday, February 13th. 
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
              <p className="text-gray-300 mb-4">
            <span className="font-semibold">Two Times Per Week:</span>
              </p>
              <ul className="text-gray-300 space-y-2 mb-4">
            <li>• Mondays: 12:30pm - 2:30pm</li>
            <li>• Day of your group's choice</li>
              </ul>
              <p className="text-gray-300">
            <span className="font-semibold">February 23rd - April 27th</span>
              </p>
            </div>

            <div className="tech-card">
              <h3 className="text-xl font-bold text-tech-blue mb-4">Where</h3>
              <p className="text-gray-300 mb-3">
            <span className="font-semibold">Mondays:</span> Rotation between NXP Offices and SDSU Classrooms
              </p>
              <p className="text-gray-300">
            <span className="font-semibold">Second Day:</span> Virtual meeting with your team
              </p>
            </div>

            <div className="tech-card">
              <h3 className="text-xl font-bold text-tech-blue mb-4">Who Should Apply</h3>
              <p className="text-gray-300 mb-3">
            <span className="font-semibold">Class Level:</span> Juniors and Seniors
              </p>
              <p className="text-gray-300 mb-3">
            <span className="font-semibold">Majors:</span> Computer Science, Computer Engineering, Electrical Engineering, Data Science, or applicable background
              </p>
              <p className="text-gray-300">
            <span className="font-semibold">Interests:</span> Embedded systems, edge AI, cloud-based design automation
              </p>
            </div>

            <div className="tech-card">
              <h3 className="text-xl font-bold text-tech-blue mb-4">What to Bring</h3>
              <p className="text-gray-300 mb-3">
            <span className="font-semibold">NXP provides:</span>
              </p>
              <ul className="text-gray-300 space-y-2">
            <li>• Hardware and development boards</li>
            <li>• Cloud resources</li>
            <li>• Software development kits (SDKs)</li>
              </ul>
              <p className="text-gray-300 mt-4">
            <span className="font-semibold">You bring:</span> A laptop computer
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-300 mb-6">Ready to join the bootcamp?</p>
            <a 
              href="https://forms.gle/XC3CyYHt1jxACCWKA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gradient-to-r from-tech-blue to-tech-purple text-white font-bold text-lg rounded-lg hover:shadow-lg hover:shadow-tech-blue/50 transition-all duration-300"
            >
              Apply By February 10th at 11:59PM
            </a>
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

          .nxp-flyer {
            position: relative;
            padding: 2rem;
            overflow: hidden;
          }

          .nxp-flyer-grid-bg {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: 
              linear-gradient(rgba(0, 245, 255, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 245, 255, 0.03) 1px, transparent 1px);
            background-size: 30px 30px;
            animation: gridPulseNXP 4s ease-in-out infinite;
          }

          @keyframes gridPulseNXP {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 1; }
          }

          .nxp-flyer-orb {
            position: absolute;
            border-radius: 50%;
            filter: blur(60px);
            animation: floatNXP 8s ease-in-out infinite;
          }

          .nxp-flyer-orb-1 {
            width: 300px;
            height: 300px;
            background: var(--accent-cyan);
            opacity: 0.15;
            top: -100px;
            right: -50px;
            animation-delay: 0s;
          }

          .nxp-flyer-orb-2 {
            width: 250px;
            height: 250px;
            background: var(--accent-magenta);
            opacity: 0.12;
            bottom: 200px;
            left: -80px;
            animation-delay: -3s;
          }

          .nxp-flyer-orb-3 {
            width: 200px;
            height: 200px;
            background: var(--accent-yellow);
            opacity: 0.1;
            bottom: -50px;
            right: 100px;
            animation-delay: -5s;
          }

          @keyframes floatNXP {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(20px, -20px) scale(1.05); }
            66% { transform: translate(-10px, 15px) scale(0.95); }
          }

          .nxp-flyer-header {
            position: relative;
            z-index: 10;
            text-align: center;
            margin-bottom: 2rem;
          }

          .nxp-flyer-badge {
            display: inline-block;
            font-family: 'Space Mono', monospace;
            font-size: 0.65rem;
            letter-spacing: 0.25em;
            text-transform: uppercase;
            color: var(--accent-cyan);
            border: 1px solid var(--accent-cyan);
            padding: 0.4em 1.2em;
            margin-bottom: 0.8rem;
            animation: glowPulseNXP 2s ease-in-out infinite;
          }

          @keyframes glowPulseNXP {
            0%, 100% { box-shadow: 0 0 10px rgba(0, 245, 255, 0.3); }
            50% { box-shadow: 0 0 25px rgba(0, 245, 255, 0.6); }
          }

          .nxp-flyer-title {
            font-size: 2.5rem;
            font-weight: 800;
            line-height: 1;
            letter-spacing: -0.03em;
            margin-bottom: 0.5rem;
          }

          .nxp-flyer-title-line-1 {
            display: block;
            background: linear-gradient(90deg, var(--accent-cyan), var(--accent-magenta));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .nxp-flyer-title-line-2 {
            display: block;
            color: var(--text-light);
          }

          .nxp-flyer-branding {
            font-family: 'Space Mono', monospace; 
            font-size: 1.5rem; 
            letter-spacing: 0.2em; 
            color: rgba(255, 255, 255, 0.8); 
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;
            text-transform: uppercase;
            font-weight: 700;
          }

          .nxp-flyer-logistics-bar {
            margin-top: 0.6rem;
            padding: 0.4rem;
            border-top: 1px solid rgba(255,255,255,0.1);
            border-bottom: 1px solid rgba(255,255,255,0.1);
            display: inline-flex;
            gap: 1.5rem;
            justify-content: center;
          }

          .nxp-flyer-logistic-item {
            font-family: 'Space Mono', monospace;
            font-size: 0.9rem;
            color: var(--accent-cyan);
          }

          .nxp-flyer-projects {
            position: relative;
            z-index: 10;
            display: flex;
            flex-direction: column;
            gap: 1.4rem;
          }

          .nxp-flyer-project-card {
            background: var(--card-bg);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 16px;
            padding: 1.2rem 1.4rem;
            position: relative;
            overflow: hidden;
          }

          .nxp-flyer-project-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
          }

          .nxp-flyer-project-card:nth-child(1)::before {
            background: linear-gradient(90deg, var(--accent-cyan), transparent);
          }

          .nxp-flyer-project-card:nth-child(2)::before {
            background: linear-gradient(90deg, var(--accent-magenta), transparent);
          }

          .nxp-flyer-project-card:nth-child(3)::before {
            background: linear-gradient(90deg, var(--accent-yellow), transparent);
          }

          .nxp-flyer-project-number {
            font-family: 'Space Mono', monospace;
            font-size: 0.65rem;
            letter-spacing: 0.2em;
            margin-bottom: 0.5rem;
          }

          .nxp-flyer-project-card:nth-child(1) .nxp-flyer-project-number { color: var(--accent-cyan); }
          .nxp-flyer-project-card:nth-child(2) .nxp-flyer-project-number { color: var(--accent-magenta); }
          .nxp-flyer-project-card:nth-child(3) .nxp-flyer-project-number { color: var(--accent-yellow); }

          .nxp-flyer-project-title {
            font-size: 1.4rem;
            font-weight: 700;
            margin-bottom: 0.6rem;
            line-height: 1.2;
          }

          .nxp-flyer-project-card:nth-child(1) .nxp-flyer-project-title { color: var(--accent-cyan); }
          .nxp-flyer-project-card:nth-child(2) .nxp-flyer-project-title { color: var(--accent-magenta); }
          .nxp-flyer-project-card:nth-child(3) .nxp-flyer-project-title { color: var(--accent-yellow); }

          .nxp-flyer-project-desc {
            font-size: 0.85rem;
            line-height: 1.5;
            color: rgba(232, 232, 232, 0.8);
            margin-bottom: 0.8rem;
          }

          .nxp-flyer-tech-stack {
            display: flex;
            flex-wrap: wrap;
            gap: 0.4rem;
          }

          .nxp-flyer-tech-tag {
            font-family: 'Space Mono', monospace;
            font-size: 0.6rem;
            padding: 0.3em 0.7em;
            border-radius: 4px;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            color: rgba(232, 232, 232, 0.7);
          }

          .nxp-flyer-project-details {
            margin-bottom: 0.7rem;
            display: flex;
            flex-direction: column;
            gap: 0.35rem;
          }

          .nxp-flyer-detail-section {
            font-size: 0.75rem;
            line-height: 1.4;
          }

          .nxp-flyer-detail-label {
            font-weight: 600;
            color: rgba(232, 232, 232, 0.9);
            margin-right: 0.3rem;
          }

          .nxp-flyer-project-card:nth-child(1) .nxp-flyer-detail-label { color: var(--accent-cyan); }
          .nxp-flyer-project-card:nth-child(2) .nxp-flyer-detail-label { color: var(--accent-magenta); }
          .nxp-flyer-project-card:nth-child(3) .nxp-flyer-detail-label { color: var(--accent-yellow); }

          .nxp-flyer-detail-text {
            color: rgba(232, 232, 232, 0.65);
          }

          .nxp-flyer-cta-section {
            position: relative;
            z-index: 10;
            margin-top: 2rem;
            text-align: center;
          }

          .nxp-flyer-cta-box {
            background: linear-gradient(135deg, rgba(0, 245, 255, 0.1), rgba(255, 0, 170, 0.1));
            border: 1px solid rgba(255, 255, 255, 0.15);
            border-radius: 12px;
            padding: 1.2rem 1.5rem;
          }

          .nxp-flyer-cta-title {
            font-size: 1.3rem;
            font-weight: 700;
            margin-bottom: 0.4rem;
            background: linear-gradient(90deg, var(--accent-cyan), var(--accent-magenta), var(--accent-yellow));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .nxp-flyer-cta-text {
            font-size: 0.85rem;
            color: rgba(232, 232, 232, 0.7);
            margin-bottom: 0.8rem;
          }

          .nxp-flyer-footer {
            position: relative;
            z-index: 10;
            margin-top: 1.4rem;
            text-align: center;
            padding-top: 1.2rem;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
          }

          .nxp-flyer-footer-text {
            font-family: 'Space Mono', monospace;
            font-size: 0.6rem;
            color: rgba(232, 232, 232, 0.4);
            letter-spacing: 0.15em;
            text-transform: uppercase;
          }

          .nxp-flyer-benefits {
            display: flex;
            justify-content: center;
            gap: 1.5rem;
            margin-bottom: 0.6rem;
            flex-wrap: wrap;
          }

          .nxp-flyer-benefit {
            font-size: 0.75rem;
            color: rgba(232, 232, 232, 0.7);
            display: flex;
            align-items: center;
            gap: 0.3rem;
          }

          .nxp-flyer-benefit::before {
            content: '✦';
            color: var(--accent-cyan);
            font-size: 0.6rem;
          }
        `}</style>
        <div className="tech-container">
          <div className="nxp-flyer">
            <div className="nxp-flyer-grid-bg"></div>
            <div className="nxp-flyer-orb nxp-flyer-orb-1"></div>
            <div className="nxp-flyer-orb nxp-flyer-orb-2"></div>
            <div className="nxp-flyer-orb nxp-flyer-orb-3"></div>

            <div className="nxp-flyer-header">
              <div className="nxp-flyer-badge">🚀 Now Recruiting</div>
              <h1 className="nxp-flyer-title">
                <span className="nxp-flyer-title-line-1">BUILD THE FUTURE</span>
                <span className="nxp-flyer-title-line-2">WITH AI</span>
              </h1>
              <div className="nxp-flyer-branding">NXP Semiconductors ✕ CTRL</div>
              <div className="nxp-flyer-logistics-bar">
                <span className="nxp-flyer-logistic-item">Feb 23 Start</span>
                <span className="nxp-flyer-logistic-item">•</span>
                <span className="nxp-flyer-logistic-item">NXP Offices & SDSU</span>
                <span className="nxp-flyer-logistic-item">•</span>
                <span className="nxp-flyer-logistic-item">10 weeks</span>
              </div>
            </div>

            <div className="nxp-flyer-projects">
              <div className="nxp-flyer-project-card">
                <div className="nxp-flyer-project-number">PROJECT 01</div>
                <h2 className="nxp-flyer-project-title">Edge AI Development</h2>
                <p className="nxp-flyer-project-desc">Build embedded AI applications that run at the edge. Develop real-time inference systems using NXP's i.MX 8M Plus FRDM development boards and the eIQ machine learning SDK.</p>
                <div className="nxp-flyer-project-details">
                  <div className="nxp-flyer-detail-section">
                    <span className="nxp-flyer-detail-label">Preferred Skills:</span>
                    <span className="nxp-flyer-detail-text">C/C++ programming, basic electronics, Linux command line, interest in hardware</span>
                  </div>
                  <div className="nxp-flyer-detail-section">
                    <span className="nxp-flyer-detail-label">You'll Learn:</span>
                    <span className="nxp-flyer-detail-text">Embedded systems development, model optimization & quantization, real-time ML inference, hardware-software integration, edge deployment pipelines</span>
                  </div>
                </div>
                <div className="nxp-flyer-tech-stack">
                  <span className="nxp-flyer-tech-tag">i.MX 8M Plus FRDM</span>
                  <span className="nxp-flyer-tech-tag">eIQ SDK</span>
                  <span className="nxp-flyer-tech-tag">TensorFlow Lite</span>
                  <span className="nxp-flyer-tech-tag">Embedded C/C++</span>
                  <span className="nxp-flyer-tech-tag">Linux</span>
                </div>
              </div>

              <div className="nxp-flyer-project-card">
                <div className="nxp-flyer-project-number">PROJECT 02</div>
                <h2 className="nxp-flyer-project-title">Agentic AI in the Cloud</h2>
                <p className="nxp-flyer-project-desc">Design and deploy autonomous AI agents that reason, plan, and execute complex tasks. Build scalable cloud infrastructure for next-generation intelligent systems.</p>
                <div className="nxp-flyer-project-details">
                  <div className="nxp-flyer-detail-section">
                    <span className="nxp-flyer-detail-label">Preferred Skills:</span>
                    <span className="nxp-flyer-detail-text">Python programming, REST APIs, basic cloud concepts, familiarity with LLMs</span>
                  </div>
                  <div className="nxp-flyer-detail-section">
                    <span className="nxp-flyer-detail-label">You'll Learn:</span>
                    <span className="nxp-flyer-detail-text">Agentic design patterns, prompt engineering, RAG architectures, cloud deployment (AWS/GCP), multi-agent orchestration, tool use & function calling</span>
                  </div>
                </div>
                <div className="nxp-flyer-tech-stack">
                  <span className="nxp-flyer-tech-tag">LLM APIs</span>
                  <span className="nxp-flyer-tech-tag">LangChain</span>
                  <span className="nxp-flyer-tech-tag">AWS/GCP</span>
                  <span className="nxp-flyer-tech-tag">Python</span>
                  <span className="nxp-flyer-tech-tag">RAG Systems</span>
                </div>
              </div>

              <div className="nxp-flyer-project-card">
                <div className="nxp-flyer-project-number">PROJECT 03</div>
                <h2 className="nxp-flyer-project-title">AI/ML for EDA</h2>
                <p className="nxp-flyer-project-desc">Apply machine learning to revolutionize electronic design automation. Tackle chip placement, routing optimization, timing analysis, and design verification challenges.</p>
                <div className="nxp-flyer-project-details">
                  <div className="nxp-flyer-detail-section">
                    <span className="nxp-flyer-detail-label">Preferred Skills:</span>
                    <span className="nxp-flyer-detail-text">Python, ML fundamentals, linear algebra, interest in chip design or optimization problems</span>
                  </div>
                  <div className="nxp-flyer-detail-section">
                    <span className="nxp-flyer-detail-label">You'll Learn:</span>
                    <span className="nxp-flyer-detail-text">Graph neural networks for circuits, reinforcement learning for optimization, EDA tool flows, VLSI design fundamentals, ML model deployment for CAD</span>
                  </div>
                </div>
                <div className="nxp-flyer-tech-stack">
                  <span className="nxp-flyer-tech-tag">PyTorch</span>
                  <span className="nxp-flyer-tech-tag">Graph Neural Networks</span>
                  <span className="nxp-flyer-tech-tag">Reinforcement Learning</span>
                  <span className="nxp-flyer-tech-tag">VLSI CAD</span>
                </div>
              </div>
            </div>

            <div className="nxp-flyer-cta-section">
              <div className="nxp-flyer-cta-box">
                <h3 className="nxp-flyer-cta-title">Ready to Make an Impact?</h3>

                <div style={{
                  margin: '1rem 0 1.2rem 0',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '2rem',
                  flexWrap: 'wrap'
                }}>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '1.3rem',
                      color: 'var(--accent-cyan)',
                      fontWeight: '700',
                      marginBottom: '0.3rem'
                    }}>
                      APPLY BY FEB 10
                    </div>
                    <div style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '0.75rem',
                      color: '#fff',
                      opacity: '0.6',
                      letterSpacing: '0.05em'
                    }}>
                      SCAN TO REGISTER →
                    </div>
                  </div>

                  <img
                    src={nxp_qr}
                    style={{
                      width: '120px',
                      height: '120px',
                      borderRadius: '6px'
                    }}
                    alt="QR Code"
                  />
                </div>
              </div>
            </div>

            <div className="nxp-flyer-footer">
              <div className="nxp-flyer-benefits">
                <span className="nxp-flyer-benefit">Hands-on Experience</span>
                <span className="nxp-flyer-benefit">Industry Mentors</span>
                <span className="nxp-flyer-benefit">Portfolio Projects</span>
                <span className="nxp-flyer-benefit">All Majors Welcome</span>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '1.5rem',
                width: '100%',
                marginBottom: '0.6rem',
                marginTop: '1rem',
                flexWrap: 'wrap'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '140px',
                  height: '60px',
                  borderRadius: '6px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  overflow: 'hidden'
                }}>
                  <img
                    src={NXP_Logo_RGB_White}
                    alt="NXP Logo"
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                  />
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '140px',
                  height: '60px',
                  borderRadius: '6px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  overflow: 'hidden'
                }}>
                  <img
                    src={sdsu_logo}
                    alt="SDSU Logo"
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                  />
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '140px',
                  height: '60px',
                  borderRadius: '6px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  overflow: 'hidden'
                }}>
                  <img
                    src={ctrl_logo}
                    alt="CTRL Logo"
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                  />
                </div>
              </div>

              <p className="nxp-flyer-footer-text">NXP Semiconductors x SDSU x CTRL</p>
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
              that bootcamp projects align with industry needs and prepare students for successful careers.
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
