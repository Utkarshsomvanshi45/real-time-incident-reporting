import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Supabase connection
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

//  Health check (important)
app.get("/", (req, res) => {
  res.send("Backend is running");
});

//  GET all incidents (frontend will use this)
app.get("/api/incidents", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("incidents")
      .select("*")
      .order("timestamp", { ascending: false });

    if (error) throw error;

    res.json(
      data.map(row => ({
        incident_id: row.incident_id,
        type: row.type,
        description: row.description,
        location: row.location,
        severity: row.severity,
        status: row.status,
        verified: row.verified,
        timestamp: row.timestamp
      }))
    );
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//  POST new incident
app.post("/api/incidents", async (req, res) => {
  try {
    const { type, description, location } = req.body;

    if (!type || !description || !location) {
      return res.status(400).json({ error: "Missing fields" });
    }

    // Simple severity logic
    const severity =
      type === "Fire" || type === "Medical"
        ? "High"
        : type === "Accident"
        ? "Medium"
        : "Low";

    const { data, error } = await supabase
      .from("incidents")
      .insert([{ type, description, location, severity }])
      .select()
      .single();

    if (error) throw error;

    res.json({
      incident_id: data.incident_id,
      type: data.type,
      description: data.description,
      location: data.location,
      severity: data.severity,
      status: data.status,
      verified: data.verified,
      timestamp: data.timestamp
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//  Start server (this must run)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
