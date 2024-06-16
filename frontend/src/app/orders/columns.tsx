"use client";

import { ColumnDef } from "@tanstack/react-table";
import { SubOrder } from "@/types";

export const columns: ColumnDef<SubOrder>[] = [
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
