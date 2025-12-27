import React, { useState } from "react";
import IncidentCard from "../components/IncidentCard";
import FilterBar from "../components/FilterBar";

/* 🎨 THEMES */
const adminTheme = {
  background: "linear-gradient(135deg, #2b0606 0%, #020617 70%)",
  bannerBg: "rgba(239, 68, 68, 0.15)",
  bannerText: "#fecaca",
  glow: "0 0 0 1px rgba(239,68,68,0.4)",
};

const userTheme = {
  background: "#020617",
  glow: "none",
};

const Dashboard = ({
  incidents = [],
  onNavigate,
  isAdmin = false,
  onUpdateIncident,
}) => {
  const [filters, setFilters] = useState({
    type: "",
    status: "",
  });

  const handleFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const filteredIncidents = incidents.filter((incident) => {
    if (filters.type && incident.type !== filters.type) return false;
    if (filters.status && incident.status !== filters.status) return false;
    return true;
  });

  return (
    <div
      style={{
        position: "fixed",
        top: "64px", // navbar height
        left: 0,
        right: 0,
        bottom: 0,
        background: isAdmin
          ? adminTheme.background
          : userTheme.background,
        color: "#e5e7eb",
        padding: "40px",
        overflowY: "auto",
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h2 style={{ fontSize: "1.6rem" }}>
          {isAdmin ? "Admin Dashboard" : "Incident Dashboard"}
        </h2>

        <button onClick={() => onNavigate("home")} style={backStyle}>
          ← Back to Home
        </button>
      </div>

      {/* ⚠ ADMIN WARNING */}
      {isAdmin && (
        <div
          style={{
            marginBottom: "20px",
            padding: "12px 16px",
            borderRadius: "10px",
            background: adminTheme.bannerBg,
            color: adminTheme.bannerText,
            fontSize: "0.85rem",
            fontWeight: 600,
            letterSpacing: "0.03em",
          }}
        >
          ⚠ ADMIN MODE — You can update incident status & verification
        </div>
      )}

      {/* Filters */}
      <FilterBar incidents={incidents} onFilter={handleFilter} />

      {/* Grid */}
      <div
        style={{
          marginTop: "30px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "20px",
        }}
      >
        {filteredIncidents.length === 0 ? (
          <p style={{ color: "#94a3b8" }}>
            No incidents match the selected filters.
          </p>
        ) : (
          filteredIncidents.map((incident) => (
            <div
              key={incident.id}
              style={{
                boxShadow: isAdmin ? adminTheme.glow : "none",
                borderRadius: "14px",
              }}
            >
              <IncidentCard
                incident={incident}
                isAdmin={isAdmin}
                onUpdate={onUpdateIncident}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

/* ---------- styles ---------- */

const backStyle = {
  padding: "8px 14px",
  background: "transparent",
  border: "1px solid #334155",
  borderRadius: "6px",
  color: "#e5e7eb",
  cursor: "pointer",
};

export default Dashboard;
