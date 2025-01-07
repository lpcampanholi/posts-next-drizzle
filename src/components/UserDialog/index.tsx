"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { DialogClose, DialogContent, DialogDescription, DialogFooter, DialogTitle } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { createUserToAPI } from "@/services/users-services";
import { useUsers } from "@/hooks/useUsers";

interface UserDialogProps {
  user?: User | null,
  onClose: () => void,
}

export default function UserDialog({ user, onClose }: UserDialogProps) {

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const { refreshUsers, updateUser } = useUsers();

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email)
    }
  }, [user]);

  async function submitForm(event: React.FormEvent) {
    event.preventDefault();
    if (user) {
      await updateUser(user.id, { name, email })
    } else {
      const newUser = { name, email };
      await createUserToAPI(newUser);
    }
    refreshUsers();
    setName("");
    setEmail("");
    onClose();
  }

  return (
    <DialogContent>
      <DialogTitle>{user ? "Edit User" : "New User"}</DialogTitle>
      <DialogDescription>
        {user ? "Edit the user details" : "Create a new user in the system"}
      </DialogDescription>
      <form onSubmit={submitForm} className="space-y-6">
        <div className="grid grid-cols-4 items-center text-right gap-4">
          <Label htmlFor="name">Name</Label>
          <Input
            className="col-span-3"
            type="text"
            id="name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-4 items-center text-right gap-4">
          <Label htmlFor="email">E-mail</Label>
          <Input
            className="col-span-3"
            type="email"
            id="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" onClick={() => onClose()}>Cancelar</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button type="submit">Salvar</Button>
          </DialogClose>
        </DialogFooter>
      </form>
    </DialogContent>
  );
}
