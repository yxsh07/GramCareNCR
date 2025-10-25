
import React from 'react';
import { EmailIcon, WhatsAppIcon } from '../components/Icons';
import { images } from '../assets/images';

const AboutUsPage: React.FC = () => {
    return (
        <div className="bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">About GramCare NCR</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                        A student-led community initiative focused on building healthier, smarter, and self-reliant villages.
                    </p>
                </div>

                <div className="mt-20 prose prose-lg text-gray-600 mx-auto">
                    <p>
                        GramCare NCR is a student-led community initiative focused on building healthier, smarter, and self-reliant villages across the NCR region. Our passionate team works to bring innovation, sustainability, and care together — because we believe that the true growth of a nation begins when every villager thrives.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 my-12">
                         <img src={images.aboutImage1} alt="Community Project" className="rounded-lg shadow-lg w-full h-64 object-cover" />
                         <img src={images.aboutImage2} alt="Health Camp" className="rounded-lg shadow-lg w-full h-64 object-cover" />
                    </div>

                    <h2>Our Mission</h2>
                    <p>
                        To bridge the urban-rural divide by providing accessible healthcare, promoting digital literacy, and implementing sustainable development projects. We strive to empower community members with the tools and knowledge they need to lead healthier, more prosperous lives.
                    </p>

                    <h2>Our Vision</h2>
                    <p>
                        We envision a future where every village in the NCR is a 'smart village'—a self-sufficient, digitally connected, and healthy community where residents have equal access to opportunities and essential services, ensuring a high quality of life for all.
                    </p>
                    
                    <h2>Contact Information</h2>
                    <p>
                        Get in touch with us to learn more about our work, volunteer, or partner with us.
                    </p>
                    <div className="not-prose mt-4 space-y-3">
                         <a href="https://wa.me/919310987602" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-brand-green">
                            <WhatsAppIcon className="h-6 w-6 mr-3 text-green-500"/>
                            <span className="font-semibold">WhatsApp:</span><span className="ml-2">9310987602</span>
                        </a>
                         <a href="https://wa.me/918260202943" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-brand-green">
                            <WhatsAppIcon className="h-6 w-6 mr-3 text-green-500"/>
                            <span className="font-semibold">WhatsApp:</span><span className="ml-2">82602029433</span>
                        </a>
                        <a href="mailto:gramcare@gmail.com" className="flex items-center text-gray-700 hover:text-brand-green">
                            <EmailIcon className="h-6 w-6 mr-3 text-gray-500"/>
                            <span className="font-semibold">Email:</span><span className="ml-2">gramcare@gmail.com</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;
