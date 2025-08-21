import React from 'react';
import Sidebar from '../components/SideBar';

export default function HelpSupport() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar activeItem="support" />
      <div className="flex-1 ml-72 p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Help & Support</h1>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-gray-600">Help and support functionality will be implemented here.</p>
        </div>
      </div>
    </div>
  );
}
