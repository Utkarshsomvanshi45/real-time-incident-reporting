import { useState } from "react";
import Home from "./pages/Home";
import Report from "./pages/Report";
import Dashboard from "./pages/Dashboard";
import initialIncidents from "./data/mockIncidents";

function App() {
  const [page, setPage] = useState("home");
  const [incidents, setIncidents] = useState(initialIncidents);

  // ➕ Add new incident
  const addIncident = (incident) => {
    setIncidents((prev) => [
      {
        id: Date.now(),
        status: "Reported",
        verified: false,
        timestamp: new Date().toISOString(),
        ...incident,
      },
      ...prev,
    ]);
    setPage("home");
  };

  // 🛠️ Admin update
  const updateIncident = (id, updates) => {
    setIncidents((prev) =>
      prev.map((incident) =>
        incident.id === id ? { ...incident, ...updates } : incident
      )
    );
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "report", label: "Report" },
    { id: "dashboard", label: "Dashboard" },
    { id: "admin", label: "Admin" },
  ];

  const renderPage = () => {
    if (page === "report")
      return <Report onNavigate={setPage} onSubmit={addIncident} />;

    if (page === "dashboard")
      return <Dashboard incidents={incidents} onNavigate={setPage} />;

    if (page === "admin")
      return (
        <Dashboard
          incidents={incidents}
          onNavigate={setPage}
          isAdmin
          onUpdateIncident={updateIncident}
        />
      );

    return <Home incidents={incidents} onNavigate={setPage} />;
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

      <style>{`
        /* ✅ FINAL, CORRECT APP WRAPPER */
        .app-wrapper {
          min-height: 100vh;
          width: 100vw;
          overflow-x: hidden;
          background: #020617;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          color: #e2e8f0;
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
          z-index: 50;
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
          padding: 2rem 1rem;
          background: #020617;
        }

        .main-content.no-padding {
          padding: 0;
        }

        .page-container {
          max-width: 1200px;
          margin: 0 auto;
          animation: fadeInUp 0.3s ease-out;
          background: rgba(30, 41, 59, 0.3);
          border-radius: 1rem;
          padding: 2rem;
          border: 1px solid rgba(148, 163, 184, 0.1);
          backdrop-filter: blur(8px);
        }

        .full-page {
          width: 100%;
          animation: fadeInUp 0.3s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default App;
