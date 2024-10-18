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

function App() {
  return (
    <>
      <Sidebar />
      <main className="w-full sm:w-[calc(100%-6rem)] md:w-[calc(100%-7rem)] ml-auto bg-gray-100 dark:bg-background min-h-screen">
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/products"
            element={
              <ProtectedRoute>
                <Products />
              </ProtectedRoute>
            }
          />
          <Route
            path="/products/:id"
            element={
              <ProtectedRoute>
                <SingleProduct />
              </ProtectedRoute>
            }
          />
          <Route
            path="/categories"
            element={
              <ProtectedRoute>
                <Categories />
              </ProtectedRoute>
            }
          />
          <Route
            path="/categories/create"
            element={
              <ProtectedRoute>
                <AddCategory />
              </ProtectedRoute>
            }
          />
          <Route
            path="/categories/edit/:id"
            element={
              <ProtectedRoute>
                <EditCategory />
              </ProtectedRoute>
            }
          />
          <Route
            path="/orders"
            element={
              <ProtectedRoute>
                <Orders />
              </ProtectedRoute>
            }
          />
          <Route
            path="/orders/:id"
            element={
              <ProtectedRoute>
                <OrderDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/customers"
            element={
              <ProtectedRoute>
                <Customers />
              </ProtectedRoute>
            }
          />
          <Route
            path="/customers/:customerId"
            element={
              <ProtectedRoute>
                <CustomerDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/reports"
            element={
              <ProtectedRoute>
                <Reports />
              </ProtectedRoute>
            }
          />
          <Route
            path="/promotions"
            element={
              <ProtectedRoute>
                <Promotions />
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="*"
            element={
              <ProtectedRoute>
                <ErrorPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
      <Toaster />
    </>
  );
}

export default App;
