import { useState } from "react";

const Report = ({ onNavigate, onSubmit }) => {
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = () => {
    if (!type || !description || !location) {
      alert("Please fill all fields");
      return;
    }

    onSubmit({
      type,
      description,
      location,
      severity: "Medium",
    });
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#020617",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#e5e7eb",
      }}
    >
      <div style={cardStyle}>
        <h2>Report an Incident</h2>

        <input
          placeholder="Incident Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          style={inputStyle}
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ ...inputStyle, height: "90px" }}
        />

        <input
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={inputStyle}
        />

        <button onClick={handleSubmit} style={submitStyle}>
          Submit
        </button>

        <button onClick={() => onNavigate("home")} style={backStyle}>
          ← Back to Home
        </button>
      </div>
    </div>
  );
};

const cardStyle = {
  width: "100%",
  maxWidth: "480px",
  padding: "40px",
  borderRadius: "12px",
  border: "1px solid #1e293b",
  background: "#020617",
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "14px",
  borderRadius: "6px",
  border: "1px solid #334155",
  background: "#020617",
  color: "#e5e7eb",
};

const submitStyle = {
  width: "100%",
  padding: "14px",
  background: "#2563eb",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  marginBottom: "10px",
};

const backStyle = {
  width: "100%",
  padding: "10px",
  background: "transparent",
  color: "#94a3b8",
  border: "none",
  cursor: "pointer",
};

export default Report;
