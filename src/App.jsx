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
import AddCategory from "./pages/AddCategory";

function App() {
	return (
		<>
			<Sidebar />
			<main className="w-full sm:w-[calc(100%-6rem)] md:w-[calc(100%-7rem)] ml-auto bg-gray-100 dark:bg-background min-h-screen">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/products" element={<Products />} />
					<Route path="/products/:id" element={<SingleProduct />} />
					<Route path="/categories" element={<Categories />} />
					<Route path="/categories/create" element={<AddCategory />} />
					<Route path="/orders" element={<Orders />} />
					<Route path="/customers" element={<Customers />} />
					<Route path="/customers/:customerId" element={<CustomerDetails />} />
					<Route path="/reports" element={<Reports />} />
					<Route path="/promotions" element={<Promotions />} />
					<Route path="/settings" element={<Settings />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</main>
		</>
	);
}

export default App;
