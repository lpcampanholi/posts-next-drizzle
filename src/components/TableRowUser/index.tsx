import { Pencil, Trash } from "lucide-react";
import { TableCell, TableRow } from "../ui/table";
import { DialogTrigger } from "../ui/dialog";
import UserModal from "../UserModal";
import { AlertDialog, AlertDialogTrigger } from "../ui/alert-dialog";
import PromptUser from "../PromptUser";

export default function TableRowUser() {
  return (
    <TableRow key={user.id}>
      <TableCell>{user.id}</TableCell>
      <TableCell>{user.name}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>
        <div className="flex gap-4">
          <DialogTrigger asChild>
            <Pencil
              className="text-neutral-800 transition duration-300 ease-in-out hover:scale-110 hover:text-blue-600 hover:cursor-pointer"
              size={18}
            />
          </DialogTrigger>
          <UserModal user={user} />
          <AlertDialog>
            <AlertDialogTrigger>
              <Trash
                className="text-neutral-800 transition duration-300 ease-in-out hover:scale-110 hover:text-red-600 hover:cursor-pointer"
                size={18}
              />
            </AlertDialogTrigger>
            <PromptUser onConfirm={() => handleDeleteUser(user.id)} />
          </AlertDialog>
        </div>
      </TableCell>
    </TableRow>
  );
}