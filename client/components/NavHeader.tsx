import { Search, Settings, Bell } from "lucide-react";

export default function NavHeader() {
  return (
    <div className="bg-primary-white rounded-[50px] p-4 flex items-center justify-between shadow-sm">
      <h1 className="text-4xl font-normal text-primary-black">Overview</h1>
      
      <div className="flex items-center space-x-9">
        {/* Search */}
        <div className="flex items-center space-x-2 bg-primary-bg rounded-[32px] px-4 py-4 w-[335px]">
          <Search size={32} className="text-primary-black" />
          <span className="text-primary-black text-base font-normal">Search</span>
        </div>
        
        {/* Settings Icon */}
        <button className="p-3 hover:bg-gray-100 rounded-full transition-colors">
          <Settings size={46} className="text-primary-black" />
        </button>
        
        {/* Notifications Icon with badge */}
        <button className="p-3 hover:bg-gray-100 rounded-full transition-colors relative">
          <Bell size={46} className="text-primary-black" />
          <div className="absolute top-2 right-2 w-4 h-4 bg-primary-black rounded-full"></div>
        </button>
        
        {/* Separator */}
        <div className="w-px h-7 bg-primary-grey"></div>
        
        {/* User Profile */}
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
            <span className="text-white font-medium">WB</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <span className="text-primary-grey text-sm">@williamB1111</span>
              <div className="bg-primary-green px-2.5 py-0.5 rounded-[32px]">
                <span className="text-primary-black text-base font-normal">Pro</span>
              </div>
            </div>
            <span className="text-primary-black text-2xl font-normal">William Blake</span>
          </div>
        </div>
      </div>
    </div>
  );
}
