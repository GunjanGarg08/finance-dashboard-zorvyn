import { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import {
  filterTransactions,
  sortTransactions,
  exportToCSV,
} from "../../utils/helpers";

const TransactionTable = ({ setIsOpen, setEditData }) => {
  const { transactions, setTransactions, filters, role } =
    useAppContext();

  const [sortBy, setSortBy] = useState("");

  let filtered = filterTransactions(transactions, filters);
  filtered = sortTransactions(filtered, sortBy);

  const handleDelete = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  return (
    <div>

      {/* Controls */}
      <div className="flex justify-between items-center mb-4 flex-wrap gap-3">
        <select
          onChange={(e) => setSortBy(e.target.value)}
          className="px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border"
        >
          <option value="">Sort By</option>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>

        <button
          onClick={() => exportToCSV(filtered)}
          className="bg-blue-500 hover:bg-blue-600 transition text-white px-4 py-2 rounded-lg shadow"
        >
          Export CSV
        </button>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700">

        <table className="w-full text-sm">

          {/* Header */}
          <thead className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
            <tr>
              <th className="py-3 px-4 text-left">Date</th>
              <th className="text-left">Category</th>
              <th className="text-left">Amount</th>
              <th className="text-left">Type</th>
              {role === "admin" && <th className="text-left">Actions</th>}
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-8 text-gray-500">
                  No transactions found 😔
                </td>
              </tr>
            ) : (
              filtered.map((t) => (
                <tr
                  key={t.id}
                  className="border-t hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                >
                  <td className="py-3 px-4">{t.date}</td>

                  <td className="font-medium">{t.category}</td>

                  <td
                    className={`font-semibold ${
                      t.type === "income"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    ₹{Number(t.amount).toLocaleString()}
                  </td>

                  <td>
                    <span
                      className={`px-3 py-1 text-xs rounded-full ${
                        t.type === "income"
                          ? "bg-green-100 text-green-600 dark:bg-green-900"
                          : "bg-red-100 text-red-600 dark:bg-red-900"
                      }`}
                    >
                      {t.type}
                    </span>
                  </td>

                  {role === "admin" && (
                    <td className="flex gap-3 py-3">
                      <button
                        onClick={() => {
                          setEditData(t);
                          setIsOpen(true);
                        }}
                        className="text-blue-500 hover:underline"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(t.id)}
                        className="text-red-500 hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default TransactionTable;


// import { useState } from "react";
// import { useAppContext } from "../../context/AppContext";
// import {
//   filterTransactions,
//   sortTransactions,
//   exportToCSV,
// } from "../../utils/helpers";

// const TransactionTable = ({ setIsOpen, setEditData }) => {
//   const { transactions, setTransactions, filters, role } =
//     useAppContext();

//   const [sortBy, setSortBy] = useState("");

//   let filtered = filterTransactions(transactions, filters);
//   filtered = sortTransactions(filtered, sortBy);

//   const handleDelete = (id) => {
//     setTransactions(transactions.filter((t) => t.id !== id));
//   };

//   return (
//     <div>
//       {/* Controls */}
//       <div className="flex justify-between mb-4 flex-wrap gap-3">
//         <select
//           onChange={(e) => setSortBy(e.target.value)}
//           className="border px-3 py-2 rounded-md bg-white dark:bg-gray-700 dark:text-white"
//         >
//           <option value="">Sort By</option>
//           <option value="date">Date</option>
//           <option value="amount">Amount</option>
//         </select>

//         <button
//           onClick={() => exportToCSV(filtered)}
//           className="bg-blue-500 hover:bg-blue-600 transition text-white px-4 py-2 rounded-md"
//         >
//           Export CSV
//         </button>
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto">
//         <table className="w-full text-left border-collapse">
          
//           {/* Table Header */}
//           <thead>
//             <tr className="text-gray-500 dark:text-gray-400 border-b">
//               <th className="py-2">Date</th>
//               <th>Category</th>
//               <th>Amount</th>
//               <th>Type</th>
//               {role === "admin" && <th>Actions</th>}
//             </tr>
//           </thead>

//           {/* Table Body */}
//           <tbody>
//             {filtered.length === 0 ? (
//               <tr>
//                 <td colSpan="5" className="text-center py-8 text-gray-500">
//                   No transactions found 😔
//                 </td>
//               </tr>
//             ) : (
//               filtered.map((t) => (
//                 <tr
//                   key={t.id}
//                   className="border-b hover:bg-gray-50 dark:hover:bg-gray-700 transition"
//                 >
//                   {/* Date */}
//                   <td className="py-2">{t.date}</td>

//                   {/* Category */}
//                   <td>{t.category}</td>

//                   {/* Amount */}
//                   <td
//                     className={
//                       t.type === "income"
//                         ? "text-green-500 font-medium"
//                         : "text-red-500 font-medium"
//                     }
//                   >
//                     ${t.amount.toLocaleString()}
//                   </td>

//                   {/* Type Badge */}
//                   <td>
//                     <span
//                       className={`px-2 py-1 rounded-full text-xs ${
//                         t.type === "income"
//                           ? "bg-green-100 text-green-600"
//                           : "bg-red-100 text-red-600"
//                       }`}
//                     >
//                       {t.type}
//                     </span>
//                   </td>

//                   {/* Actions (Admin Only) */}
//                   {role === "admin" && (
//                     <td className="flex gap-3">
//                       <button
//                         onClick={() => {
//                           setEditData(t);
//                           setIsOpen(true);
//                         }}
//                         className="text-blue-500 hover:underline"
//                       >
//                         Edit
//                       </button>

//                       <button
//                         onClick={() => handleDelete(t.id)}
//                         className="text-red-500 hover:underline"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   )}
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default TransactionTable;





// import { useState } from "react";
// import { useAppContext } from "../../context/AppContext";
// import {
//   filterTransactions,
//   sortTransactions,
//   exportToCSV,
// } from "../../utils/helpers";

// const TransactionTable = ({ setIsOpen, setEditData }) => {
//   const { transactions, setTransactions, filters, role } = useAppContext();

//   const [sortBy, setSortBy] = useState("");

//   let filtered = filterTransactions(transactions, filters);
//   filtered = sortTransactions(filtered, sortBy);

//   const handleDelete = (id) => {
//     setTransactions(transactions.filter((t) => t.id !== id));
//   };

//   return (
//     <div>
//       {/* Controls */}
//       <div className="flex justify-between mb-4">
//         <select
//           onChange={(e) => setSortBy(e.target.value)}
//           className="border px-3 py-2 rounded-md"
//         >
//           <option value="">Sort By</option>
//           <option value="date">Date</option>
//           <option value="amount">Amount</option>
//         </select>

//         <button
//           onClick={() => exportToCSV(filtered)}
//           className="bg-blue-500 text-white px-4 py-2 rounded-md"
//         >
//           Export CSV
//         </button>
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto">
//         <table className="w-full text-left border-collapse">
//           <thead>
//             <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-700 transition">
//               <th className="py-2">Date</th>
//               <th>Category</th>
//               <th>Amount</th>
//               <th>Type</th>
//               {role === "admin" && <th>Actions</th>}
//             </tr>
//           </thead>

//           <tbody>
//             {filtered.length === 0 ? (
//               <tr>
//                 <td colSpan="5" className="text-center py-8 text-gray-500">
//                   No transactions found 😔
//                 </td>
//               </tr>
//             ) : (
//               filtered.map((t) => (
//                 <tr key={t.id} className="border-b">
//                   <td className="py-2">{t.date}</td>
//                   <td>{t.category}</td>
//                   <td>
//                     <span
//                       className={`px-2 py-1 rounded-full text-xs ${
//                         t.type === "income"
//                           ? "bg-green-100 text-green-600"
//                           : "bg-red-100 text-red-600"
//                       }`}
//                     >
//                       {t.type}
//                     </span>
//                   </td>

//                   {role === "admin" && (
//                     <td className="flex gap-2">
//                       <button
//                         onClick={() => {
//                           setEditData(t);
//                           setIsOpen(true);
//                         }}
//                         className="text-blue-500"
//                       >
//                         Edit
//                       </button>

//                       <button
//                         onClick={() => handleDelete(t.id)}
//                         className="text-red-500"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   )}
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default TransactionTable;
