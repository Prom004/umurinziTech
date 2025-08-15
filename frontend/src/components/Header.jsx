import React, { useState } from "react";
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/img/logo.png'

export default function Header({ transparent = false }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const navigationItems = [
        { id: 'home', label: 'Home', href: '/' },
        { id: 'about', label: 'About Us', href: '/about' },
        { id: 'services', label: 'Services', href: '/services' },
        { id: 'how-it-works', label: 'How It Works', href: '/how-it-works' },
        { id: 'registerDevices', label: 'Register Device', href: '/registerDevice' },
    ];


    return(
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled || !transparent ? 'bg-white/70 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
        <div className="flex items-center">
            <img src={logo} alt="" className="w-24"/>
        </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item) => (
                <Link 
                  key={item.id}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    location.pathname === item.href 
                      ? 'text-[#343264] border-b-2 border-[#343264]' 
                      : 'text-gray-700 hover:text-[#343264]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="text-gray-700 hover:text-purple-600 border border-[#343264] rounded-lg px-3 py-0.5 text-sm font-medium">
              LOGIN
            </Link>
            <Link to="/signup" className="bg-purple-600 text-white border border-[#343264] rounded-lg px-3 py-0.5  text-sm font-medium hover:bg-purple-700 transition-colors">
              SIGN UP
            </Link>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-purple-600"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
              {navigationItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-100 w-full text-left"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 pb-3 border-t border-gray-200">
                <Link to="/login" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 w-full text-left">
                  LOGIN
                </Link>
                <Link to="/signup" className="block px-3 py-2 text-base font-medium bg-purple-600 text-white rounded-md mx-3 mt-2 hover:bg-purple-700">
                  SIGN UP
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
)}