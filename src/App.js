import React from 'react';
import Home from './pages/home/home';
import Header from './components/header/header';
import ContactUs from './pages/contactUs/contactUs';
import Footer from './components/footer/footer';
import AboutUs from './pages/aboutUs/aboutUs';
import Products from './pages/products/products';
import {Switch, BrowserRouter, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Header />
      <Switch>

        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route path="/about" component={AboutUs} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/products" component={Products} />
        {/* <Route path="/footer" component={Footer} /> */}
      </Switch>
      <Footer />
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
}

export  default App;

