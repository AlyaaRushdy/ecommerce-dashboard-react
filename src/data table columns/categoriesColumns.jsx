import TableOrderButton from "@/components/tableOrderButton";
import { Trash2, PencilLine, Eye } from "lucide-react";
import { Link } from "react-router-dom";

export const categoriesColumns = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <TableOrderButton
          column={column}
          text={"Category ID"}
          className="text-center font-semibold text-gray-700"
        />
      );
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <TableOrderButton
          column={column}
          text={"Name"}
          className="text-center font-semibold text-gray-700"
        />
      );
    },
  },

  {
    accessorKey: "startingPrice",
    header: ({ column }) => {
      return (
        <TableOrderButton
          column={column}
          text={"Starting Price"}
          className="text-center font-semibold text-gray-700"
        />
      );
    },
  },
  {
    accessorKey: "productStock",
    header: ({ column }) => {
      return (
        <TableOrderButton
          column={column}
          text={"Product Stock"}
          className="text-center font-semibold text-gray-700"
        />
      );
    },
    cell: ({ row }) => {
      const qty = row.getValue("productStock");
      return <div className="text-center text-sm font-medium text-gray-600">{qty}</div>;
    },
    enableGlobalFilter: false,
  },
  {
    accessorKey: "createdBy",
    header: ({ column }) => {
      return (
        <TableOrderButton
          column={column}
          text={"Created By"}
          className="text-center font-semibold text-gray-700"
        />
      );
    },
  },

  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const rowData = row.original;
      return (
        <div className="flex justify-center gap-4 text-gray-600">
          <Link to={`/categories/${rowData.id}`} className="hover:text-blue-500">
            <Eye className="inline-block" size={20} />
          </Link>
          <Link to={`/categories`} className="hover:text-green-500">
            <PencilLine className="inline-block" size={20} />
          </Link>
          <Link to={"/"} className="hover:text-red-500">
            <Trash2 className="inline-block" size={20} />
          </Link>
        </div>
      );
    },
    enableGlobalFilter: false,
  },
];
