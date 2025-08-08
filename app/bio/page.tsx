export const metadata = {
  title: "Bio",
  description: "About me",
};

export default function BioPage() {
  return (
    <main style={{
      maxWidth: 720,
      margin: "0 auto",
      padding: "4rem 1rem",
      lineHeight: 1.8
    }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>About Me</h1>
      <p>
        I currently work at an investment bank in Salt Lake City, Utah, where I focus on
        full-stack development. I hold a master’s degree in computer science from the
        University of Southern California, and in my free time, I enjoy working on indie
        projects that let me experiment and stay creative.
      </p>
    </main>
  );
}


