import { getAllPosts } from "@/api/services/posts-services";

export async function GET() {
    const posts = await getAllPosts();
    return Response.json(posts);
}
