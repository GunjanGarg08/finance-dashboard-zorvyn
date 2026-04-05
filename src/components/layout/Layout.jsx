import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="p-6 max-w-7xl mx-auto">
        {children}
      </div>
    </div>
  );
};

export default Layout;