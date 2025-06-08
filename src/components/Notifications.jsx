import { useState, useEffect } from "react";
import "./SharedStyles.css";

export default function Notifications() {
  // Simulamos tareas con fecha límite
  const [tasks, setTasks] = useState([
    { id: 1, title: "Terminar proyecto de ciencias", dueDate: "2025-06-10" },
    { id: 2, title: "Estudiar para examen de matemáticas", dueDate: "2025-06-08" },
    { id: 3, title: "Leer libro de historia", dueDate: "2025-06-15" },
  ]);

  // Simulamos notificaciones de comunidad
  const [communityNotifications, setCommunityNotifications] = useState([
    { id: 1, message: "María comentó en tu publicación sobre el taller de física." },
    { id: 2, message: "Andrés respondió a tu publicación sobre recursos de matemáticas." },
  ]);

  const [taskNotifications, setTaskNotifications] = useState([]);

  // Detectar tareas con fecha próxima (hoy o en los próximos 3 días)
  useEffect(() => {
    const today = new Date();
    const upcomingTasks = tasks.filter((task) => {
      const dueDate = new Date(task.dueDate);
      const diffDays = Math.ceil((dueDate - today) / (1000 * 60 * 60 * 24));
      return diffDays >= 0 && diffDays <= 3;
    });

    setTaskNotifications(upcomingTasks);
  }, [tasks]);

  return (
    <div className="card">
      <h2 className="title">🔔 Notificaciones</h2>

      <h3 style={{ fontSize: "18px", marginBottom: "8px", marginTop: "16px" }}>
        📅 Notificaciones de pendientes (HU13)
      </h3>
      {taskNotifications.length > 0 ? (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {taskNotifications.map((task) => (
            <li
              key={task.id}
              style={{
                padding: "10px",
                borderBottom: "1px solid #eee",
                fontSize: "14px",
                color: "#333",
              }}
            >
              ✅ <strong>{task.title}</strong> vence el {task.dueDate}.
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-muted">No hay tareas pendientes próximas.</p>
      )}

      <h3 style={{ fontSize: "18px", marginBottom: "8px", marginTop: "16px" }}>
        💬 Notificaciones de actividad en comunidad (HU14)
      </h3>
      {communityNotifications.length > 0 ? (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {communityNotifications.map((notif) => (
            <li
              key={notif.id}
              style={{
                padding: "10px",
                borderBottom: "1px solid #eee",
                fontSize: "14px",
                color: "#333",
              }}
            >
              💬 {notif.message}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-muted">No hay notificaciones nuevas.</p>
      )}
    </div>
  );
}
