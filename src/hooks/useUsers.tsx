"use client";

import { UsersContext } from "@/app/contexts/UserContext";
import { createUserToAPI, deleteUserFromAPI, fetchUsers, updateUserToApi } from "@/services/users";
import { useContext } from "react";

export function useUsersContext() {

    const { users, setUsers } = useContext(UsersContext);

    async function handleFetchUsers() {
        const usersFromApi = await fetchUsers();
        setUsers(usersFromApi);
    }

    async function handleAddUser(user: UserDTO) {
        await createUserToAPI(user);
        await handleFetchUsers();
    }

    async function handleUpdateUser(user: User) {
        await updateUserToApi(user);
        await handleFetchUsers();
    }

    async function handleDeleteUser(id: number) {
        await deleteUserFromAPI(id);
        await handleFetchUsers();
    }

    return {
        users,
        handleFetchUsers,
        handleAddUser,
        handleUpdateUser,
        handleDeleteUser
    }
}
