import React, { useState } from 'react';
import Sidebar from '../components/SideBar';
import { Smartphone, User, FileText, Upload, AlertTriangle, CheckCircle, ArrowLeftRight, Search, X } from 'lucide-react';

export default function TransferOwnership() {
  const [selectedDevice, setSelectedDevice] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [recipientPhone, setRecipientPhone] = useState('+250 787 890 1234');
  const [transferReason, setTransferReason] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isConfirmed, setIsConfirmed] = useState(false);

  // Sample devices data
  const devices = [
    { id: 1, name: 'iPhone 13 Pro', imei: '123456789012345' },
    { id: 2, name: 'Samsung Galaxy S21', imei: '234567890123456' },
    { id: 3, name: 'Apple Watch Series 8', imei: '345678901234567' }
  ];

  const transferReasons = [
    'Gift to family member',
    'Sale to another person',
    'Business transfer',
    'Lost and found return',
    'Other'
  ];

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar activeItem="transfer" />
      <div className="flex-1 ml-0 md:ml-72 p-4 sm:p-6 md:p-8">
        {/* Header Section */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <div className="flex items-center mb-3 sm:mb-4">
            <ArrowLeftRight className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary mr-2 sm:mr-3" />
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Transfer Device Ownership</h1>
          </div>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg">
            Securely transfer ownership of your registered device to another verified Rinda user. 
            Once transferred, you will no longer be responsible for the device.
          </p>
        </div>

        {/* Main Form */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">Device Ownership Transfer</h2>
            <p className="text-gray-600">Transfer your device safely and securely</p>
          </div>

          {/* Information Banner */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">i</span>
                </div>
              </div>
              <div className="ml-3">
                <p className="text-blue-800 text-sm">
                  Only active devices registered under your account can be transferred. 
                  The recipient must have a verified Rinda account.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {/* Device Selection */}
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-3">
                <Smartphone className="w-5 h-5 mr-2 text-gray-500" />
                Select Device *
              </label>
              <select
                value={selectedDevice}
                onChange={(e) => setSelectedDevice(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
              >
                <option value="">Choose the device to transfer</option>
                {devices.map((device) => (
                  <option key={device.id} value={device.id}>
                    {device.name} - {device.imei}
                  </option>
                ))}
              </select>
            </div>

            {/* Recipient Information */}
            <div>
              <h3 className="flex items-center text-lg font-semibold text-gray-900 mb-6">
                <User className="w-5 h-5 mr-2 text-gray-500" />
                Recipient Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Recipient Email Address *
                  </label>
                  <input
                    type="email"
                    value={recipientEmail}
                    onChange={(e) => setRecipientEmail(e.target.value)}
                    placeholder="Enter Recipient's Email Address..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Recipient Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    value={recipientPhone}
                    onChange={(e) => setRecipientPhone(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  />
                </div>
              </div>
              
              <div className="mt-3 sm:mt-4">
                <button className="btn-primary text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center w-full sm:w-auto justify-center">
                  <Search className="w-4 h-4 mr-2" />
                  Verify Recipient
                </button>
              </div>
            </div>

            {/* Transfer Details */}
            <div>
              <h3 className="flex items-center text-lg font-semibold text-gray-900 mb-6">
                <FileText className="w-5 h-5 mr-2 text-gray-500" />
                Transfer Details
              </h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Reason for Transfer Details (Optional)
                </label>
                <select
                  value={transferReason}
                  onChange={(e) => setTransferReason(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                >
                  <option value="">Select Reason</option>
                  {transferReasons.map((reason) => (
                    <option key={reason} value={reason}>
                      {reason}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* File Upload */}
            <div>
              <h3 className="flex items-center text-lg font-semibold text-gray-900 mb-6">
                <Upload className="w-5 h-5 mr-2 text-gray-500" />
                Upload Transfer Agreement or Proof of Sale (Optional)
              </h3>
              
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 sm:p-8 text-center hover:border-primary transition-colors">
                {uploadedFile ? (
                  <div className="flex items-center justify-center space-x-4">
                    <FileText className="w-8 h-8 text-green-500" />
                    <div className="text-left">
                      <p className="text-sm font-medium text-gray-900">{uploadedFile.name}</p>
                      <p className="text-xs text-gray-500">{(uploadedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                    </div>
                    <button
                      onClick={removeFile}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                ) : (
                  <div>
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-lg font-medium text-gray-900 mb-2">Upload Police Report</p>
                    <p className="text-sm text-gray-500 mb-4">PDF, JPG, PNG (Max 5MB)</p>
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="file-upload"
                    />
                    <label
                      htmlFor="file-upload"
                      className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-medium transition-colors cursor-pointer inline-block"
                    >
                      Choose File
                    </label>
                  </div>
                )}
              </div>
            </div>

            {/* Warning Section */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-lg font-semibold text-red-800 mb-3">Important: Transfer Consequences</h4>
                  <ul className="space-y-2 text-red-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Permanent loss of access to the device in the dashboard.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      All device history and data transferred to the new owner.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      No longer receiving notifications related to the device.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Action cannot be undone once the recipient accepts the transfer.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Confirmation Checkbox */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 sm:p-6">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="confirmation"
                  checked={isConfirmed}
                  onChange={(e) => setIsConfirmed(e.target.checked)}
                  className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary mt-1"
                />
                <label htmlFor="confirmation" className="ml-3 text-yellow-800">
                  I understand that after transferring, I will no longer have any legal rights or access to this device through UmurinziTech. 
                  I confirm this transfer is legitimate and authorized. *
                </label>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-gray-200">
              <button className="px-6 py-3 border border-surface text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors w-full sm:w-auto bg-surface">
                Cancel & Return
              </button>
              <button 
                className="btn-primary text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
                disabled={!selectedDevice || !recipientEmail || !isConfirmed}
              >
                <ArrowLeftRight className="w-4 h-4 mr-2" />
                Initiate Transfer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
