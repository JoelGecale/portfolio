import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Resume from './pages/Resume';
import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className='container-fluid app'>
      <HashRouter>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/resume" element={<Resume />}></Route>                  
        </Routes>
        <Footer />
      </HashRouter>

    </div>
  );
}

export default App
