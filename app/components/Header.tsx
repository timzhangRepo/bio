import Link from "next/link";

export default function Header() {
  return (
    <header style={{
      borderBottom: "1px solid rgba(0,0,0,0.08)",
      position: "sticky",
      top: 0,
      backdropFilter: "saturate(180%) blur(6px)",
      background: "rgba(255,255,255,0.6)",
      WebkitBackdropFilter: "saturate(180%) blur(6px)",
      zIndex: 10
    }}>
      <nav style={{
        maxWidth: 900,
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "1rem",
        padding: "0.75rem 1rem"
      }}>
        <Link href="/bio">About Me</Link>
        <Link href="/blog">Blog</Link>
      </nav>
    </header>
  );
}


