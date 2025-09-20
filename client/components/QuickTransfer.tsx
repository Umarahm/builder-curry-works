import { Plus, Send } from "lucide-react";

const contacts = [
  { name: "Victoria", avatar: "👩‍💼", bgColor: "bg-orange-100" },
  { name: "David J.", avatar: "👨‍💻", bgColor: "bg-blue-100" },
  { name: "Mike", avatar: "👨‍🎨", bgColor: "bg-yellow-100" },
  { name: "Steven", avatar: "👨‍🔬", bgColor: "bg-purple-100" },
];

export default function QuickTransfer() {
  return (
    <div className="bg-primary-white rounded-[46px] p-8 h-[399px] w-[520px] flex flex-col justify-between">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="text-primary-black text-[30px] font-medium">Quick Transfer</h3>
        <span className="text-info-500 text-2xl cursor-pointer hover:underline">View all</span>
      </div>
      
      {/* Contacts */}
      <div className="flex justify-between">
        {contacts.map((contact, index) => (
          <div 
            key={index} 
            className={`${contact.bgColor}/50 rounded-[32px] p-2 flex flex-col items-center space-y-2 w-20`}
          >
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-2xl">
              {contact.avatar}
            </div>
            <span className="text-primary-black text-base text-center">{contact.name}</span>
          </div>
        ))}
        
        {/* Add Contact Button */}
        <div className="border-2 border-dashed border-primary-black rounded-[32px] p-2 flex flex-col items-center justify-center space-y-2 w-20 h-[129px]">
          <div className="w-16 h-16 bg-primary-white rounded-full flex items-center justify-center">
            <Plus size={24} className="text-primary-black" />
          </div>
        </div>
      </div>
      
      {/* Amount Input */}
      <div className="bg-primary-bg rounded-[50px] px-6 py-3.5 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
            🇬🇧
          </div>
          <span className="text-primary-black text-[40px] font-normal">$2,760</span>
        </div>
        
        <div className="w-12 h-12 bg-primary-white rounded-full flex items-center justify-center relative">
          <div className="absolute inset-0 bg-primary-white rounded-full"></div>
          <Send size={20} className="text-primary-black relative z-10" />
        </div>
      </div>
    </div>
  );
}
