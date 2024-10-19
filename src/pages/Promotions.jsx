import DataTable from "@/components/shared/DataTable";
import Header from "@/components/shared/Header";
import { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "@/hooks/use-toast";
import promotionsCoulmns from "@/data table columns/PromotionsColumns";

function Promotions() {
  const [coupons, setCoupons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCoupons();
  }, []);

  const fetchCoupons = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/coupons");
      if (response.status === 200) {
        console.log(response.data)
        if (
          response.data.couponCodes &&
          response.data.couponCodes.length === 0
        ) {
          setCoupons([]);
        } else {
          setCoupons(response.data.couponCodes);
        }
      }
    } catch (error) {
      console.error("Error fetching coupons:", error);

      if (error.response) {
        toast({
          title: "Error",
          description: "Failed to fetch Coupons. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteCoupon = async (id) => {
    if (window.confirm("Are you sure you want to delete this coupon?")) {
      try {
        const response = await axios.delete(
          `http://localhost:5000/coupons/${id}`
        );
        if (response.status === 200) {
          toast({
            title: "Success",
            description: "Category deleted successfully.",
          });
          fetchCoupons();
        }
      } catch (error) {
        console.error("Error deleting category:", error);
        toast({
          title: "Error",
          description: "Failed to delete category. Please try again.",
          variant: "destructive",
        });
      }
    }
  };

  const handleEditCoupon = (id) => {
    navigate(`/Coupons/edit/${id}`);
  };
  return (
    <div className="p-5">
      <Header currentPage={"Promotions"} />
        <div className="mt-10">
          <DataTable
            columns={promotionsCoulmns(handleDeleteCoupon,handleEditCoupon)}
            data={coupons}
            tableTitle={"All Promotions"}
            ButtonText={"Add Promotions"}
            ButtonLink={"/promotions/addPromotion"}
            isLoading={isLoading}
          />
        </div>
      </div>
  );
}

export default Promotions;