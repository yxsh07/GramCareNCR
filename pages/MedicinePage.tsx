
import React, { useState } from 'react';
import type { Page } from '../types';
import { images } from '../assets/images';
import { saveMedicineOrder } from '../db/actions';

interface MedicinePageProps {
  navigateTo: (page: Page) => void;
}

// Define medicine data type
interface Medicine {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

// Static medicine data now uses local images
const medicines: Medicine[] = [
  { id: 1, name: 'Paracetamol 500mg', description: 'Pain relief tablets', price: 50, imageUrl: images.paracetamol },
  { id: 2, name: 'Amoxicillin Capsules', description: 'Antibiotic capsules', price: 120, imageUrl: images.amoxicillin },
  { id: 3, name: 'Cough Syrup 100ml', description: 'For dry and wet cough', price: 90, imageUrl: images.coughSyrup },
  { id: 4, name: 'Vitamin C Tablets', description: 'Immunity booster tablets', price: 80, imageUrl: images.vitaminC },
  { id: 5, name: 'Antacid Gel', description: 'Relief from acidity and gas', price: 75, imageUrl: images.antacid },
  { id: 6, name: 'Pain Relief Spray', description: 'For joint and muscle pain', price: 150, imageUrl: images.painReliefSpray },
  { id: 7, name: 'Multivitamin Tablets', description: 'Daily health supplement', price: 200, imageUrl: images.multivitamin },
  { id: 8, name: 'Glucose-D Powder', description: 'Instant energy powder', price: 60, imageUrl: images.glucose },
];


const OrderModal: React.FC<{
  medicine: Medicine | null;
  onClose: () => void;
  onConfirm: (orderDetails: any) => void;
}> = ({ medicine, onClose, onConfirm }) => {
  if (!medicine) return null;

  const [formData, setFormData] = useState({
      name: '',
      address: '',
      contact: '',
      quantity: 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      const parsedValue = name === 'quantity' ? parseInt(value, 10) : value;
      setFormData(prev => ({ ...prev, [name]: parsedValue }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onConfirm({ ...formData, medicineName: medicine.name });
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4 transition-opacity duration-300">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md transform transition-all duration-300 scale-95 opacity-0 animate-fade-in-up">
        <style>{`
            @keyframes fade-in-up {
                from { opacity: 0; transform: translateY(20px) scale(0.95); }
                to { opacity: 1; transform: translateY(0) scale(1); }
            }
            .animate-fade-in-up { animation: fade-in-up 0.3s forwards ease-out; }
        `}</style>
        <div className="p-6 border-b">
          <h3 className="text-xl font-semibold text-gray-900">Confirm Your Order</h3>
          <p className="text-sm text-gray-500">{medicine.name}</p>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" name="name" id="name" required onChange={handleChange} value={formData.name} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green sm:text-sm" />
          </div>
          <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Delivery Address</label>
              <textarea name="address" id="address" rows={3} required onChange={handleChange} value={formData.address} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green sm:text-sm"></textarea>
          </div>
          <div>
              <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact Number</label>
              <input type="tel" name="contact" id="contact" required onChange={handleChange} value={formData.contact} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green sm:text-sm" />
          </div>
          <div>
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity</label>
              <input type="number" name="quantity" id="quantity" min="1" required onChange={handleChange} value={formData.quantity} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green sm:text-sm" />
          </div>
          <div className="flex items-center justify-end space-x-3 pt-4">
              <button type="button" onClick={onClose} className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none">
                  Cancel
              </button>
              <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-brand-green rounded-md hover:bg-brand-green-dark focus:outline-none">
                  Confirm Order
              </button>
          </div>
        </form>
      </div>
    </div>
  );
};


const ConfirmationMessage: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4 transition-opacity duration-300">
             <div className="bg-white rounded-lg shadow-xl w-full max-w-sm text-center p-8 transform transition-all duration-300 scale-95 opacity-0 animate-fade-in-up">
                <style>{`
                    @keyframes fade-in-up {
                        from { opacity: 0; transform: translateY(20px) scale(0.95); }
                        to { opacity: 1; transform: translateY(0) scale(1); }
                    }
                    .animate-fade-in-up { animation: fade-in-up 0.3s forwards ease-out; }
                `}</style>
                 <svg className="mx-auto h-12 w-12 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">Medicine Order Placed!</h3>
                <p className="mt-2 text-gray-600">
                    Thank you! Your medicine order has been placed successfully.
                </p>
                <p className="mt-1 text-sm text-gray-500">
                    Payment Method: <span className="font-semibold">Cash on Delivery</span>
                </p>
                <button
                    onClick={onClose}
                    className="mt-6 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-brand-green hover:bg-brand-green-dark focus:outline-none"
                >
                    OK
                </button>
            </div>
        </div>
    );
};


const MedicinePage: React.FC<MedicinePageProps> = ({ navigateTo }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMedicine, setSelectedMedicine] = useState<Medicine | null>(null);
    const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);

    const handleBuyNow = (medicine: Medicine) => {
        setSelectedMedicine(medicine);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedMedicine(null);
    };

    const handleConfirmOrder = (orderDetails: any) => {
        saveMedicineOrder(orderDetails);
        setIsModalOpen(false);
        setSelectedMedicine(null);
        setIsConfirmationVisible(true);
    };

    const handleCloseConfirmation = () => {
        setIsConfirmationVisible(false);
    };

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm font-medium text-gray-500 mb-4">
          <button onClick={() => navigateTo('home')} className="hover:text-brand-green">Home</button>
          <span className="mx-2">/</span>
          <span>Medicine</span>
        </nav>
        
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900">Medicine Store</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Welcome to GramCare Medicine Store. Order your daily health essentials easily — delivered to your doorstep with Cash on Delivery.
          </p>
        </div>

        {/* CoD Note */}
        <div className="bg-brand-green-light text-brand-green-dark p-4 rounded-lg text-center mb-10">
            <p className="font-semibold">Note: All payments are Cash on Delivery only.</p>
        </div>

        {/* Medicine Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {medicines.map(medicine => (
                <div key={medicine.id} className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden flex flex-col transform hover:-translate-y-1.5 transition-transform duration-300">
                    <img src={medicine.imageUrl} alt={medicine.name} className="h-48 w-full object-cover"/>
                    <div className="p-4 flex-grow flex flex-col">
                        <h3 className="text-lg font-bold text-gray-900">{medicine.name}</h3>
                        <p className="text-sm text-gray-500 mt-1 flex-grow">{medicine.description}</p>
                        <p className="text-xl font-semibold text-gray-800 mt-3">₹{medicine.price}</p>
                    </div>
                    <div className="p-4 bg-gray-50 border-t">
                        <button onClick={() => handleBuyNow(medicine)} className="w-full bg-brand-green text-white py-2 px-4 rounded-md hover:bg-brand-green-dark transition-colors duration-300 font-semibold">
                            Buy Now
                        </button>
                    </div>
                </div>
            ))}
        </div>
      </div>
      
      {isModalOpen && <OrderModal medicine={selectedMedicine} onClose={handleCloseModal} onConfirm={handleConfirmOrder} />}
      {isConfirmationVisible && <ConfirmationMessage onClose={handleCloseConfirmation} />}

    </div>
  );
};

export default MedicinePage;