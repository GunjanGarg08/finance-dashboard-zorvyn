import { useAppContext } from "../../context/AppContext";
import { Moon, Sun, LayoutDashboard } from "lucide-react";

const Navbar = () => {
  const { role, setRole, darkMode, setDarkMode } = useAppContext();

  return (
    <div className="w-full px-6 py-3 sticky top-0 z-50 backdrop-blur-lg bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
      {/* LEFT SECTION */}
      <div className="flex items-center gap-4">
        {/* Icon */}
        <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-blue-500 text-white shadow-md">
          <LayoutDashboard size={18} />
        </div>

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-300">
          <span className="text-2xl font-bold text-gray-700 dark:text-white">
            Finance Dashboard
          </span>
          {/* <span className="opacity-50">/</span> */}
          {/* <span>Transactions</span> */}
        </div>

        {/* ROLE BUTTON (PREMIUM)
        <div className="relative">
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="appearance-none cursor-pointer bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm px-4 py-1.5 rounded-full shadow-md hover:scale-105 transition"
          >
            <option value="viewer">Viewer</option>
            <option value="admin">Admin</option>
          </select>
        </div> */}

        {/* <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-full p-1 shadow-inner">
          Viewer
          <button
            onClick={() => setRole("viewer")}
            className={`px-4 py-1.5 text-sm rounded-full transition font-medium ${
              role === "viewer"
                ? "bg-white dark:bg-gray-700 text-blue-600 shadow"
                : "text-gray-500 dark:text-gray-300"
            }`}
          >
            Viewer
          </button>

          Admin
          <button
            onClick={() => setRole("admin")}
            className={`px-4 py-1.5 text-sm rounded-full transition font-medium ${
              role === "admin"
                ? "bg-white dark:bg-gray-700 text-blue-600 shadow"
                : "text-gray-500 dark:text-gray-300"
            }`}
          >
            Admin
          </button>
        </div> */}

        <div className="relative flex bg-gray-100 dark:bg-gray-800 rounded-full p-1 w-fit">
          {/* Sliding Background */}
          <div
            className={`absolute top-1 bottom-1 w-1/2 rounded-full bg-white dark:bg-gray-700 shadow transition-all duration-300 ${
              role === "admin" ? "translate-x-full" : "translate-x-0"
            }`}
          />

          {/* Viewer */}
          <button
            onClick={() => setRole("viewer")}
            className="relative z-10 px-4 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Viewer
          </button>

          {/* Admin */}
          <button
            onClick={() => setRole("admin")}
            className="relative z-10 px-4 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Admin
          </button>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-5">
        {/* DARK MODE TOGGLE */}
        <div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="relative w-17 h-9 flex items-center rounded-full transition-all duration-300 
             bg-gray-200 dark:bg-gray-700 shadow-inner"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 dark:opacity-100 transition" />

            {/* Sliding Knob */}
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

        {/* PROFILE */}
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

// import { useAppContext } from "../../context/AppContext";
// import { Sun, Moon } from "lucide-react";

// const Navbar = () => {
//   const { role, setRole, darkMode, setDarkMode } = useAppContext();

//   return (
//     <div className="w-full bg-white dark:bg-gray-800 shadow-sm px-6 py-4 flex items-center justify-between">

//       {/* LEFT: Title + Role */}
//       <div className="flex items-center gap-4">

//         <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
//           Finance Dashboard
//         </h1>

//         {/* Role Selector */}
//         <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
//           <span className="text-xs text-gray-500 dark:text-gray-300">
//             Role
//           </span>

//           <select
//             value={role}
//             onChange={(e) => setRole(e.target.value)}
//             className="bg-transparent text-sm font-medium outline-none cursor-pointer text-gray-700 dark:text-white"
//           >
//             <option value="viewer">Viewer</option>
//             <option value="admin">Admin</option>
//           </select>
//         </div>

//       </div>

//       {/* RIGHT: Toggle + Profile */}
//       <div className="flex items-center gap-5">

//         {/* Dark Mode Toggle */}
//         <div className="flex items-center gap-2">
//           <span className="text-sm text-gray-500 dark:text-gray-300">
//             {/* {darkMode ? "Dark" : "Light"} */}
//             {darkMode ? <Moon size={16} /> : <Sun size={16} />}
//           </span>

//           <button
//             onClick={() => setDarkMode(!darkMode)}
//             className="w-12 h-6 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition"
//           >
//             <div
//               className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ${
//                 darkMode ? "translate-x-6" : ""
//               }`}
//             />
//           </button>
//         </div>

//         {/* Profile */}
//         <div className="flex items-center gap-2 cursor-pointer group">

//           <div className="w-9 h-9 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold shadow-md group-hover:scale-105 transition">
//             G
//           </div>

//           <div className="hidden sm:block">
//             <p className="text-sm font-medium text-gray-700 dark:text-white">
//               Gunjan
//             </p>
//             <p className="text-xs text-gray-500 dark:text-gray-400">
//               Developer
//             </p>
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// };

// export default Navbar;

// import { useAppContext } from "../../context/AppContext";

// const Navbar = () => {
//   const { role, setRole, darkMode, setDarkMode } = useAppContext();

//   return (
//     <div className="w-full bg-white dark:bg-gray-800 shadow-sm px-6 py-4 flex items-center justify-between">
//       {/* Left Section */}
//       <div className="flex items-center gap-3">
//         <span className="text-gray-600 dark:text-gray-300 font-medium">
//           Role:
//         </span>

//         <select
//           value={role}
//           onChange={(e) => setRole(e.target.value)}
//           className="border rounded-md px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 dark:text-white"
//         >
//           <option value="viewer">Viewer</option>
//           <option value="admin">Admin</option>
//         </select>
//       </div>

//       {/* Right Section */}
//       <div className="flex items-center gap-4">
//         {/* Dark Mode Toggle */}
//         <button
//           onClick={() => setDarkMode(!darkMode)}
//           className="w-12 h-6 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition"
//         >
//           <div
//             className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ${
//               darkMode ? "translate-x-6" : ""
//             }`}
//           />
//         </button>

//         {/* Profile Avatar */}
//         <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
//           👤
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
