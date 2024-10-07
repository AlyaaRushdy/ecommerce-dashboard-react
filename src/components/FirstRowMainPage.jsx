"use client";
import * as React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Button } from "@/components/ui/button";


const FirstRowMainPage = () => {
  return (
       <>
       {/* Card 1: Total Revenue */}
    <Card x-chunk="dashboard-01-chunk-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Revenue
              </CardTitle>
              
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
              <div className="text-right">
                <p className="text-orange-500 font-bold pr-2">+22%</p>
                <svg width={100} height={20} className="magicpattern1"></svg>
              </div>
            </CardContent>
          </Card>

    {/* Card 2: Subscriptions */}
    <Card x-chunk="dashboard-01-chunk-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Subscriptions
              </CardTitle>
              
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2350</div>
              <p className="text-xs text-muted-foreground">
                +180.1% from last month
              </p>
              <div className="text-right">
                <p className="text-red-500 font-bold pr-2">-15%</p>
                <svg width={100} height={20} className="magicpattern2"></svg>
              </div>
            </CardContent>
    </Card>

    {/* Card 3: Sales */}
    <Card x-chunk="dashboard-01-chunk-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sales</CardTitle>
              
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+12,234</div>
              <p className="text-xs text-muted-foreground">
                +19% from last month
              </p>
              <div className="text-right">
                <p className="text-orange-500 font-bold pr-2">+19%</p>
                <svg width={100} height={20} className="magicpattern1"></svg>
              </div>
            </CardContent>
    </Card>

    {/* Card 4: Active Now */}
    
    <Card x-chunk="dashboard-01-chunk-3">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Now</CardTitle>
              
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+573</div>
              <p className="text-xs text-muted-foreground">
                +201 since last hour
              </p>
              <div className="text-right">
                <p className="text-red-500 font-bold pr-2">-10%</p>
                <svg width={100} height={20} className="magicpattern2"></svg>
              </div>
            </CardContent>
    </Card>
    </>   
  )
}

export default FirstRowMainPage