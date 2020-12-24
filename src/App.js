import React from 'react';
import Home from './pages/home/home';
import Header from './components/header/header';
import ContactUs from './pages/contactUs/contactUs';
import Footer from './components/footer/footer';
import AboutUs from './pages/aboutUs/aboutUs';
import {Switch, BrowserRouter, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={AboutUs} />
        <Route path="/contact" component={ContactUs} />
      </Switch>
      </BrowserRouter>
      {/* <Home /> */}
      {/* <ContactUs /> */}
      {/* <AboutUs /> */}
      <Footer />
    </div>
  );
}

export  default App;

