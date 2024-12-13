import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Reports from "./pages/Reports";
import Promotions from "./pages/Promotions";
import Settings from "./pages/Settings";
import Sidebar from "./components/shared/Sidebar";
import CustomerDetails from "./pages/CustomerDetails";
import ErrorPage from "./pages/ErrorPage";
import SingleProduct from "./pages/SingleProduct";
import { AddCategory } from "./pages/AddCategory";
import OrderDetails from "./pages/OrderDetails";
import Login from "./pages/Login";
import { Toaster } from "./components/ui/toaster";
import ProtectedRoute from "./components/ProtectedRoute";
import EditCategory from "./pages/EditCategory";
import AddPromotion from "./pages/AddPromotions";
import Contact from "./pages/Contact";
import AddAdmin from "./pages/AddAdmin";
import ShippingCosts from "./pages/ShippingCosts";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/products", element: <Products /> },
  { path: "/products/:id", element: <SingleProduct /> },
  { path: "/categories", element: <Categories /> },
  { path: "/categories/create", element: <AddCategory /> },
  { path: "/categories/edit/:id", element: <EditCategory /> },
  { path: "/orders", element: <Orders /> },
  { path: "/orders/:id", element: <OrderDetails /> },
  { path: "/customers", element: <Customers /> },
  { path: "/customers/:customerId", element: <CustomerDetails /> },
  { path: "/reports", element: <Reports /> },
  { path: "/promotions", element: <Promotions /> },
  { path: "/promotions/addPromotion", element: <AddPromotion /> },
  { path: "/settings", element: <Settings /> },
  { path: "/settings/addAdmin", element: <AddAdmin /> },
  { path: "/contact", element: <Contact /> },
  { path: "*", element: <ErrorPage /> },
];

function App() {
  return (
    <>
      <Sidebar />
      <main className="w-full sm:w-[calc(100%-6rem)] md:w-[calc(100%-7rem)] ml-auto  min-h-screen">
        <Routes>
          {routes.map((route, i) => (
            <Route
              path={route.path}
              element={<ProtectedRoute>{route.element}</ProtectedRoute>}
              key={i}
            />
          ))}
          <Route path="/shippingCosts" element={<ShippingCosts />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Toaster />
    </>
  );
}

export default App;
