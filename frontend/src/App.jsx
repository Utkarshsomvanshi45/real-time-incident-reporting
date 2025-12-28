import { useState } from "react";
import Home from "./pages/Home";
import Report from "./pages/Report";
import Dashboard from "./pages/Dashboard";

function App() {
  const [page, setPage] = useState("home");

  /* ===========================
     🔥 REPORT INCIDENT (POST)
     =========================== */
  const handleReportIncident = async (incident) => {
    try {
      const res = await fetch(
        "https://real-time-incident-reporting.onrender.com/api/incidents",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(incident),
        }
      );

      if (!res.ok) throw new Error("Failed to report incident");

      alert("Incident reported successfully");
      setPage("dashboard");
    } catch (err) {
      console.error(err);
      alert("Error reporting incident");
    }
  };

  /* ===========================
     🛠️ ADMIN UPDATE (PATCH)
     =========================== */
  const handleUpdateIncident = async (id, updates) => {
    try {
      const res = await fetch(
        `https://real-time-incident-reporting.onrender.com/api/incidents/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updates),
        }
      );

      if (!res.ok) throw new Error("Failed to update incident");

      alert("Incident updated");
      setPage("dashboard");
    } catch (err) {
      console.error(err);
      alert("Error updating incident");
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "report", label: "Report" },
    { id: "dashboard", label: "Dashboard" },
    { id: "admin", label: "Admin" },
  ];

  const renderPage = () => {
    if (page === "report")
      return <Report onNavigate={setPage} onSubmit={handleReportIncident} />;

    if (page === "dashboard")
      return <Dashboard onNavigate={setPage} />;

    if (page === "admin")
      return (
        <Dashboard
          onNavigate={setPage}
          isAdmin
          onUpdateIncident={handleUpdateIncident}
        />
      );

    return <Home onNavigate={setPage} />;
  };

  const isFullScreenPage = ["dashboard", "report", "admin"].includes(page);

  return (
    <div className="app-wrapper">
      <nav className="top-nav">
        <div className="nav-brand">Incident Monitor</div>

        <div className="nav-links">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setPage(item.id)}
              className={`nav-link ${page === item.id ? "active" : ""}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      <main className={`main-content ${isFullScreenPage ? "no-padding" : ""}`}>
        {isFullScreenPage ? (
          <div className="full-page">{renderPage()}</div>
        ) : (
          <div className="page-container">{renderPage()}</div>
        )}
      </main>

      {/* 🔧 FIX GREY BACKGROUND ISSUE */}
      <style>{`
        html, body {
          margin: 0;
          padding: 0;
          background: #020617;
        }

        .app-wrapper {
          min-height: 100vh;
          width: 100vw;
          overflow-x: hidden;
          background: #020617;
          color: #e5e7eb;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .top-nav {
          background: rgba(15, 23, 42, 0.95);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(148, 163, 184, 0.1);
          padding: 0 2rem;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .nav-brand {
          font-size: 1.25rem;
          font-weight: 600;
          color: #f1f5f9;
        }

        .nav-links {
          display: flex;
          gap: 1rem;
        }

        .nav-link {
          background: transparent;
          border: none;
          color: #94a3b8;
          padding: 0.5rem 1.25rem;
          border-radius: 0.5rem;
          cursor: pointer;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .nav-link:hover {
          color: #e2e8f0;
          background: rgba(148, 163, 184, 0.1);
        }

        .nav-link.active {
          color: #f1f5f9;
          background: rgba(59, 130, 246, 0.25);
        }

        .main-content {
          width: 100%;
          background: transparent;
        }

        .main-content.no-padding {
          padding: 0;
        }
      `}</style>
    </div>
  );
}

export default App;
