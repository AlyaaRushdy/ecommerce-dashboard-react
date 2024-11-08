import TableOrderButton from "@/components/tableOrderButton";
import { PencilLine } from "lucide-react";
import { Link } from "react-router-dom";

export const shippingCostsColumns = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return <TableOrderButton column={column} text={"id"} />;
    },
  },
  {
    accessorKey: "place",
    header: ({ column }) => {
      return <TableOrderButton column={column} text={"Place"} />;
    },
  },
  {
    accessorKey: "cost",
    header: ({ column }) => {
      return <TableOrderButton column={column} text={"Cost"} />;
    },
  },
  {
    accessorKey: "addedBy.name",
    header: ({ column }) => {
      return <TableOrderButton column={column} text={"Admin Name"} />;
    },
  },
  {
    accessorKey: "addedBy.email",
    header: ({ column }) => {
      return <TableOrderButton column={column} text={"Admin Email"} />;
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return <TableOrderButton column={column} text={"Date"} />;
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue("createdAt"));
      return <div className="font-medium">{date.toDateString()}</div>;
    },
    sortingFn: "datetime",
    enableGlobalFilter: false,
  },

  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const rowData = row.original;
      return (
        <div className="flex items-center justify-center">
          <Link to={`/shippingCosts/edit/${rowData.id}`}>
            <PencilLine
              className="inline-block text-muted-foreground hover:text-green-500"
              size={20}
            />
          </Link>
        </div>
      );
    },
  },
];
