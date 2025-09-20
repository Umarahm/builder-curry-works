import { ChevronDown } from "lucide-react";

export default function ExpensesCard() {
  const barHeights = [238, 142, 64, 206, 108]; // Heights for the bars
  const barColors = ["#00FF6B", "#00FF6B", "#000", "#00FF6B", "#00FF6B"]; // Colors for bars
  
  return (
    <div className="bg-primary-white rounded-[46px] p-8 h-[446px] w-[520px] flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-primary-black text-[30px] font-medium">Expenses</h3>
        <div className="bg-success-10 rounded-[32px] px-4 py-1.5 flex items-center space-x-1">
          <span className="text-primary-black text-base">Week</span>
          <ChevronDown size={16} className="text-primary-black" />
        </div>
      </div>
      
      {/* Chart */}
      <div className="flex-1 flex items-end justify-center space-x-6 relative">
        {/* Bars */}
        {barHeights.map((height, index) => (
          <div key={index} className="relative flex flex-col items-center">
            <div 
              className={`w-8 rounded-t-[17px]`}
              style={{ 
                height: `${height}px`, 
                backgroundColor: barColors[index] 
              }}
            />
            {/* Highlight annotation for the middle (black) bar */}
            {index === 2 && (
              <>
                <div className="absolute -top-10 bg-primary-bg rounded-[17px] px-3 py-1">
                  <span className="text-primary-black text-xl">+ $1,060</span>
                </div>
                {/* Point indicator */}
                <div className="absolute -top-4 w-[30px] h-[30px] bg-primary-black rounded-full border-[7px] border-primary-white flex items-center justify-center">
                  <div className="w-[11px] h-[11px] bg-primary-green rounded-full"></div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
