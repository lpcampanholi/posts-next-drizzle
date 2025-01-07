import db from "../connection";
import { posts } from "../schema/posts";

export async function getAllPosts() {
    const allPosts = await db.select().from(posts);
    return allPosts;
}
