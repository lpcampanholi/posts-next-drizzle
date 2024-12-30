export async function fetchUsers(): Promise<User[]> {
    try {
        const response = await fetch("/users/api");
        if (!response.ok) {
            throw new Error("Erro ao buscar usuários");
        }
        return await response.json();
    } catch (error) {
        console.error("Erro ao buscar usuários", error);
        return [];
    }
}

export async function deleteUserFromAPI(id: number): Promise<void> {
    try {
        const response = await fetch(`/users/${id}`, { method: "DELETE" });
        if (!response.ok) {
            throw new Error("Erro ao excluir usuário");
        }
    } catch (error) {
        console.error("Erro ao excluir usuário:", error);
    }
}
