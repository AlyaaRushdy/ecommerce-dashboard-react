import * as React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import {
    Users
} from "lucide-react"
const Transictions = () => {
  return (
    <Card>
        <CardHeader>
            <CardTitle>Transictions</CardTitle>
            <CardDescription>Total 48.5 % Growth 😎 this month</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 lg:grid-cols-4 md:grid-cols-2">
            <Card x-chunk="dashboard-01-chunk-0">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                    Total Sales
                    </CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                        <div className="text-2xl font-bold">$45,231.89</div>
                        <p className="text-xs text-muted-foreground">
                        +20.1% from last month
                        </p>
                </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-0">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                    Customers
                    </CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                        <div className="text-2xl font-bold">2000</div>
                        <p className="text-xs text-muted-foreground">
                        +20.1% from last month
                        </p>
                </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-0">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                    Products
                    </CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                        <div className="text-2xl font-bold">10</div>
                        <p className="text-xs text-muted-foreground">
                        +20.1% from last month
                        </p>
                </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-0">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                    Revenue
                    </CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                        <div className="text-2xl font-bold">$45,231.89</div>
                        <p className="text-xs text-muted-foreground">
                        +20.1% from last month
                        </p>
                </CardContent>
            </Card>
        </CardContent>
    </Card>

  )
}

export default Transictions