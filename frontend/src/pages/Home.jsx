import React from "react";

const Home = ({ onNavigate }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        minHeight: "100vh",
        background: "#020617",
        color: "#e5e7eb",
      }}
    >
      {/* LEFT SECTION */}
      <div style={styles.container}>
        <h1 style={styles.title}>Real-Time Incident Reporting System</h1>

        <p style={styles.subtitle}>
          Report, track, and manage incidents transparently and efficiently.
        </p>

        <div style={styles.buttons}>
          <button
            style={styles.primary}
            onClick={() => onNavigate("report")}
          >
            Report Incident
          </button>

          <button
            style={styles.secondary}
            onClick={() => onNavigate("dashboard")}
          >
            View Dashboard
          </button>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div
        style={{
          background: "#020617",
          borderLeft: "1px solid #1e293b",
          padding: "2rem",
        }}
      >
        <h3 style={{ marginBottom: "1rem" }}>Live Incident Overview</h3>

        <div style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
          <div>🚨 Total Incidents: <strong>24</strong></div>
          <div>🟡 In Progress: <strong>8</strong></div>
          <div>🟢 Resolved: <strong>12</strong></div>
          <div>🔴 High Severity: <strong>4</strong></div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "60px 40px",
  },
  title: {
    fontSize: "36px",
    marginBottom: "12px",
  },
  subtitle: {
    color: "#94a3b8",
    marginBottom: "32px",
  },
  buttons: {
    display: "flex",
    gap: "16px",
  },
  primary: {
    padding: "12px 20px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  secondary: {
    padding: "12px 20px",
    background: "#0f172a",
    color: "#fff",
    border: "1px solid #334155",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default Home;
