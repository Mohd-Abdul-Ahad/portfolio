import { useState } from "react";

import "./App.css";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServiceSection";
import ProjectsSection from "./ProjectsSection";
import SkillsShowcase from "./SkillsShowCase";
import ContactSection from "./ContactSection";

function App() {
  return (
    <>
      <HeroSection />
      <ServicesSection/>
      <ProjectsSection/>
      <SkillsShowcase/>
      <ContactSection/>
    </>
  );
}

export default App;
  