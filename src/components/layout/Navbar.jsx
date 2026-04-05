import { useAppContext } from "../../context/AppContext";
import { Moon, Sun, LayoutDashboard } from "lucide-react";

const Navbar = () => {
  const { role, setRole, darkMode, setDarkMode } = useAppContext();

  return (
    <div className="w-full px-6 py-3 sticky top-0 z-50 backdrop-blur-lg bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">

      <div className="flex items-center gap-4">

        <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-blue-500 text-white shadow-md">
          <LayoutDashboard size={18} />
        </div>


        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-300">
          <span className="text-2xl font-bold text-gray-700 dark:text-white">
            Finance Dashboard
          </span>
        </div>

        <div className="relative flex bg-gray-100 dark:bg-gray-800 rounded-full p-1 w-fit">

          <div
            className={`absolute top-1 bottom-1 w-1/2 rounded-full bg-white dark:bg-gray-700 shadow transition-all duration-300 ${
              role === "admin" ? "translate-x-full" : "translate-x-0"
            }`}
          />

          <button
            onClick={() => setRole("viewer")}
            className="relative z-10 px-4 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Viewer
          </button>

          <button
            onClick={() => setRole("admin")}
            className="relative z-10 px-4 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Admin
          </button>
        </div>
      </div>

      <div className="flex items-center gap-5">

        <div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="relative w-17 h-9 flex items-center rounded-full transition-all duration-300 
             bg-gray-200 dark:bg-gray-700 shadow-inner"
          >

            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 dark:opacity-100 transition" />


            <div
              className={`relative z-8 w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-md transform duration-300 ${
                darkMode ? "translate-x-8" : "translate-x-0"
              }`}
            >
              {darkMode ? (
                <span className="text-blue-500 text-xl">🌙</span>
              ) : (
                <span className="text-yellow-500 text-xl">☀️</span>
              )}
            </div>
          </button>
        </div>


        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="w-9 h-9 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white flex items-center justify-center font-semibold shadow-md group-hover:scale-105 transition">
            G
          </div>

          <div className="hidden sm:block">
            <p className="text-xl font-medium text-gray-700 dark:text-white">
              Gunjan
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Developer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;