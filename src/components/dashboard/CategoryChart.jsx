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

              {/* Tooltip */}
              

              {/* Donut */}
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

              {/* ✅ FIXED Legend */}
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



// import {
//   PieChart,
//   Pie,
//   Tooltip,
//   ResponsiveContainer,
//   Legend,
// } from "recharts";
// import { useAppContext } from "../../context/AppContext";
// import { formatCurrency } from "../../utils/helpers";

// const COLORS = ["#ef4444", "#22c55e", "#3b82f6", "#f59e0b", "#8b5cf6"];

// const CategoryChart = () => {
//   const { transactions, darkMode } = useAppContext();

//   // ✅ Group expenses
//   const categoryMap = {};

//   transactions.forEach((t) => {
//     if (t.type === "expense") {
//       if (!categoryMap[t.category]) {
//         categoryMap[t.category] = 0;
//       }
//       categoryMap[t.category] += Number(t.amount);
//     }
//   });

//   // ✅ Attach colors directly
//   const data = Object.keys(categoryMap).map((key, index) => ({
//     name: key,
//     value: categoryMap[key],
//     fill: COLORS[index % COLORS.length], // 🔥 key change
//   }));

//   return (
//     <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm">
//       <h3 className="font-bold mb-4 text-2xl text-center">
//         Expenses by Category
//       </h3>

//       {data.length === 0 ? (
//         <p className="text-gray-500 dark:text-gray-400 text-xl text-center">
//           No expense data available
//         </p>
//       ) : (
//         <ResponsiveContainer width="100%" height={250}>
//           <PieChart>

//             {/* Tooltip */}
//             <Tooltip
//               contentStyle={{
//                 backgroundColor: darkMode ? "#1f2937" : "#ffffff",
//                 border: "none",
//                 borderRadius: "8px",
//               }}
//               formatter={(value) => formatCurrency(value)}
//             />

//             {/* Legend */}
//             <Legend
//               verticalAlign="bottom"
//               height={36}
//               wrapperStyle={{
//                 color: darkMode ? "#e5e7eb" : "#111827",
//               }}
//             />

//             {/* Donut Chart */}
//             <Pie
//               data={data}
//               dataKey="value"
//               nameKey="name"
//               innerRadius={60}
//               outerRadius={90}
//               paddingAngle={3}
//               label={({ percent }) =>
//                 `${(percent * 100).toFixed(0)}%`
//               }
//             />

//           </PieChart>
//         </ResponsiveContainer>
//       )}
//     </div>
//   );
// };

// export default CategoryChart;