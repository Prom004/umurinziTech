import React, { useState } from 'react';
import Sidebar from '../components/SideBar';
import { BadgeCheck, MonitorSmartphone } from 'lucide-react'
import InfoPanel from '../components/InfoPanel';

export default function VerifyDevice() {

  const [formData, setFormData] = useState({
    imei: '',
    deviceType: '',
    brand: '',
    model: '',
    yearPurchase: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
  <div className="flex min-h-screen bg-gray-50">
      <Sidebar activeItem="verify" />
      <div className="flex-1 ml-0 md:ml-72">
      <div className="p-4 sm:p-6">
        <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8 shadow-xl">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 flex items-center">
            <span className="mr-3"> <BadgeCheck className='w-7 h-7 sm:w-8 sm:h-8'/>
            </span>
            Verify Device
          </h1>
          <p className="text-gray-500 leading-relaxed">
            Verify the authenticity of your device by entering the device's IMEI number.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 p-4 sm:p-6 xl:grid-cols-3 gap-6 xl:gap-8">
          {/* Form Section */}
          <div className="xl:col-span-2">
            <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-6 sm:p-8 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                
                {/* Device Information */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6 pb-2 border-b-2 border-gray-200">
                    Device Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        IMEI / Serial Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="imei"
                        value={formData.imei}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-200"
                        placeholder="123456789012456"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Device Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="deviceType"
                        value={formData.deviceType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-200"
                        required
                      >
                        <option value="">Select Device Type</option>
                        <option value="smartphone">Smartphone</option>
                        <option value="tablet">Tablet</option>
                        <option value="laptop">Laptop</option>
                        <option value="desktop">Desktop</option>
                        <option value="smartwatch">Smartwatch</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Brand <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="brand"
                        value={formData.brand}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-200"
                        placeholder="Apple, Samsung, HP, Dell..."
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Model <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="model"
                        value={formData.model}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-200"
                        placeholder="Galaxy S24, MacBook Pro, etc."
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Purchase Details */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6 pb-2 border-b-2 border-gray-200">
                    Purchase Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Year of Purchase <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="yearPurchase"
                        value={formData.yearPurchase}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-200"
                        required
                      >
                        <option value="">Select Year</option>
                        <option value="2025">2025</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date of Purchase <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        name="datePurchase"
                        value={formData.datePurchase}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-200"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Place of Purchase <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="placePurchase"
                        value={formData.placePurchase}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-200"
                        placeholder="Shop name or Online store"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Price (RWF) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-200"
                        placeholder="0"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4 pt-4 sm:pt-6">
                  <button
                    type="button"
                    className="px-6 py-3 text-gray-700 bg-surface-muted rounded-xl hover:bg-gray-200 transition-colors duration-200 font-medium w-full sm:w-auto"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-8 py-3 btn-primary text-white rounded-xl transform hover:scale-105 transition-all duration-200 font-medium shadow-lg hover:shadow-xl w-full sm:w-auto"
                  >
                    Submit Registration
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Info Panel */}
          <div className="xl:col-span-1 order-first xl:order-none">
            <InfoPanel />
          </div>
      </div>
    </div>
    </div>
  );
}
