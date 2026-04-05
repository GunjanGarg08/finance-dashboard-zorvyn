import { useAppContext } from "../../context/AppContext";

const TransactionFilters = () => {
  const { filters, setFilters, transactions } = useAppContext();

  const categories = [...new Set(transactions.map((t) => t.category))].sort();

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-5">

      <input
        type="text"
        placeholder="Search category"
        value={filters.search}
        onChange={(e) => setFilters({ ...filters, search: e.target.value })}
        className="w-full p-2 rounded-lg border bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400" />

      <select
        value={filters.type}
        onChange={(e) => setFilters({ ...filters, type: e.target.value })}
        className="px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border"
      >
        <option value="all">All Types</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <select
        value={filters.category}
        onChange={(e) => setFilters({ ...filters, category: e.target.value })}
        className="px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border"
      >
        <option value="all">All Categories</option>

        {categories.map((cat, index) => (
          <option key={index} value={cat}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TransactionFilters;