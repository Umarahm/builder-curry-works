import { Plus, Download, Send } from "lucide-react";

export default function BalanceCard() {
  return (
    <div className="bg-primary-green rounded-[46px] p-8 relative flex flex-col justify-between h-[352px] w-[615px]">
      {/* Plus Icon */}
      <div className="absolute top-12 right-12 w-16 h-16 bg-primary-white rounded-full flex items-center justify-center">
        <Plus size={24} className="text-primary-black" />
      </div>

      <div className="flex flex-col space-y-6">
        {/* Title and Amount */}
        <div className="flex flex-col">
          <h3 className="text-primary-black text-[30px] font-medium mb-2">
            Total Balance
          </h3>
          <div className="flex items-end space-x-4">
            <span className="text-primary-black text-[72px] font-normal">
              $20,670
            </span>
            <span className="text-primary-black text-[30px] font-normal mb-4">
              USD
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-7">
          <button className="flex-1 bg-primary-white rounded-[50px] py-5 px-8 flex items-center justify-center space-x-1">
            <span className="text-primary-black text-2xl font-normal">
              Deposit
            </span>
            <div className="w-8 h-8 bg-success-10 rounded-full flex items-center justify-center ml-1">
              <Download size={16} className="text-primary-black" />
            </div>
          </button>

          <button className="flex-1 bg-primary-black rounded-[50px] py-5 px-8 flex items-center justify-center space-x-1">
            <span className="text-primary-white text-2xl font-normal">
              Send
            </span>
            <Send size={16} className="text-primary-white ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
