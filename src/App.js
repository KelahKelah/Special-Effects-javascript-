import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home/home';
import Header from './components/header/header';
import Footer from './components/footer/footer';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
