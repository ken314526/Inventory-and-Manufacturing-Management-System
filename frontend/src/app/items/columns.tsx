"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Item } from "@/types";

export const columns: ColumnDef<Item>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "stock",
    header: "Stock",
  },
];
