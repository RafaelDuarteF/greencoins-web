import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.scss';
import CryptoLandingPage from './pages/cryptoLandingPage/CryptoLandingPage';
import Login from './pages/loginPage/Login';

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<CryptoLandingPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
