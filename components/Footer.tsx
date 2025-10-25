
import React, { useState } from 'react';
import type { Page } from '../types';
import { WhatsAppIcon, EmailIcon, UserIcon, MessageIcon, PhoneIcon } from './Icons';
import { saveContactMessage, exportAllData } from '../db/actions';

interface FooterProps {
    navigateTo: (page: Page) => void;
}

const ContactForm: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name') as string;
        const contactInfo = formData.get('contact-info') as string;
        const message = formData.get('message') as string;

        saveContactMessage({ name, contactInfo, message });
        
        e.currentTarget.reset();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };
    
    if (submitted) {
        return <p className="text-center text-brand-green">Contact message sent! Thank you, we'll be in touch soon.</p>;
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <UserIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input type="text" name="name" id="name" required className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-brand-green focus:border-brand-green sm:text-sm" placeholder="Your Name" />
                </div>
            </div>
             <div>
                <label htmlFor="contact-info" className="sr-only">Contact Info</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <PhoneIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input type="text" name="contact-info" id="contact-info" required className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-brand-green focus:border-brand-green sm:text-sm" placeholder="Email or Phone" />
                </div>
            </div>
            <div>
                <label htmlFor="message" className="sr-only">Message</label>
                 <div className="relative">
                     <div className="absolute top-3 left-0 pl-3 flex items-start pointer-events-none">
                        <MessageIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <textarea id="message" name="message" rows={4} required className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-brand-green focus:border-brand-green sm:text-sm" placeholder="Your Message"></textarea>
                 </div>
            </div>
            <div className="flex justify-end">
                <button type="submit" className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-brand-green hover:bg-brand-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-green">
                    Send Message
                </button>
            </div>
        </form>
    );
}

const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
    return (
        <footer id="contact" className="bg-gray-800 text-white">
            <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                        <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
                        <p className="text-gray-400">We'd love to hear from you. Reach out to us for partnerships, volunteering, or any inquiries.</p>
                        <div className="mt-4 space-y-2">
                             <a href="https://wa.me/919310987602" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-white">
                                <WhatsAppIcon className="h-5 w-5 mr-2 text-green-400"/>
                                9310987602
                            </a>
                             <a href="https://wa.me/918260202943" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-white">
                                <WhatsAppIcon className="h-5 w-5 mr-2 text-green-400"/>
                                8260202943
                            </a>
                            <a href="mailto:gramcare@gmail.com" className="flex items-center text-gray-300 hover:text-white">
                                <EmailIcon className="h-5 w-5 mr-2 text-gray-400"/>
                                gramcare@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className="md:col-span-2">
                         <h3 className="text-xl font-bold text-white mb-4">Get in Touch</h3>
                         <ContactForm />
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
                    <p>© 2025 GramCare NCR | Empowering Villages, Building the Future.</p>
                    <p className="mt-1">WhatsApp: 9310987602 / 82602029433 | Email: gramcare@gmail.com</p>
                     {/* Admin/Demo Section */}
                    <div className="mt-8">
                        <p className="text-xs text-gray-500 mb-2">For demonstration purposes:</p>
                        <button 
                            onClick={exportAllData}
                            className="inline-flex items-center px-4 py-2 border border-gray-600 text-sm font-medium rounded-md text-gray-300 bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-brand-green"
                        >
                            Download All Data Records (CSV)
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;