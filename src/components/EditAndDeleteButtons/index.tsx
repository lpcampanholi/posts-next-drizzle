import { Pencil, Trash } from "lucide-react";

export default function EditAndDeleteButtons() {
    return (
        <div className="flex gap-2">
            <Pencil
                className="text-neutral-800 transition duration-300 ease-in-out hover:scale-110 hover:text-blue-600 hover:cursor-pointer"
                size={17}
            />
            <Trash
                className="text-neutral-800 transition duration-300 ease-in-out hover:scale-110 hover:text-red-600 hover:cursor-pointer"
                size={17}
            />
        </div>
    );
}
