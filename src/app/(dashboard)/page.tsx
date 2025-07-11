"use client";
import SideNav from "@/components/sidenav/SideNav";
import { Table } from "@/components/ui/table";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen text-primary">
      <SideNav />
      <div className="flex flex-col flex-1 items-start justify-start bg-white md:ml-60">
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
