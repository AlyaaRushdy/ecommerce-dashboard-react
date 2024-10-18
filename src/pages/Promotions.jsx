import DataTable from "@/components/shared/DataTable";
import Header from "@/components/shared/Header";
import { Button } from "@/components/ui/button";
import { promotionsCoulmns } from "@/data table columns/promotionsColumns";
import { couponsArray } from "@/test arrays/coupons";
import { Link } from "react-router-dom";

function Promotions() {
  return (
    <div className="p-5">
      <Header currentPage={"Promotions"} />
      <div className="mt-12">
        <div className="flex justify-end">
          <Button className="mb-10" type="primary">
            <Link to="/promotions/addPromotion">Add Promotions</Link>
          </Button>
        </div>
        <div className="mt-10">
          <DataTable
            columns={promotionsCoulmns}
            data={couponsArray}
            tableTitle={"All Promotions"}
          />
        </div>
      </div>
    </div>
  );
}

export default Promotions;