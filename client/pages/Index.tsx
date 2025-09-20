import DashboardLayout from "../components/DashboardLayout";
import BalanceCard from "../components/BalanceCard";
import IncomeCard from "../components/IncomeCard";
import YourCardsCard from "../components/YourCardsCard";
import QuickTransfer from "../components/QuickTransfer";
import ExpensesCard from "../components/ExpensesCard";
import IncomeDonutCard from "../components/IncomeDonutCard";
import ExpenseDonutCard from "../components/ExpenseDonutCard";
import CurrencyMarket from "../components/CurrencyMarket";
import TransactionHistory from "../components/TransactionHistory";

export default function Index() {
  return (
    <DashboardLayout>
      <div className="space-y-4 lg:space-y-6 xl:space-y-8 w-full overflow-x-hidden">
        {/* Top Row - Balance, Income, Your Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-4 xl:gap-6 w-full">
          <div className="xl:col-span-1 min-w-0">
            <BalanceCard />
          </div>
          <div className="xl:col-span-1 min-w-0">
            <IncomeCard />
          </div>
          <div className="xl:col-span-1 min-w-0">
            <YourCardsCard />
          </div>
        </div>

        {/* Middle Row - Income/Expense Donuts, Currency Market */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-4 xl:gap-6 w-full">
          <div className="xl:col-span-1 min-w-0">
            <IncomeDonutCard />
          </div>
          <div className="xl:col-span-1 min-w-0">
            <ExpenseDonutCard />
          </div>
          <div className="xl:col-span-1 min-w-0">
            <CurrencyMarket />
          </div>
        </div>

        {/* Bottom Row - Transaction History, Quick Transfer, Expenses */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-4 xl:gap-6 w-full">
          <div className="lg:col-span-2 min-w-0">
            <TransactionHistory />
          </div>
          <div className="lg:col-span-1 flex flex-col space-y-3 lg:space-y-4 xl:space-y-6 min-w-0">
            <QuickTransfer />
            <ExpensesCard />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
