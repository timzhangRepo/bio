export type Post = {
  slug: string;
  title: string;
  date: string; // ISO date string
  summary: string;
  content: string;
};

const posts: Post[] = [
  {
    slug: "hello-world",
    title: "Hello, world",
    date: "2025-01-01",
    summary: "Kicking off my new blog with a short hello.",
    content:
      "Welcome to my blog! This is a minimal placeholder post to get things started. I will share notes about projects, ideas, and learnings here.",
  },
  {
    slug: "second-post",
    title: "Another day, another note",
    date: "2025-02-10",
    summary: "A small reflection and a few useful links.",
    content:
      "Here is a second placeholder post with a bit more text. Over time, I may migrate to MDX or a CMS, but for now simple in-memory posts keep things intentionally minimal.",
  },
];

export function getAllPostsMeta() {
  return posts
    .slice()
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map(({ slug, title, date, summary }) => ({ slug, title, date, summary }));
}

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function getAllPostSlugs() {
  return posts.map((p) => p.slug);
}


