import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogTrigger } from "../ui/dialog";
import UserDialog from "../UserDialog";

export default function NewUserButton() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>
                    <Plus />
                    New User
                </Button>
            </DialogTrigger>
            <UserDialog />
        </Dialog>
    );
}
