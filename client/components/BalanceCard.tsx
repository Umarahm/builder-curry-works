import { Plus } from "lucide-react";

export default function BalanceCard() {
  return (
    <div className="bg-primary-green rounded-[46px] p-4 lg:p-6 xl:p-8 relative flex flex-col justify-center h-[200px] lg:h-[220px] xl:h-[240px] w-full min-w-[250px] lg:min-w-[280px] xl:min-w-[320px]">
      {/* Plus Icon */}
      <div className="absolute top-6 lg:top-8 xl:top-10 right-6 lg:right-8 xl:right-10 w-10 lg:w-12 xl:w-14 h-10 lg:h-12 xl:h-14 bg-primary-white rounded-full flex items-center justify-center">
        <Plus size={18} className="text-primary-black lg:w-5 lg:h-5 xl:w-6 xl:h-6" />
      </div>

      <div className="flex flex-col">
        {/* Title and Amount */}
        <div className="flex flex-col">
          <h3 className="text-primary-black text-lg lg:text-xl xl:text-2xl font-medium mb-2">
            Total Balance
          </h3>
          <div className="flex items-end space-x-2 lg:space-x-3 xl:space-x-4">
            <span className="text-primary-black text-3xl lg:text-4xl xl:text-5xl font-normal">
              $20,670
            </span>
            <span className="text-primary-black text-base lg:text-lg xl:text-xl font-normal mb-1 lg:mb-2 xl:mb-3">
              USD
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
