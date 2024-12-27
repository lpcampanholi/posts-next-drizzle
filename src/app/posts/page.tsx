"use client"

import { fetchPosts } from "@/services/posts";
import { useEffect, useState } from "react";

export default function PostsPage() {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        obterPosts();
    }, [])

    async function obterPosts() {
        const posts = await fetchPosts();
        setPosts(posts);
    }

    return (
        <div>
            <h1>Posts</h1>
            {posts.map(post => (
                <div key={post.id}>
                    <h2>{`Post ${post.id}`}</h2>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
}
