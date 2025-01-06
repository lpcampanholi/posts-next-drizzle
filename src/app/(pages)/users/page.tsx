"use client";

import DataTable from "@/components/DataTable";
import { columns } from "@/components/DataTable/columns.";
import UsersProvider from "../../contexts/UserContext";
import { Dialog } from "@/components/ui/dialog";
import UserDialog from "@/components/UserDialog";
import { useUsersContext } from "@/hooks/useUsers";

export default function UsersPage() {

  const { users } = useUsersContext();

  return (
    <UsersProvider>
      <Dialog>
        <div className="p-6 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold">Users</h1>
          <DataTable columns={columns} data={users} />
        </div>
        <UserDialog />
      </Dialog >
    </UsersProvider>
  );
}
