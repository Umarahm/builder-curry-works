import { CreditCard } from "lucide-react";

export default function ExpenseDonutCard() {
  return (
    <div className="bg-primary-white rounded-[46px] p-6 lg:p-8 h-[250px] lg:h-[280px] xl:h-[303px] w-full min-w-[250px] lg:min-w-[280px] xl:min-w-[297px] flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-start space-x-4">
        <div className="flex flex-col space-y-4">
          <div className="w-16 h-16 bg-danger-10 rounded-full flex items-center justify-center">
            <CreditCard size={32} className="text-danger-500" />
          </div>
          <h3 className="text-primary-black text-xl lg:text-2xl xl:text-[30px] font-medium">Expenses</h3>
        </div>

        {/* Donut Chart */}
        <div className="relative w-[148px] h-[148px]">
          <svg
            className="w-full h-full transform -rotate-90"
            viewBox="0 0 100 100"
          >
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
              stroke="#FF6756"
              strokeWidth="12"
              strokeDasharray={`${50 * 2.2} ${50 * 2.2}`}
              strokeLinecap="round"
              className="drop-shadow-lg"
            />
          </svg>
          {/* Center text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-primary-grey text-lg lg:text-xl">50%</span>
          </div>
        </div>
      </div>

      {/* Amount */}
      <div className="text-primary-black text-3xl lg:text-4xl xl:text-[60px] font-normal">$2,080</div>
    </div>
  );
}
