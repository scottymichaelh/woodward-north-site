import Button from "../components/Button";

export default function NotFound() {
  return (
    <section style={{ padding: "clamp(64px,9vw,120px) 24px", background: "var(--wn-bg)", textAlign: "center" }}>
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        <div style={{ font: "600 13px/1.3 Inter,sans-serif", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--wn-accent)" }}>404</div>
        <h1 style={{ margin: "12px 0 0", font: "700 38px/1.2 Poppins,sans-serif", letterSpacing: "-0.01em", color: "var(--wn-text)" }}>
          That page isn't in the books.
        </h1>
        <p style={{ margin: "14px 0 0", font: "400 18px/1.65 Inter,sans-serif", color: "var(--wn-text-muted)" }}>
          The page you're looking for doesn't exist. Head back to the homepage.
        </p>
        <div style={{ marginTop: 24 }}>
          <Button size="lg" to="/">
            Back to home
          </Button>
        </div>
      </div>
    </section>
  );
}
