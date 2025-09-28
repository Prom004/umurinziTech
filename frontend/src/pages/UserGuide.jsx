import React, { useState } from 'react';
import Sidebar from '../components/SideBar';
import { 
  BookOpen, 
  Search, 
  ChevronRight, 
  ChevronDown,
  Smartphone,
  Shield,
  Users,
  FileText,
  MapPin,
  Bell,
  Settings,
  HelpCircle,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Info
} from 'lucide-react';

export default function UserGuide() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSection, setExpandedSection] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const guideSections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: BookOpen,
      content: [
        {
          subtitle: 'System Overview',
          content: 'UmirinziTech is a comprehensive device management platform designed for institutions to track, monitor, and manage registered devices. The system provides real-time location tracking, device verification, and secure ownership transfer capabilities.'
        },
        {
          subtitle: 'Login Process',
          content: 'To access the system, navigate to the login page and enter your institution credentials. The system uses role-based authentication to ensure only authorized personnel can access sensitive device information.'
        },
        {
          subtitle: 'Dashboard Overview',
          content: 'The dashboard provides a centralized view of all your devices, recent activities, and key statistics. You can monitor device status, battery levels, and location updates in real-time.'
        }
      ]
    },
    {
      id: 'device-registration',
      title: 'Device Registration',
      icon: Smartphone,
      content: [
        {
          subtitle: 'Registering a New Device',
          content: 'Navigate to "Register Device" from the main menu. Fill in the required information including device name, brand, model, IMEI/serial number, and upload a photo if needed. Ensure all information is accurate as it will be used for verification purposes.'
        },
        {
          subtitle: 'Required Information',
          content: 'You\'ll need the device name, brand, model, IMEI or serial number, purchase date, and optionally a photo. Make sure all information is accurate as it will be used for verification purposes.'
        },
        {
          subtitle: 'Registration Process',
          content: 'The registration process typically takes 2-3 minutes. Once completed, the device will appear in your "My Devices" section and can be tracked and managed through the system.'
        }
      ]
    },
    {
      id: 'device-management',
      title: 'Device Management',
      icon: Settings,
      content: [
        {
          subtitle: 'Viewing Your Devices',
          content: 'Access "My Devices" to see all registered devices. Each device shows its current status, last known location, battery level, and other relevant information.'
        },
        {
          subtitle: 'Device Status Monitoring',
          content: 'Monitor device status including online/offline status, battery levels, and location updates. The system provides real-time notifications for status changes.'
        },
        {
          subtitle: 'Device History',
          content: 'View detailed history of each device including location changes, status updates, and ownership transfers. This information is crucial for security and compliance purposes.'
        }
      ]
    },
    {
      id: 'security-features',
      title: 'Security Features',
      icon: Shield,
      content: [
        {
          subtitle: 'Device Verification',
          content: 'Use the "Verify Device" feature to confirm device authenticity. This is essential when purchasing used devices or verifying ownership.'
        },
        {
          subtitle: 'Reporting Lost/Stolen Devices',
          content: 'If a device is lost or stolen, immediately report it through "Report Lost/Stolen". This will notify law enforcement agencies and help prevent unauthorized transfers.'
        },
        {
          subtitle: 'Data Security',
          content: 'All device information is encrypted and stored securely. We use industry-standard security measures and never share your data with third parties without your explicit consent.'
        }
      ]
    },
    {
      id: 'ownership-transfer',
      title: 'Ownership Transfer',
      icon: Users,
      content: [
        {
          subtitle: 'Transferring Device Ownership',
          content: 'Go to your device details and select "Transfer Ownership". Enter the recipient\'s information and they will receive a notification to accept the transfer.'
        },
        {
          subtitle: 'Transfer Process',
          content: 'Both parties must verify their identity before the transfer is completed. The process includes email notifications and confirmation steps to ensure security.'
        },
        {
          subtitle: 'Transfer History',
          content: 'All ownership transfers are logged and can be viewed in the device history. This provides a complete audit trail for compliance and security purposes.'
        }
      ]
    },
    {
      id: 'notifications',
      title: 'Notifications & Alerts',
      icon: Bell,
      content: [
        {
          subtitle: 'Notification Types',
          content: 'The system sends notifications for device status changes, low battery alerts, location updates, and security events. You can customize which notifications you receive.'
        },
        {
          subtitle: 'Managing Notifications',
          content: 'Access the "Notifications" section to view all alerts and configure your notification preferences. You can enable/disable specific types of notifications.'
        },
        {
          subtitle: 'Emergency Alerts',
          content: 'Critical alerts such as device theft or unauthorized access attempts are sent immediately via email and in-app notifications.'
        }
      ]
    },
    {
      id: 'account-settings',
      title: 'Account Settings',
      icon: FileText,
      content: [
        {
          subtitle: 'Profile Management',
          content: 'Update your institution information, contact details, and preferences in the "Profile Settings" section. Keep your information current for better service.'
        },
        {
          subtitle: 'Password Management',
          content: 'Change your password regularly for security. Use the "Forgot Password" feature on the login page if you need to reset your password.'
        },
        {
          subtitle: 'Account Security',
          content: 'Enable two-factor authentication if available and regularly review your account activity. Report any suspicious activity immediately.'
        }
      ]
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      icon: HelpCircle,
      content: [
        {
          subtitle: 'Common Issues',
          content: 'If you experience login issues, check your credentials and ensure your account is active. For device tracking issues, verify that the device is online and has sufficient battery.'
        },
        {
          subtitle: 'Getting Help',
          content: 'Use the "Help & Support" section for detailed FAQs and contact information. Our support team is available 24/7 to assist with any issues.'
        },
        {
          subtitle: 'System Requirements',
          content: 'Ensure you\'re using a supported browser (Chrome, Firefox, Safari, Edge) and have a stable internet connection for optimal performance.'
        }
      ]
    }
  ];

  const filteredSections = guideSections.filter(section => {
    const matchesSearch = searchQuery === '' || 
      section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      section.content.some(item => 
        item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.content.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesSearch;
  });

  const toggleSection = (id) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  const quickStartSteps = [
    {
      step: 1,
      title: 'Login to Your Account',
      description: 'Use your institution credentials to access the system',
      icon: CheckCircle
    },
    {
      step: 2,
      title: 'Register Your First Device',
      description: 'Add device information including IMEI and photos',
      icon: Smartphone
    },
    {
      step: 3,
      title: 'Monitor Device Status',
      description: 'Check location, battery, and security status',
      icon: MapPin
    },
    {
      step: 4,
      title: 'Set Up Notifications',
      description: 'Configure alerts for important events',
      icon: Bell
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar activeItem="support" />
      
      <div className="md:ml-72 p-3 sm:p-4 lg:p-8">
        {/* Header Section */}
        <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 flex items-center">
                <BookOpen className='w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 mr-2 sm:mr-3'/>
                User Guide
              </h1>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Complete guide to using the UmurinziTech device management platform
              </p>
            </div>
            <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-500">
              <span>Last updated: {new Date().toLocaleDateString()}</span>
            </div>
          </div>
        </div>

        {/* Quick Start Section */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6 shadow-sm">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center">
            <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
            Quick Start Guide
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickStartSteps.map((step) => (
              <div key={step.step} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    {step.step}
                  </div>
                  <step.icon className="w-5 h-5 text-indigo-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Search Section */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6 shadow-sm">
          <div className="relative">
            <input
              type="text"
              placeholder="Search the user guide..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all duration-200"
            />
            <Search className="w-4 h-4 sm:w-5 sm:h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Guide Sections */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="p-4 sm:p-6 border-b border-gray-200">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              Complete User Guide
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              {filteredSections.length} section{filteredSections.length !== 1 ? 's' : ''} available
            </p>
          </div>

          {filteredSections.length > 0 ? (
            <div className="divide-y divide-gray-100">
              {filteredSections.map((section) => (
                <div key={section.id} className="border-l-4 border-l-transparent hover:border-l-indigo-500 transition-colors">
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full p-4 sm:p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <section.icon className="w-5 h-5 text-indigo-600 mr-3" />
                        <h3 className="text-sm sm:text-base font-semibold text-gray-900 pr-4">
                          {section.title}
                        </h3>
                      </div>
                      {expandedSection === section.id ? (
                        <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      )}
                    </div>
                  </button>
                  
                  {expandedSection === section.id && (
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                      <div className="space-y-4">
                        {section.content.map((item, index) => (
                          <div key={index} className="bg-gray-50 rounded-lg p-3 sm:p-4">
                            <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                              <Info className="w-4 h-4 mr-2 text-indigo-600" />
                              {item.subtitle}
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                              {item.content}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 sm:py-12 px-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                No results found
              </h3>
              <p className="text-sm text-gray-500">
                Try adjusting your search terms to find what you're looking for.
              </p>
            </div>
          )}
        </div>

        {/* Support Contact */}
        <div className="bg-[#343264] rounded-2xl p-4 sm:p-6 mt-4 sm:mt-6 text-white">
          <div className="text-center">
            <h3 className="text-base sm:text-lg font-semibold mb-2">
              Need More Help?
            </h3>
            <p className="text-sm sm:text-base text-indigo-100 mb-4">
              Our support team is here to assist you 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center text-sm">
              <div className="flex items-center space-x-2">
                <HelpCircle className="w-4 h-4" />
                <span>support@deviceregistry.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Bell className="w-4 h-4" />
                <span>Live Chat Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
