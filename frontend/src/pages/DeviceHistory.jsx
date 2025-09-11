import React from "react";
import Sidebar from "../components/SideBar";
import { Clipboard } from "lucide-react";

export default function DeviceHistory() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar activeItem="history" />
      <div className="flex-1 ml-72 p-8 space-y-3">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Device History
          </h1>
          <p className="text-gray-600">
            Track the full history of your registered devices, including
            transfers, theft reports, and system updates. This log helps you
            verify authenticity and maintain proper records.
          </p>
        </div>
        <div className="">
          <label className="font-semibold"> Select Device</label>
          <input type="text" required placeholder="Select Devices" className="p-3 w-full border border-gray-200 rounded-lg mt-1" />
        </div>
        <div className="flex flex-col bg-white justify-center items-center border border-gray-50 p-20 rounded-lg shadow-md">
          <Clipboard className="w-8 h-8" />
          <h2 className="text-gray-800 font-bold text-2xl">
            Select a Device to view history
          </h2>
          <p className="text-gray-600">
            Choose a device from the dropdown above to see its complete activity
            timeline including registrations, transfers, and reports.
          </p>
        </div>
      </div>
    </div>
  );
}
