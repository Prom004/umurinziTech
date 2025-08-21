import React from 'react';
import Sidebar from '../components/SideBar';

export default function VerifyDevice() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar activeItem="verify" />
      <div className="flex-1 ml-72 p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Verify Device</h1>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-gray-600">Device verification functionality will be implemented here.</p>
        </div>
      </div>
    </div>
  );
}
