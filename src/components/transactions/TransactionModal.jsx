import { useState, useEffect } from "react";
import { useAppContext } from "../../context/AppContext";

const TransactionModal = ({ setIsOpen, editData }) => {
  const { transactions, setTransactions } = useAppContext();

  const [form, setForm] = useState({
    date: "",
    category: "",
    amount: "",
    type: "expense",
  });

  useEffect(() => {
    if (editData) {
      setForm(editData);
    }
  }, [editData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.date || !form.category || !form.amount) {
      alert("Please fill all fields");
      return;
    }

    if (editData) {
      const updated = transactions.map((t) =>
        t.id === editData.id
          ? { ...form, id: t.id, amount: Number(form.amount) }
          : t
      );
      setTransactions(updated);
    } else {
      const newTransaction = {
        ...form,
        id: Date.now(),
        amount: Number(form.amount),
      };
      setTransactions([...transactions, newTransaction]);
    }

    setIsOpen(false);
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="bg-white dark:bg-gray-900 p-6 rounded-2xl w-full max-w-md shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-semibold mb-5 text-gray-800 dark:text-white">
          {editData ? "Edit Transaction" : "Add Transaction"}
        </h2>

        <div className="space-y-4">
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={form.category}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={form.amount}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border outline-none"
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-5 py-2 rounded-lg shadow hover:scale-105 transition"
          >
            {editData ? "Update" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionModal;