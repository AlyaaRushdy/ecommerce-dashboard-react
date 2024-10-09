import TableOrderButton from "@/components/tableOrderButton";
import { Trash2, PencilLine, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const getStatusClass = (status) => {
  switch (status) {
    case "UnPaid":
      return "text-red-700";
    case "Paid":
      return "text-green-500";
    case "Pending":
      return "text-yellow-400";
    default:
      return "";
  }
};

export const productsColumns = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return <TableOrderButton column={column} text={"Product ID"} />;
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return <TableOrderButton column={column} text={"Name"} />;
    },
  },

  {
    accessorKey: "price",
    header: ({ column }) => {
      return <TableOrderButton column={column} text={"Price"} />;
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
      }).format(amount);

      return <div className="font-medium">E{formatted}</div>;
    },
    enableGlobalFilter: false,
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
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const rowData = row.original;
      return (
        <div className="flex gap-4">
          <Link to={`/products/${rowData.id}`}>
            <Eye className="inline-block text-muted-foreground" size={20} />
          </Link>
          <Link to={`/products`}>
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
