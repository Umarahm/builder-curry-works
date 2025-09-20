import { Filter, ArrowUpDown, MoreHorizontal } from "lucide-react";

const transactions = [
  {
    company: "Apple TV+",
    logo: "📺",
    amount: "$110.00",
    date: "14 Apr, 2024",
    status: "Paid",
    statusColor: "bg-success-10 text-success-700",
  },
  {
    company: "Dribbble",
    logo: "🏀",
    amount: "$18.00",
    date: "16 Apr, 2024",
    status: "Overdue",
    statusColor: "bg-danger-10 text-danger-500",
  },
  {
    company: "Upwork",
    logo: "💼",
    amount: "$114.00",
    date: "26 Apr, 2024",
    status: "Paid",
    statusColor: "bg-success-10 text-success-700",
  },
  {
    company: "Esty",
    logo: "🛍️",
    amount: "$28.00",
    date: "30 Apr, 2024",
    status: "Pending",
    statusColor: "bg-warning-10 text-warning-600",
  },
];

export default function TransactionHistory() {
  return (
    <div className="bg-primary-white rounded-[46px] p-8 h-[542px] w-full flex flex-col space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <h3 className="text-primary-black text-[30px] font-medium">
          Currencies Market
        </h3>
        <div className="flex items-center space-x-4">
          <Filter size={46} className="text-primary-black cursor-pointer" />
          <ArrowUpDown
            size={46}
            className="text-primary-black cursor-pointer"
          />
        </div>
      </div>

      {/* Table Headers */}
      <div className="flex justify-between items-start text-primary-grey text-2xl">
        <div className="w-56">Name</div>
        <div className="w-30 text-center">Amount</div>
        <div className="w-44 text-center">Date</div>
        <div className="w-40 text-center">Status</div>
        <div className="w-12"></div>
      </div>

      {/* Transaction Rows */}
      <div className="flex flex-col space-y-4">
        {transactions.map((transaction, index) => (
          <div key={index} className="flex justify-between items-center py-2">
            {/* Company Name & Logo */}
            <div className="flex items-center space-x-4 w-56">
              <div className="w-16 h-16 bg-primary-bg rounded-2xl flex items-center justify-center text-2xl">
                {transaction.logo}
              </div>
              <span className="text-primary-black text-2xl">
                {transaction.company}
              </span>
            </div>

            {/* Amount */}
            <div className="w-30 text-center">
              <span className="text-primary-black text-2xl">
                {transaction.amount}
              </span>
            </div>

            {/* Date */}
            <div className="w-44 text-center">
              <span className="text-primary-black text-2xl">
                {transaction.date}
              </span>
            </div>

            {/* Status */}
            <div className="w-40 flex justify-center">
              <div
                className={`${transaction.statusColor} rounded-[32px] px-4 py-0.5 flex items-center space-x-1`}
              >
                <div
                  className={`w-1.5 h-1.5 rounded-full ${
                    transaction.status === "Paid"
                      ? "bg-success-700"
                      : transaction.status === "Overdue"
                        ? "bg-danger-500"
                        : "bg-warning-600"
                  }`}
                ></div>
                <span className="text-sm">{transaction.status}</span>
              </div>
            </div>

            {/* More Options */}
            <div className="w-12 flex justify-center">
              <MoreHorizontal
                size={46}
                className="text-primary-black cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
