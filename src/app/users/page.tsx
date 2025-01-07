"use client";

import DataTable from "@/components/DataTable";
import { columns } from "@/components/DataTable/columns.";
import { Dialog } from "@/components/ui/dialog";
import UserDialog from "@/components/UserDialog";
import { useUsers } from "@/hooks/useUsers";

export default function UsersPage() {

  const { users, selectedUser, setSelectedUser } = useUsers();

  return (
    <Dialog>
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold">Users</h1>
        <DataTable columns={columns} data={users} />
      </div>
      <UserDialog user={selectedUser} onClose={() => setSelectedUser(null)} />
    </Dialog >
  );
}
