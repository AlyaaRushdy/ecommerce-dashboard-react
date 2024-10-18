import TableOrderButton from "@/components/tableOrderButton";
import { Eye, PencilLine, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

export const promotionsCoulmns = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return <TableOrderButton column={column} text={"Coupon ID"} />;
    },
  },
  {
    accessorKey: "code",
    header: ({ column }) => {
      return <TableOrderButton column={column} text={"Code"} />;
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return <TableOrderButton column={column} text={"Status"} />;
    },
  },
  {
    accessorKey: "startDate",
    header: ({ column }) => {
      return <TableOrderButton column={column} text={"Start Date"} />;
    },
  },
  {
    accessorKey: "endDate",
    header: ({ column }) => {
      return <TableOrderButton column={column} text={"End Date"} />;
    },
  },
  {
    accessorKey: "type",
    header: ({ column }) => {
      return <TableOrderButton column={column} text={"Coupon Type"} />;
    },
  },
  {
    accessorKey: "discountValue",
    header: ({ column }) => {
      return <TableOrderButton column={column} text={"Discount Value"} />;
    },
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const rowData = row.original;
      return (
        <div className="flex gap-4">
          <Link to={`/users/${rowData.id}`}>
            <Eye className="inline-block text-muted-foreground" size={20} />
          </Link>
          <Link to={`/users`}>
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