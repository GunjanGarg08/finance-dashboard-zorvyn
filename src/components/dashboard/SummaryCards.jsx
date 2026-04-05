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
          <div
            className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${card.color} opacity-20 rounded-full blur-3xl`}
          />

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

          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900 dark:text-white tracking-tight">
            {card.value}
          </h2>

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
};
export default SummaryCards;