
import React, { useState } from 'react';
import type { Page } from '../types';
import { saveDoctorsAppointment } from '../db/actions';

interface DoctorsAppointmentPageProps {
  navigateTo: (page: Page) => void;
}

const DoctorsAppointmentPage: React.FC<DoctorsAppointmentPageProps> = ({ navigateTo }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
      name: '',
      address: '',
      issue: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    saveDoctorsAppointment(formData);
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
              <h2 className="mt-4 text-2xl font-bold text-gray-900">Doctor's Appointment Booked!</h2>
              <p className="mt-2 text-lg text-gray-600">
                Thank you! Your doctor's appointment has been booked successfully. You will be notified shortly to confirm.
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
                    <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Book a Doctor's Appointment</h1>
                    <p className="mt-2 text-md text-gray-600">Fill out the form below to schedule your consultation.</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input type="text" name="name" id="name" required onChange={handleChange} value={formData.name} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green sm:text-sm" />
                    </div>
                    <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                        <textarea name="address" id="address" rows={3} required onChange={handleChange} value={formData.address} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green sm:text-sm"></textarea>
                    </div>
                    <div>
                        <label htmlFor="issue" className="block text-sm font-medium text-gray-700">Health Issue / Reason for Appointment</label>
                        <textarea name="issue" id="issue" rows={3} required onChange={handleChange} value={formData.issue} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green sm:text-sm"></textarea>
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

export default DoctorsAppointmentPage;