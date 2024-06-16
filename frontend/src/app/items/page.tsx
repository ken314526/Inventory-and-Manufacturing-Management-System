"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataTable } from "../../components/data-table";
import { columns } from "./columns";
import { Item, ItemsAPIData } from "@/types";

export default function Page() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axios.get<ItemsAPIData>(
          "http://localhost:8080/api/item"
        );
        setItems(res.data?.items || []);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold mb-4">Inventory Items</h1>
        <DataTable columns={columns} data={items} />
      </div>
    </div>
  );
}
