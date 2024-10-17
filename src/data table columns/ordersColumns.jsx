import TableOrderButton from "@/components/tableOrderButton";
import { Button } from "@/components/ui/button";
import { Trash2, ChevronsUpDown, PencilLine, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const getStatusClass = (status) => {
  switch (status) {
    case "under testing":
      return "text-yellow-500";
    case "Completed":
      return "text-green-500";
    case "Shipping":
      return "text-blue-500";
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
    cell: ({ row }) => {
      const id = row.getValue("id");
      return <Link to={`/orders/${id}`}>{id}</Link>;
    },
  },
  {
    accessorKey: "products",
    header: ({ column }) => {
      return <TableOrderButton column={column} text={"Products"} />;
    },
    cell: ({ row }) => {
      const productsArray = row.getValue("products");
      return (
        <div className="font-medium">{productsArray.length + " products"}</div>
      );
    },
  },
  {
    accessorKey: "quantity",
    header: ({ column }) => {
      return <TableOrderButton column={column} text={"Quantity"} />;
    },
    cell: ({ row }) => {
      const productsArray = row.getValue("products");
      const totalQuantity = productsArray.reduce((prev, curr) => {
        prev += curr.quantity;
        return prev;
      }, 0);
      return <div className="font-medium">{totalQuantity + " Items"}</div>;
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return <TableOrderButton column={column} text={"Date"} />;
    },
    cell: ({ row }) => {
      const date = row.getValue("createdAt");
      return <div className="font-medium">{new Date(date).toDateString()}</div>;
    },
    sortingFn: "datetime",
    enableGlobalFilter: false,
  },
  {
    accessorKey: `userName`,
    header: ({ column }) => {
      return <TableOrderButton column={column} text={"Customer Name"} />;
    },
    cell: ({ row }) => {
      const customer = row.getValue("userName");
      return <Link to={`/customers/${row.original.userId}`}>{customer}</Link>;
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
  // {
  //   accessorKey: "quantity",
  //   header: ({ column }) => {
  //     return <TableOrderButton column={column} text={"Quantity"} />;
  //   },
  //   cell: ({ row }) => {
  //     const qty = row.getValue("quantity");
  //     return <div className="text-center">{qty}</div>;
  //   },
  //   enableGlobalFilter: false,
  // },

  // {
  //   accessorKey: "city",
  //   header: ({ column }) => {
  //     return <TableOrderButton column={column} text={"City"} />;
  //   },
  // },

  {
    accessorKey: "totalPrice",
    header: ({ column }) => {
      return <TableOrderButton column={column} text={"Total"} />;
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("totalPrice"));
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
