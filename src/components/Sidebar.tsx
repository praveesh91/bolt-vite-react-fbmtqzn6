import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  BarChart3, 
  Mail,
  LogOut,
  X 
} from 'lucide-react';

interface SidebarProps {
  onClose?: () => void;
}

const menuItems = [
  { icon: LayoutDashboard, text: 'Dashboard', active: true },
  { icon: Users, text: 'Users' },
  { icon: BarChart3, text: 'Analytics' },
  { icon: Mail, text: 'Messages' },
  { icon: Settings, text: 'Settings' },
];

export function Sidebar({ onClose }: SidebarProps) {
  return (
    <div className="bg-gray-900 text-white h-full flex flex-col">
      <div className="p-4 flex items-center justify-between">
        <h1 className="text-xl font-bold lg:text-2xl">Admin Panel</h1>
        <button 
          onClick={onClose}
          className="p-2 rounded-md hover:bg-gray-800 lg:hidden"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      
      <nav className="flex-1 pt-4">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`flex items-center px-4 lg:px-6 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors ${
              item.active ? 'bg-gray-800 text-white' : ''
            }`}
          >
            <item.icon className="h-5 w-5 mr-3" />
            {item.text}
          </a>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-800">
        <button className="flex items-center text-gray-300 hover:text-white transition-colors w-full">
          <LogOut className="h-5 w-5 mr-3" />
          Logout
        </button>
      </div>
    </div>
  );
}