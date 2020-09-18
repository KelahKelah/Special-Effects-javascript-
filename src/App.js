import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home/home';
import Header from './components/header/header';
import ContactUs from './pages/contactUs/contactUs';
import Footer from './components/footer/footer';
import AboutUs from './pages/aboutUs/aboutUs';

function App() {
  return (
    <div>
      <Header />
      {/* <Home /> */}
      <ContactUs />
      {/* <AboutUs /> */}
      <Footer />
    </div>
  );
}

export default App;

