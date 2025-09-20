import { BarChart3 } from "lucide-react";

export default function IncomeDonutCard() {
  return (
    <div className="bg-primary-white rounded-[46px] p-8 h-[303px] w-[297px] flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-start space-x-4">
        <div className="flex flex-col space-y-4">
          <div className="w-16 h-16 bg-success-10 rounded-full flex items-center justify-center">
            <BarChart3 size={32} className="text-success-700" />
          </div>
          <h3 className="text-primary-black text-[30px] font-medium">Income</h3>
        </div>
        
        {/* Donut Chart */}
        <div className="relative w-[148px] h-[148px]">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="35"
              fill="none"
              stroke="#F3F4F7"
              strokeWidth="12"
            />
            {/* Progress circle */}
            <circle
              cx="50"
              cy="50"
              r="35"
              fill="none"
              stroke="#00FF6B"
              strokeWidth="12"
              strokeDasharray={`${75 * 2.2} ${25 * 2.2}`}
              strokeLinecap="round"
              className="drop-shadow-lg"
            />
          </svg>
          {/* Center indicator */}
          <div className="absolute top-2 right-8 w-6 h-6 bg-primary-green rounded-full border-2 border-white"></div>
        </div>
      </div>
      
      {/* Amount */}
      <div className="text-primary-black text-[60px] font-normal">$1,400</div>
    </div>
  );
}
