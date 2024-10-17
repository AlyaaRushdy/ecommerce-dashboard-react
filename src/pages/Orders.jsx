import Header from "@/components/shared/Header";
import DataTable from "@/components/shared/DataTable";
import { orderColumns } from "@/data table columns/ordersColumns";
import { useEffect, useState } from "react";
import axios from "axios";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/orders/")
      .then((res) => res.data)
      .then((res) => {
        setOrders(res.results);
      });
  }, []);
  return (
    <>
      <div className="p-5">
        <Header currentPage={"Orders"} />

        <div className="py-4">
          <DataTable
            data={orders}
            columns={orderColumns}
            tableTitle={"All Orders"}
            className="py-4"
          />
        </div>
      </div>
    </>
  );
}

export default Orders;
