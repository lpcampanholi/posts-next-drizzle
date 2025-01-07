import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { DialogTrigger } from "../ui/dialog";

export default function NewUserButton() {
  return (
    <DialogTrigger asChild>
      <Button>
        <Plus />
        New User
      </Button>
    </DialogTrigger>
  );
}
