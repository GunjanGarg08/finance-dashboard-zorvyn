import { useAppContext } from "../../context/AppContext";

const TransactionFilters = () => {
  const { filters, setFilters, transactions } = useAppContext();

  // ✅ Extract unique categories dynamically
  const categories = [...new Set(transactions.map((t) => t.category))].sort();

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-5">
      {/* Search */}
      <input
        type="text"
        placeholder="Search category"
        value={filters.search}
        onChange={(e) => setFilters({ ...filters, search: e.target.value })}
        className="w-full p-2 rounded-lg border bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400" />

      {/* Type */}
      <select
        value={filters.type}
        onChange={(e) => setFilters({ ...filters, type: e.target.value })}
        className="px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border"
      >
        <option value="all">All Types</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      {/* ✅ Dynamic Category */}
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

// import { useAppContext } from "../../context/AppContext";

// const TransactionFilters = () => {
//   const { filters, setFilters } = useAppContext();

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-5">

//       <input
//         type="text"
//         placeholder="🔍 Search category..."
//         value={filters.search}
//         onChange={(e) => setFilters({ ...filters, search: e.target.value })}
//         className="px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
//       />

//       <input
//         type="date"
//         value={filters.startDate}
//         onChange={(e) => setFilters({ ...filters, startDate: e.target.value })}
//         className="px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border"
//       />

//       <input
//         type="date"
//         value={filters.endDate}
//         onChange={(e) => setFilters({ ...filters, endDate: e.target.value })}
//         className="px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border"
//       />

//       <select
//         value={filters.type}
//         onChange={(e) => setFilters({ ...filters, type: e.target.value })}
//         className="px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border"
//       >
//         <option value="all">All Types</option>
//         <option value="income">Income</option>
//         <option value="expense">Expense</option>
//       </select>

//       <select
//         value={filters.category}
//         onChange={(e) => setFilters({ ...filters, category: e.target.value })}
//         className="px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border"
//       >
//         <option value="all">All Categories</option>
//         <option value="Food">Food</option>
//         <option value="Salary">Salary</option>
//         <option value="Shopping">Shopping</option>
//         <option value="Dining">Dining</option>
//       </select>
//     </div>
//   );
// };

// export default TransactionFilters;

// import { useAppContext } from "../../context/AppContext";

// const TransactionFilters = () => {
//   const { filters, setFilters } = useAppContext();

//   return (
//     <div className="flex flex-col md:flex-row gap-4 mb-4">
//       {/* Search */}
//       <input
//         type="text"
//         placeholder="Search category..."
//         value={filters.search}
//         onChange={(e) => setFilters({ ...filters, search: e.target.value })}
//         className="border dark:bg-gray-800 px-3 py-2 rounded-md w-full md:w-1/3"
//       />

//       {/* Date Filters */}
//       <input
//         type="date"
//         value={filters.startDate}
//         onChange={(e) => setFilters({ ...filters, startDate: e.target.value })}
//         className="border px-3 py-2 rounded-md"
//       />

//       <input
//         type="date"
//         value={filters.endDate}
//         onChange={(e) => setFilters({ ...filters, endDate: e.target.value })}
//         className="border px-3 py-2 rounded-md"
//       />

//       {/* Type Filter */}
//       <select
//         value={filters.type}
//         onChange={(e) => setFilters({ ...filters, type: e.target.value })}
//         className="border px-3 py-2 rounded-md"
//       >
//         <option value="all">All Types</option>
//         <option value="income">Income</option>
//         <option value="expense">Expense</option>
//       </select>

//       {/* Category Filter */}
//       <select
//         value={filters.category}
//         onChange={(e) => setFilters({ ...filters, category: e.target.value })}
//         className="border px-3 py-2 rounded-md"
//       >
//         <option value="all">All Categories</option>
//         <option value="Food">Food</option>
//         <option value="Salary">Salary</option>
//         <option value="Shopping">Shopping</option>
//         <option value="Dining">Dining</option>
//       </select>
//     </div>
//   );
// };

// export default TransactionFilters;
