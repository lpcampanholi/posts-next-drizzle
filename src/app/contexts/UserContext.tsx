"use client";

import { useState, createContext } from "react";

interface UsersContextProps {
    users: User[],
    setUsers: React.Dispatch<React.SetStateAction<User[]>>,
}

export const UsersContext = createContext({} as UsersContextProps);

export default function UsersProvider({ children }: { children: React.ReactNode }) {
    const [users, setUsers] = useState<User[]>([]);
    return (
        <UsersContext.Provider
            value={{ users, setUsers }}>
            {children}
        </UsersContext.Provider>
    );
}
