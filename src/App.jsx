import Layout from "./components/layout/Layout";
import Dashboard from "./components/dashboard/Dashboard";
import { useAppContext } from "./context/AppContext";
import Navbar from "./components/layout/Navbar";

function App() {
  const { darkMode } = useAppContext();

  return (
    <div className={darkMode ? "dark" : ""}>
      <Layout>
        <Navbar />
        <Dashboard />
      </Layout>
    </div>
  );
}

export default App;