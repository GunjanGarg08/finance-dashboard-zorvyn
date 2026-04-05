import {
  PieChart,
  Pie,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { useAppContext } from "../../context/AppContext";
import { formatCurrency } from "../../utils/helpers";

const COLORS = ["#ef4444", "#22c55e", "#3b82f6", "#f59e0b", "#8b5cf6"];

const CategoryChart = () => {
  const { transactions, darkMode } = useAppContext();

  const categoryMap = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      if (!categoryMap[t.category]) {
        categoryMap[t.category] = 0;
      }
      categoryMap[t.category] += Number(t.amount);
    }
  });

  const data = Object.keys(categoryMap).map((key, index) => ({
    name: key,
    value: categoryMap[key],
    fill: COLORS[index % COLORS.length],
  }));

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
      <h3 className="font-bold mb-6 text-2xl text-center">
        Expenses by Category
      </h3>

      {data.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400 text-center">
          No expense data available
        </p>
      ) : (
        <div className="flex flex-col items-center justify-center">
          
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>

              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                innerRadius={70}
                outerRadius={100}
                paddingAngle={4}
                label={({ percent }) =>
                  `${(percent * 100).toFixed(0)}%`
                }
              />

              <Legend
                verticalAlign="bottom"
                align="center"
                iconType="circle"
                wrapperStyle={{
                  paddingTop: "20px",
                  fontSize: "14px",
                  color: darkMode ? "#e5e7eb" : "#374151",
                }}
              />

            </PieChart>
          </ResponsiveContainer>

        </div>
      )}
    </div>
  );
};

export default CategoryChart;