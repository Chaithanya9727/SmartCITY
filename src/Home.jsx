// src/components/Home.jsx
import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import Features from './Features';
import CitiesProblems from './CitiesProblems';
import Reviews from './Reviews';
import PublicTransport from './PublicTransport';
import MotivationSubscribe from './MotivationSubscribe';
import Projects from './Projects';

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Features />
      <CitiesProblems />
      <Reviews />
      <PublicTransport />
      <MotivationSubscribe />
      <Projects />
    </>
  );
};

export default Home;