import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Shield, Building, Users, Eye, ChevronRight, Menu, X, Lock, Search, FileText, AlertTriangle } from 'lucide-react';

const Home = () => {
  const [currentPage, setCurrentPage] = useState('home');


  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Protect your personal devices by registering them and reporting found or lost assets. Easily report all suspicious activities."
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Manage all organizational wisdom including, data, facts, financials, budgets, and website management effectively."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Quickly verify device ownership, track down files, and increase investigation speed with enhanced tools and analytics."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Get Insights"
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Register on our platform",
      description: "Register with your desired email and get your device details including WiFi, MAC address, any suspicious device frequency."
    },
    {
      step: "2", 
      title: "Register → Protect Devices",
      description: "Transfer ownership, report lost devices, access a secure identity-based resource."
    },
    {
      step: "3",
      title: "Manage Suspicious Behavior",
      description: "Check suspicious device behavior or track any malicious software files."
    },
    {
      step: "4",
      title: "Verify Ownership",
      description: "Verify device ownership and get instant security notifications."
    }
  ];

  const whoCanUse = [
    {
      category: "Individuals",
      items: ["Device registration", "Personal cyber security", "Lost device recovery"]
    },
    {
      category: "Schools & Universities", 
      items: ["Educational environment", "Campus device management", "Student safety protocols"]
    },
    {
      category: "NGOs & Companies",
      items: ["Organizational tracking", "Business equipment", "Asset management"]
    },
    {
      category: "Police Units",
      items: ["Law enforcement", "Criminal investigation and forensics", "Evidence tracking"]
    },
    {
      category: "Government Offices",
      items: ["Public institutions", "Secure communications", "Compliance monitoring"]
    },
    {
      category: "Insurance & Travel",
      items: ["Risk assessment", "Business continuity", "Claims management"]
    }
  ];

  const successStories = [
    {
      title: "Enhanced Security Implementation",
      description: "Successfully implemented comprehensive device tracking across multiple government institutions, resulting in 95% reduction in asset loss.",
      metrics: "95% Asset Recovery"
    },
    {
      title: "University Campus Protection", 
      description: "Deployed campus-wide security monitoring system covering 50,000+ devices and ensuring student safety protocols.",
      metrics: "50,000+ Devices"
    },
    {
      title: "Corporate Asset Management",
      description: "Streamlined business operations with real-time device monitoring and automated compliance reporting systems.",
      metrics: "Real-time Monitoring"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800">
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Secure Your Devices.
                </h1>
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                  Empower Institutions.
                </h2>
                <h3 className="text-4xl lg:text-5xl font-bold leading-tight">
                  Assist Investigations.
                </h3>
              </div>
              
              <p className="text-xl text-purple-100 max-w-lg">
                Register, track, and verify devices; discover device history and get comprehensive information about any device on our platform.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Register your device
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                  We're a lifestyle
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-3 gap-4">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className={`aspect-square rounded-xl flex items-center justify-center text-white text-2xl font-bold ${
                      i === 4 
                        ? 'bg-blue-500 ring-4 ring-white shadow-2xl scale-110' 
                        : 'bg-purple-500 bg-opacity-60'
                    }`}
                  >
                    {i === 4 ? <Shield className="w-12 h-12" /> : <Lock className="w-8 h-8" />}
                  </div>
                ))}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-indigo-600">
                  {benefit.icon}
                </div>
                <p className="text-gray-700 leading-relaxed">{benefit.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How it Works Section */}
      <div className="bg-gray-50 py-24" id='how-it-works'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">How It Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="font-semibold text-gray-900">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Who Can Use Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Who Can Use This Platform?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whoCanUse.map((category, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-bold text-lg text-gray-900 mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-600 text-sm flex items-start">
                      <ChevronRight className="w-4 h-4 text-purple-600 mt-0.5 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="font-bold text-xl text-gray-900 mb-4">{story.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{story.description}</p>
                <div className="text-purple-600 font-semibold">{story.metrics}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
    </div>
  );
}

export default Home;