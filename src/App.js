import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UserTools from './pages/UserTools';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-blue-700 p-4 text-white">
          <Link to="/" className="text-xl font-semibold">Inicio</Link>
        </nav>
        <Routes>
          <Route path="/" element={<UserTools />} />
        </Routes>
      </div>
    </Router>
  );
}