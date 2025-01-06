"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { DialogClose, DialogContent, DialogDescription, DialogFooter, DialogTitle } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function UserDialog({ user }: { user?: User }) {

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email)
    }
  }, []);

  return (
    <DialogContent>
      <DialogTitle>New User</DialogTitle>
      <DialogDescription>Create a new user in the system</DialogDescription>
      {/* <form onSubmit={() => submitForm(name, email)} className="space-y-6"> */}
        <div className="grid grid-cols-4 items-center text-right gap-4">
          <Label htmlFor="name">Name</Label>
          <Input
            className="col-span-3"
            type="text"
            id="name"
            value={name}
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
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancelar</Button>
          </DialogClose>
          <Button type="submit">Salvar</Button>
        </DialogFooter>
      {/* </form> */}
    </DialogContent>
  );
}
