import { getAllPosts } from "@/db/services/posts-services";

export async function GET() {
    const posts = await getAllPosts();
    return Response.json(posts);
}
