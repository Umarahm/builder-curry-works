import { TrendingUp, TrendingDown } from "lucide-react";

const currencies = [
  {
    code: "USD",
    rate: "0.73",
    amount: "105.27",
    change: "+14.4%",
    trend: "up",
    flag: "🇺🇸"
  },
  {
    code: "EUR", 
    rate: "-0.0086",
    amount: "1.0656",
    change: "-0.67%",
    trend: "down",
    flag: "🇪🇺"
  }
];

export default function CurrencyMarket() {
  return (
    <div className="bg-primary-white rounded-[46px] p-8 h-[303px] w-[466px] flex flex-col space-y-8">
      <h3 className="text-primary-black text-[30px] font-medium">Currencies Market</h3>
      
      <div className="flex flex-col space-y-6">
        {currencies.map((currency, index) => (
          <div key={index} className="flex justify-between items-center">
            {/* Left side - Flag and Currency Info */}
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-2xl">
                {currency.flag}
              </div>
              <div className="flex flex-col">
                <span className="text-primary-black text-[30px] font-normal">{currency.code}</span>
                <span className="text-primary-grey text-xl">{currency.rate}</span>
              </div>
            </div>
            
            {/* Right side - Amount and Trend */}
            <div className="flex flex-col items-end space-y-1.5">
              <span className="text-primary-black text-[30px] font-normal">{currency.amount}</span>
              <div className="flex items-center space-x-0.5">
                {currency.trend === "up" ? (
                  <TrendingUp size={24} className="text-success-700" />
                ) : (
                  <TrendingDown size={24} className="text-danger-500" />
                )}
                <span className={`text-xl ${
                  currency.trend === "up" ? "text-success-700" : "text-danger-500"
                }`}>
                  {currency.change}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
