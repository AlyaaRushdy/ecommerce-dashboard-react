import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import CustomerDetails from "./pages/CustomerDetails";
import Reports from "./pages/Reports";
import Promotions from "./pages/Promotions";
import Settings from "./pages/Settings";
import ErrorPage from "./pages/ErrorPage";
import Sidebar from "./components/shared/Sidebar";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/customers/:customerId" element={<CustomerDetails />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/promotions" element={<Promotions />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="*" element={<ErrorPage />} /> 
    </Routes>
    
    </>
  );
}

export default App;
