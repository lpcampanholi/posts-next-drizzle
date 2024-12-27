import db from "../db/connection";
import { posts } from "../db/schema/posts";

export async function getAllPosts() {
    const allPosts = await db.select().from(posts);
    return allPosts;
}
