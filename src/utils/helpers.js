export const calculateSummary = (transactions) => {
  let income = 0;
  let expenses = 0;

  transactions.forEach((t) => {
    if (t.type === "income") income += t.amount;
    else expenses += t.amount;
  });

  return {
    income,
    expenses,
    balance: income - expenses,
  };
};

export const getCategoryData = (transactions) => {
  const categoryMap = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryMap[t.category] =
        (categoryMap[t.category] || 0) + t.amount;
    }
  });

  return Object.keys(categoryMap).map((key) => ({
    name: key,
    value: categoryMap[key],
  }));
};

export const getMonthlyTrend = (transactions) => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

  return months.map((month, index) => ({
    name: month,
    value: 10000 + index * 800 + Math.random() * 500, // mock trend
  }));
};

export const getInsights = (transactions) => {
  const categoryTotals = {};
  const monthlyTotals = {};

  transactions.forEach((t) => {
    const month = t.date.slice(0, 7); // YYYY-MM

    if (!monthlyTotals[month]) {
      monthlyTotals[month] = { income: 0, expense: 0 };
    }

    if (t.type === "income") {
      monthlyTotals[month].income += t.amount;
    } else {
      monthlyTotals[month].expense += t.amount;

      categoryTotals[t.category] =
        (categoryTotals[t.category] || 0) + t.amount;
    }
  });

  const months = Object.keys(monthlyTotals).sort();

  const lastMonth = monthlyTotals[months[months.length - 1]] || {};
  const prevMonth = monthlyTotals[months[months.length - 2]] || {};

  const expenseChange =
    prevMonth.expense
      ? ((lastMonth.expense - prevMonth.expense) / prevMonth.expense) * 100
      : 0;

  const topCategory = Object.keys(categoryTotals).reduce(
    (a, b) => (categoryTotals[a] > categoryTotals[b] ? a : b),
    "None"
  );

  return {
    topCategory,
    expenseChange: expenseChange.toFixed(1),
  };
};

export const filterTransactions = (transactions, filters) => {
  return transactions.filter((t) => {
    const matchesSearch =
      t.category.toLowerCase().includes(filters.search.toLowerCase());

    const matchesType =
      filters.type === "all" || t.type === filters.type;

    const matchesCategory =
      filters.category === "all" || t.category === filters.category;

    const matchesDate =
      (!filters.startDate || new Date(t.date) >= new Date(filters.startDate)) &&
      (!filters.endDate || new Date(t.date) <= new Date(filters.endDate));

    return (
      matchesSearch &&
      matchesType &&
      matchesCategory &&
      matchesDate
    );
  });
};

export const sortTransactions = (transactions, sortBy) => {
  const sorted = [...transactions];

  if (sortBy === "date") {
    return sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  if (sortBy === "amount") {
    return sorted.sort((a, b) => b.amount - a.amount);
  }

  return transactions;
};

export const exportToCSV = (transactions) => {
  const headers = ["Date", "Category", "Amount", "Type"];

  const rows = transactions.map((t) => [
    t.date,
    t.category,
    t.amount,
    t.type,
  ]);

  const csvContent =
    [headers, ...rows].map((e) => e.join(",")).join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "transactions.csv";
  link.click();
};

export const formatCurrency = (num) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(num);
};