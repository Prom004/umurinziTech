import React, { useState } from 'react';
import Sidebar from '../components/SideBar';

// Reusable Sidebar Component (same as before)


// Stats Card Component
const StatsCard = ({ title, value, icon, color = 'indigo' }) => {
  const colorClasses = {
    indigo: 'from-indigo-500 to-purple-600',
    green: 'from-green-500 to-emerald-600',
    yellow: 'from-yellow-500 to-orange-600',
    red: 'from-red-500 to-pink-600'
  };

  return (
    <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
        </div>
        <div className={`w-12 h-12 bg-gradient-to-r ${colorClasses[color]} rounded-xl flex items-center justify-center text-white text-xl shadow-lg`}>
          {icon}
        </div>
      </div>
    </div>
  );
};

// Device Row Component
const DeviceRow = ({ device, onAction }) => {
  const getStatusBadge = (status) => {
    const statusConfig = {
      Active: { bg: 'bg-green-100', text: 'text-green-800', dot: 'bg-green-500' },
      Transferred: { bg: 'bg-blue-100', text: 'text-blue-800', dot: 'bg-blue-500' },
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
      smartphone: '📱',
      laptop: '💻',
      smartwatch: '⌚',
      tablet: '📱'
    };
    return icons[type.toLowerCase()] || '📱';
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all duration-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <input
            type="checkbox"
            className="h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
          />
          <div className="text-3xl">{getDeviceIcon(device.type)}</div>
          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <h3 className="font-semibold text-gray-900">{device.name}</h3>
              <span className="text-gray-500 text-sm">•</span>
              <span className="text-gray-600 text-sm">{device.brand}</span>
            </div>
            <p className="text-gray-500 text-sm">{device.color} • {device.storage} • {device.model}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-6 text-sm">
          <div className="text-center">
            <p className="font-medium text-gray-900">{device.type}</p>
          </div>
          <div className="text-center">
            <p className="font-medium text-gray-900">{device.imei}</p>
          </div>
          <div className="text-center">
            {getStatusBadge(device.status)}
          </div>
          <div className="text-center">
            <p className="text-gray-600">{device.dateRegistered}</p>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => onAction('view', device)}
              className="text-indigo-600 hover:text-indigo-800 font-medium"
            >
              View
            </button>
            <button
              onClick={() => onAction('report', device)}
              className="text-yellow-600 hover:text-yellow-800 font-medium"
            >
              Report
            </button>
            <button
              onClick={() => onAction('transfer', device)}
              className="text-purple-600 hover:text-purple-800 font-medium"
            >
              Transfer
            </button>
          </div>
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
      storage: '3-year',
      model: 'HP Pavilion 15',
      type: 'Laptop',
      imei: 'ATB2C3HE5F6',
      status: 'Transferred',
      dateRegistered: '2025-07-15'
    },
    {
      id: 4,
      name: 'Samsung Galaxy A54',
      brand: 'Samsung',
      color: 'Awesome White',
      storage: '256GB',
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
      imei: 'AW945678901234S',
      status: 'Active',
      dateRegistered: '2025-05-20'
    }
  ];

  const stats = [
    { title: 'Total Devices', value: '5', icon: '📱', color: 'indigo' },
    { title: 'Active', value: '3', icon: '✅', color: 'green' },
    { title: 'Transferred', value: '1', icon: '🔄', color: 'yellow' },
    { title: 'Lost', value: '1', icon: '⚠️', color: 'red' }
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100">
      <Sidebar activeItem="devices" />
      
      <div className="md:ml-72 p-6">
        {/* Header */}
        <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-8 mb-8 shadow-xl">
          <h1 className="text-3xl font-bold text-gray-900 mb-3 flex items-center">
            <span className="mr-3">📋</span>
            My Devices
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Manage all your registered devices. View their status, report issues, and transfer ownership securely.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatsCard
              key={index}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              color={stat.color}
            />
          ))}
        </div>

        {/* Controls */}
        <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-6 mb-6 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by device name, IME, or serial number..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-200"
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg">
                  🔍
                </span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-200 bg-white"
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
                className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-200 bg-white"
              >
                <option>Newest First</option>
                <option>Oldest First</option>
                <option>Name A-Z</option>
                <option>Name Z-A</option>
              </select>
              
              <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl hover:from-indigo-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 font-medium shadow-lg whitespace-nowrap">
                Register New Device
              </button>
            </div>
          </div>
        </div>

        {/* Device Registry Table */}
        <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6">
            <h2 className="text-xl font-bold">Device Registry</h2>
          </div>
          
          {/* Table Header */}
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between text-sm font-semibold text-gray-700">
              <div className="flex items-center space-x-4">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
                />
                <span className="w-20">Device</span>
              </div>
              <div className="flex items-center space-x-6">
                <span className="w-20 text-center">Type</span>
                <span className="w-32 text-center">IMEI/Serial No.</span>
                <span className="w-24 text-center">Status</span>
                <span className="w-28 text-center">Date Registered</span>
                <span className="w-28 text-center">Actions</span>
              </div>
            </div>
          </div>

          {/* Device List */}
          <div className="p-6 space-y-4">
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
                <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl hover:from-indigo-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 font-medium">
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

// export default MyDevices;