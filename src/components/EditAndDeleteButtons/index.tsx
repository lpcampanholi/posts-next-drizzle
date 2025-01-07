"use client";

import { Pencil, Trash } from "lucide-react";
import { DialogTrigger } from "../ui/dialog";
import { useUsers } from "@/hooks/useUsers";

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
      <Trash
        className="text-neutral-800 transition duration-300 ease-in-out hover:scale-110 hover:text-red-600 hover:cursor-pointer"
        size={17}
        onClick={() => deleteUser(user.id)}
      />
    </div>
  );
}
