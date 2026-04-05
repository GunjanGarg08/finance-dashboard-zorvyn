import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { useAppContext } from "../../context/AppContext";
import { formatCurrency } from "../../utils/helpers";

const BalanceChart = () => {
  const { transactions, darkMode } = useAppContext();

  const monthlyData = {};

  transactions.forEach((t) => {
    const date = new Date(t.date);
    const month = date.toLocaleString("default", { month: "short" });

    if (!monthlyData[month]) {
      monthlyData[month] = 0;
    }

    if (t.type === "income") {
      monthlyData[month] += Number(t.amount);
    } else {
      monthlyData[month] -= Number(t.amount);
    }
  });

  const data = Object.keys(monthlyData).map((month) => ({
    name: month,
    value: monthlyData[month],
  }));

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm">
      <h3 className="font-bold mb-2 text-2xl">Balance Over Time</h3>

      <p className="text-xl text-gray-500 dark:text-gray-400 mb-5">
        Monthly net balance trend based on income and expenses
      </p>

      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={data}>
        
          <defs>
            <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={darkMode ? "#60a5fa" : "#3b82f6"}
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor={darkMode ? "#60a5fa" : "#3b82f6"}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>

          
          <CartesianGrid
            strokeDasharray="3 3"
            stroke={darkMode ? "#374151" : "#e5e7eb"}
          />

          <XAxis dataKey="name" stroke={darkMode ? "#9ca3af" : "#6b7280"} />

          <YAxis
            stroke={darkMode ? "#9ca3af" : "#6b7280"}
            tickFormatter={(val) => `$${val}`}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: darkMode ? "#1f2937" : "#ffffff",
              border: "none",
              borderRadius: "8px",
            }}
            labelStyle={{
              color: darkMode ? "#e5e7eb" : "#111827",
            }}
            formatter={(value) => formatCurrency(value)}
          />

          <Area
            type="monotone"
            dataKey="value"
            stroke={darkMode ? "#60a5fa" : "#3b82f6"}
            fill="url(#colorBalance)"
            strokeWidth={3}
            dot={{ r: 3 }}
            activeDot={{ r: 6 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BalanceChart;