import React from 'react'
// import { useRouter } from 'react-router-dom'


export default function PageRouter (){
  const { currentPath } = useRouter();
  
  switch (currentPath) {
    case 'dashboard':
      return <DashboardPage />;
    case 'register':
      return <RegisterDevicePage />;
    case 'devices':
      return <MyDevicesPage />;
    default:
      return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100">
          <Sidebar activeItem={currentPath} />
          <div className="md:ml-72 p-6">
            <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-8 shadow-xl text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">🚧 Page Under Construction</h1>
              <p className="text-gray-600">This page is not yet implemented.</p>
            </div>
          </div>
        </div>
      );
  }
};