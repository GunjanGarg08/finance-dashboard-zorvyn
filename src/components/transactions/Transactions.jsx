import { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import TransactionFilters from "./TransactionFilters";
import TransactionTable from "./TransactionTable";
import TransactionModal from "./TransactionModal";

const Transactions = () => {
  const { role } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  return (
    <div className="bg-white/80 dark:bg-gray-900/60 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">

      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-5">

        <div>
          <h3 className="text-3xl font-semibold text-gray-800 dark:text-white">
            Transactions
          </h3>
          <p className="text-xl text-gray-500 dark:text-gray-400">
            Track and manage your financial activity
          </p>
        </div>

        {role === "admin" && (
          <button
            onClick={() => {
              setEditData(null);
              setIsOpen(true);
            }}
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:scale-105 transition text-xl text-white px-5 py-2 rounded-lg shadow-md"
          >
            Add Transaction
          </button>
        )}
      </div>

      <TransactionFilters />
      <TransactionTable setIsOpen={setIsOpen} setEditData={setEditData} />

      {isOpen && (
        <TransactionModal setIsOpen={setIsOpen} editData={editData} />
      )}
    </div>
  );
};

export default Transactions;