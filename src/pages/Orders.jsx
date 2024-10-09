import DataTable from "@/components/shared/DataTable";
import ModeToggle from "@/components/shared/modeToggle";
import { orderColumns } from "@/data table columns/ordersColumns";
import { ordersArray } from "@/test arrays/orders";

function Orders() {
  return (
    <>
      <div className="p-5">
        <div className="flex justify-between mb-4">
          <h1 className="font-medium text-2xl">Orders</h1>
          <ModeToggle />
        </div>

        <DataTable
          data={ordersArray}
          columns={orderColumns}
          tableTitle={"All Orders"}
        />
      </div>
    </>
  );
}

export default Orders;
