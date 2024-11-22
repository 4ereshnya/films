import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';

function App() {
  return (
    <div className="min-h-screen bg-[#1C1F29] text-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;