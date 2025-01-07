"use client";

import { fetchUsers } from "@/services/users-services";
import { useState, createContext, useEffect } from "react";

interface UsersContextProps {
  users: User[],
  setUsers: React.Dispatch<React.SetStateAction<User[]>>,
  selectedUser: User | null,
  setSelectedUser: React.Dispatch<React.SetStateAction<User | null>>,
  isLoading: boolean,
  userDialogOpen: boolean,
  setUserDialogOpen: (value: boolean) => void
}

export const UsersContext = createContext({} as UsersContextProps);

export default function UsersProvider({ children }: { children: React.ReactNode }) {

  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userDialogOpen, setUserDialogOpen] = useState(false);

  async function getUsers() {
    setIsLoading(true);
    try {
      const users = await fetchUsers();
      setUsers(users);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getUsers();
  }, [])

  return (
    <UsersContext.Provider
      value={{
        users,
        setUsers,
        selectedUser,
        setSelectedUser,
        isLoading,
        userDialogOpen,
        setUserDialogOpen
      }}>
      {children}
    </UsersContext.Provider>
  );
}
