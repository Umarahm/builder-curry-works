import { ChevronDown, TrendingUp } from "lucide-react";

export default function IncomeCard() {
  return (
    <div className="bg-primary-white rounded-[46px] p-8 h-[352px] w-[615px] flex flex-col justify-between">
      <div className="flex flex-col space-y-2">
        {/* Header */}
        <div className="flex justify-between items-start">
          <h3 className="text-primary-black text-[30px] font-medium">Income</h3>
          <div className="bg-success-10 rounded-[32px] px-4 py-1.5 flex items-center space-x-1">
            <span className="text-primary-black text-base">Month</span>
            <ChevronDown size={16} className="text-primary-black" />
          </div>
        </div>

        {/* Status Indicator */}
        <div className="bg-success-10 rounded-[32px] px-3 py-1 flex items-center space-x-1 w-fit">
          <div className="w-6 h-6 bg-primary-green rounded-full flex items-center justify-center">
            <TrendingUp size={12} className="text-primary-black" />
          </div>
          <span className="text-success-700 text-base">+14.4%</span>
        </div>

        {/* Amount */}
        <div className="absolute bottom-16 right-8">
          <span className="text-primary-black text-xl">+ $1,060</span>
        </div>
      </div>

      {/* Chart Area */}
      <div className="flex-1 relative mt-4">
        {/* Simplified Chart Representation */}
        <div className="h-[188px] flex items-end justify-between relative">
          {/* Chart Lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 550 188">
            {/* Background line */}
            <path
              d="M1 150 Q138 120, 275 140 Q412 160, 549 130"
              stroke="black"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            {/* Main green line */}
            <path
              d="M1 100 Q138 80, 275 90 Q412 100, 549 70"
              stroke="#00FF6B"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            {/* Fill area under green line */}
            <path
              d="M1 100 Q138 80, 275 90 Q412 100, 549 70 L549 188 L1 188 Z"
              fill="url(#greenGradient)"
            />
            <defs>
              <linearGradient
                id="greenGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "#CCFFCD", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#CCFFCD", stopOpacity: 0 }}
                />
              </linearGradient>
            </defs>
            {/* Point indicator */}
            <circle
              cx="275"
              cy="90"
              r="8"
              fill="black"
              stroke="white"
              strokeWidth="4"
            />
            <circle cx="275" cy="90" r="3" fill="#00FF6B" />
          </svg>
        </div>
      </div>

      {/* Month Labels */}
      <div className="flex justify-between mt-4">
        <span className="text-primary-grey text-xl">Jan</span>
        <span className="text-primary-grey text-xl">Feb</span>
        <span className="text-primary-grey text-xl">Mar</span>
        <span className="text-primary-grey text-xl">Apr</span>
      </div>
    </div>
  );
}
