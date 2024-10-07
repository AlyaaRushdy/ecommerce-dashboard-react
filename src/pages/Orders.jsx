
import { Button } from "@/components/ui/button";
import { Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
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

const data = [
  {
    id: "53200002",
    products: "5 items",
    date: "Jan 10, 2024",
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

function Orders() {
  const getStatusClass = (status) => {
    switch (status) {
      case 'Pending':
        return 'text-red-700';
      case 'Completed':
        return 'text-green-500';
      case 'Shipping':
        return 'text-yellow-400';
      default:
        return '';
    }
  };

  return (
    <>
      <div className="flex justify-between items-center mb-5 mt-3">
       <h2 className="font-bold text-lg p-3">Latest Orders</h2>
        <Select>
          <SelectTrigger className="w-[180px] mt-5 me-2">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem className="text-green-500">Completed</SelectItem>
            <SelectItem className="text-red-700">Cancel</SelectItem>
            <SelectItem className="text-yellow-400">Shipping</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Table className="w-full">
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
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.id}</TableCell>
              <TableCell>{item.products}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.customer}</TableCell>
              <TableCell className={getStatusClass(item.status)}>{item.status}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>{item.city}</TableCell>
              <TableCell className="text-left">{item.totalAmount}</TableCell>
              <TableCell className="text-left">
                <Link to={`/orders/${item.id}`}>
                  <Eye className="inline-block mx-1 cursor-pointer" />
                </Link>
                <Button>Update</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default Orders;














