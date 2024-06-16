"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataTable } from "../../components/data-table";
import { columns } from "./columns";
import { Order, OrdersAPIData, SubOrder } from "@/types";

export default function Page() {
  const [orders, setOrders] = useState<SubOrder[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get<OrdersAPIData>(
          "http://localhost:8080/api/order"
        );

        setOrders(
          res.data?.items.map((it: Order) => ({
            id: it.id,
            customer: it.customer,
            itemCount: it.items?.length,
            status: it.status,
          })) || []
        );
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold mb-4">Inventory Orders</h1>
        <DataTable columns={columns} data={orders} />
      </div>
    </div>
  );
}
