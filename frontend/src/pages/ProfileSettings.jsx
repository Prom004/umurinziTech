import React from "react";
import Sidebar from "../components/SideBar";

export default function ProfileSettings() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar activeItem="profile" />
      <div className="flex-1 ml-72 p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Profile Settings
        </h1>
        <p>Manage your profile settings</p>
        <div className="w-full flex gap-4 mt-12">
          <div className="w-1/3 border border-gray-300 py-16 flex flex-col gap-6 items-center justify-between">
            <div className="size-48 rounded-full bg-pink-400 text-white flex items-center justify-center text-2xl">
              PI
            </div>
            <button className="bg-gray-300 text-black text-center px-2 py-1 rounded-lg font-bold">
              Change Photo
            </button>
          </div>
          <div className="w-2/3 border px-6 py-4 border-gray-300">
            <h3 className="text-black font-semibold mb-4">
              Personal Information
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="firstName">
                  First Name
                  <span className="text-red-500"> *</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-[#b7b7b7] py-1 px-2 rounded-lg"
                  placeholder="eg Promiaw"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="firstName">
                  First Name
                  <span className="text-red-500"> *</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-[#b7b7b7] py-1 px-2 rounded-lg"
                  placeholder="eg Promiaw"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="firstName">
                  First Name
                  <span className="text-red-500"> *</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-[#b7b7b7] py-1 px-2 rounded-lg"
                  placeholder="eg Promiaw"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="firstName">
                  First Name
                  <span className="text-red-500"> *</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-[#b7b7b7] py-1 px-2 rounded-lg"
                  placeholder="eg Promiaw"
                />
              </div>
              <button className="bg-[#343264]/80 text-black text-center px-2 py-1 rounded-lg font-bold w-fit">
                Update profile
              </button>
            </div>
          </div>
        </div>
        <div className="w-full rounded-sm border border-gray-300 py-4 px-6 mt-12">
          <h2 className="mb-4 font-bold text-2xl">Security Settings</h2>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="firstName">Current Password</label>
              <input
                type="text"
                className="w-full border border-[#b7b7b7] py-1 px-2 rounded-lg"
                placeholder="eg Promiaw"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="firstName">New Password</label>
              <input
                type="text"
                className="w-full border border-[#b7b7b7] py-1 px-2 rounded-lg"
                placeholder="eg Promiaw"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="firstName">Confirm New Password</label>
              <input
                type="text"
                className="w-full border border-[#b7b7b7] py-1 px-2 rounded-lg"
                placeholder="eg Promiaw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
