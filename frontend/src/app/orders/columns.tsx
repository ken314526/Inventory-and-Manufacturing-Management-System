"use client";

import { ColumnDef } from "@tanstack/react-table";
import { SubOrder } from "@/types";
import { Checkbox } from "@/components/ui/checkbox";

export const columns: ColumnDef<SubOrder>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "customer",
    header: "Customer Name",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "itemCount",
    header: "Item Count",
  },
];
