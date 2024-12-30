"use client";

import Titulo from "@/components/Titulo";
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
            <Titulo>Posts</Titulo>
            {posts.map(post => (
                <div key={post.id}>
                    <h2>{`Post ${post.id}`}</h2>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
}
