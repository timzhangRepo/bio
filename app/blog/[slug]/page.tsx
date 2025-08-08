import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function BlogPostPage(props: PageProps) {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);

  if (!post) return notFound();

  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "4rem 1rem" }}>
      <p style={{ marginBottom: "1rem" }}>
        <Link href="/blog">← Back to blog</Link>
      </p>
      <article>
        <h1 style={{ fontSize: "2rem", marginBottom: "0.25rem" }}>{post.title}</h1>
        <small style={{ color: "#666" }}>
          {new Date(post.date).toLocaleDateString()}
        </small>
        <div style={{ marginTop: "1rem", whiteSpace: "pre-wrap" }}>{post.content}</div>
      </article>
    </main>
  );
}


