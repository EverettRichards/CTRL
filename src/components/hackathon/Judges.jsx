import { useState } from 'react';

const Judges = () => {
  const judges = [
    {
      name: 'Brij Mohan',
      position: 'Vice President, LPL Financial',
      image: null,
      description: 'Brij Mohan is an accomplished technology leader with over 25 years of experience architecting enterprise-scale financial solutions. Currently Vice President - Principal Software Dev. at LPL Financial, he leads teams working extensively with AI/ML, Generative AI, Agentic AI, Data analytics, AWS cloud technologies, and API development, where his role involves evaluating innovative technical solutions, assessing their scalability and real-world impact, and mentoring development teams. He has served as a judge for technology innovation, business and leadership awards, evaluating cutting-edge solutions across diverse sectors and assessing technical merit and practical impact. He holds multiple AWS certifications including Solutions Architect Professional and Machine Learning Engineer - Associate, is a PMP, and actively contributes to IEEE as Senior Member and ACM professional communities.'
    },
    {
      name: 'Nadeem Bulsara',
      position: 'Principal Solutions Architect, AWS',
      image: null,
      description: 'Nadeem Bulsara is a Principal Solutions Architect at Amazon Web Services (AWS) specializing in Genomics and Life Sciences. He brings his 13+ years of Bioinformatics, Software Engineering, and Cloud Development skills as well as experience in research and clinical genomics and multi-omics to help Healthcare and Life Sciences organizations globally. He is motivated by the industry\'s mission to enable people to have a long and healthy life.'
    },
    {
      name: 'Logan Wolff',
      position: 'Data Engineer, LPL Financial',
      image: null,
      description: 'Logan Wolff is a Data Engineer at LPL Financial, where he builds and maintains data pipelines and infrastructure to support data analytics and business intelligence initiatives. He has a strong background in computer science and data engineering, being a San Diego State University graduate and former campus AI Club president. Logan is passionate about leveraging data to drive business decisions and improve data-readiness.'
    },
    {
      name: 'Balakrishnan Srinivasan',
      position: 'Firmware Engineer, Apple Inc.',
      image: null,
      description: 'Balakrishnan Srinivasan is an expert in DSP and embedded software and firmware development for wireless communication protocols with focus on physical layer. With extensive experience spanning 3G, 4G, and 5G cellular device design, development, and verification, he has contributed to leading-edge innovations at companies like Motorola Mobility, Intel, and Apple. His work has focused on pre- and post-silicon software validation across multiple generations of wireless chipsets, consistently driving improvements in power, performance, and area. Outside of work, Balakrishnan enjoys cricket, hiking and playing board games.'
    },
    {
      name: 'Shubham Pandey',
      position: 'Senior Firmware Engineer, Qualcomm',
      image: null,
      description: 'Shubham Pandey is a Senior Firmware Engineer at Qualcomm, with nearly a decade of experience in embedded systems, Linux/QNX kernel development, and performance optimization. Before Qualcomm, he worked at Samsung Semiconductor and Intel, contributing to core platform technologies across automotive and consumer devices. He brings deep expertise in system software design, hardware–software integration, and product innovation. Shubham is passionate about mentoring engineers, leveraging AI to enhance development efficiency, and fostering creativity through hands-on innovation challenges. Outside of work, he enjoys traveling and is an avid cinephile.'
    },
    {
      name: 'Drishti Idnani',
      position: 'Independent Data Scientist and Analytics Consultant',
      image: null,
      description: 'Drishti Idnani is an independent Data Scientist and analytics consultant who helps organizations design scalable forecasting models, automation pipelines, and data-driven decision systems. She has led large-scale analytics and automation initiatives at ASUS and Intel, where her work shaped data strategy across product, operations, and forecasting domains - driving decisions at the senior leadership level. Beyond her industry experience, Drishti is deeply engaged in the hackathon and academic ecosystem. She has judged at MHacks 17 (University of Michigan), mentored at CalHacks (UC Berkeley) and the AI Futures Hackathon (Laney College), and serves on Laney College\'s AI Advisory Board, where she supports efforts to make AI education more applied and accessible. She\'s passionate about helping teams bridge creativity and analytics - turning early ideas into solutions that are impactful, explainable, and human-centered.'
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <section id="judges" className="tech-section">
      <div className="tech-container">
        <h2 className="tech-subheading text-center mb-4">Industry Judges</h2>
        <p className="text-center text-lg text-gray-300 max-w-3xl mx-auto mb-12">
          Our team of talented industry judges evaluated hackathon projects based on creativity, technical complexity, impact, and presentation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {judges.map((judge, idx) => (
            <div key={idx} className="tech-card cursor-pointer hover:scale-105 transition-transform" onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}>
              <div className="text-center mb-4">
                <div className="w-24 h-24 bg-gradient-to-br from-tech-blue to-tech-purple rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  {judge.image ? (
                    <img 
                      src={judge.image} 
                      alt={judge.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-3xl">👤</span>
                  )}
                </div>
              </div>
              <h3 className="text-lg font-bold text-tech-blue mb-1 text-center">{judge.name}</h3>
              <p className="text-gray-400 text-center text-sm mb-3">{judge.position}</p>
              
              {expandedIndex === idx && (
                <p className="text-gray-300 text-sm leading-relaxed border-t border-gray-600 pt-3 mt-3">
                  {judge.description}
                </p>
              )}
              
              {expandedIndex !== idx && (
                <p className="text-center text-tech-blue text-xs font-semibold mt-2">Click to view bio</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Judges;
