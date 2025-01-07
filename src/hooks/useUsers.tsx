"use client";

import { UsersContext } from "@/app/contexts/user-context";
import { deleteUserFromAPI, fetchUsers, updateUserToApi } from "@/services/users-services";
import { useContext } from "react";

export function useUsers() {

    const {
        users,
        setUsers,
        selectedUser,
        setSelectedUser,
        isLoading
    } = useContext(UsersContext);

    async function refreshUsers() {
        const usersFromApi = await fetchUsers();
        setUsers(usersFromApi);
    }

    async function updateUser(id: number, user: UserDTO) {
        await updateUserToApi(id, user);
        await refreshUsers();
    }

    async function deleteUser(id: number) {
        await deleteUserFromAPI(id);
        await refreshUsers();
    }

    return {
        users,
        refreshUsers,
        updateUser,
        deleteUser,
        selectedUser,
        setSelectedUser,
        isLoading,
    }
}
