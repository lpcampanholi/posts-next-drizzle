import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { useUsers } from "@/hooks/useUsers";

export default function NewUserButton() {
  const { setUserDialogOpen } = useUsers()
  
  return (
    <Button onClick={() => setUserDialogOpen(true)}>
      <Plus />
      New User
    </Button>
  );
}
