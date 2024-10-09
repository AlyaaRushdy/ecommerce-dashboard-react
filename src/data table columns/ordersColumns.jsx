import TableOrderButton from "@/components/tableOrderButton";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Trash2, ChevronsUpDown, PencilLine, Eye } from "lucide-react";
import { Link } from "react-router-dom";

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

export const orderColumns = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="font-bold p-0 hover:bg-transparent"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Order ID
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "products",
    header: ({ column }) => {
      return <TableOrderButton column={column} text={"Products"} />;
    },
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return <TableOrderButton column={column} text={"Date"} />;
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue("date"));
      return <div className="font-medium">{date.toDateString()}</div>;
    },
    sortingFn: "datetime",
    enableGlobalFilter: false,
  },
  {
    accessorKey: "customer",
    header: ({ column }) => {
      return <TableOrderButton column={column} text={"Customer Name"} />;
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return <TableOrderButton column={column} text={"Status"} />;
    },
    cell: ({ row }) => {
      return (
        <>
          <span className={getStatusClass(row.original.status)}>
            {row.original.status}
          </span>
        </>
      );
    },
  },
  {
    accessorKey: "quantity",
    header: ({ column }) => {
      return <TableOrderButton column={column} text={"Quantity"} />;
    },
    cell: ({ row }) => {
      const qty = row.getValue("quantity");
      return <div className="text-center">{qty}</div>;
    },
    enableGlobalFilter: false,
  },

  {
    accessorKey: "city",
    header: ({ column }) => {
      return <TableOrderButton column={column} text={"City"} />;
    },
  },

  {
    accessorKey: "totalAmount",
    header: ({ column }) => {
      return <TableOrderButton column={column} text={"Total"} />;
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("totalAmount"));
      const formatted = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
      }).format(amount);

      return <div className="font-medium">E{formatted}</div>;
    },
    enableGlobalFilter: false,
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const rowData = row.original;
      return (
        <div className="flex gap-4">
          <Popover>
            <PopoverTrigger>
              <Eye className="inline-block text-muted-foreground" size={20} />
            </PopoverTrigger>
            <PopoverContent className="w-full max-w-sm p-4 bg-muted">
              {rowData && (
                <>
                  <h3 className="font-bold text-lg mb-2">Order Details</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <p>
                      <strong>Order Id :</strong> {rowData.id}
                    </p>
                    <p>
                      <strong>Products :</strong> {rowData.products}
                    </p>
                    <p>
                      <strong>Date :</strong> {rowData.date}
                    </p>
                    <p>
                      <strong>Customer :</strong> {rowData.customer}
                    </p>
                    <p>
                      <strong>Status :</strong> {rowData.status}
                    </p>
                    <p>
                      <strong>Quantity :</strong> {rowData.quantity}
                    </p>
                    <p>
                      <strong>City :</strong> {rowData.city}
                    </p>
                    <p>
                      <strong>Total :</strong> {rowData.totalAmount}
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
                </>
              )}
            </PopoverContent>
          </Popover>
          <Link to={`/orders`}>
            <PencilLine
              className="inline-block text-muted-foreground"
              size={20}
            />
          </Link>
          <Link to={"/"}>
            <Trash2 className="inline-block text-muted-foreground" size={20} />
          </Link>
        </div>
      );
    },
    enableGlobalFilter: false,
  },
];
