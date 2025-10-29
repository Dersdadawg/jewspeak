import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { EditModeProvider } from './contexts/EditModeContext';
import Layout from './components/Layout';
import Landing from './pages/Landing';
import LanguagePage from './pages/LanguagePage';
import MediaPage from './pages/MediaPage';
import AnalysisPage from './pages/AnalysisPage';
import InteractivePage from './pages/InteractivePage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <EditModeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/language" element={<LanguagePage />} />
            <Route path="/media" element={<MediaPage />} />
            <Route path="/analysis" element={<AnalysisPage />} />
            <Route path="/interactive" element={<InteractivePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Layout>
      </Router>
    </EditModeProvider>
  );
}

export default App;
