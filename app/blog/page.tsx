import Link from "next/link";
import { getAllPostsMeta } from "@/lib/posts";

export const metadata = {
  title: "Blog",
  description: "Posts and notes",
};

export default function BlogIndexPage() {
  const posts = getAllPostsMeta();
  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "4rem 1rem" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>Blog</h1>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {posts.map((post) => (
          <li key={post.slug} style={{ marginBottom: "1.25rem" }}>
            <article>
              <h2 style={{ fontSize: "1.25rem", marginBottom: "0.25rem" }}>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <small style={{ color: "#666" }}>
                {new Date(post.date).toLocaleDateString()}
              </small>
              <p style={{ marginTop: "0.5rem" }}>{post.summary}</p>
            </article>
          </li>
        ))}
      </ul>
    </main>
  );
}


