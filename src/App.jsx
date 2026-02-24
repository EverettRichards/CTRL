import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Hack from './pages/Hack';
import Symposium from './pages/Symposium';
import HighSchool from './pages/HighSchool';
import NXP from './pages/NXP';
import ICC from './pages/ICC';
import CodeBlitz from './pages/CodeBlitz';
import LoginScreen from './codeBlitz/frontend/LoginScreen';
import AdminScreen from './codeBlitz/frontend/AdminScreen';
import QuestionScreen from './codeBlitz/frontend/QuestionScreen';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hack" element={<Hack />} />
          <Route path="/symposium" element={<Symposium />} />
          <Route path="/highschool" element={<HighSchool />} />
          <Route path="/nxp" element={<NXP />} />
          <Route path="/codeblitz" element={<CodeBlitz />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/admin" element={<AdminScreen />} />
          <Route path="/question" element={<QuestionScreen />} />
          <Route path="/icc" element={<ICC />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
