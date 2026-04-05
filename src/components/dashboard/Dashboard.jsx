import SummaryCards from "./SummaryCards";
import BalanceChart from "./BalanceChart";
import CategoryChart from "./CategoryChart";
import Insights from "./Insights";
import Transactions from "../transactions/Transactions";

const Dashboard = () => {
  return (
    <div className="space-y-6 p-6">
      <SummaryCards />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <BalanceChart />
        </div>
        <CategoryChart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Transactions />
        </div>
        <Insights />
      </div>
    </div>
  );
};

export default Dashboard;