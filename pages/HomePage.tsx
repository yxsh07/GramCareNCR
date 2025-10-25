import React from 'react';
import type { Page } from '../types';
import { CareIcon, InnovationIcon, SustainabilityIcon, MedicineIcon, BloodCheckupIcon, AboutUsIcon, DoctorIcon } from '../components/Icons';
import { images } from '../assets/images';

interface HomePageProps {
  navigateTo: (page: Page) => void;
}

const Hero: React.FC = () => {
    return (
        <div className="relative bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                        <polygon points="50,0 100,0 50,100 0,100" />
                    </svg>

                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                <span className="block xl:inline">Empowering Villages,</span>{' '}
                                <span className="block text-brand-green xl:inline">Transforming Lives</span>
                            </h1>
                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                At GramCare NCR, we are dedicated to empowering rural and urban communities through care, innovation, and sustainable development.
                            </p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div className="rounded-md shadow">
                                    <a href="#contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-green hover:bg-brand-green-dark md:py-4 md:text-lg md:px-10">
                                        Join Our Mission
                                    </a>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                {/* Try user-provided JPG first; if missing fall back to SVG placeholder */}
                <img
                    className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                    src={images.heroImage}
                    alt="Rural community"
                    onError={(e) => {
                        const el = e.currentTarget as HTMLImageElement;
                        if (!el.dataset.fallback) {
                            el.dataset.fallback = '1';
                            el.src = '/images/hero.svg';
                        }
                    }}
                />
            </div>
        </div>
    );
};

const Mission: React.FC = () => {
    const missions = [
        {
            icon: <CareIcon className="h-12 w-12 text-brand-green" />,
            title: 'Care',
            description: 'Providing essential health, hygiene, and wellness support to every individual.'
        },
        {
            icon: <InnovationIcon className="h-12 w-12 text-brand-green" />,
            title: 'Innovation',
            description: 'Implementing digital tools and modern solutions to solve rural challenges effectively.'
        },
        {
            icon: <SustainabilityIcon className="h-12 w-12 text-brand-green" />,
            title: 'Sustainability',
            description: 'Fostering eco-friendly and long-term growth initiatives for a self-reliant future.'
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Mission</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                        We aim to bring modern solutions to rural challenges — improving lives while preserving culture and community values.
                    </p>
                </div>
                <div className="mt-12 grid gap-10 md:grid-cols-3">
                    {missions.map((mission) => (
                        <div key={mission.title} className="text-center p-8 border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                           <div className="flex items-center justify-center h-20 w-20 rounded-full bg-brand-green-light mx-auto">
                             {mission.icon}
                           </div>
                            <h3 className="mt-6 text-xl font-bold text-gray-900">{mission.title}</h3>
                            <p className="mt-2 text-base text-gray-500">{mission.description}</p>
                        </div>
                    ))}
                </div>
                 <div className="mt-16 text-center bg-brand-green-light p-8 rounded-lg max-w-5xl mx-auto">
                    <p className="text-xl md:text-2xl font-semibold text-gray-800">
                       GramCare NCR is a community-driven initiative working across the NCR region to uplift rural areas through essential services, education, healthcare, digital inclusion, and sustainable growth. Our mission is to build smart, healthy, and self-reliant villages — because true progress begins when every villager thrives.
                    </p>
                </div>
            </div>
        </section>
    );
};

const Services: React.FC<{ navigateTo: (page: Page) => void; }> = ({ navigateTo }) => {
     const services = [
        {
            icon: <MedicineIcon className="h-10 w-10 text-white" />,
            title: 'Medicine',
            description: 'Access affordable and quality medicine through our e-commerce platform.',
            action: () => navigateTo('medicine'),
            buttonText: 'Browse Medicines'
        },
        {
            icon: <BloodCheckupIcon className="h-10 w-10 text-white" />,
            title: 'Blood Checkup',
            description: 'Schedule a convenient blood checkup appointment with our mobile health units.',
            action: () => navigateTo('blood-checkup'),
            buttonText: 'Book Now'
        },
        {
            icon: <DoctorIcon className="h-10 w-10 text-white" />,
            title: "Doctor's Appointment",
            description: "Book an appointment with a qualified doctor for a consultation.",
            action: () => navigateTo('doctors-appointment'),
            buttonText: 'Book Appointment'
        },
        {
            icon: <AboutUsIcon className="h-10 w-10 text-white" />,
            title: 'About Us',
            description: 'Learn more about our mission, vision, and the team behind GramCare NCR.',
            action: () => navigateTo('about-us'),
            buttonText: 'Learn More'
        }
    ];

    return (
        <section className="py-20 bg-earthy-light">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Services</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                        Dedicated services designed to meet the essential needs of our communities.
                    </p>
                </div>
                <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                   {services.map((service) => (
                       <div key={service.title} className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                           <div className="p-8 flex-grow">
                               <div className="flex items-center">
                                  <div className="flex-shrink-0 bg-brand-green p-3 rounded-full">
                                      {service.icon}
                                  </div>
                                   <h3 className="ml-4 text-2xl font-bold text-gray-900">{service.title}</h3>
                               </div>
                               <p className="mt-4 text-gray-500">{service.description}</p>
                           </div>
                           <div className="p-6 bg-gray-50">
                               <button onClick={service.action} className="w-full bg-brand-green text-white py-2 px-4 rounded-md hover:bg-brand-green-dark transition-colors duration-300 font-semibold">
                                   {service.buttonText}
                               </button>
                           </div>
                       </div>
                   ))}
                </div>
            </div>
        </section>
    );
};

const HomePage: React.FC<HomePageProps> = ({ navigateTo }) => {
  return (
    <>
      <Hero />
      <Mission />
      <Services navigateTo={navigateTo} />
    </>
  );
};

export default HomePage;