import SalesChart from "@/components/SalesChart";
import Header from "@/components/Header";
import Performance from "@/components/Performance";
import Transictions from "@/components/Transictions";
import { WebsiteViews } from "@/components/WebsiteViews";
import AnnualSalesPerformance from "@/components/AnnualSalesPerformance";

function Reports() {
  return (
    <>
      <Header text="Reports"/>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 lg:grid-cols-1">
          <Transictions />
        </div>
        <div className="grid gap-4 md:gap-8 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          <Performance />
          <WebsiteViews />
          <SalesChart />
        </div>
        <div className="grid gap-4">
          <AnnualSalesPerformance />
        </div>

      </main>
    </>
  );
}

export default Reports;
