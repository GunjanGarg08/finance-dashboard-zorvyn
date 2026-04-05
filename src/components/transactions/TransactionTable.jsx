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

      <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700">

        <table className="w-full text-sm">

          <thead className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
            <tr>
              <th className="py-3 px-4 text-left">Date</th>
              <th className="text-left">Category</th>
              <th className="text-left">Amount</th>
              <th className="text-left">Type</th>
              {role === "admin" && <th className="text-left">Actions</th>}
            </tr>
          </thead>

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