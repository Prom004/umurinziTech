import React, { useState } from 'react';
import Sidebar from '../components/SideBar';
import { Search, MonitorSmartphone } from 'lucide-react'
import { Link } from 'react-router-dom';
// import { RegisterPage } from '../pages/RegisterPage';
import RegisterPage from '../pages/RegisterPage';

// Device Row Component
const DeviceRow = ({ device, onAction }) => {
  const getStatusBadge = (status) => {
    const statusConfig = {
      Active: { bg: 'bg-green-100', text: 'text-green-800', dot: 'bg-green-500' },
      Transferred: { bg: 'bg-yellow-100', text: 'text-yellow-800', dot: 'bg-yellow-500' },
      Stolen: { bg: 'bg-red-100', text: 'text-red-800', dot: 'bg-red-500' },
      Lost: { bg: 'bg-yellow-100', text: 'text-yellow-800', dot: 'bg-yellow-500' }
    };
    
    const config = statusConfig[status] || statusConfig.Active;
    
    return (
      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${config.bg} ${config.text}`}>
        <span className={`w-2 h-2 ${config.dot} rounded-full mr-2`}></span>
        {status}
      </span>
    );
  };

  const getDeviceIcon = (type) => {
    const icons = {
      smartphone: (
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
        </svg>
      ),
      laptop: (
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
      smartwatch: (
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      tablet: (
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
        </svg>
      )
    };
    return icons[type.toLowerCase()] || icons.smartphone;
  };

  return (
    <div className="flex items-center justify-between py-4 px-6 border-b border-gray-100 hover:bg-gray-50 transition-colors">
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

      
      <div className="md:ml-72 p-6">
      <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-8 mb-8 shadow-xl">
          <h1 className="text-3xl font-bold text-gray-900 mb-3 flex items-center">
            <span className="mr-3"> <MonitorSmartphone className='w-8 h8'/>
            </span>
            My Devices
          </h1>
          <p className="text-gray-500 leading-relaxed">
          Manage all your registered devices. View their status, report issues, and transfer ownership securely.
          </p>
        </div>
        {/* Header with Search and Filters */}
        <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
          <div className="flex flex-col gap-2 items-center lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by device name, IMEI, or serial number..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all duration-200"
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <Search className="w-5 h-5" />
                </span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all duration-200 bg-white"
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
                className="px-4 py-3 border border-gray-300 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all duration-200 bg-white"
              >
                <option>Newest First</option>
                <option>Oldest First</option>
                <option>Name A-Z</option>
                <option>Name Z-A</option>
              </select>
              
              <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition-colors font-medium shadow-sm">
                {/* <Link to='/RegisterPage'> */}
                Register New Device
                {/* </Link> */}
              </button>
            </div>
          </div>
        </div>

        {/* Device Registry */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Device Registry</h2>
          </div>
          
          {/* Table Header */}
          <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
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
          <div className="divide-y divide-gray-100">
            {filteredDevices.map((device) => (
              <DeviceRow
                key={device.id}
                device={device}
                onAction={handleAction}
              />
            ))}
            
            {filteredDevices.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📱</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No devices found</h3>
                <p className="text-gray-600 mb-6">No devices match your current search criteria.</p>
                <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition-colors font-medium">
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