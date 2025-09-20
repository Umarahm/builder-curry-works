import { useState } from "react";
import {
  LayoutDashboard,
  Wallet,
  MessageSquare,
  Mail,
  BarChart3,
  CreditCard,
  LogOut,
} from "lucide-react";

const navigationItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Wallet, label: "Wallet", active: false },
  { icon: MessageSquare, label: "Messages", active: false },
  { icon: Mail, label: "Email", active: false },
  { icon: BarChart3, label: "Analytics", active: false },
  { icon: CreditCard, label: "Cards", active: false },
];

export default function Sidebar() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`fixed left-2 top-4 bottom-4 z-50 transition-all duration-300 ease-in-out ${isHovered ? "w-56 lg:w-64" : "w-16 lg:w-20"
        }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-full bg-primary-black rounded-[50px] flex flex-col items-center py-6 px-4">
        {/* Logo */}
        <div className="mb-14 relative">
          <div className="w-16 h-16 bg-primary-white rounded-2xl flex items-center justify-center relative">
            <div className="w-8 h-8 bg-primary-green rounded-full absolute top-2 right-2"></div>
            <span className="text-primary-black font-bold text-xl">R</span>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="flex flex-col space-y-6 flex-1">
          {navigationItems.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-center cursor-pointer group ${item.active ? "text-primary-green" : "text-white"
                }`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${item.active
                    ? "bg-primary-green/10 text-primary-green"
                    : "hover:bg-white/10"
                  }`}
              >
                <item.icon size={24} />
              </div>

              {/* Label on hover */}
              <div
                className={`ml-4 text-white font-medium transition-all duration-300 ${isHovered
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4 pointer-events-none"
                  }`}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Logout */}
        <div className="mt-auto">
          <div className="relative flex items-center cursor-pointer group text-white hover:text-primary-green">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center hover:bg-white/10 transition-colors">
              <LogOut size={24} />
            </div>

            {/* Logout label on hover */}
            <div
              className={`ml-4 text-white font-medium transition-all duration-300 ${isHovered
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-4 pointer-events-none"
                }`}
            >
              Logout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
