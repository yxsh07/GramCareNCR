import React, { useState, useCallback } from 'react';
import type { Page } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BloodCheckupPage from './pages/BloodCheckupPage';
import AboutUsPage from './pages/AboutUsPage';
import MedicinePage from './pages/MedicinePage';
import DoctorsAppointmentPage from './pages/DoctorsAppointmentPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigateTo = useCallback((page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'medicine':
        return <MedicinePage navigateTo={navigateTo} />;
      case 'blood-checkup':
        return <BloodCheckupPage navigateTo={navigateTo} />;
      case 'doctors-appointment':
        return <DoctorsAppointmentPage navigateTo={navigateTo} />;
      case 'about-us':
        return <AboutUsPage />;
      case 'home':
      default:
        return <HomePage navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="bg-earthy-light min-h-screen flex flex-col font-sans text-earthy-brown">
      <Header navigateTo={navigateTo} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer navigateTo={navigateTo} />
    </div>
  );
};

export default App;