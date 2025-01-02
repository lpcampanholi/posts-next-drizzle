"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { deleteUserFromAPI, fetchUsers } from "@/services/users";
import { useEffect, useState } from "react";
import { Search, Plus, Pencil, Trash } from "lucide-react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import UserModal from "@/components/UserModal";
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import PromptUser from "@/components/PromptUser";
import UserPagination from "@/components/UserPagination";

export default function UsersPage() {

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    handleFetchUsers();
  }, []);

  async function handleFetchUsers() {
    const usersFromApi = await fetchUsers();
    setUsers(usersFromApi);
  }

  async function handleDeleteUser(id: number) {

    await deleteUserFromAPI(id);
    await handleFetchUsers();
  }

  return (
    <>
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold">Users</h1>

        <div className="flex items-center justify-between my-4">
          <form className="flex items-center gap-2">
            <Input name="id" placeholder="User ID" className="w-auto" ></Input>
            <Input name="name" placeholder="User Name" className="w-auto" ></Input>
            <Button type="submit" variant="link">
              <Search />
              Filtrar Resultados
            </Button>
          </form>

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



        <div className="border rounded-lg p-2">
          <Table >
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
              </TableRow>
            </TableHeader>
            <Dialog>
              <TableBody>
                {users.map(user => (
                  <TableRowUser />
                  

                ))}
              </TableBody>
            </Dialog>
          </Table>
        </div>

        <UserPagination />

      </div>
    </>
  );
}
