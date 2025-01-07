"use client";

import { fetchUsers } from "@/services/users-services";
import { useState, createContext, useEffect } from "react";

interface UsersContextProps {
    users: User[],
    setUsers: React.Dispatch<React.SetStateAction<User[]>>,
    selectedUser: User | null,
    setSelectedUser: React.Dispatch<React.SetStateAction<User | null>>,
    isLoading: boolean,
}

export const UsersContext = createContext({} as UsersContextProps);

export default function UsersProvider({ children }: { children: React.ReactNode }) {

    const [users, setUsers] = useState<User[]>([]);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    async function getUsers() {
        setIsLoading(true);
        try {
            const users = await fetchUsers();
            setUsers(users);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <UsersContext.Provider
            value={{ users, setUsers, selectedUser, setSelectedUser, isLoading }}>
            {children}
        </UsersContext.Provider>
    );
}
