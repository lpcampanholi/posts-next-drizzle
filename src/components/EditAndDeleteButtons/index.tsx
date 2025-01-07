"use client";

import { Pencil, Trash } from "lucide-react";
import { DialogTrigger } from "../ui/dialog";
import { useUsers } from "@/hooks/useUsers";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

interface EditAndDeleteButtonsProps {
  user: User,
}

export default function EditAndDeleteButtons({ user }: EditAndDeleteButtonsProps) {

  const { deleteUser, setSelectedUser } = useUsers();

  return (
    <div className="flex gap-2">
      <DialogTrigger asChild>
        <Pencil
          className="text-neutral-800 transition duration-300 ease-in-out hover:scale-110 hover:text-blue-600 hover:cursor-pointer"
          size={17}
          onClick={() => setSelectedUser(user)}
        />
      </DialogTrigger>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Trash
            className="text-neutral-800 transition duration-300 ease-in-out hover:scale-110 hover:text-red-600 hover:cursor-pointer"
            size={17}
          />
        </AlertDialogTrigger>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete this user
              and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => deleteUser(user.id)}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
