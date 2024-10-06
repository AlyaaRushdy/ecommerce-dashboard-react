import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Reports from "./pages/Reports";
import Promotions from "./pages/Promotions";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import Sidebar from "./components/shared/Sidebar";

function App() {
  return (
    <>
      <Sidebar />
      <main className="w-full sm:w-[calc(100%-6rem)] md:w-[calc(100%-7rem)] ml-auto pl-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
