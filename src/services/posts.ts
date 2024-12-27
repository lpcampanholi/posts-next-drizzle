export async function fetchPosts() {
    try {
        const response = await fetch("/posts/api");
        const posts = await response.json();
        return posts;
    } catch (error) {
        console.log(`Erro: ${error}`);
    }
}
