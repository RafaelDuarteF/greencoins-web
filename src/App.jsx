import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.scss';
import CryptoLandingPage from './pages/cryptoLandingPage/CryptoLandingPage';

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<CryptoLandingPage />} />
        <Route path="/login" element={<CryptoLandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
