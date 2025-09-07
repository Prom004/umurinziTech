import React from "react";

export default function PopMessage({ isOpen, message, type = "success", onClose }) {
  if (!isOpen) return null;

  const getIcon = () => {
    if (type === "success") {
      return (
        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
      );
    } else if (type === "error") {
      return (
        <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      );
    }
    return (
      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    );
  };

  const getBgColor = () => {
    switch (type) {
      case "success":
        return "bg-green-50 border-green-200";
      case "error":
        return "bg-red-50 border-red-200";
      default:
        return "bg-blue-50 border-blue-200";
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className={`relative max-w-md w-full mx-4 p-6 rounded-2xl shadow-2xl ${getBgColor()} border-2`}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            {getIcon()}
          </div>
          <div className="flex-1">
            <h3 className={`text-lg font-semibold ${
              type === "success" ? "text-green-800" : 
              type === "error" ? "text-red-800" : "text-blue-800"
            }`}>
              {type === "success" ? "Success!" : 
               type === "error" ? "Error!" : "Information"}
            </h3>
            <p className={`mt-2 text-sm ${
              type === "success" ? "text-green-700" : 
              type === "error" ? "text-red-700" : "text-blue-700"
            }`}>
              {message}
            </p>
          </div>
        </div>
        
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              type === "success" ? "bg-green-600 hover:bg-green-700 text-white" :
              type === "error" ? "bg-red-600 hover:bg-red-700 text-white" :
              "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}