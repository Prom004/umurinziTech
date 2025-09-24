import React, { useState } from 'react';
import SideBar from '../components/SideBar'
import InfoPanel from '../components/InfoPanel';
import PopMessage from '../components/PopMessage';
// import { } from 'heroicons'

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    imei: '',
    deviceType: '',
    brand: '',
    model: '',
    yearPurchase: '',
    datePurchase: '',
    placePurchase: '',
    price: '',
    declaration: false
  });

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploadedId, setUploadedId] = useState(null);
  const [popupMessage, setPopupMessage] = useState({ isOpen: false, message: '', type: 'success' });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFiles(prev => [...prev, file]);
    }
  };

  const handleIdUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedId(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // validation for the required fields
    const requiredFields = ['imei', 'deviceType', 'brand', 'model', 'yearPurchase', 'datePurchase', 'placePurchase', 'price'];
    const emptyFields = requiredFields.filter(field => !formData[field]);
    
    if (emptyFields.length > 0 || !formData.declaration) {
      setPopupMessage({ 
        isOpen: true, 
        message: 'Please fill in all required fields and accept the declaration.', 
        type: 'error' 
      });
      return;
    }
    // use a popup message for this
    setPopupMessage({ 
      isOpen: true, 
      message: 'Device registered successfully! You will receive a confirmation email shortly.', 
      type: 'success' 
    });
  };

  const closePopup = () => {
    setPopupMessage({ isOpen: false, message: '', type: 'success' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100">
      <SideBar  />
      
      <div className="md:ml-72 p-4 sm:p-6">
        {/* Header */}
        <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8 shadow-xl">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 flex items-center">
            <span className="mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path d="M8 16.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z" />
                <path fillRule="evenodd" d="M4 4a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4Zm4-1.5v.75c0 .414.336.75.75.75h2.5a.75.75 0 0 0 .75-.75V2.5h1A1.5 1.5 0 0 1 14.5 4v12a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 16V4A1.5 1.5 0 0 1 7 2.5h1Z" clipRule="evenodd" />
              </svg>
            </span>
            Register Your Device
          </h1>
          <p className="text-gray-500 leading-relaxed">
            Add your electronic device to the national registry. This helps prevent theft, 
            aids investigations, and proves ownership.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 xl:gap-8">
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

                {/* File Upload */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6 pb-2 border-b-2 border-gray-200">
                    Proof of Ownership
                  </h3>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Upload Receipt / Invoice / Box Label
                    </label>
                                         <div 
                       className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 cursor-pointer ${
                         uploadedFiles.length > 0 
                           ? 'border-green-300 bg-green-50' 
                           : 'border-gray-300 bg-gray-50 hover:border-indigo-400 hover:bg-indigo-50'
                       }`}
                       onClick={() => document.getElementById('receiptFileInput').click()}
                     >
                       {uploadedFiles.length > 0 ? (
                         <>
                           <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl">
                             ✓
                           </div>
                           <div className="space-y-2">
                             {uploadedFiles.map((file, index) => (
                               <div key={index} className="bg-white rounded-lg p-2">
                                 <p className="font-semibold text-green-700 text-sm">{file.name}</p>
                               </div>
                             ))}
                           </div>
                           <p className="text-green-600 text-sm mt-2">{uploadedFiles.length} file(s) uploaded</p>
                         </>
                       ) : (
                         <>
                           <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl">
                             📎
                           </div>
                           <p className="font-semibold text-gray-700">Click to upload or drag and drop</p>
                           <p className="text-gray-500 text-sm mt-1">PDF, JPG, PNG - Max 5MB</p>
                         </>
                       )}
                     </div>
                     <input
                       id="receiptFileInput"
                       type="file"
                       onChange={handleFileUpload}
                       accept=".pdf,.jpg,.jpeg,.png"
                       className="hidden"
                     />
                  </div>
                  <br />
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Upload Your National Id
                    </label>
                                         <div 
                       className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 cursor-pointer ${
                         uploadedId 
                           ? 'border-green-300 bg-green-50' 
                           : 'border-gray-300 bg-gray-50 hover:border-indigo-400 hover:bg-indigo-50'
                       }`}
                       onClick={() => document.getElementById('idFileInput').click()}
                     >
                       {uploadedId ? (
                         <>
                           <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl">
                             ✓
                           </div>
                           <p className="font-semibold text-green-700">{uploadedId.name}</p>
                           <p className="text-green-600 text-sm mt-1">File uploaded successfully</p>
                         </>
                       ) : (
                         <>
                           <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl">
                             📎
                           </div>
                           <p className="font-semibold text-gray-700">Click to upload or drag and drop</p>
                           <p className="text-gray-500 text-sm mt-1">PDF, JPG, PNG - Max 5MB</p>
                         </>
                       )}
                     </div>
                     <input
                       id="idFileInput"
                       type="file"
                       onChange={handleIdUpload}
                       accept=".pdf,.jpg,.jpeg,.png"
                       className="hidden"
                     />
                  </div>
                </div>

                {/* Declaration */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6 pb-2 border-b-2 border-gray-200">
                    Declaration
                  </h3>
                  <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="declaration"
                        name="declaration"
                        checked={formData.declaration}
                        onChange={handleInputChange}
                        className="mt-1 h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
                        required
                      />
                      <label htmlFor="declaration" className="text-sm text-gray-700 leading-relaxed">
                        I declare that the above information is accurate and complete. I am the rightful 
                        owner of this device and understand that providing false information is a criminal 
                        offense under Rwandan law.
                      </label>
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4 pt-4 sm:pt-6">
                  <button
                    type="button"
                    className="px-6 py-3 text-gray-600 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors duration-200 font-medium w-full sm:w-auto"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl hover:from-indigo-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 font-medium shadow-lg hover:shadow-xl w-full sm:w-auto"
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
      
      {/* Popup Message */}
      <PopMessage 
        isOpen={popupMessage.isOpen}
        message={popupMessage.message}
        type={popupMessage.type}
        onClose={closePopup}
      />
    </div>
  );
};

export default RegisterPage;