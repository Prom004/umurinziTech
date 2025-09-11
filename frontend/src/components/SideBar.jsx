import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/img/logo.png";
// import { ChartBarIcon } from "@heroicons/react/24/solid";
import { Menu, Settings, Bell, HelpingHand, Recycle, LogOut, History, Siren, Verified, List, PhoneIcon } from "lucide-react";

export default function Sidebar({ activeItem = "register" }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const location = useLocation();
  const currentPath = location.pathname;

  const navSections = [
    {
      title: "MAIN",
      items: [
        { id: "dashboard", 
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
              <path d="M8 16.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z" />
              <path fill-rule="evenodd" d="M4 4a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4Zm4-1.5v.75c0 .414.336.75.75.75h2.5a.75.75 0 0 0 .75-.75V2.5h1A1.5 1.5 0 0 1 14.5 4v12a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 16V4A1.5 1.5 0 0 1 7 2.5h1Z" clip-rule="evenodd" />
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
        // {
        //   id: "report",
        //   icon: <Siren />,
        //   label: "Report Lost/Stolen",
        //   href: "/reportLostStolen",
        // },
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
      items: [{ id: "logout", icon: <LogOut />, label: "Logout", href: "/logout" }],
    },
  ];

  return (
    <div className="bg-white">
      {/* mobile Menu */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="md:hidden fixed top-4 left-4 z-50 bg-white rounded-lg p-2 shadow-lg"
      >
        <span className="text-xl">
          {" "}
          <Menu />{" "}
        </span>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 z-40 w-72 h-screen bg-primary shadow-xl transform ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out flex flex-col group`}
      >
        {/* Logo */}
        <div className="flex items-center bg-white justify-center py-8 px-3 border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="w-16 h-12" />
          </div>
        </div>

        {/* Navigation (scrollable inside sidebar only) */}
        <div className="flex-1 overflow-hidden group-hover:overflow-y-auto">
          <div className="py-6">
            {navSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-8">
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-6 mb-3">
                  {section.title}
                </h3>
                <div className="space-y-1">
                  {section.items.map((item) => (
                    <Link
                      key={item.id}
                      to={item.href}
                      className={`flex items-center px-6 py-3 text-sm font-medium transition-colors duration-200 ${
                        currentPath === item.href
                          ? "bg-gray-700 text-white shadow-lg"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white"
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
                  ))}
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
