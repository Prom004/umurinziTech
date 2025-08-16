import React from "react";
import { useState } from "react";
import logo from "../assets/img/logo.png";
import { ChartBarIcon } from "@heroicons/react/24/solid";
import { Menu, Settings, Bell, HelpingHand, Recycle, LogOut, History, Siren, Verified, List, PhoneIcon } from "lucide-react";

export default function Sidebar({ activeItem = "register" }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navSections = [
    {
      title: "MAIN",
      items: [
        { id: "dashboard", 
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
              <path d="M8 16.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z" />
              <path fill-rule="evenodd" d="M4 4a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4Zm4-1.5v.75c0 .414.336.75.75.75h2.5a.75.75 0 0 0 .75-.75V2.5h1A1.5 1.5 0 0 1 14.5 4v12a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 16V4A1.5 1.5 0 0 1 7 2.5h1Z" clip-rule="evenodd" />
              </svg>,
        label: "Dashboard", href: "#" },
        {
          id: "register",
          icon: <PhoneIcon />,
          label: "Register Device",
          href: "#",
          badge: "New",
        },
        {
          id: "devices",
          icon: <List />,
          label: "My Devices",
          href: "/MyDevices",
        },
        { id: "verify", icon: <Verified />, label: "Verify Device", href: "#" },
      ],
    },
    {
      title: "MANAGEMENT",
      items: [
        {
          id: "transfer",
          icon: <Recycle />,
          label: "Transfer Ownership",
          href: "#",
        },
        {
          id: "report",
          icon: <Siren />,
          label: "Report Lost/Stolen",
          href: "#",
        },
        {
          id: "history",
          icon: <History />,
          label: "Device History",
          href: "#",
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
          href: "#",
        },
        {
          id: "notifications",
          icon: <Bell />,
          label: "Notifications",
          href: "#",
        },
        {
          id: "support",
          icon: <HelpingHand />,
          label: "Help & Support",
          href: "#",
        },
      ],
    },
    {
      title: "SYSTEM",
      items: [{ id: "logout", icon: <LogOut />, label: "Logout", href: "#" }],
    },
  ];

  return (
    <>
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
        className={`fixed left-0 top-0 z-40 w-72 h-screen bg-white/95 backdrop-blur-lg shadow-xl transform ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out flex flex-col group`}
      >
        {/* Logo */}
        <div className="flex items-center justify-center py-8 px-6 border-b border-gray-100">
          <img src={logo} alt="logo" className="w-24" />
        </div>

        {/* Navigation (scrollable inside sidebar only) */}
        <div className="flex-1 overflow-hidden group-hover:overflow-y-auto">
          <div className="py-6">
            {navSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-8">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 mb-3">
                  {section.title}
                </h3>
                <div className="space-y-1">
                  {section.items.map((item) => (
                    <a
                      key={item.id}
                      href={item.href}
                      className={`flex items-center px-6 py-3 text-sm font-medium transition-colors duration-200 ${
                        activeItem === item.id
                          ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg"
                          : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                      }`}
                    >
                      <span className="mr-3 text-lg">{item.icon}</span>
                      <span className="flex-1">{item.label}</span>
                      {item.badge && (
                        <span className="ml-2 px-2 py-1 text-xs bg-indigo-500 text-white rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </a>
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
    </>
  );
}
