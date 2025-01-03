import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import UserModal from "@/components/UserDialog";
import UserSearch from "@/components/UserSearch";
import DataTable from "@/components/DataTable";
import { columns } from "@/components/DataTable/columns.";
import { getAllUsers } from "@/api/services/users-services";

export default async function UsersPage() {

  const users = await getAllUsers();

  return (
    <>
      <div className="p-6 max-w-4xl mx-auto">

        <h1 className="text-3xl font-bold">Users</h1>

        <div className="flex items-center justify-between my-4">

          <UserSearch />

          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus />
                New User
              </Button>
            </DialogTrigger>
            <UserModal />
          </Dialog>
        </div>

        <DataTable columns={columns} data={users} />

      </div>
    </>
  );
}
