import { Plus } from "lucide-react";

export default function YourCardsCard() {
  return (
    <div className="bg-primary-black rounded-[46px] p-4 lg:p-6 xl:p-8 relative flex flex-col justify-center h-[200px] lg:h-[220px] xl:h-[240px] w-full min-w-[250px] lg:min-w-[280px] xl:min-w-[320px]">
      {/* Plus Icon */}
      <div className="absolute top-6 lg:top-8 xl:top-10 right-6 lg:right-8 xl:right-10 w-10 lg:w-12 xl:w-14 h-10 lg:h-12 xl:h-14 bg-primary-white rounded-full flex items-center justify-center">
        <Plus size={18} className="text-primary-black lg:w-5 lg:h-5 xl:w-6 xl:h-6" />
      </div>

      <div className="flex flex-col space-y-3 lg:space-y-4 xl:space-y-5">
        {/* Title */}
        <div className="flex flex-col">
          <h3 className="text-primary-white text-lg lg:text-xl xl:text-2xl font-medium mb-1">
            Your Cards
          </h3>
          <p className="text-gray-300 text-sm lg:text-base xl:text-lg">
            Manage your payment cards
          </p>
        </div>

        {/* Card Preview */}
        <div className="bg-gradient-to-r from-primary-green to-green-400 rounded-xl lg:rounded-2xl xl:rounded-[20px] p-2.5 lg:p-3 xl:p-4 relative overflow-hidden">
          <div className="flex flex-col space-y-1.5 lg:space-y-2 xl:space-y-2.5">
            <div className="flex justify-between items-start">
              <span className="text-primary-black text-xs lg:text-sm xl:text-base font-medium">
                VISA
              </span>
              <div className="w-5 lg:w-6 xl:w-8 h-3 lg:h-4 xl:h-5 bg-primary-black rounded opacity-80"></div>
            </div>
            <div className="text-primary-black text-sm lg:text-base xl:text-lg font-mono tracking-wider">
              •••• •••• •••• 4532
            </div>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-primary-black text-xs lg:text-sm xl:text-base opacity-80">
                  Card Holder
                </p>
                <p className="text-primary-black text-sm lg:text-base xl:text-lg font-medium">
                  John Doe
                </p>
              </div>
              <div>
                <p className="text-primary-black text-xs lg:text-sm xl:text-base opacity-80">
                  Expires
                </p>
                <p className="text-primary-black text-sm lg:text-base xl:text-lg font-medium">
                  12/26
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
