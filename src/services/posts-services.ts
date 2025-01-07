export async function fetchPosts() {
    try {
        const response = await fetch("/api/posts/");
        const posts = await response.json();
        return posts;
    } catch (error) {
        console.log(`Erro: ${error}`);
    }
}
