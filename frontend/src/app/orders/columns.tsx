"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Item } from "@/types";

export const columns: ColumnDef<Item>[] = [
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
