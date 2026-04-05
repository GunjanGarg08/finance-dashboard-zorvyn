import { createContext, useContext, useState, useEffect } from "react";
import mockData from "../data/mockData";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : mockData;
  });

  // const [role, setRole] = useState("viewer");

  const [role, setRole] = useState(localStorage.getItem("role") || "viewer");
  const [filters, setFilters] = useState({
    search: "",
    type: "all",
    category: "all",
    startDate: "",
    endDate: "",
  });

  // const [darkMode, setDarkMode] = useState(false);

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true",
  );

  useEffect(() => {
    localStorage.setItem("role", role);
  }, [role]);


  // Persist data
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  // Dark mode toggle
  // useEffect(() => {
  //   if (darkMode) {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [darkMode]);

  return (
    <AppContext.Provider
      value={{
        transactions,
        setTransactions,
        role,
        setRole,
        filters,
        setFilters,
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
