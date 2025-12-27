const mockIncidents = [
  {
    incident_id: "INC001",
    type: "Accident",
    description: "Car collision near junction",
    location: "NH48, Bangalore",
    severity: "High",
    status: "Reported",
    verified: false,
    timestamp: "2025-12-27T14:30:00Z"
  },
  {
    incident_id: "INC002",
    type: "Medical",
    description: "Person unconscious at metro station",
    location: "MG Road Metro",
    severity: "Medium",
    status: "In Progress",
    verified: true,
    timestamp: "2025-12-27T13:00:00Z"
  },
  {
    incident_id: "INC003",
    type: "Fire",
    description: "Small fire reported in warehouse",
    location: "Industrial Area",
    severity: "High",
    status: "Resolved",
    verified: true,
    timestamp: "2025-12-27T12:15:00Z"
  }
];

export default mockIncidents;
