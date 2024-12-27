async function fetchUsers() {
    try {
        const response = await fetch("/users/api");
        const users = response.json();
        return users;
    } catch (error) {
        console.log(`Erro: ${error}`);
    }
}
