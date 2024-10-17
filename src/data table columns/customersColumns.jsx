import TableOrderButton from "@/components/tableOrderButton";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Ban } from "lucide-react";
import { Link } from "react-router-dom";

const getStatusClass = (status) => {
  switch (status) {
    case "active":
      // return "text-green-500";
      return "text-white bg-green-500 rounded-full px-2 py-0.5 text-sm";
    case "canceled":
    case "banned":
      // return "text-red-500";
      return "text-white bg-red-500 rounded-full px-2 py-0.5 text-sm";

    default:
      return "";
  }
};

export const columns = [
  // {
  //   accessorKey: "id",
  //   header: "ID",
  // },
  {
    accessorKey: "fullName",
    // sortingFn: "infoSortingFunction",
    // filterFn: "infoFilteringFunction",
    header: ({ column }) => {
      return <TableOrderButton column={column} text={"Name"} />;
    },
    cell: ({ row }) => {
      const rowData = row.original;
      return <Link to={`/customers/${rowData.id}`}>{rowData.fullName}</Link>;
    },
  },
  {
    accessorKey: "email",
    // sortingFn: "infoSortingFunction",
    // filterFn: "infoFilteringFunction",
    header: ({ column }) => {
      return <TableOrderButton column={column} text={"Email"} />;
    },
    cell: ({ row }) => {
      const rowData = row.original;
      return <Link to={`/customers/${rowData.id}`}>{rowData.email}</Link>;
    },
  },
  {
    accessorKey: "phone",
    header: "Phone Number",
  },
  {
    accessorKey: "accountStatus",
    header: ({ column }) => {
      return <TableOrderButton column={column} text={"Status"} />;
    },
    cell: ({ row }) => {
      return (
        <>
          <div className="text-center">
            <span className={getStatusClass(row.original.accountStatus)}>
              {row.original.accountStatus}
            </span>
          </div>
        </>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return <TableOrderButton column={column} text={"Registered in"} />;
    },
    cell: ({ row }) => {
      const date = row.getValue("createdAt");
      return <div className="font-medium">{new Date(date).toDateString()}</div>;
    },
    sortingFn: "datetime",
    enableGlobalFilter: false,
  },
  // {
  //   accessorKey: "totalOrders",
  //   header: ({ column }) => {
  //     return <TableOrderButton column={column} text={"Total Orders"} />;
  //   },
  //   cell: ({ row }) => {
  //     const orders = row.getValue("totalOrders");
  //     return <p className="text-center">{orders}</p>;
  //   },
  //   enableGlobalFilter: false,
  // },
  // {
  //   accessorKey: "totalExpense",
  //   header: ({ column }) => {
  //     return <TableOrderButton column={column} text={"Total Expense"} />;
  //   },
  //   cell: ({ row }) => {
  //     const amount = parseFloat(row.getValue("totalExpense"));
  //     const formatted = new Intl.NumberFormat("en-GB", {
  //       style: "currency",
  //       currency: "GBP",
  //     }).format(amount);

  //     return <div className="font-medium">E{formatted}</div>;
  //   },
  //   enableGlobalFilter: false,
  // },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const rowData = row.original;
      return (
        <div className="flex gap-4">
          <Button
            variant={"link"}
            className="text-muted-foreground hover:text-red-600"
            onClick={(e) => {
              e.preventDefault();
              console.log("clicked");
              console.log(
                `http://localhost:5000/users/banAccount/${rowData.id}`
              );
              axios
                .put(`http://localhost:5000/users/banAccount/${rowData.id}`)
                .catch((err) => {
                  console.log(err.response);
                });
            }}
          >
            <Ban size={20} />
          </Button>
        </div>
      );
    },
    enableGlobalFilter: false,
  },
];
