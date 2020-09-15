import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/layout/Navbar';
import Carousel from './components/layout/Carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Quote from './components/layout/Quote';
import Card from './components/layout/Card';
import Footer from './components/layout/Footer'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel/>
      <Quote/>
      <Card/>
      <Footer/>
    </div>
  );
}

export default App;
