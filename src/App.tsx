import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { LessonProgramsSection } from './components/LessonProgramsSection';
import { GallerySection } from './components/GallerySection';
import { InstructorSection } from './components/InstructorSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProfilePage } from './components/ProfilePage';

function App() {
  const [currentPage, setCurrentPage] = useState<string>('/');

  useEffect(() => {
    // Set lang attribute
    document.documentElement.lang = 'ja';
    
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';

    // Handle initial hash
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      setCurrentPage(hash || '/');
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderPage = () => {
    if (currentPage === '/profile') {
      return <ProfilePage />;
    }

    return (
      <main>
        <HeroSection />
        <AboutSection />
        <LessonProgramsSection />
        <GallerySection />
        <InstructorSection />
        <ContactSection />
      </main>
    );
  };

  return (
    <div className="min-h-screen bg-background text-text antialiased">
      <Header />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
