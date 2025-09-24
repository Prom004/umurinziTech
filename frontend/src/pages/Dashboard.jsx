import React from 'react';
import Sidebar from '../components/SideBar';
import { MapPin, Clock, Battery, Wifi, Eye } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    { id: 1, icon: "📱", label: "Active Cases", num: 23 },
    { id: 2, icon: "📱", label: "Active Cases", num: 23 },
    { id: 3, icon: "📱", label: "Active Cases", num: 23 },
    { id: 4, icon: "📱", label: "Active Cases", num: 23 }
  ];

  const recentActivities = [
    { id: 1, device: "iPhone 13 Pro", action: "Location Updated", time: "2 minutes ago" },
    { id: 2, device: "iPhone 13 Pro", action: "Location Updated", time: "2 minutes ago" },
    { id: 3, device: "iPhone 13 Pro", action: "Location Updated", time: "2 minutes ago" },
    { id: 4, device: "iPhone 13 Pro", action: "Location Updated", time: "2 minutes ago" },
    { id: 5, device: "iPhone 13 Pro", action: "Location Updated", time: "2 minutes ago" }
  ];

  const devices = [
    {
      id: 1,
      name: "iPhone 13 Pro",
      type: "smartphone",
      lastSeen: "Kigali, Kicukiro KK 321 st",
      battery: 87,
      status: "Online"
    },
    {
      id: 2,
      name: "Apple Watch Series 8",
      type: "smartwatch",
      lastSeen: "Kigali, Kicukiro KK 321 st",
      battery: 87,
      status: "Online"
    },
    {
      id: 3,
      name: "AirTag -Keys",
      type: "tracker",
      lastSeen: "Kigali, Kicukiro KK 321 st",
      battery: 87,
      status: "Online"
    }
  ];

  const getDeviceIcon = (type) => {
    const icons = {
      smartphone: "📱",
      smartwatch: "⌚",
      tracker: "🏷️"
    };
    return icons[type] || "📱";
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar activeItem="dashboard" />
      <div className="flex-1 ml-0 md:ml-72 p-4 sm:p-6 md:p-8">
        {/* Header Section */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">Device Dashboard</h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">Monitor and manage all your tracking devices in real-time.</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
          {stats.map((stat) => (
            <div key={stat.id} className="bg-gradient-to-br from-purple-400 to-purple-600 p-4 md:p-6 rounded-xl shadow-lg text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl md:text-3xl font-bold">{stat.num}</p>
                  <p className="text-purple-100 text-xs md:text-sm">{stat.label}</p>
                </div>
                <div className="text-xl md:text-2xl">{stat.icon}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* Device Location Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-5 md:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4 md:mb-6 gap-3 sm:gap-4">
                <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">Device Location</h2>
                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  View Full map
                </button>
              </div>
              <div className="bg-gray-100 rounded-lg h-44 sm:h-48 md:h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-2" />
                  <p className="text-xs sm:text-sm md:text-base">Map will be displayed here</p>
                </div>
              </div>
            </div>

            {/* Your Devices Section */}
            <div className="bg-white w-full rounded-xl shadow-lg p-4 sm:p-5 md:p-6 mt-4 sm:mt-6 md:mt-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4 md:mb-6 gap-3 sm:gap-4">
                <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">Your Devices</h2>
                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  View More
                </button>
              </div>
              <div className="space-y-3 sm:space-y-3 md:space-y-4">
                {devices.map((device) => (
                  <div key={device.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 md:p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow gap-3">
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-400 to-blue-500 rounded-lg flex items-center justify-center text-white text-lg md:text-xl">
                        {getDeviceIcon(device.type)}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-sm md:text-base">{device.name}</h3>
                        <div className="flex flex-col sm:flex-row sm:items-center text-xs md:text-sm text-gray-500 space-y-1 sm:space-y-0 sm:space-x-4">
                          <span className="flex items-center">
                            <MapPin className="w-3 h-3 mr-1" />
                            {device.lastSeen}
                          </span>
                          <span className="flex items-center">
                            <Battery className="w-3 h-3 mr-1" />
                            Battery: {device.battery}%
                          </span>
                        </div>
                      </div>
                    </div>
                    <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-full text-xs md:text-sm font-medium transition-colors self-start sm:self-auto">
                      {device.status}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Activities Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
              <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 md:mb-6">Recent Activities</h2>
              <div className="space-y-3 md:space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs md:text-sm font-medium text-gray-900 truncate">{activity.device} {activity.action}</p>
                      <p className="text-xs text-gray-500 flex items-center">
                        <Clock className="w-3 h-3 mr-1 flex-shrink-0" />
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
