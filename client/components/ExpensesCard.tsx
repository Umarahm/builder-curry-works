import { ChevronDown } from "lucide-react";

export default function ExpensesCard() {
  const barHeights = [120, 80, 40, 100, 60]; // Reduced heights for the bars
  const barColors = ["#00FF6B", "#00FF6B", "#000", "#00FF6B", "#00FF6B"]; // Colors for bars

  return (
    <div className="bg-primary-white rounded-[46px] p-4 lg:p-5 xl:p-6 h-[280px] lg:h-[300px] xl:h-[320px] w-full min-w-[280px] lg:min-w-[320px] xl:min-w-[360px] flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 lg:mb-5 xl:mb-6">
        <h3 className="text-primary-black text-lg lg:text-xl xl:text-2xl font-medium">Expenses</h3>
        <div className="bg-success-10 rounded-[32px] px-3 lg:px-4 xl:px-4 py-1 lg:py-1.5 xl:py-1.5 flex items-center space-x-1">
          <span className="text-primary-black text-sm lg:text-base xl:text-base">Week</span>
          <ChevronDown size={14} className="text-primary-black lg:w-4 lg:h-4 xl:w-4 xl:h-4" />
        </div>
      </div>

      {/* Chart */}
      <div className="flex-1 flex items-end justify-center space-x-4 lg:space-x-5 xl:space-x-6 relative">
        {/* Bars */}
        {barHeights.map((height, index) => (
          <div key={index} className="relative flex flex-col items-center">
            <div
              className={`w-6 lg:w-7 xl:w-8 rounded-t-[17px]`}
              style={{
                height: `${height}px`,
                backgroundColor: barColors[index],
              }}
            />
            {/* Highlight annotation for the middle (black) bar */}
            {index === 2 && (
              <>
                <div className="absolute -top-8 lg:-top-9 xl:-top-10 bg-primary-bg rounded-[17px] px-2 lg:px-2.5 xl:px-3 py-0.5 lg:py-1 xl:py-1">
                  <span className="text-primary-black text-sm lg:text-base xl:text-lg">+ $1,060</span>
                </div>
                {/* Point indicator */}
                <div className="absolute -top-3 lg:-top-3.5 xl:-top-4 w-[20px] lg:w-[25px] xl:w-[30px] h-[20px] lg:h-[25px] xl:h-[30px] bg-primary-black rounded-full border-[4px] lg:border-[5px] xl:border-[7px] border-primary-white flex items-center justify-center">
                  <div className="w-[6px] lg:w-[8px] xl:w-[11px] h-[6px] lg:h-[8px] xl:h-[11px] bg-primary-green rounded-full"></div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
