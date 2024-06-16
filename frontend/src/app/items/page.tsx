"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { Item } from "@/types";

export default function page() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axios.get<Item[]>("http://localhost:8080/api/item");
        setItems(res.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div>
      <DataTable columns={columns} data={items} />
    </div>
  );
}
