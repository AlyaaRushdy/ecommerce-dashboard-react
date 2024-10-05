import { Route, Routes } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Reports from "./pages/Reports";
import Promotions from "./pages/Promotions";
import Settings from "./pages/Settings";
import Owner from "./pages/Owner";

function App() {
  return (
    <>
      <Navbar />
      <main className="w-[calc(100%-112px)] ml-auto pl-2">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/owner" element={<Owner />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
