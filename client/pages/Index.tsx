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
      <div className="space-y-8">
        {/* Top Row - Balance, Income, Your Cards */}
        <div className="flex space-x-8">
          <BalanceCard />
          <IncomeCard />
          <YourCardsCard />
        </div>

        {/* Middle Row - Income/Expense Donuts, Currency Market */}
        <div className="flex space-x-8">
          <IncomeDonutCard />
          <ExpenseDonutCard />
          <CurrencyMarket />
        </div>

        {/* Right Column - Quick Transfer, Expenses */}
        <div className="flex justify-between">
          <div className="flex-1">
            <TransactionHistory />
          </div>
          <div className="flex flex-col space-y-8 ml-8">
            <QuickTransfer />
            <ExpensesCard />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
