import React, { useState } from "react";
import Sidebar from "../components/SideBar";
import { User, Camera, Lock, Eye, EyeOff } from "lucide-react";

export default function ProfileSettings() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar activeItem="profile" />
      
      <div className="md:ml-72 p-3 sm:p-4 lg:p-8">
        {/* Header Section */}
        <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 shadow-xl">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 flex items-center">
            <User className='w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 mr-2 sm:mr-3'/>
            Profile Settings
          </h1>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Manage your personal information and account security settings
          </p>
        </div>

        {/* Profile Information Section */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-4 sm:mb-6">
          <div className="p-4 sm:p-6 border-b border-gray-200">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">Profile Information</h2>
          </div>

          <div className="flex flex-col lg:flex-row">
            {/* Profile Photo Section */}
            <div className="lg:w-1/3 p-6 sm:p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-gray-200">
              <div className="flex flex-col items-center space-y-4 sm:space-y-6">
                <div className="relative">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-pink-400 to-pink-500 text-white flex items-center justify-center text-lg sm:text-xl lg:text-2xl font-bold shadow-lg">
                    PI
                  </div>
                  <button className="absolute bottom-0 right-0 w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full shadow-lg border-2 border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <Camera className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                  </button>
                </div>
                <button className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-medium transition-colors text-sm sm:text-base">
                  Change Photo
                </button>
              </div>
            </div>

            {/* Personal Information Form */}
            <div className="lg:w-2/3 p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-6">
                Personal Information
              </h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all duration-200 text-sm sm:text-base"
                      placeholder="John"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all duration-200 text-sm sm:text-base"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all duration-200 text-sm sm:text-base"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all duration-200 text-sm sm:text-base"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <button className="w-full sm:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-colors text-sm sm:text-base shadow-sm">
                  Update Profile
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Security Settings Section */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="p-4 sm:p-6 border-b border-gray-200">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center">
              <Lock className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-gray-600" />
              Security Settings
            </h2>
            <p className="text-sm text-gray-500 mt-1">Update your password to keep your account secure</p>
          </div>

          <div className="p-4 sm:p-6">
            <div className="space-y-4 sm:space-y-6 max-w-2xl">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Password
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showCurrentPassword ? "text" : "password"}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 pr-12 border border-gray-300 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all duration-200 text-sm sm:text-base"
                    placeholder="Enter your current password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showCurrentPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  New Password
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all duration-200 text-sm sm:text-base"
                    placeholder="Enter your new password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-1">Password must be at least 8 characters long</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm New Password
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 pr-12 border border-gray-300 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all duration-200 text-sm sm:text-base"
                    placeholder="Confirm your new password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button className="flex-1 sm:flex-initial px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-colors text-sm sm:text-base shadow-sm">
                  Update Password
                </button>
                <button className="flex-1 sm:flex-initial px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-medium transition-colors text-sm sm:text-base">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}