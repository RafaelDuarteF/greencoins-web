import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import CryptoLandingPage from './pages/cryptoLandingPage/CryptoLandingPage';
import Login from './pages/loginPage/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/:isLogged?" element={<CryptoLandingPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
