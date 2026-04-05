import { useAppContext } from "../../context/AppContext";
import { formatCurrency } from "../../utils/helpers";

const SummaryCards = () => {
  const { transactions } = useAppContext();

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, curr) => acc + Number(curr.amount), 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, curr) => acc + Number(curr.amount), 0);

  const balance = income - expenses;

  const cards = [
    {
      title: "Total Balance",
      value: formatCurrency(balance),
      color: "from-blue-500 to-indigo-500",
      icon: "💰",
      trend: "+5.2%",
      positive: true,
    },
    {
      title: "Total Income",
      value: formatCurrency(income),
      color: "from-green-500 to-emerald-500",
      icon: "📈",
      trend: "+8%",
      positive: true,
    },
    {
      title: "Total Expenses",
      value: formatCurrency(expenses),
      color: "from-red-500 to-pink-500",
      icon: "📉",
      trend: "-3%",
      positive: false,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="relative p-5 rounded-2xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
          {/* Gradient Glow */}
          <div
            className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${card.color} opacity-20 rounded-full blur-3xl`}
          />

          {/* Top Row */}
          <div className="flex items-center justify-between">
            <p className="text-2xl font-medium text-black-600 dark:text-gray-300">
              {card.title}
            </p>

            <div
              className={`w-18 h-18 flex items-center justify-center rounded-full bg-gradient-to-r ${card.color} text-white text-4xl shadow-lg`}
            >
              {card.icon}
            </div>
          </div>

          {/* Value */}
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900 dark:text-white tracking-tight">
            {card.value}
          </h2>

          {/* Trend */}
          <div className="flex items-center gap-2 mt-3">
            <span
              className={`text-base font-semibold ${
                card.positive ? "text-green-500" : "text-red-500"
              }`}
            >
              {card.positive ? "↑" : "↓"} {card.trend}
            </span>

            <span className="text-lg text-gray-400">vs last month</span>
          </div>
        </div>
      ))}
    </div>
  );

  //   return (
  //     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  //       {cards.map((card, index) => (
  //         <div
  //           key={index}
  //           className="relative p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
  //         >
  //           {/* Gradient Glow */}
  //           <div
  //             className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${card.color} opacity-20 rounded-full blur-2xl`}
  //           />

  //           {/* Top Row */}
  //           <div className="flex items-center justify-between">
  //             <p className="text-sm text-gray-500 dark:text-gray-400">
  //               {card.title}
  //             </p>

  //             <div
  //               className={`w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r ${card.color} text-white text-lg shadow`}
  //             >
  //               {card.icon}
  //             </div>
  //           </div>

  //           {/* Value */}
  //           <h2 className="text-2xl font-bold mt-3 text-gray-800 dark:text-white">
  //             {card.value}
  //           </h2>

  //           {/* Trend */}
  //           <div className="flex items-center gap-2 mt-2">
  //             <span
  //               className={`text-sm font-medium ${
  //                 card.positive ? "text-green-500" : "text-red-500"
  //               }`}
  //             >
  //               {card.positive ? "↑" : "↓"} {card.trend}
  //             </span>
  //             <span className="text-xs text-gray-400">
  //               vs last month
  //             </span>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   );
};

export default SummaryCards;

// import { useAppContext } from "../../context/AppContext";
// import { formatCurrency } from "../../utils/helpers";

// const SummaryCards = () => {
//   const { transactions } = useAppContext();

//   // ✅ Total Income
//   const income = transactions
//     .filter((t) => t.type === "income")
//     .reduce((acc, curr) => acc + Number(curr.amount), 0);

//   // ✅ Total Expenses
//   const expenses = transactions
//     .filter((t) => t.type === "expense")
//     .reduce((acc, curr) => acc + Number(curr.amount), 0);

//   // ✅ Total Balance
//   const balance = income - expenses;

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

//       {/* Balance */}
//       <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm">
//         <p className="text-gray-500 dark:text-gray-400 text-sm">
//           Total Balance
//         </p>
//         <h2 className="text-2xl font-bold mt-1">
//           {formatCurrency(balance)}
//         </h2>
//       </div>

//       {/* Income */}
//       <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm">
//         <p className="text-gray-500 dark:text-gray-400 text-sm">
//           Total Income
//         </p>
//         <h2 className="text-2xl font-bold mt-1 text-green-500">
//           {formatCurrency(income)}
//         </h2>
//       </div>

//       {/* Expenses */}
//       <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm">
//         <p className="text-gray-500 dark:text-gray-400 text-sm">
//           Total Expenses
//         </p>
//         <h2 className="text-2xl font-bold mt-1 text-red-500">
//           {formatCurrency(expenses)}
//         </h2>
//       </div>

//     </div>
//   );
// };

// export default SummaryCards;

// import { useAppContext } from "../../context/AppContext";
// import { calculateSummary } from "../../utils/helpers";
// import { formatCurrency } from "../../utils/helpers";

// const Card = ({ title, value, color, icon, trend }) => (
//   <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition flex justify-between items-center">
//     <div>
//       <p className="text-gray-500 dark:text-gray-400 text-sm">{title}</p>

//       <h2 className="text-2xl font-bold mt-1">{formatCurrency(value)}</h2>

//       <p
//         className={`text-xs mt-1 ${
//           trend > 0 ? "text-green-500" : "text-red-500"
//         }`}
//       >
//         {trend > 0 ? "↑" : "↓"} {Math.abs(trend)}%
//       </p>
//     </div>

//     <div
//       className={`w-12 h-12 flex items-center justify-center rounded-full text-white ${color}`}
//     >
//       {icon}
//     </div>
//   </div>
// );

// const SummaryCards = () => {
//   const { transactions } = useAppContext();
//   const { income, expenses, balance } = calculateSummary(transactions);

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//       <Card
//         title="Total Balance"
//         value={balance}
//         color="bg-green-500"
//         icon="💰"
//         trend={5}
//       />
//       <Card
//         title="Income"
//         value={income}
//         color="bg-blue-500"
//         icon="📈"
//         trend={8}
//       />
//       <Card
//         title="Expenses"
//         value={expenses}
//         color="bg-red-500"
//         icon="📉"
//         trend={-3}
//       />
//     </div>
//   );
// };

// export default SummaryCards;
