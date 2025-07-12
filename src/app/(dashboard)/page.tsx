"use client";
import React, { useState } from "react";
import HeaderNav from "@/components/HeaderNav";
import SideNav from "@/components/sidenav/SideNav";
import { Table } from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { faTruck, faMoneyBill1, faRectangleList, faTrophy } from "@fortawesome/free-solid-svg-icons";

export default function DashboardPage() {

  const cards = [
    {
      title: "92",
      subText: "Scheduled Bookings",
      icon: faTruck,
    },
    {
      title: "53",
      subText: "Pending Payments",
      icon: faMoneyBill1,
    },
    {
      title: "0",
      subText: "Expiring Subscriptions",
      icon: faRectangleList,
    },
    {
      title: "46",
      subText: "Buckets for Release",
      icon: faRectangleList,
    },
    {
      title: "59",
      subText: "Pending Redemptions",
      icon: faTrophy,
    },
  ];
  const [sideNavOpen, setSideNavOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen text-primary">
      <HeaderNav onBurgerClick={() => setSideNavOpen((open) => !open)} />
      <SideNav isOpen={sideNavOpen} />
      <div className="flex flex-col flex-1 items-start justify-start bg-white md:ml-60">
        <div className="px-6 pt-8">
          <h2 className="font-medium text-4xl mb-12">Dashboard</h2>
        </div>
        <div className="flex flex-row flex-wrap float-left mb-12 w-full px-4 py-4">
          {cards.map((card) => (
            <div className="w-1/2 sm:w-1/2 xl:w-1/3 mb-5" key={card.subText}>
              <Card icon={card.icon} title={card.title} subText={card.subText} />
            </div>
          ))}
        </div>
        <div className="w-full px-4 py-4 md:px-8">
          <Table
            headers={[
              { label: 'Name', key: 'name', sortable: true },
              { label: 'Email', key: 'email', sortable: true },
              { label: 'Role', key: 'role', sortable: true },
            ]}
            data={[
              { id: '1', name: 'Alice', email: 'alice@example.com', role: 'Admin' },
              { id: '2', name: 'Bob', email: 'bob@example.com', role: 'User' },
              { id: '3', name: 'Charlie', email: 'charlie@example.com', role: 'Manager' },
            ]}
            showPagination={false}
            onRowClick={(row) => alert(`Clicked: ${row.name}`)}
          />
        </div>
      </div>
    </div>
  );
}

