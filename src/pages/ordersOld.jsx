import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
// import { Link } from 'react-router-dom';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

const data = [
  {
    id: "53200002",
    products: "5 items",
    date: "Jan 20, 2024",
    customer: "Ronald Jones",
    status: "Pending",
    quantity: 5,
    city: "New York",
    totalAmount: "$253.52",
  },
  {
    id: "53200003",
    products: "3 items",
    date: "Jan 15, 2024",
    customer: "Jacob McKinney",
    status: "Completed",
    quantity: 3,
    city: "Los Angeles",
    totalAmount: "$966.41",
  },
  {
    id: "53200004",
    products: "8 items",
    date: "Jan 20, 2024",
    customer: "Isabella Murphy",
    status: "Shipping",
    quantity: 8,
    city: "Chicago",
    totalAmount: "$567.51",
  },
  {
    id: "42100003",
    products: "2 items",
    date: "Jan 25, 2024",
    customer: "John McKinney",
    status: "Completed",
    quantity: 2,
    city: "New York",
    totalAmount: "$156.41",
  },
  {
    id: "78100003",
    products: "5 items",
    date: "Jan 28, 2024",
    customer: "Diana Cooper",
    status: "Pending",
    quantity: 5,
    city: "Rome",
    totalAmount: "$556.41",
  },
  {
    id: "98100003",
    products: "6 items",
    date: "Feb 5, 2024",
    customer: "Gregory",
    status: "Shipping",
    quantity: 6,
    city: "United State",
    totalAmount: "$700.41",
  },
];

function OrdersOld() {
  const [sortedData, setSortedData] = useState(data);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const getStatusClass = (status) => {
    switch (status) {
      case "Pending":
        return "text-red-700";
      case "Completed":
        return "text-green-500";
      case "Shipping":
        return "text-yellow-400";
      default:
        return "";
    }
  };

  const sortByDate = () => {
    const sorted = [...sortedData].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
    setSortedData(sorted);
  };

  const handleEyeClick = (order) => {
    setSelectedOrder(order);
  };

  const closePopover = () => {
    setSelectedOrder(null);
  };

  return (
    <>
      <ScrollArea className="">
        <div className="flex flex-col md:flex-row justify-between items-center mb-5 mt-3">
          <h2 className="font-bold text-lg p-3">Latest Orders</h2>
          <div className="flex items-center space-x-3 mt-3 md:mt-0">
            <Button onClick={sortByDate}>Sort By Date</Button>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem className="text-green-500">Completed</SelectItem>
                <SelectItem className="text-red-700">Pending</SelectItem>
                <SelectItem className="text-yellow-400">Shipping</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <Table className="min-w-full">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Order ID</TableHead>
                <TableHead className="font-bold">Products</TableHead>
                <TableHead className="font-bold">Date</TableHead>
                <TableHead className="font-bold">Customer</TableHead>
                <TableHead className="font-bold">Status</TableHead>
                <TableHead className="font-bold">Quantity</TableHead>
                <TableHead className="font-bold">City</TableHead>
                <TableHead className="font-bold">Total</TableHead>
                <TableHead className="font-bold">Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {sortedData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.id}</TableCell>
                  <TableCell>{item.products}</TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.customer}</TableCell>
                  <TableCell className={getStatusClass(item.status)}>
                    {item.status}
                  </TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>{item.city}</TableCell>
                  <TableCell className="text-left">
                    {item.totalAmount}
                  </TableCell>
                  <TableCell className="text-left">
                    <Popover
                      open={selectedOrder?.id === item.id}
                      onOpenChange={(open) =>
                        open ? handleEyeClick(item) : closePopover()
                      }
                    >
                      <PopoverTrigger asChild>
                        <button>
                          <Eye className="inline-block mx-1 cursor-pointer" />
                        </button>
                      </PopoverTrigger>
                      <PopoverContent className="w-full max-w-sm p-4 bg-muted">
                        {selectedOrder && (
                          <>
                            <h3 className="font-bold text-lg mb-2">
                              Order Details
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <p>
                                <strong>Order Id :</strong> {selectedOrder.id}
                              </p>
                              <p>
                                <strong>Products :</strong>{" "}
                                {selectedOrder.products}
                              </p>
                              <p>
                                <strong>Date :</strong> {selectedOrder.date}
                              </p>
                              <p>
                                <strong>Customer :</strong>{" "}
                                {selectedOrder.customer}
                              </p>
                              <p>
                                <strong>Status :</strong> {selectedOrder.status}
                              </p>
                              <p>
                                <strong>Quantity :</strong>{" "}
                                {selectedOrder.quantity}
                              </p>
                              <p>
                                <strong>City :</strong> {selectedOrder.city}
                              </p>
                              <p>
                                <strong>Total :</strong>{" "}
                                {selectedOrder.totalAmount}
                              </p>
                              <p>
                                <strong>Payment Status :</strong>{" "}
                              </p>
                              <p>
                                <strong>Payment Type :</strong>{" "}
                              </p>
                              <p>
                                <strong>Created At :</strong>{" "}
                              </p>
                              <p>
                                <strong>Updated At :</strong>{" "}
                              </p>
                              <p>
                                <strong>Address :</strong>{" "}
                              </p>
                            </div>
                            <div className="mt-4 flex justify-end">
                              <Button onClick={closePopover}>Close</Button>
                            </div>
                          </>
                        )}
                      </PopoverContent>
                    </Popover>

                    <Button>Update</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </ScrollArea>
    </>
  );
}

export default OrdersOld;
