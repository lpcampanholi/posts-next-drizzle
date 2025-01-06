import { Pencil, Trash } from "lucide-react";
import { DialogTrigger } from "../ui/dialog";
import { useUsersContext } from "@/hooks/useUsers";

export default function EditAndDeleteButtons() {

    const { handleDeleteUser } = useUsersContext();

    return (
        <div className="flex gap-2">
            <DialogTrigger asChild>
                <Pencil
                    className="text-neutral-800 transition duration-300 ease-in-out hover:scale-110 hover:text-blue-600 hover:cursor-pointer"
                    size={17}
                />
            </DialogTrigger>
            <Trash
                className="text-neutral-800 transition duration-300 ease-in-out hover:scale-110 hover:text-red-600 hover:cursor-pointer"
                size={17}
                onClick={() => handleDeleteUser}
            />
        </div>
    );
}
