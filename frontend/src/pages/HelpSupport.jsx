import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/SideBar';
import { 
  HelpCircle, 
  Search, 
  MessageCircle, 
  Mail, 
  Phone, 
  FileText, 
  ChevronRight, 
  ChevronDown,
  Book,
  Shield,
  Smartphone,
  Users,
  Clock,
  ExternalLink
} from 'lucide-react';

export default function HelpSupport() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate();

  // this data could be loaded from a database
  const faqData = [
    {
      id: 1,
      category: 'registration',
      question: 'How do I register a new device?',
      answer: 'To register a new device, navigate to "My Devices" and click "Register New Device". Fill in the required information including device name, brand, model, IMEI/serial number, and upload a photo if needed. The registration process typically takes 2-3 minutes.'
    },
    {
      id: 2,
      category: 'security',
      question: 'What should I do if my device is stolen?',
      answer: 'If your device is stolen, immediately log into your account and report it as stolen in the device status. This will notify law enforcement agencies and help prevent unauthorized transfers. You should also contact local police and file a report.'
    },
    {
      id: 3,
      category: 'transfers',
      question: 'How do I transfer ownership of my device?',
      answer: 'Go to your device details and select "Transfer Ownership". Enter the recipient\'s information and they will receive a notification to accept the transfer. Both parties must verify their identity before the transfer is completed.'
    },
    {
      id: 4,
      category: 'account',
      question: 'How do I reset my password?',
      answer: 'Click "Forgot Password" on the login page and enter your email address. You\'ll receive a password reset link within a few minutes. If you don\'t receive it, check your spam folder or contact support.'
    },
    {
      id: 5,
      category: 'registration',
      question: 'What information do I need to register a device?',
      answer: 'You\'ll need the device name, brand, model, IMEI or serial number, purchase date, and optionally a photo. Make sure all information is accurate as it will be used for verification purposes.'
    },
    {
      id: 6,
      category: 'security',
      question: 'How secure is my device information?',
      answer: 'All device information is encrypted and stored securely. We use industry-standard security measures and never share your data with third parties without your explicit consent. Regular security audits ensure your data remains protected.'
    }
  ];

  // this data could be loaded from a database
  const categories = [
    { id: 'all', name: 'All Topics', icon: Book },
    { id: 'registration', name: 'Device Registration', icon: Smartphone },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'transfers', name: 'Transfers', icon: Users },
    { id: 'account', name: 'Account', icon: FileText }
  ];

  // this data could be loaded from a database
  const quickActions = [
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      action: 'Start Chat',
      available: true,
      color: 'bg-green-600 hover:bg-green-700'
    },
    {
      title: 'Email Support',
      description: 'Send us a detailed message',
      icon: Mail,
      action: 'Send Email',
      available: true,
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      title: 'Phone Support',
      description: 'Call us during business hours',
      icon: Phone,
      action: 'Call Now',
      available: false,
      color: 'bg-gray-400',
      note: 'Available 9 AM - 5 PM EST'
    }
  ];

  // this data could be loaded from a database
  const resources = [
    { title: 'User Guide', description: 'Complete guide to using the platform', icon: Book, href: '/userGuide' },
    { title: 'Video Tutorials', description: 'Step-by-step video instructions', icon: FileText, href: '#' },
    { title: 'Device Database', description: 'Browse supported devices', icon: Smartphone, href: '#' },
    { title: 'Security Best Practices', description: 'Keep your devices secure', icon: Shield, href: '#' }
  ];

  const filteredFaqs = faqData.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar activeItem="support" />
      
      <div className="md:ml-72 p-3 sm:p-4 lg:p-8">
        {/* Header Section */}
        <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 shadow-xl">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 flex items-center">
            <HelpCircle className='w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 mr-2 sm:mr-3'/>
            Help & Support
          </h1>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Find answers to common questions, access resources, and get help from our support team
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
          {quickActions.map((action, index) => (
            <div key={index} className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center ${
                  action.available ? action.color : 'bg-gray-100'
                }`}>
                  <action.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${
                    action.available ? 'text-white' : 'text-gray-400'
                  }`} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">
                    {action.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
                    {action.description}
                  </p>
                  {action.note && (
                    <p className="text-xs text-gray-500 mb-2">
                      {action.note}
                    </p>
                  )}
                  <button 
                    className={`w-full sm:w-auto px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors ${
                      action.available 
                        ? `btn-primary text-white` 
                        : 'bg-surface-muted text-gray-400 cursor-not-allowed'
                    }`}
                    disabled={!action.available}
                  >
                    {action.action}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Search and Categories */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6 shadow-sm">
          <div className="space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search frequently asked questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all duration-200"
              />
              <Search className="w-4 h-4 sm:w-5 sm:h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-indigo-100 text-indigo-700 border border-indigo-200'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 border border-transparent'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{category.name}</span>
                  <span className="sm:hidden">{category.name.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl shadow-sm mb-4 sm:mb-6 overflow-hidden">
          <div className="p-4 sm:p-6 border-b border-gray-200">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              {filteredFaqs.length} question{filteredFaqs.length !== 1 ? 's' : ''} found
            </p>
          </div>

          {filteredFaqs.length > 0 ? (
            <div className="divide-y divide-gray-100">
              {filteredFaqs.map((faq) => (
                <div key={faq.id} className="border-l-4 border-l-transparent hover:border-l-indigo-500 transition-colors">
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-4 sm:p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm sm:text-base font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                      {expandedFaq === faq.id ? (
                        <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      )}
                    </div>
                  </button>
                  
                  {expandedFaq === faq.id && (
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                      <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 sm:py-12 px-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                No questions found
              </h3>
              <p className="text-sm text-gray-500">
                Try adjusting your search or category filter to find what you're looking for.
              </p>
            </div>
          )}
        </div>

        {/* Resources Section */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="p-4 sm:p-6 border-b border-gray-200">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              Helpful Resources
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Additional guides and documentation
            </p>
          </div>

          <div className="p-4 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {resources.map((resource, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (resource.href && resource.href !== '#') {
                      navigate(resource.href);
                    }
                  }}
                  className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 border border-gray-200 rounded-xl hover:border-indigo-300 hover:bg-indigo-50/50 transition-all duration-200 text-left group"
                >
                  <div className="w-10 h-10 bg-gray-100 group-hover:bg-indigo-100 rounded-lg flex items-center justify-center transition-colors">
                    <resource.icon className="w-5 h-5 text-gray-600 group-hover:text-indigo-600 transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 group-hover:text-indigo-900 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">
                      {resource.description}
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-indigo-500 transition-colors" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Info Footer */}
        <div className="bg-[#343264] rounded-2xl p-4 sm:p-6 mt-4 sm:mt-6 text-white">
          <div className="text-center">
            <h3 className="text-base sm:text-lg font-semibold mb-2">
              Still need help?
            </h3>
            <p className="text-sm sm:text-base text-indigo-100 mb-4">
              Our support team is here to assist you 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>umurinziTech@dreamweavers.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}