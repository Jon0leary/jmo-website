import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Games from './pages/Games';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/games" element={<Games />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;