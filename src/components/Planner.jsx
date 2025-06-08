import { useState } from "react";

export default function Planner() {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today.toISOString().slice(0, 10));
  const [activities, setActivities] = useState({});
  const [newTitle, setNewTitle] = useState("");
  const [newNotes, setNewNotes] = useState("");

  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

  const generateCalendar = () => {
    const year = today.getFullYear();
    const month = today.getMonth();
    const days = daysInMonth(month, year);
    const calendar = [];

    for (let day = 1; day <= days; day++) {
      const date = new Date(year, month, day).toISOString().slice(0, 10);
      calendar.push(date);
    }

    return calendar;
  };

  const addActivity = () => {
    if (!newTitle) return;

    setActivities((prev) => {
      const dayActivities = prev[selectedDate] || [];
      return {
        ...prev,
        [selectedDate]: [...dayActivities, { title: newTitle, notes: newNotes }],
      };
    });

    setNewTitle("");
    setNewNotes("");
  };

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
      <div className="card">
        <h2 className="title">Planeador de horarios - Calendario</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: "8px",
          marginBottom: "20px"
        }}>
          {generateCalendar().map((date) => (
            <button
              key={date}
              onClick={() => setSelectedDate(date)}
              style={{
                padding: "10px",
                backgroundColor: date === selectedDate ? "#2d8cff" : "#f0f0f0",
                color: date === selectedDate ? "#fff" : "#333",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "14px"
              }}
            >
              {new Date(date).getDate()}
            </button>
          ))}
        </div>

        <h3 className="title" style={{ fontSize: "18px", marginBottom: "8px" }}>
          Actividades para el {selectedDate}
        </h3>

        <div style={{ marginBottom: "16px" }}>
          <input
            type="text"
            className="status-input"
            placeholder="Título de la actividad"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            style={{ marginBottom: "8px", width: "100%" }}
          />
          <textarea
            className="status-input"
            placeholder="Notas / anotaciones"
            value={newNotes}
            onChange={(e) => setNewNotes(e.target.value)}
            style={{ marginBottom: "8px", width: "100%", height: "80px" }}
          ></textarea>

          <button className="button-primary" onClick={addActivity}>
            Agregar actividad
          </button>
        </div>

        {(activities[selectedDate] || []).map((activity, index) => (
          <div key={index} className="card" style={{ marginBottom: "12px" }}>
            <h4 style={{ fontSize: "16px", marginBottom: "6px" }}>{activity.title}</h4>
            <p style={{ fontSize: "14px" }}>
              <strong>Notas:</strong> {activity.notes || "Sin anotaciones"}
            </p>
          </div>
        ))}

        {(activities[selectedDate] || []).length === 0 && (
          <p className="text-muted">No hay actividades para este día.</p>
        )}
      </div>
    </div>
  );
}
