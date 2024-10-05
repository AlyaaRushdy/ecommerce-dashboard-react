"use client"
import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from './ui/button'
import { Sheet, SheetContent , SheetTrigger } from './ui/sheet'
import { DollarSign , Users , CreditCard , Activity , Package , Package2 , Menu , ArrowUpRight } from 'lucide-react'
import { Search , CircleUser } from 'lucide-react'
import { Input } from './ui/input'
import { DropdownMenu, DropdownMenuTrigger , DropdownMenuContent, DropdownMenuLabel , DropdownMenuItem, DropdownMenuSeparator } from './ui/dropdown-menu'
import { Table , TableBody , TableHeader , TableRow ,TableHead , TableCell } from './ui/table'
import { Badge } from './ui/badge'
import { Avatar, AvatarFallback , AvatarImage } from '@radix-ui/react-avatar'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

import ChartConfigComponent from "./ChartConfig"

const chartData = [
  { date: "2024-04-01", Revenu: 222, Expens: 150 },
  { date: "2024-04-02", Revenu: 97, Expens: 180 },
  { date: "2024-04-03", Revenu: 167, Expens: 120 },
  { date: "2024-04-04", Revenu: 242, Expens: 260 },
  { date: "2024-04-05", Revenu: 373, Expens: 290 },
  { date: "2024-04-06", Revenu: 301, Expens: 340 },
  { date: "2024-04-07", Revenu: 245, Expens: 180 },
  { date: "2024-04-08", Revenu: 409, Expens: 320 },
  { date: "2024-04-09", Revenu: 59, Expens: 110 },
  { date: "2024-04-10", Revenu: 261, Expens: 190 },
  { date: "2024-04-11", Revenu: 327, Expens: 350 },
  { date: "2024-04-12", Revenu: 292, Expens: 210 },
  { date: "2024-04-13", Revenu: 342, Expens: 380 },
  { date: "2024-04-14", Revenu: 137, Expens: 220 },
  { date: "2024-04-15", Revenu: 120, Expens: 170 },
  { date: "2024-04-16", Revenu: 138, Expens: 190 },
  { date: "2024-04-17", Revenu: 446, Expens: 360 },
  { date: "2024-04-18", Revenu: 364, Expens: 410 },
  { date: "2024-04-19", Revenu: 243, Expens: 180 },
  { date: "2024-04-20", Revenu: 89, Expens: 150 },
  { date: "2024-04-21", Revenu: 137, Expens: 200 },
  { date: "2024-04-22", Revenu: 224, Expens: 170 },
  { date: "2024-04-23", Revenu: 138, Expens: 230 },
  { date: "2024-04-24", Revenu: 387, Expens: 290 },
  { date: "2024-04-25", Revenu: 215, Expens: 250 },
  { date: "2024-04-26", Revenu: 75, Expens: 130 },
  { date: "2024-04-27", Revenu: 383, Expens: 420 },
  { date: "2024-04-28", Revenu: 122, Expens: 180 },
  { date: "2024-04-29", Revenu: 315, Expens: 240 },
  { date: "2024-04-30", Revenu: 454, Expens: 380 },
]




const MainPage = () => {
  return (
    <>
      <div className="flex w-full flex-col">
        <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
          <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <a href="#" className='flex items-center gap-2 text-lg font-semibold md:text-base'>
              <Package className='h-6 w-6' />
              <span className='sr-only'>Brand Name</span>
            </a>
            <a href="#" className='text-foreground transition-colors hover:text-foreground'>Dashboard</a>
            <a href="#" className='text-muted-foreground transition-colors hover:text-foreground'>Orders</a>
            <a href="#" className='text-muted-foreground transition-colors hover:text-foreground'>Products</a>
            <a href="#" className='text-muted-foreground transition-colors hover:text-foreground'>Customers</a>
            <a href="#" className='text-muted-foreground transition-colors hover:text-foreground'>Analytics</a>
          </nav>
          <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <a
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </a>
              <a href="#" className="hover:text-foreground">
                Dashboard
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Orders
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Products
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Customers
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Analytics
              </a>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      </div>
      <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8'>
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <Card x-chunk="dashboard-01-chunk-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Revenue
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>

          <Card x-chunk="dashboard-01-chunk-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Subscriptions
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2350</div>
              <p className="text-xs text-muted-foreground">
                +180.1% from last month
              </p>
            </CardContent>
          </Card>

          <Card x-chunk="dashboard-01-chunk-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sales</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+12,234</div>
              <p className="text-xs text-muted-foreground">
                +19% from last month
              </p>
            </CardContent>
          </Card>

          <Card x-chunk="dashboard-01-chunk-3">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Now</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+573</div>
              <p className="text-xs text-muted-foreground">
                +201 since last hour
              </p>
            </CardContent>
          </Card>
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Card
            className="xl:col-span-2" x-chunk="dashboard-01-chunk-4"
          >
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle>Sales Statistic</CardTitle>
                <CardDescription>
                  Recent statistic from your store.
                </CardDescription>
              </div>
              <Button asChild size="sm" className="ml-auto gap-1">
                <a href="#">
                  Advanced Report
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
            </CardHeader>
            <CardContent>
              
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-5">
            <CardHeader>
              <CardTitle>Recent Sales</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/01.png" alt="Avatar" />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Olivia Martin
                  </p>
                  <p className="text-sm text-muted-foreground">
                    olivia.martin@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+$1,999.00</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/02.png" alt="Avatar" />
                  <AvatarFallback>JL</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Jackson Lee
                  </p>
                  <p className="text-sm text-muted-foreground">
                    jackson.lee@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+$39.00</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/03.png" alt="Avatar" />
                  <AvatarFallback>IN</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Isabella Nguyen
                  </p>
                  <p className="text-sm text-muted-foreground">
                    isabella.nguyen@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+$299.00</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/04.png" alt="Avatar" />
                  <AvatarFallback>WK</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    William Kim
                  </p>
                  <p className="text-sm text-muted-foreground">
                    will@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+$99.00</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/05.png" alt="Avatar" />
                  <AvatarFallback>SD</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Sofia Davis
                  </p>
                  <p className="text-sm text-muted-foreground">
                    sofia.davis@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+$39.00</div>
              </div>
            </CardContent>
          </Card>
          </div>
      
    </main>
    </>
  )
}

export default MainPage