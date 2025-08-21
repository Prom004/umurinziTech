import React, { useState } from 'react';
import heroImage from '../assets/img/hero-image.png'
import { BsBank, BsCart4 } from "react-icons/bs";
import { Shield, Building, Users, Eye, ChevronRight, Menu, X, Lock, Search, FileText, AlertTriangle, User, ShoppingCart } from 'lucide-react';

const Home = () => {
  const [currentPage, setCurrentPage] = useState('home');


  const benefits = [
    {
      icon: <User className="w-8 h-8" />,
      title: "For Individuals",
      content: "Protect your personal devices by registering them and reporting them if lost or stolen. Secure proof of ownership."
    },
    {
      icon: <BsBank className="w-8 h-8" />,
      title: "For Institutions",
      content: "Manage all organizational devices efficiently. Track ownership, transfers, and maintain comprehensive device inventory."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "For Law Enforcement",
      content: "Quickly verify device ownership, track stolen items, and accelerate investigation processes with reliable data."
    },
    {
      icon: <BsCart4 className="w-8 h-8" />,
      title: "For Buyers",
      content: "Verify device legitimacy before purchase. Check if a device is reported stolen and ensure safe transactions."
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Create an Account",
      description: "Register with your national ID and verify your identity through our secure system."
    },
    {
      step: "2", 
      title: "Register or Search a Device",
      description: "Add your device details including IMEI, serial numbers, and ownership documentation."
    },
    {
      step: "3",
      title: "Manage Transfers or Reports",
      description: "Transfer ownership, report lost/stolen devices, or update device status as needed."
    },
    {
      step: "4",
      title: "Verify Device Status",
      description: "Check ownership history, theft reports, and verify legitimacy before transactions."
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
      description: "\"We successfully recovered three stolen laptops using this system within 48 hours. The verification process is seamless and reliable.\"",
      owner: "— Investigation Officer"
    },
    {
      description: "\"Our school's 200+ devices are now fully traceable. The system has eliminated equipment loss and improved our asset management significantly.\"",
      owner: "— IT Manager, Public University"
    },
    {
      description: "\"As a electronics retailer, this platform has increased customer confidence. They can verify device authenticity before purchase.\"",
      owner: "— Electronics Store Owner"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary via-secondary to-secondary">
      
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
                <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:text-black transition-colors">
                  Register your device
                </button>
                <button className="border-2 border-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                  We're a lifestyle
                </button>
              </div>
            </div>
            
            <div className="relative">
              <img src={heroImage} alt="Hero Image" />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent rounded-xl"></div> */}
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
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto text-white">
                  {benefit.icon}
                </div>
                <p className="text-gray-700 leading-relaxed font-semibold">{benefit.title}</p>
                <p className='text-gray-700 leading-relaxed'> {benefit.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How it Works Section */}
      <div className="bg-gray-50 py-24" id='how-it-works'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">How It Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
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
      <div className="bg-white py-24" id='services'>
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
                <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border-l-4"
                style={{
                    borderImage: `linear-gradient(to bottom, rgb(var(--color-accent)), rgb(var(--color-primary))) 1`,
                    borderRadius: 15,
                    borderImageSlice: 1,
                }}
                >
                <p className="text-gray-500 italic mb-4 leading-relaxed">
                    "{story.description}"
                </p>
                <div className="text-primary font-medium">{story.owner}</div>
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