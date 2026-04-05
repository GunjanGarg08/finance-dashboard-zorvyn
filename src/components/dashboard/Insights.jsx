import { useAppContext } from "../../context/AppContext";
import { getInsights } from "../../utils/helpers";

const Insights = () => {
  const { transactions } = useAppContext();
  const { topCategory, expenseChange } = getInsights(transactions);

  const isIncrease = expenseChange > 0;

  const totalTransactions = transactions.length;

  const avgTransaction =
    transactions.length > 0
      ? (
          transactions.reduce((acc, t) => acc + Number(t.amount), 0) /
          transactions.length
        ).toFixed(0)
      : 0;

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all">

      <h3 className="text-center text-3xl font-semibold mb-5 text-gray-800 dark:text-white">
        Insights
      </h3>

      <div className="space-y-5">

        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              Top Spending
            </p>
            <p className="font-semibold text-xl text-gray-800 dark:text-white">
              {topCategory || "N/A"}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Monthly Change
            </p>
            <p
              className={`font-semibold text-2xl ${
                isIncrease ? "text-red-500" : "text-green-500"
              }`}
            >
              {isIncrease ? "↑" : "↓"} {Math.abs(expenseChange)}%
            </p>
          </div>

          <div
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              isIncrease
                ? "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300"
                : "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300"
            }`}
          >
            {isIncrease ? "Spending Up" : "Spending Down"}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">

          <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
            <p className="text-xl font-bold text-gray-500 dark:text-gray-400">
              Transactions
            </p>
            <p className="font-semibold text-2xl text-gray-800 dark:text-white">
              {totalTransactions}
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
            <p className="text-xl font-bold text-gray-500 dark:text-gray-400">
              Avg Value
            </p>
            <p className="font-semibold text-2xl text-gray-800 dark:text-white">
              ${avgTransaction}
            </p>
          </div>

        </div>

        <div className="text-lg text-center p-2 rounded-lg bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300">
          {isIncrease
            ? "Your spending increased this month. Consider reviewing your expenses."
            : "Great job! Your spending is under control this month."}
        </div>

      </div>
    </div>
  );
};

export default Insights;