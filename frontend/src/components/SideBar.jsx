import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import logo from "../assets/img/logo.png";
import { Menu, Settings, Bell, HelpingHand, Recycle, LogOut, History, Siren, Verified, List, PhoneIcon } from "lucide-react";

export default function Sidebar({ activeItem = "register" }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const scrollableRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { logout, user } = useAuth();
  const currentPath = location.pathname;

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  useEffect(() => {
    const saveScrollPosition = () => {
      if (scrollableRef.current) {
        const scrollTop = scrollableRef.current.scrollTop;
        sessionStorage.setItem('sidebar-scroll-position', scrollTop.toString());
      }
    };

    // Save scroll position on scroll
    const scrollableElement = scrollableRef.current;
    if (scrollableElement) {
      scrollableElement.addEventListener('scroll', saveScrollPosition);
      
      return () => {
        scrollableElement.removeEventListener('scroll', saveScrollPosition);
        saveScrollPosition(); // Save one final time on cleanup
      };
    }
  }, []);

  // Restore scroll position after component mounts or updates
  useEffect(() => {
    const restoreScrollPosition = () => {
      if (scrollableRef.current) {
        const savedScrollPosition = sessionStorage.getItem('sidebar-scroll-position');
        if (savedScrollPosition !== null) {
          scrollableRef.current.scrollTop = parseInt(savedScrollPosition, 10);
        }
      }
    };

    // Use setTimeout to ensure the DOM is fully rendered
    const timeoutId = setTimeout(restoreScrollPosition, 0);
    
    return () => clearTimeout(timeoutId);
  }, [location.pathname]); // Restore when route changes

  // Also save scroll position when the page is about to unload
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (scrollableRef.current) {
        const scrollTop = scrollableRef.current.scrollTop;
        sessionStorage.setItem('sidebar-scroll-position', scrollTop.toString());
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const navSections = [
    {
      title: "MAIN",
      items: [
        { id: "dashboard", 
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
              <path d="M8 16.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z" />
              <path fillRule="evenodd" d="M4 4a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4Zm4-1.5v.75c0 .414.336.75.75.75h2.5a.75.75 0 0 0 .75-.75V2.5h1A1.5 1.5 0 0 1 14.5 4v12a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 16V4A1.5 1.5 0 0 1 7 2.5h1Z" clipRule="evenodd" />
              </svg>,
        label: "Dashboard", href: "/dashboard" },
        {
          id: "register",
          icon: <PhoneIcon />,
          label: "Register Device",
          href: "/registerDevice",
          badge: "New",
        },
        {
          id: "devices",
          icon: <List />,
          label: "My Devices",
          href: "/myDevices",
        },
        { id: "verify", icon: <Verified />, label: "Verify Device", href: "/verifyDevice" },
      ],
    },
    {
      title: "MANAGEMENT",
      items: [
        {
          id: "transfer",
          icon: <Recycle />,
          label: "Transfer Ownership",
          href: "/transferOwnership",
        },
        {
          id: "report",
          icon: <Siren />,
          label: "Report Lost/Stolen",
          href: "/reportLostStolen",
        },
        {
          id: "history",
          icon: <History />,
          label: "Device History",
          href: "/deviceHistory",
        },
      ],
    },
    {
      title: "ACCOUNT",
      items: [
        {
          id: "profile",
          icon: <Settings />,
          label: "Profile Settings",
          href: "/profileSettings",
        },
        {
          id: "notifications",
          icon: <Bell />,
          label: "Notifications",
          href: "/notifications",
        },
        {
          id: "support",
          icon: <HelpingHand />,
          label: "Help & Support",
          href: "/helpSupport",
        },
      ],
    },
    {
      title: "SYSTEM",
      items: [{ id: "logout", icon: <LogOut />, label: "Logout", href: "#", onClick: handleLogout }],
    },
  ];

  return (
    <div className="bg-white">
      {/* mobile Menu */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="md:hidden fixed top-4 left-4 z-50 bg-white rounded-lg p-2 shadow-lg border border-gray-200"
      >
        <span className="text-xl text-gray-900">
          <Menu />
        </span>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 z-40 w-72 h-screen bg-[#F4F4FF] shadow-xl transform ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out flex flex-col group`}
      >
        {/* Logo */}
        <div className="flex items-center bg-white justify-center p-6 border-b border-gray-500">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="w-16 h-16" />
          </div>
        </div>

        {/* Navigation (scrollable inside sidebar only) */}
        <div 
          ref={scrollableRef}
          className="flex-1 overflow-y-auto md:overflow-hidden md:group-hover:overflow-y-auto"
          style={{ scrollBehavior: 'auto' }} // Disable smooth scrolling when restoring position
        >
          <div className="py-6">
            {navSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-8">
                <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider px-6 mb-3">
                  {section.title}
                </h3>
                <div className="space-y-1">
                  {section.items.map((item) => {
                    if (item.onClick) {
                      return (
                        <button
                          key={item.id}
                          onClick={item.onClick}
                          className="w-full flex items-center px-6 py-3 text-sm font-medium transition-colors duration-200 text-gray-900 hover:bg-[#343264] hover:text-white text-left"
                        >
                          <span className="mr-3 text-lg">{item.icon}</span>
                          <span className="flex-1">{item.label}</span>
                          {item.badge && (
                            <span className="ml-2 px-2 py-1 text-xs bg-green-500 text-white rounded-full">
                              {item.badge}
                            </span>
                          )}
                        </button>
                      );
                    }
                    
                    return (
                      <Link
                        key={item.id}
                        to={item.href}
                        className={`flex items-center px-6 py-3 text-sm font-medium transition-colors duration-200 ${
                          currentPath === item.href
                            ? "bg-[#343264] text-white shadow-lg"
                            : "text-gray-900 hover:bg-[#343264] hover:text-white"
                        }`}
                      >
                        <span className="mr-3 text-lg">{item.icon}</span>
                        <span className="flex-1">{item.label}</span>
                        {item.badge && (
                          <span className="ml-2 px-2 py-1 text-xs bg-green-500 text-white rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>

      {/* mobile overlay */}
      {isMobileOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </div>
  );
}