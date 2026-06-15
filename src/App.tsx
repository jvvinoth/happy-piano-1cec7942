import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { LessonProgramsSection } from './components/LessonProgramsSection';
import { GallerySection } from './components/GallerySection';
import { InstructorSection } from './components/InstructorSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function App() {
  useEffect(() => {
    // Set lang attribute
    document.documentElement.lang = 'ja';
    
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-background text-text antialiased">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <LessonProgramsSection />
        <GallerySection />
        <InstructorSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
