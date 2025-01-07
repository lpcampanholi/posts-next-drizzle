"use client";

import { fetchUsers } from "@/services/users-services";
import { useState, createContext, useEffect } from "react";

interface UsersContextProps {
    users: User[],
    setUsers: React.Dispatch<React.SetStateAction<User[]>>,
    selectedUser: User | null,
    setSelectedUser: React.Dispatch<React.SetStateAction<User | null>>
}

export const UsersContext = createContext({} as UsersContextProps);

export default function UsersProvider({ children }: { children: React.ReactNode }) {

    const [users, setUsers] = useState<User[]>([]);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    async function getUsers() {
        const users = await fetchUsers();
        setUsers(users);
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <UsersContext.Provider
            value={{ users, setUsers, selectedUser, setSelectedUser }}>
            {children}
        </UsersContext.Provider>
    );
}
