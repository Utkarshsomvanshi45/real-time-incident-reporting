import React from "react";

const FilterBar = ({ incidents, onFilter }) => {
  const types = [...new Set(incidents.map((i) => i.type))];
  const statuses = [...new Set(incidents.map((i) => i.status))];

  const selectStyle = {
    background: "rgba(30, 41, 59, 0.8)",
    color: "#e2e8f0",
    border: "1px solid rgba(148, 163, 184, 0.2)",
    borderRadius: "8px",
    padding: "8px 12px",
    fontSize: "0.875rem",
    outline: "none",
    transition: "all 0.2s ease",
    cursor: "pointer",
    minWidth: "150px",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "4px",
    fontSize: "0.75rem",
    color: "#94a3b8",
    fontWeight: "500",
  };

  return (
    <div
      style={{
        background: "rgba(15, 23, 42, 0.4)",
        borderRadius: "12px",
        padding: "16px",
        marginBottom: "20px",
        display: "flex",
        gap: "20px",
        alignItems: "flex-end",
        border: "1px solid rgba(148, 163, 184, 0.1)",
      }}
    >
      <div>
        <label style={labelStyle}>Type</label>
        <select
          style={selectStyle}
          onChange={(e) => onFilter("type", e.target.value)}
          onFocus={(e) => (e.target.style.borderColor = "rgba(59, 130, 246, 0.5)")}
          onBlur={(e) => (e.target.style.borderColor = "rgba(148, 163, 184, 0.2)")}
        >
          <option value="">All</option>
          {types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label style={labelStyle}>Status</label>
        <select
          style={selectStyle}
          onChange={(e) => onFilter("status", e.target.value)}
          onFocus={(e) => (e.target.style.borderColor = "rgba(59, 130, 246, 0.5)")}
          onBlur={(e) => (e.target.style.borderColor = "rgba(148, 163, 184, 0.2)")}
        >
          <option value="">All</option>
          {statuses.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
