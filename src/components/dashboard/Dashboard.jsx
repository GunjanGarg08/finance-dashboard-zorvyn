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

// const Dashboard = () => {
//   return (
//     <div className="space-y-6">

//       {/* Cards Row */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow">
//           Card 1
//         </div>
//         <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow">
//           Card 2
//         </div>
//         <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow">
//           Card 3
//         </div>
//       </div>

//       {/* Charts + Insights */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-5 rounded-xl shadow">
//           Balance Chart
//         </div>
//         <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow">
//           Insights
//         </div>
//       </div>

//       {/* Transactions */}
//       <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow">
//         Transactions Table
//       </div>

//     </div>
//   );
// };

// export default Dashboard;
