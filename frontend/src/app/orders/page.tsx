"use client";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Order } from "../../types";

export default function page() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [statusFilter, setStatusFilter] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<{
    field: keyof Order;
    direction: "asc" | "desc";
  }>({ field: "customer", direction: "asc" });

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get<Order[]>(
          "http://localhost:8080/api/order"
        );
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    fetchOrders();
  }, [statusFilter]);

  const sortOrders = (field: keyof Order) => {
    const newDirection = sortOrder.direction === "asc" ? "desc" : "asc";
    setSortOrder({ field, direction: newDirection });
    setOrders(
      [...orders].sort((a, b) => {
        if (a[field] < b[field]) return sortOrder.direction === "asc" ? -1 : 1;
        if (a[field] > b[field]) return sortOrder.direction === "asc" ? 1 : -1;
        return 0;
      })
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Order List</h1>
      <div className="mb-4">
        <label className="mr-2">Filter by status:</label>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border rounded p-2"
        >
          <option value="">All</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th
              onClick={() => sortOrders("customer")}
              className="cursor-pointer px-4 py-2"
            >
              Customer
            </th>
            <th className="px-4 py-2">Status</th>
            <th
              onClick={() => sortOrders("items")}
              className="cursor-pointer px-4 py-2"
            >
              Item Count
            </th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="border px-4 py-2">{order.customer}</td>
              <td className="border px-4 py-2">{order.status}</td>
              <td className="border px-4 py-2">{order.items.length}</td>
              <td className="border px-4 py-2">
                <a href={`/order/${order.id}`} className="text-blue-500">
                  View Details
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
