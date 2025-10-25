import React, { useState } from 'react';
import type { Page } from '../types';
import { logoBase64 } from '../assets/logo';

interface HeaderProps {
  navigateTo: (page: Page) => void;
}

const NavLink: React.FC<{ page: Page; label: string; navigateTo: (page: Page) => void; onClick?: () => void; }> = ({ page, label, navigateTo, onClick }) => (
    <button
        onClick={() => {
            navigateTo(page);
            if (onClick) onClick();
        }}
        className="text-gray-700 hover:text-brand-green px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
    >
        {label}
    </button>
);

const Header: React.FC<HeaderProps> = ({ navigateTo }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <button onClick={() => navigateTo('home')} className="flex items-center space-x-2">
                            {/* Try the user's PNG first; if it 404s, fall back to the embedded SVG placeholder */}
                            <img
                                className="h-16 w-auto"
                                src={logoBase64}
                                alt="GramCare NCR Logo"
                                onError={(e) => {
                                    const el = e.currentTarget as HTMLImageElement;
                                    if (!el.dataset.fallback) {
                                        el.dataset.fallback = '1';
                                        el.src = '/images/logo.svg';
                                    }
                                }}
                            />
                            <span className="font-bold text-xl text-gray-800 hidden sm:block">GramCare NCR</span>
                        </button>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <NavLink page="home" label="Home" navigateTo={navigateTo} />
                            <NavLink page="medicine" label="Medicine" navigateTo={navigateTo} />
                            <NavLink page="blood-checkup" label="Blood Checkup" navigateTo={navigateTo} />
                            <NavLink page="doctors-appointment" label="Doctor's Appointment" navigateTo={navigateTo} />
                            <NavLink page="about-us" label="About Us" navigateTo={navigateTo} />
                             <a href="#contact" className="bg-brand-green text-white hover:bg-brand-green-dark px-4 py-2 rounded-full text-base font-medium transition-colors duration-300">
                                Contact Us
                            </a>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            type="button"
                            className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-brand-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
                    <NavLink page="home" label="Home" navigateTo={navigateTo} onClick={() => setIsMenuOpen(false)} />
                    <NavLink page="medicine" label="Medicine" navigateTo={navigateTo} onClick={() => setIsMenuOpen(false)} />
                    <NavLink page="blood-checkup" label="Blood Checkup" navigateTo={navigateTo} onClick={() => setIsMenuOpen(false)} />
                    <NavLink page="doctors-appointment" label="Doctor's Appointment" navigateTo={navigateTo} onClick={() => setIsMenuOpen(false)} />
                    <NavLink page="about-us" label="About Us" navigateTo={navigateTo} onClick={() => setIsMenuOpen(false)} />
                    <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block bg-brand-green text-white hover:bg-brand-green-dark px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
                        Contact Us
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;