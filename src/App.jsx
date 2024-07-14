// src/App.js

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import HeroPage from "./pages/heroPage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";

// Components
// import ProtectedRoute from './components/ProtectedRoute'; // Import ProtectedRoute

// Style
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<HeroPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/praktikan'element={<Dashboard /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
