import Header from "@/components/shared/Header";
import DataTable from "@/components/shared/DataTable";
import { orderColumns } from "@/data table columns/ordersColumns";
import { ordersArray } from "@/test arrays/orders";

function Orders() {
  return (
    <>
      <div className="p-5">
        <Header currentPage={"Orders"} />

        <div className="py-4">
          <DataTable
            data={ordersArray}
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
