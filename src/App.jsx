// src/App.jsx
import React from 'react';
import '../src/styles/global.css';


import NavBar from './components/NavBar';
import Header from './components/Header'; 
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Projects from './components/Projects';
import Reviews from './components/Reviews';
import CitiesProblems from './components/CitiesProblems';
import PublicTransport from './components/PublicTransport';
import MotivationSubscribe from './components/MotivationSubscribe';
import Traffic from './components/Traffic';  // Import Traffic section
import Monitoring from './components/Monitoring';  // Import Monitoring section
import Ideas from './components/Ideas';
import ChatBot from './components/ChatBot';  // Import Ideas section
// import ContactUs from './components/ContactUs';  // Import Contact Us section

const App = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <HeroSection />
      <Features />
      <Traffic />  {/* Add Traffic Section */}
      <Monitoring />  {/* Add Monitoring Section */}
      <Ideas />  {/* Add Ideas Section */}
      {/* <ContactUs />  Add Contact Us Section */}
      <CitiesProblems />
      <Reviews />
      <PublicTransport />
      <MotivationSubscribe />
      
      <Projects />
      <ChatBot />
      <Footer />
    </div>
  );
};

export default App;
