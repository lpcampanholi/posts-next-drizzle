import DataTable from "@/components/DataTable";
import { columns } from "@/components/DataTable/columns.";
import { getAllUsers } from "@/api/services/users-services";

export default async function UsersPage() {

  const users = await getAllUsers();

  return (
    <>
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold">Users</h1>
        <DataTable columns={columns} data={users} />
      </div>
    </>
  );
}
