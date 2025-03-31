import React from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Goals from "../components/Goals";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Goals />
    </div>
  );
};

export default Index;