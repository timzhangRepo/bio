export type Post = {
  slug: string;
  title: string;
  date: string; // ISO date string
  summary: string;
  content: string;
};

const posts: Post[] = [
  {
    slug: "using-cursor-to-build-my-site",
    title: "Using Cursor to build my personal site",
    date: "2025-08-07",
    summary:
      "Notes on using Cursor to create my personal site—fast to start, a few hiccups, and plans to iterate.",
    content:
      "This is about using Cursor to create my personal site. Previously, when I helped a friend in Hollywood build his site, it took about a week. Now I can get it done in just a couple of hours. I did run into a few issues—like noticing that Cursor was using inline styles instead of styled components, and it got stuck in a loop when I tried to change that. Also, there was no instruction for it to create a black background, and it ended up looking okay but not quite what I wanted. I’m still figuring out if it can produce a really nice, industry-standard UI. It’s definitely fast for starting projects, and I’ll do more experiments with it alongside IntelliJ as I update my site. This is the start of my journey.",
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


