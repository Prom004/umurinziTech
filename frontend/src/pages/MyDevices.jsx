import React, { useState } from 'react';
import Sidebar from '../components/SideBar';
import { Search, MonitorSmartphone, MoreVertical } from 'lucide-react'
import { Link } from 'react-router-dom';
import RegisterPage from '../pages/RegisterPage';

// Device Row Component
const DeviceRow = ({ device, onAction }) => {
  const [showActions, setShowActions] = useState(false);

  const getStatusBadge = (status) => {
    const statusConfig = {
      Active: { bg: 'bg-green-100', text: 'text-green-800', dot: 'bg-green-500' },
      Transferred: { bg: 'bg-yellow-100', text: 'text-yellow-800', dot: 'bg-yellow-500' },
      Stolen: { bg: 'bg-red-100', text: 'text-red-800', dot: 'bg-red-500' },
      Lost: { bg: 'bg-yellow-100', text: 'text-yellow-800', dot: 'bg-yellow-500' }
    };
    
    const config = statusConfig[status] || statusConfig.Active;
    
    return (
      <span className={`inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${config.bg} ${config.text}`}>
        <span className={`w-2 h-2 ${config.dot} rounded-full mr-1 sm:mr-2`}></span>
        {status}
      </span>
    );
  };

  const getDeviceIcon = (type) => {
    const icons = {
      smartphone: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
        </svg>
      ),
      laptop: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
      smartwatch: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      tablet: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
        </svg>
      )
    };
    return icons[type.toLowerCase()] || icons.smartphone;
  };

  return (
    <>
      {/* Desktop View */}
      <div className="hidden md:flex items-center justify-between py-4 px-6 border-b border-gray-100 hover:bg-gray-50 transition-colors">
        <div className="flex items-center space-x-4 flex-1">
          <div className="flex items-center space-x-3">
            {getDeviceIcon(device.type)}
            <div>
              <h3 className="font-semibold text-gray-900">{device.name}</h3>
              <p className="text-sm text-gray-500">{device.brand} • {device.color} • {device.storage}</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-8 text-sm">
          <div className="text-gray-700 font-medium w-20 text-center">{device.type}</div>
          <div className="text-gray-700 font-medium w-32 text-center">{device.imei}</div>
          <div className="w-24 text-center">
            {getStatusBadge(device.status)}
          </div>
          <div className="text-gray-600 w-28 text-center">{device.dateRegistered}</div>
          <div className="flex space-x-2 w-28 justify-center">
            <select
              value={device.action}
              onChange={(e) => device.action = e.target.value}
              className="px-4 py-3 border border-gray-300 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all duration-200 bg-white"
            >
              <option value='view'>View</option>
              <option value="edit">Edit</option>
              <option value="delete">Delete</option>
              <option value="transfer">Transfer</option>
            </select>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden border-b border-gray-100">
        <div className="p-4 hover:bg-gray-50 transition-colors">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center space-x-3 flex-1 min-w-0">
              {getDeviceIcon(device.type)}
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-gray-900 text-sm truncate">{device.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{device.brand} • {device.color}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 ml-2">
              {getStatusBadge(device.status)}
              <button 
                onClick={() => setShowActions(!showActions)}
                className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <MoreVertical className="w-4 h-4 text-gray-500" />
              </button>
            </div>
          </div>

          {/* Device Details Grid */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div>
              <span className="text-gray-500">Type:</span>
              <span className="ml-1 text-gray-700 font-medium">{device.type}</span>
            </div>
            <div>
              <span className="text-gray-500">Storage:</span>
              <span className="ml-1 text-gray-700 font-medium">{device.storage}</span>
            </div>
            <div className="col-span-2">
              <span className="text-gray-500">IMEI/Serial:</span>
              <span className="ml-1 text-gray-700 font-medium break-all">{device.imei}</span>
            </div>
            <div className="col-span-2">
              <span className="text-gray-500">Registered:</span>
              <span className="ml-1 text-gray-700 font-medium">{device.dateRegistered}</span>
            </div>
          </div>

          {/* Mobile Actions Dropdown */}
          {showActions && (
            <div className="mt-3 pt-3 border-t border-gray-100">
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => onAction('view', device)}
                  className="px-3 py-2 text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
                >
                  View
                </button>
                <button
                  onClick={() => onAction('edit', device)}
                  className="px-3 py-2 text-xs bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => onAction('transfer', device)}
                  className="px-3 py-2 text-xs bg-green-100 hover:bg-green-200 text-green-700 rounded-lg transition-colors"
                >
                  Transfer
                </button>
                <button
                  onClick={() => onAction('delete', device)}
                  className="px-3 py-2 text-xs bg-red-100 hover:bg-red-200 text-red-700 rounded-lg transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

// Main My Devices Component
export default function MyDevices(){
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [sortBy, setSortBy] = useState('Newest First');

  // Sample data
  const devices = [
    {
      id: 1,
      name: 'iPhone 15 Pro',
      brand: 'Apple',
      color: 'Space Black',
      storage: '256GB',
      model: 'iPhone 15 Pro',
      type: 'Smartphone',
      imei: '123456789012345',
      status: 'Active',
      dateRegistered: '2025-08-01'
    },
    {
      id: 2,
      name: 'MacBook Pro M3',
      brand: 'Apple',
      color: 'Silver',
      storage: '14-inch',
      model: 'MacBook Pro M3',
      type: 'Laptop',
      imei: 'MBP2024001234',
      status: 'Active',
      dateRegistered: '2025-07-28'
    },
    {
      id: 3,
      name: 'HP Pavilion 15',
      brand: 'HP',
      color: 'Silver',
      storage: 'Intel i7',
      model: 'HP Pavilion 15',
      type: 'Laptop',
      imei: 'A1B2C3D4E5F6',
      status: 'Transferred',
      dateRegistered: '2025-07-15'
    },
    {
      id: 4,
      name: 'Samsung Galaxy A54',
      brand: 'Samsung',
      color: 'Awesome Blue',
      storage: '128GB',
      model: 'Galaxy A54',
      type: 'Smartphone',
      imei: '987654321098765',
      status: 'Stolen',
      dateRegistered: '2025-06-05'
    },
    {
      id: 5,
      name: 'Apple Watch Series 9',
      brand: 'Apple',
      color: 'Midnight',
      storage: '45mm',
      model: 'Watch Series 9',
      type: 'Smartwatch',
      imei: 'AW9456789012345',
      status: 'Active',
      dateRegistered: '2025-05-20'
    }
  ];

  const filteredDevices = devices.filter(device => {
    const matchesSearch = device.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         device.imei.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All Status' || device.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleAction = (action, device) => {
    alert(`${action} action for ${device.name}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar activeItem="devices" />

      <div className="md:ml-72 p-3 sm:p-4 lg:p-6">
        {/* Header Section */}
        <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 lg:mb-8 shadow-xl">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 flex items-center">
            <MonitorSmartphone className='w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 mr-2 sm:mr-3'/>
            My Devices
          </h1>
          <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
            Manage all your registered devices. View their status, report issues, and transfer ownership securely.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl p-3 sm:p-4 lg:p-6 mb-4 sm:mb-6 shadow-sm">
          <div className="space-y-3 sm:space-y-4">
            {/* Search Bar */}
            <div className="w-full">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search devices..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all duration-200"
                />
                <Search className="w-4 h-4 sm:w-5 sm:h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            
            {/* Filters and Button */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="flex-1 px-3 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all duration-200 bg-white"
              >
                <option>All Status</option>
                <option>Active</option>
                <option>Transferred</option>
                <option>Stolen</option>
                <option>Lost</option>
              </select>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="flex-1 px-3 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all duration-200 bg-white"
              >
                <option>Newest First</option>
                <option>Oldest First</option>
                <option>Name A-Z</option>
                <option>Name Z-A</option>
              </select>
              
              <button className="px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition-colors font-medium shadow-sm whitespace-nowrap">
                <span className="sm:hidden">+ Add Device</span>
                <span className="hidden sm:inline">Register New Device</span>
              </button>
            </div>
          </div>
        </div>

        {/* Device Registry */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 border-b border-gray-200">
            <h2 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">Device Registry</h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 md:hidden">
              {filteredDevices.length} device{filteredDevices.length !== 1 ? 's' : ''}
            </p>
          </div>
          
          {/* Desktop Table Header */}
          <div className="hidden md:block bg-gray-50 px-6 py-3 border-b border-gray-200">
            <div className="flex items-center justify-between text-sm font-semibold text-gray-700">
              <div className="flex items-center space-x-4">
                <span className="w-48">Device</span>
              </div>
              <div className="flex items-center space-x-8">
                <span className="w-20 text-center">Type</span>
                <span className="w-32 text-center">IMEI/Serial No.</span>
                <span className="w-24 text-center">Status</span>
                <span className="w-28 text-center">Date Registered</span>
                <span className="w-28 text-center">Actions</span>
              </div>
            </div>
          </div>

          {/* Device List */}
          <div>
            {filteredDevices.map((device) => (
              <DeviceRow
                key={device.id}
                device={device}
                onAction={handleAction}
              />
            ))}
            
            {filteredDevices.length === 0 && (
              <div className="text-center py-8 sm:py-12 px-4">
                <div className="text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4">📱</div>
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">No devices found</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">No devices match your current search criteria.</p>
                <button className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition-colors font-medium">
                  Register Your First Device
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};