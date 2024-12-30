"use client";

import CardUser from "@/components/CardUser";
import Titulo from "@/components/Titulo";
import UserForm from "@/components/UserForm";
import { deleteUserFromAPI, fetchUsers } from "@/services/users";
import { useEffect, useState } from "react";
import PuffLoader from "react-spinners/PuffLoader";

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

    async function criarUsuario() {
        
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
                <PuffLoader
                    color="#00baff"
                    size={60}
                />
            ) : (
                users.map(user => (
                    <CardUser key={user.id} user={user} onDelete={excluirUsuario} />
                ))
            )}
            <UserForm />
        </div>
    );
}
