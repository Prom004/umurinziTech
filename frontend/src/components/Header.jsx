import React, { useState, useEffect } from "react";
import { Menu, X } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/img/logo.png'

export default function Header({ transparent = false }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    // Listen for scroll events to update header background
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigationItems = [
        { id: 'home', label: 'Home', href: '/', type: 'route' },
        { id: 'about', label: 'About Us', href: '/#about', type: 'section' },
        { id: 'services', label: 'Services', href: '/#services', type: 'section' },
        { id: 'how-it-works', label: 'How It Works', href: '/#how-it-works', type: 'section' },
        { id: 'registerDevices', label: 'Register Device', href: '/registerDevice', type: 'route' },
    ];

    // Function to handle navigation to sections
    const handleNavigation = (item, e) => {
        if (item.type === 'section') {
            e.preventDefault();
            
            // Extract the section ID from href (e.g., '/#about' -> 'about')
            const sectionId = item.href.split('#')[1];
            
            // If we're not on the home page, navigate there first
            if (location.pathname !== '/') {
                navigate('/');
                // Wait for navigation to complete, then scroll
                setTimeout(() => {
                    scrollToSection(sectionId);
                }, 100);
            } else {
                // If already on home page, just scroll
                scrollToSection(sectionId);
            }
            
            // Close mobile menu
            setMobileMenuOpen(false);
        }
    };

    // Function to scroll to section with header offset
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            // const headerHeight = 64; // Adjust based on your header height
            const elementPosition = element.offsetTop;
            
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    };

    // Check if current item is active
    const isItemActive = (item) => {
        if (item.type === 'route') {
            return location.pathname === item.href;
        } else if (item.type === 'section') {
            // For sections, check if we're on home page and if the hash matches
            return location.pathname === '/' && location.hash === `#${item.href.split('#')[1]}`;
        }
        return false;
    };

    return(
        <nav className={`fixed w-full z-50 transition-all duration-300 ${
            scrolled || !transparent ? 'bg-white/70 backdrop-blur-sm shadow-sm' : 'bg-transparent'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <img src={logo} alt="Logo" className="w-24"/>
                    </div>
                    
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navigationItems.map((item) => (
                                item.type === 'route' ? (
                                    <Link 
                                        key={item.id}
                                        to={item.href}
                                        className={`px-3 py-2 text-sm font-medium transition-colors ${
                                            isItemActive(item)
                                                ? 'text-primary border-b-2 border-primary' 
                                                : 'text-gray-700 hover:text-primary'
                                        }`}
                                    >
                                        {item.label}
                                    </Link>
                                ) : (
                                    <a
                                        key={item.id}
                                        href={item.href}
                                        onClick={(e) => handleNavigation(item, e)}
                                        className={`px-3 py-2 text-sm font-medium transition-colors cursor-pointer ${
                                            isItemActive(item)
                                                ? 'text-primary border-b-2 border-primary' 
                                                : 'text-gray-700 hover:text-primary'
                                        }`}
                                    >
                                        {item.label}
                                    </a>
                                )
                            ))}
                        </div>
                    </div>
                    
                    <div className="hidden md:flex items-center space-x-4">
                        <Link to="/login" className="text-gray-700 hover:text-purple-600 border border-primary rounded-lg px-3 py-0.5 text-sm font-medium">
                            LOGIN
                        </Link>
                        <Link to="/signup" className="bg-purple-600 text-white border border-primary rounded-lg px-3 py-0.5 text-sm font-medium hover:bg-purple-700 transition-colors">
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
                                item.type === 'route' ? (
                                    <Link
                                        key={item.id}
                                        to={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-100 w-full text-left"
                                    >
                                        {item.label}
                                    </Link>
                                ) : (
                                    <a
                                        key={item.id}
                                        href={item.href}
                                        onClick={(e) => handleNavigation(item, e)}
                                        className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-100 w-full text-left cursor-pointer"
                                    >
                                        {item.label}
                                    </a>
                                )
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
    );
}