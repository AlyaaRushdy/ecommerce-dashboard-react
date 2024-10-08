"use client";
import * as React from "react";
import Header from "@/components/Header";
import FirstRowMainPage from "@/components/FirstRowMainPage";
import SalesStatistics from "@/components/SalesStatistics";
import RecentSales from "@/components/RecentSales";

import CustomerSatisfaction from "@/components/CustomerSatisfaction";



function Home() {

  return (
    <div className="flex min-h-screen w-full flex-col z-50">
      <Header text="Dashboard" />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <FirstRowMainPage />
        </div>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-1 xl:grid-cols-2">
            <SalesStatistics />
            <RecentSales />
            <CustomerSatisfaction />
        </div>
      </main>
    </div>
  );
}
export default Home;
