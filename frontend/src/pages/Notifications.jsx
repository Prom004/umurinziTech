import React, { useState } from 'react';
import Sidebar from '../components/SideBar';
import { Bell, Settings, Check, X, Clock, Shield, Smartphone, Mail, MessageSquare, Filter } from 'lucide-react';

export default function Notifications() {
  const [filter, setFilter] = useState('all');
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'security',
      title: 'Security Alert',
      message: 'Your iPhone 15 Pro has been marked as stolen. We recommend contacting local authorities.',
      time: '2 minutes ago',
      read: false,
      priority: 'high',
      icon: Shield
    },
    {
      id: 2,
      type: 'device',
      title: 'Device Registration Confirmed',
      message: 'Your MacBook Pro M3 has been successfully registered in the system.',
      time: '1 hour ago',
      read: true,
      priority: 'normal',
      icon: Smartphone
    },
    {
      id: 3,
      type: 'transfer',
      title: 'Transfer Request Received',
      message: 'John Doe has requested to transfer ownership of Samsung Galaxy A54 to you.',
      time: '3 hours ago',
      read: false,
      priority: 'normal',
      icon: MessageSquare
    },
    {
      id: 4,
      type: 'system',
      title: 'System Update',
      message: 'New security features have been added to enhance device protection.',
      time: '1 day ago',
      read: true,
      priority: 'low',
      icon: Settings
    },
    {
      id: 5,
      type: 'security',
      title: 'Login from New Device',
      message: 'Someone logged into your account from a new device in New York, NY.',
      time: '2 days ago',
      read: false,
      priority: 'high',
      icon: Shield
    }
  ]);

  const markAsRead = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, read: true })));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
  };

  const filteredNotifications = notifications.filter(notif => {
    if (filter === 'all') return true;
    if (filter === 'unread') return !notif.read;
    return notif.type === filter;
  });

  const unreadCount = notifications.filter(notif => !notif.read).length;

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'border-l-red-500 bg-red-50/50';
      case 'normal': return 'border-l-blue-500 bg-blue-50/50';
      case 'low': return 'border-l-gray-400 bg-gray-50/50';
      default: return 'border-l-gray-400 bg-gray-50/50';
    }
  };

  const getTypeIcon = (IconComponent, type) => {
    const colorMap = {
      security: 'text-red-600',
      device: 'text-blue-600',
      transfer: 'text-green-600',
      system: 'text-gray-600'
    };
    return <IconComponent className={`w-5 h-5 ${colorMap[type] || 'text-gray-600'}`} />;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar activeItem="notifications" />
      
      <div className="md:ml-72 p-3 sm:p-4 lg:p-8">
        {/* Header Section */}
        <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 sm:mb-2 flex items-center">
                <Bell className='w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 mr-2 sm:mr-3'/>
                Notifications
                {unreadCount > 0 && (
                  <span className="ml-2 sm:ml-3 px-2 py-1 bg-red-500 text-white text-xs sm:text-sm rounded-full font-medium">
                    {unreadCount}
                  </span>
                )}
              </h1>
              <p className="text-sm sm:text-base text-gray-600">
                Stay updated on your device activities and security alerts
              </p>
            </div>
            
            {unreadCount > 0 && (
              <button
                onClick={markAllAsRead}
                className="w-full sm:w-auto px-4 py-2 text-sm btn-primary text-white rounded-xl font-medium transition-colors"
              >
                Mark All as Read
              </button>
            )}
          </div>
        </div>

        {/* Filter Section */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6 shadow-sm">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Filter:</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {[
                { key: 'all', label: 'All', count: notifications.length },
                { key: 'unread', label: 'Unread', count: unreadCount },
                { key: 'security', label: 'Security', count: notifications.filter(n => n.type === 'security').length },
                { key: 'device', label: 'Devices', count: notifications.filter(n => n.type === 'device').length },
                { key: 'transfer', label: 'Transfers', count: notifications.filter(n => n.type === 'transfer').length }
              ].map(({ key, label, count }) => (
                <button
                  key={key}
                  onClick={() => setFilter(key)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    filter === key
                      ? 'bg-indigo-100 text-indigo-700 border border-indigo-200'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 border border-transparent'
                  }`}
                >
                  {label} {count > 0 && `(${count})`}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Notifications List */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="p-4 sm:p-6 border-b border-gray-200">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              Recent Activity
            </h2>
          </div>

          {filteredNotifications.length > 0 ? (
            <div className="divide-y divide-gray-100">
              {filteredNotifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`border-l-4 ${getPriorityColor(notification.priority)} ${
                    !notification.read ? 'bg-blue-50/30' : 'bg-white hover:bg-gray-50/50'
                  } transition-colors`}
                >
                  <div className="p-4 sm:p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start space-x-3 flex-1 min-w-0">
                        <div className="flex-shrink-0 mt-1">
                          {getTypeIcon(notification.icon, notification.type)}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <h3 className={`text-sm sm:text-base font-semibold ${
                              !notification.read ? 'text-gray-900' : 'text-gray-700'
                            } truncate`}>
                              {notification.title}
                            </h3>
                            {!notification.read && (
                              <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2"></div>
                            )}
                          </div>
                          
                          <p className="text-xs sm:text-sm text-gray-600 mt-1 pr-4">
                            {notification.message}
                          </p>
                          
                          <div className="flex items-center justify-between mt-2 sm:mt-3">
                            <div className="flex items-center space-x-1 text-xs text-gray-500">
                              <Clock className="w-3 h-3" />
                              <span>{notification.time}</span>
                            </div>
                            
                            <div className="flex items-center space-x-2">
                              {!notification.read && (
                                <button
                                  onClick={() => markAsRead(notification.id)}
                                  className="p-1.5 rounded-lg hover:bg-green-100 text-green-600 transition-colors"
                                  title="Mark as read"
                                >
                                  <Check className="w-4 h-4" />
                                </button>
                              )}
                              <button
                                onClick={() => deleteNotification(notification.id)}
                                className="p-1.5 rounded-lg hover:bg-red-100 text-red-600 transition-colors"
                                title="Delete notification"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 sm:py-12 px-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bell className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                No notifications found
              </h3>
              <p className="text-sm text-gray-500">
                {filter === 'all' 
                  ? "You're all caught up! No notifications to show."
                  : `No ${filter} notifications at this time.`
                }
              </p>
            </div>
          )}
        </div>

        {/* Notification Settings */}
        <div className="bg-white rounded-2xl shadow-sm mt-4 sm:mt-6 p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                Notification Preferences
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Customize how you receive notifications
              </p>
            </div>
            <button className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-medium transition-colors flex items-center space-x-2">
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Settings</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}