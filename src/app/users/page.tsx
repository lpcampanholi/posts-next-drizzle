"use client";

import CardUser from "@/components/CardUser";
import Titulo from "@/components/Titulo";
import { deleteUserFromAPI, fetchUsers } from "@/services/users";
import { useEffect, useState } from "react";

export default function UsersPage() {

    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        buscarUsuarios();
    }, []);

    async function buscarUsuarios() {
        setIsLoading(true);
        try {
            const usersFromApi = await fetchUsers();
            setUsers(usersFromApi);
        } finally {
            setIsLoading(false);
        }
    }

    async function excluirUsuario(id: number) {
        setIsLoading(true);
        try {
            await deleteUserFromAPI(id);
            buscarUsuarios();
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div>
            <Titulo>Users</Titulo>
            {isLoading ? (
                <p>Carregando...</p>
            ) : (
                users.map(user => (
                    <CardUser key={user.id} user={user} onDelete={excluirUsuario} />
                ))
            )}
            <Titulo>Create new User</Titulo>
        </div>
    );
}
