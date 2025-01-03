import Header from "../components/shared/Header";
import DataTable from "@/components/shared/DataTable";

import { useEffect, useState } from "react";
import axios from "axios";
import productsColumns from "@/data table columns/productsColumns";
export default function CardWithForm() {
	const [products, setProducts] = useState([]);

	const getProductsFromApi = async () => {
		try {
			const getProducts = await axios.get("http://localhost:5000/products/");
			setProducts(getProducts.data.products);
		} catch (err) {
			console.log(err.message);
		}
	};

	useEffect(() => {
		getProductsFromApi();
	}, []);

	return (
		<main className="p-5">
			<Header currentPage={"Products"} />

			{/* start table */}

			<div>
				<DataTable
					columns={productsColumns()}
					data={products}
					tableTitle={"All Products"}
					ButtonLink={"/products/addProduct"}
					ButtonText={"Add Product"}
				/>
			</div>
		</main>
	);
}
