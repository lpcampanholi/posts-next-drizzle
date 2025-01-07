export async function fetchUsers(): Promise<User[]> {
    try {
        const response = await fetch("/api/users");
        if (!response.ok) {
            throw new Error("Erro ao buscar usuários");
        }
        return await response.json();
    } catch (error) {
        console.error("Erro ao buscar usuários", error);
        return [];
    }
}

export async function createUserToAPI(user: UserDTO): Promise<void> {
    await fetch("/api/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });
}

export async function updateUserToApi(id: number, user: UserDTO): Promise<void> {
    await fetch(`/api/users/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });
}

export async function deleteUserFromAPI(id: number): Promise<void> {
    try {
        const response = await fetch(`/api/users/${id}`, { method: "DELETE" });
        if (!response.ok) {
            throw new Error("Erro ao excluir usuário");
        }
    } catch (error) {
        console.error("Erro ao excluir usuário:", error);
    }
}
