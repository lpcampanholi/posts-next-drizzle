"use client";

import DataTable from "@/components/DataTable";
import { columns } from "@/components/DataTable/columns.";
import SkeletonTable from "@/components/SkeletonTable/SkeletonTable";
import UserDialog from "@/components/UserDialog";
import { useUsers } from "@/hooks/useUsers";

export default function UsersPage() {
  const { users, selectedUser, setSelectedUser, isLoading } = useUsers();

  return (
    <>
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold">Users</h1>
        {isLoading ?
          <SkeletonTable />
          :
          <DataTable columns={columns} data={users} />
        }
      </div>
      <UserDialog user={selectedUser} onClose={() => setSelectedUser(null)} />
    </>
  );
}
