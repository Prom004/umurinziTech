import React, { useState } from "react";
import Sidebar from "../components/SideBar";
import { Clipboard, ChevronDown, History } from "lucide-react";

export default function DeviceHistory() {
  const [selectedDevice, setSelectedDevice] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Sample device options
  const devices = [
    { id: 1, name: 'iPhone 15 Pro', imei: '123456789012345' },
    { id: 2, name: 'MacBook Pro M3', imei: 'MBP2024001234' },
    { id: 3, name: 'Samsung Galaxy A54', imei: '987654321098765' },
    { id: 4, name: 'Apple Watch Series 9', imei: 'AW9456789012345' }
  ];

  const handleDeviceSelect = (device) => {
    setSelectedDevice(`${device.name} (${device.imei})`);
    setIsDropdownOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar activeItem="history" />
      
      <div className="md:ml-72 p-3 sm:p-4 lg:p-8">
        {/* Header Section */}
        <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 shadow-xl">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 flex items-center">
            <History className='w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 mr-2 sm:mr-3'/>
            Device History
          </h1>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Track the full history of your registered devices, including
            transfers, theft reports, and system updates. This log helps you
            verify authenticity and maintain proper records.
          </p>
        </div>

        {/* Device Selection */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6 shadow-sm">
          <label className="block text-sm sm:text-base font-semibold text-gray-900 mb-2">
            Select Device
          </label>
          
          {/* Custom Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex items-center justify-between p-3 sm:p-4 text-sm sm:text-base border border-gray-300 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all duration-200 bg-white hover:bg-gray-50"
            >
              <span className={`truncate ${selectedDevice ? 'text-gray-900' : 'text-gray-500'}`}>
                {selectedDevice || 'Select a device...'}
              </span>
              <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-400 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Options */}
            {isDropdownOpen && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-xl shadow-lg max-h-60 overflow-y-auto">
                {devices.map((device) => (
                  <button
                    key={device.id}
                    onClick={() => handleDeviceSelect(device)}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-left text-sm sm:text-base hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                  >
                    <div className="font-medium text-gray-900">{device.name}</div>
                    <div className="text-xs sm:text-sm text-gray-500 mt-0.5 break-all">{device.imei}</div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Empty State */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="flex flex-col justify-center items-center p-8 sm:p-12 lg:p-20 text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4 sm:mb-6">
              <Clipboard className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-gray-400" />
            </div>
            
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">
              Select a Device to View History
            </h2>
            
            <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto leading-relaxed">
              Choose a device from the dropdown above to see its complete activity
              timeline including registrations, transfers, and reports.
            </p>

            {/* Optional: Quick access buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-2 sm:gap-3 w-full max-w-sm">
              <button className="flex-1 px-4 py-2.5 text-sm sm:text-base bg-surface-muted hover:bg-gray-200 text-gray-700 rounded-xl transition-colors font-medium">
                View All Devices
              </button>
              <button className="flex-1 px-4 py-2.5 text-sm sm:text-base btn-primary text-white rounded-xl transition-colors font-medium">
                Register Device
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}