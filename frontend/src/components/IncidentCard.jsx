import React from "react";

const getSeverityColors = (severity) => {
  switch (severity) {
    case "High":
      return {
        border: "#ef4444",
        badgeBg: "rgba(239, 68, 68, 0.15)",
        badgeText: "#fecaca",
      };
    case "Medium":
      return {
        border: "#f59e0b",
        badgeBg: "rgba(245, 158, 11, 0.15)",
        badgeText: "#fde68a",
      };
    case "Low":
    default:
      return {
        border: "#22c55e",
        badgeBg: "rgba(34, 197, 94, 0.15)",
        badgeText: "#bbf7d0",
      };
  }
};

const getStatusStyle = (status) => {
  switch (status) {
    case "Resolved":
      return { background: "rgba(34,197,94,0.2)", color: "#86efac" };
    case "In Progress":
      return { background: "rgba(59,130,246,0.2)", color: "#bfdbfe" };
    default:
      return { background: "rgba(148,163,184,0.2)", color: "#e5e7eb" };
  }
};

const IncidentCard = ({
  incident,
  isAdmin = false,
  onUpdate,
}) => {
  const severity = getSeverityColors(incident.severity);
  const statusStyle = getStatusStyle(incident.status);

  return (
    <div
      style={{
        background: "rgba(15, 23, 42, 0.6)",
        borderRadius: "14px",
        padding: "18px",
        borderLeft: `4px solid ${severity.border}`,
        border: "1px solid rgba(148,163,184,0.1)",
        transition: "all 0.25s ease",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <h3 style={{ margin: 0, fontSize: "1.05rem", color: "#f1f5f9" }}>
          {incident.type}
        </h3>

        <span
          style={{
            background: severity.badgeBg,
            color: severity.badgeText,
            padding: "4px 10px",
            borderRadius: "999px",
            fontSize: "0.75rem",
            fontWeight: 600,
          }}
        >
          {incident.severity}
        </span>
      </div>

      {/* Description */}
      <p
        style={{
          margin: "0 0 12px",
          color: "#cbd5f5",
          fontSize: "0.9rem",
        }}
      >
        {incident.description}
      </p>

      {/* Meta */}
      <div
        style={{
          fontSize: "0.75rem",
          color: "#94a3b8",
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "12px",
        }}
      >
        <span>📍 {incident.location}</span>
        <span>🕒 {new Date(incident.timestamp).toLocaleString()}</span>
      </div>

      {/* Footer */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            ...statusStyle,
            padding: "4px 10px",
            borderRadius: "999px",
            fontSize: "0.75rem",
            fontWeight: 600,
          }}
        >
          {incident.status}
        </span>

        <span
          style={{
            fontSize: "0.75rem",
            color: incident.verified ? "#86efac" : "#fca5a5",
            fontWeight: 600,
          }}
        >
          {incident.verified ? "✔ Verified" : "⚠ Unverified"}
        </span>
      </div>

      {/* 🛠️ ADMIN CONTROLS */}
      {isAdmin && (
        <div
          style={{
            marginTop: "12px",
            display: "flex",
            gap: "10px",
            justifyContent: "space-between",
          }}
        >
          <select
            value={incident.status}
            onChange={(e) =>
              onUpdate(incident.id, { status: e.target.value })
            }
            style={{
              background: "rgba(30,41,59,0.8)",
              color: "#e5e7eb",
              border: "1px solid rgba(148,163,184,0.2)",
              borderRadius: "6px",
              padding: "4px 8px",
              fontSize: "0.75rem",
              cursor: "pointer",
            }}
          >
            <option>Reported</option>
            <option>In Progress</option>
            <option>Resolved</option>
          </select>

          <button
            onClick={() =>
              onUpdate(incident.id, { verified: !incident.verified })
            }
            style={{
              background: incident.verified
                ? "rgba(34,197,94,0.2)"
                : "rgba(239,68,68,0.2)",
              color: incident.verified ? "#86efac" : "#fca5a5",
              border: "none",
              borderRadius: "6px",
              padding: "4px 10px",
              fontSize: "0.75rem",
              cursor: "pointer",
            }}
          >
            {incident.verified ? "Unverify" : "Verify"}
          </button>
        </div>
      )}
    </div>
  );
};

export default IncidentCard;
