export default function Home() {
  return (
    <main style={{
      maxWidth: 720,
      margin: "0 auto",
      padding: "4rem 1rem",
      lineHeight: 1.7
    }}>
      <h1 style={{ fontSize: "2.25rem", marginBottom: "0.5rem" }}>Your Name</h1>
      <p style={{ color: "#666", marginBottom: "2rem" }}>Short personal bio goes here. Replace this text with a quick intro about who you are and what you do.</p>

      <section>
        <h2 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>Contact</h2>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          <li>Email: <a href="mailto:you@example.com">you@example.com</a></li>
          <li>GitHub: <a href="https://github.com/yourhandle" target="_blank" rel="noreferrer">@yourhandle</a></li>
          <li>Location: City, Country</li>
        </ul>
      </section>
    </main>
  );
}
