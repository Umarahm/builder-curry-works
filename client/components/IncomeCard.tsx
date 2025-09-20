import { TrendingUp } from "lucide-react";

export default function IncomeCard() {
  return (
    <div className="bg-primary-white rounded-[46px] p-4 lg:p-6 xl:p-8 relative flex flex-col justify-between h-[200px] lg:h-[220px] xl:h-[240px] w-full min-w-[250px] lg:min-w-[280px] xl:min-w-[320px] border border-gray-100">
      {/* Trending Up Icon */}
      <div className="absolute top-8 lg:top-10 xl:top-12 right-8 lg:right-10 xl:right-12 w-12 lg:w-14 xl:w-16 h-12 lg:h-14 xl:h-16 bg-success-10 rounded-full flex items-center justify-center">
        <TrendingUp size={20} className="text-primary-green lg:w-6 lg:h-6 xl:w-6 xl:h-6" />
      </div>

      <div className="flex flex-col space-y-4 lg:space-y-5 xl:space-y-6">
        {/* Title and Amount */}
        <div className="flex flex-col">
          <h3 className="text-primary-black text-lg lg:text-xl xl:text-2xl font-medium mb-2">
            Total Income
          </h3>
          <div className="flex items-end space-x-2 lg:space-x-3 xl:space-x-4">
            <span className="text-primary-black text-3xl lg:text-4xl xl:text-5xl font-normal">
              $15,420
            </span>
            <span className="text-primary-black text-base lg:text-lg xl:text-xl font-normal mb-1 lg:mb-2 xl:mb-3">
              USD
            </span>
          </div>
        </div>

        {/* Percentage Change */}
        <div className="flex items-center space-x-2">
          <div className="bg-success-10 rounded-full px-3 lg:px-4 xl:px-5 py-1.5 lg:py-2 xl:py-2.5">
            <span className="text-primary-green text-sm lg:text-base xl:text-lg font-medium">
              +12.5%
            </span>
          </div>
          <span className="text-gray-500 text-sm lg:text-base xl:text-lg">
            from last month
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full">
          <div className="w-full bg-gray-100 rounded-full h-2 lg:h-2.5 xl:h-3">
            <div className="bg-primary-green h-2 lg:h-2.5 xl:h-3 rounded-full" style={{ width: "75%" }}></div>
          </div>
          <div className="flex justify-between mt-2 lg:mt-3 xl:mt-4">
            <span className="text-gray-500 text-xs lg:text-sm xl:text-base">
              Goal: $20,000
            </span>
            <span className="text-primary-black text-xs lg:text-sm xl:text-base font-medium">
              75%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
