import React, { useState } from 'react';
import Sidebar from '../components/SideBar';
import { Info, AlertTriangle, Smartphone, Calendar, MapPin, FileText, Upload, Paperclip, X, Clock } from 'lucide-react';

export default function ReportLostStolen() {
  const [selectedDevice, setSelectedDevice] = useState('');
  const [incidentDate, setIncidentDate] = useState('');
  const [incidentTime, setIncidentTime] = useState('');
  const [exactTimeUnknown, setExactTimeUnknown] = useState(false);
  const [incidentLocation, setIncidentLocation] = useState('');
  const [description, setDescription] = useState('');
  const [policeReport, setPoliceReport] = useState(null);
  const [additionalEvidence, setAdditionalEvidence] = useState(null);
  const [isConfirmed, setIsConfirmed] = useState(false);

  // Sample devices data
  const devices = [
    { id: 1, name: 'iPhone 13 Pro', imei: '123456789012345' },
    { id: 2, name: 'Samsung Galaxy S21', imei: '234567890123456' },
    { id: 3, name: 'Apple Watch Series 8', imei: '345678901234567' }
  ];

  const handleFileUpload = (event, setFile) => {
    const file = event.target.files[0];
    if (file) {
      setFile(file);
    }
  };

  const removeFile = (setFile) => {
    setFile(null);
  };

  const handleTimeUnknownChange = (checked) => {
    setExactTimeUnknown(checked);
    if (checked) {
      setIncidentTime('');
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar activeItem="report" />
      <div className="flex-1 ml-0 md:ml-72 p-4 md:p-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Info className="w-8 h-8 text-primary mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">Report Stolen Device</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Please provide accurate details about the incident and upload valid documentation to support your report. 
            This helps prevent misuse and supports investigation efforts.
          </p>
        </div>

        {/* Main Form */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Submit Theft Report</h2>
            <p className="text-gray-600 text-sm">All information will be kept confidential and secure</p>
          </div>

          {/* Warning Banner */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
            <div className="flex items-start">
              <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-yellow-800 text-sm">
                  Only devices registered under your account can be reported. False reports may result in account suspension.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Device Selection */}
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-3">
                <Smartphone className="w-5 h-5 mr-2 text-gray-500" />
                Select Device *
              </label>
              <select
                value={selectedDevice}
                onChange={(e) => setSelectedDevice(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
              >
                <option value="">Choose your device...</option>
                {devices.map((device) => (
                  <option key={device.id} value={device.id}>
                    {device.name} - {device.imei}
                  </option>
                ))}
              </select>
            </div>

            {/* Date and Time of Incident */}
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-3">
                <Calendar className="w-5 h-5 mr-2 text-gray-500" />
                Date and Time of Incident *
              </label>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="date"
                    value={incidentDate}
                    onChange={(e) => setIncidentDate(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors pr-10"
                  />
                  <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
                
                <div className="relative">
                  <input
                    type="time"
                    value={incidentTime}
                    onChange={(e) => setIncidentTime(e.target.value)}
                    disabled={exactTimeUnknown}
                    placeholder="--:--"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors pr-10 disabled:bg-gray-100 disabled:text-gray-500"
                  />
                  <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>
              
              <div className="mt-3">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={exactTimeUnknown}
                    onChange={(e) => handleTimeUnknownChange(e.target.checked)}
                    className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                  />
                  <span className="ml-2 text-sm text-gray-700">Exact time unknown</span>
                </label>
              </div>
            </div>

            {/* Location of Incident */}
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-3">
                <MapPin className="w-5 h-5 mr-2 text-gray-500" />
                Location of Incident *
              </label>
              <input
                type="text"
                value={incidentLocation}
                onChange={(e) => setIncidentLocation(e.target.value)}
                placeholder="eg: 123 Main Street, DownTown Mall, Central station..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
              />
            </div>

            {/* Description */}
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-3">
                <FileText className="w-5 h-5 mr-2 text-gray-500" />
                Describe What Happened *
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Please provide details about how the theft occurred. Include any relevant circumstances, witnesses, or additional information that might help with the investigation..."
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none"
              />
            </div>

            {/* File Upload Sections */}
            <div className="space-y-6">
              {/* Police Report Upload */}
              <div>
                <h3 className="flex items-center text-lg font-semibold text-gray-900 mb-4">
                  <Upload className="w-5 h-5 mr-2 text-gray-500" />
                  Attach Police Report
                </h3>
                
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary transition-colors">
                  {policeReport ? (
                    <div className="flex items-center justify-center space-x-4">
                      <FileText className="w-8 h-8 text-green-500" />
                      <div className="text-left">
                        <p className="text-sm font-medium text-gray-900">{policeReport.name}</p>
                        <p className="text-xs text-gray-500">{(policeReport.size / 1024 / 1024).toFixed(2)} MB</p>
                      </div>
                      <button
                        onClick={() => removeFile(setPoliceReport)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ) : (
                    <div>
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-lg font-medium text-gray-900 mb-2">Upload Police Report</p>
                      <p className="text-sm text-gray-500 mb-4">PDF, JPG, PNG (Max 5MB each)</p>
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) => handleFileUpload(e, setPoliceReport)}
                        className="hidden"
                        id="police-report-upload"
                      />
                      <label
                        htmlFor="police-report-upload"
                        className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-medium transition-colors cursor-pointer inline-block"
                      >
                        Choose File
                      </label>
                    </div>
                  )}
                </div>
              </div>

              {/* Additional Evidence Upload */}
              <div>
                <h3 className="flex items-center text-lg font-semibold text-gray-900 mb-4">
                  <Paperclip className="w-5 h-5 mr-2 text-gray-500" />
                  Additional Evidence (Optional)
                </h3>
                
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary transition-colors">
                  {additionalEvidence ? (
                    <div className="flex items-center justify-center space-x-4">
                      <FileText className="w-8 h-8 text-green-500" />
                      <div className="text-left">
                        <p className="text-sm font-medium text-gray-900">{additionalEvidence.name}</p>
                        <p className="text-xs text-gray-500">{(additionalEvidence.size / 1024 / 1024).toFixed(2)} MB</p>
                      </div>
                      <button
                        onClick={() => removeFile(setAdditionalEvidence)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ) : (
                    <div>
                      <Paperclip className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-lg font-medium text-gray-900 mb-2">Upload Additional Files</p>
                      <p className="text-sm text-gray-500 mb-4">CCTV footage, photos, documents (Max 5MB each)</p>
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png,.mp4,.mov,.avi"
                        onChange={(e) => handleFileUpload(e, setAdditionalEvidence)}
                        className="hidden"
                        id="additional-evidence-upload"
                      />
                      <label
                        htmlFor="additional-evidence-upload"
                        className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-medium transition-colors cursor-pointer inline-block"
                      >
                        Choose File
                      </label>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Confirmation Checkbox */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="confirmation"
                  checked={isConfirmed}
                  onChange={(e) => setIsConfirmed(e.target.checked)}
                  className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary mt-1"
                />
                <label htmlFor="confirmation" className="ml-3 text-gray-700">
                  I confirm that the information provided is true and accurate. I understand that submitting false claims may lead to account suspension or legal action.
                </label>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
              <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Cancel
              </button>
              <button 
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!selectedDevice || !incidentDate || !incidentLocation || !description || !isConfirmed}
              >
                Report Stolen
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
