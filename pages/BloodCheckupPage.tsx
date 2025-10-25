
import React, { useState } from 'react';
import type { Page } from '../types';
import { saveBloodCheckupAppointment } from '../db/actions';

interface BloodCheckupPageProps {
  navigateTo: (page: Page) => void;
}

const BloodCheckupPage: React.FC<BloodCheckupPageProps> = ({ navigateTo }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
      name: '',
      contact: '',
      address: '',
      dateTime: '',
      notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    saveBloodCheckupAppointment(formData);
    setSubmitted(true);
  };

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="text-center p-12 bg-brand-green-light rounded-lg shadow-md">
              <svg className="mx-auto h-12 w-12 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h2 className="mt-4 text-2xl font-bold text-gray-900">Appointment Booked!</h2>
              <p className="mt-2 text-lg text-gray-600">
                Thank you! Your blood checkup appointment has been booked successfully. We will contact you shortly to confirm.
              </p>
              <button
                onClick={() => navigateTo('home')}
                className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-brand-green hover:bg-brand-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-green"
              >
                Back to Home
              </button>
            </div>
          ) : (
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Book a Blood Checkup</h1>
                    <p className="mt-2 text-md text-gray-600">Fill out the form below to schedule your appointment.</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input type="text" name="name" id="name" required onChange={handleChange} value={formData.name} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green sm:text-sm" />
                    </div>
                    <div>
                        <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact Number</label>
                        <input type="tel" name="contact" id="contact" required onChange={handleChange} value={formData.contact} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green sm:text-sm" />
                    </div>
                    <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                        <textarea name="address" id="address" rows={3} required onChange={handleChange} value={formData.address} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green sm:text-sm"></textarea>
                    </div>
                    <div>
                        <label htmlFor="dateTime" className="block text-sm font-medium text-gray-700">Preferred Date & Time</label>
                        <input type="datetime-local" name="dateTime" id="dateTime" required onChange={handleChange} value={formData.dateTime} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green sm:text-sm" />
                    </div>
                    <div>
                        <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Notes (optional)</label>
                        <textarea name="notes" id="notes" rows={3} onChange={handleChange} value={formData.notes} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green sm:text-sm"></textarea>
                    </div>
                    <div>
                        <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-green hover:bg-brand-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-green">
                            Book Appointment
                        </button>
                    </div>
                </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BloodCheckupPage;
