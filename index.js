import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>NYLR 2026</title>
        <meta
          name="description"
          content="Welcome to NYLR 2026"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main style={styles.container}>
        <h1>Welcome to NYLR 2026</h1>
        <p>A new generation. A new beginning.</p>
        <button
          style={styles.button}
          onClick={() => alert("Welcome to NYLR 2026!")}
        >
          Get Started
        </button>
      </main>
    </>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#07111f",
    color: "#ffffff",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    padding: "20px",
  },
  button: {
    background: "#16a34a",
    color: "#ffffff",
    padding: "14px 28px",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "20px",
  },
};

