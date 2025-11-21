import SecondaryNav from '../components/SecondaryNav';
import Overview from '../components/hackathon/Overview';
import Logistics from '../components/hackathon/Logistics';
import Prizes from '../components/hackathon/Prizes';
import Sponsors from '../components/hackathon/Sponsors';
import Prompt from '../components/hackathon/Prompt';
import AIPolicy from '../components/hackathon/AIPolicy';
import Contact from '../components/hackathon/Contact';

const Hack = () => {
  const sections = [
    { id: 'overview', label: 'Home' },
    { id: 'logistics', label: 'Logistics' },
    { id: 'prizes', label: 'Prizes' },
    { id: 'sponsors', label: 'Sponsors' },
    { id: 'prompt', label: 'Theme & Prompt' },
    { id: 'ai-policy', label: 'GenAI Policy' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div>
      <SecondaryNav sections={sections} />
      <Overview />
      <Logistics />
      <Prizes />
      <Sponsors />
      <Prompt />
      <AIPolicy />
      <Contact />
    </div>
  );
};

export default Hack;
