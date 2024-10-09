import { Button } from "@/components/ui/button";
import { Trash2, ChevronsUpDown, PencilLine } from "lucide-react";
import { Link } from "react-router-dom";

// import { MoreHorizontal } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

export const columns = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    // sortingFn: "infoSortingFunction",
    // filterFn: "infoFilteringFunction",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="font-bold p-0 hover:bg-transparent"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const rowData = row.original;
      return (
        <div className="flex flex-col gap-1">
          <Link to={`/customers/${rowData.id}`}>{rowData.name}</Link>
          <Link
            to={`/customers/${rowData.id}`}
            className="text-muted-foreground"
          >
            {rowData.email}
          </Link>
        </div>
      );
    },
  },
  {
    accessorKey: "phoneNum",
    header: "Phone Number",
  },
  {
    accessorKey: "city",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="font-bold p-0 hover:bg-transparent"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          City
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "registered",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="font-bold p-0 hover:bg-transparent"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Registered
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = row.getValue("registered");
      return <div className="font-medium">{date.toDateString()}</div>;
    },
    sortingFn: "datetime",
    enableGlobalFilter: false,
  },
  {
    accessorKey: "totalOrders",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="font-bold p-0 hover:bg-transparent"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Total Orders
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    enableGlobalFilter: false,
  },
  {
    accessorKey: "totalExpense",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="font-bold p-0 hover:bg-transparent"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Total Expense
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("totalExpense"));
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
        // <DropdownMenu>
        //   <DropdownMenuTrigger asChild>
        //     <Button variant="ghost" className="h-8 w-8 p-0">
        //       <span className="sr-only">Open menu</span>
        //       <MoreHorizontal className="h-4 w-4" />
        //     </Button>
        //   </DropdownMenuTrigger>
        //   <DropdownMenuContent align="end">
        //     <DropdownMenuLabel>Actions</DropdownMenuLabel>
        //     <DropdownMenuItem>
        //       <Link to={"/"}>
        //         <PencilLine
        //           className="inline-block text-muted-foreground me-2"
        //           size={20}
        //         />
        //         Edit
        //       </Link>
        //     </DropdownMenuItem>
        //     <DropdownMenuItem>
        //       <Link to={"/"}>
        //         <Trash
        //           className="inline-block text-muted-foreground me-2"
        //           size={20}
        //         />
        //         Delete
        //       </Link>
        //     </DropdownMenuItem>
        //   </DropdownMenuContent>
        // </DropdownMenu>

        <div className="flex gap-4">
          <Link to={`/customers/${rowData.id}`}>
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
