import { useEffect, useState } from "react";
import axios from "axios";

import DataTable from "@/components/shared/DataTable";
import Header from "@/components/shared/Header";
import { shippingCostsColumns } from "@/data table columns/shippingCostsColumns";

function ShippingCosts() {
  const [shippingCosts, setShippingCosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/shippingCosts/")
      .then((res) => res.data)
      .then((res) => {
        setShippingCosts(res.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="p-5">
        <Header currentPage={"ShippingCosts"} />

        <div className="py-4">
          <DataTable
            data={shippingCosts}
            columns={shippingCostsColumns}
            tableTitle={"All ShippingCosts"}
            ButtonText={"Add Shipping Cost"}
            ButtonLink={"/addShippingCost"}
          />
        </div>
      </div>
    </>
  );
}

export default ShippingCosts;
