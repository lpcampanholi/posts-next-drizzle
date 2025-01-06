import { getAllPosts } from "@/api/services/postsServices";

export async function GET() {
    const posts = await getAllPosts();
    return Response.json(posts);
}
