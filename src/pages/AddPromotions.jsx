import Header from "@/components/shared/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const AddPromotion = () => {
  const [startDate, setStartDate] = useState("");
  return (
    <div className="p-5">
      <Header currentPage={""} />
      <div className="grid gap-4 grid-cols-12 mt-10">
        <div className="card md:col-span-4 lg:col-span-4 col-span-12 ">
          <div className="mb-4">
            <Card>
              <CardHeader>
                <CardTitle>Coupon Status</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className=" flex items-center space-x-4 mt-4">
                  <span>Active</span>
                  <span>InActive</span>
                  <span>Future plan</span>
                </div>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Date Schedule</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="">
                <label htmlFor="startDate" className="block mb-2">
                  Start Date
                </label>
                <Input
                  type="string"
                  placeholder="Enter new startdate"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  required
                />
              </div>
              <div className="">
                <label htmlFor="startDate" className="block mb-2">
                  End Date
                </label>
                <Input
                  type="string"
                  placeholder="Enter new startdate"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  required
                />
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="card md:col-span-8 lg:col-span-8 col-span-12">
          <Card>
            <CardHeader>
              <CardTitle>Coupon Informations</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className=" flex items-center space-x-4 mt-4">
                <span>Active</span>
                <span>InActive</span>
                <span>Future plan</span>
              </div>
              <div className="p">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
                dolore tenetur esse soluta sed, minima exercitationem
                consequatur quam eaque excepturi vitae! Alias ea velit illo,
                consequuntur animi quaerat provident itaque.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AddPromotion;