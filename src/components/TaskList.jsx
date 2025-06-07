import { useState } from "react";
import TaskItem from "./TaskItem";
import "./SharedStyles.css";

export default function TaskList() {
  const [selectedSubject, setSelectedSubject] = useState("Todas");

  const [tasks, setTasks] = useState([
    { id: 1, name: "Estudiar integrales", subject: "Matemáticas", completed: false },
    { id: 2, name: "Leer capítulo de historia", subject: "Historia", completed: false },
    { id: 3, name: "Resolver ejercicios de física", subject: "Física", completed: false },
    { id: 4, name: "Preparar informe de química", subject: "Química", completed: false },
    { id: 5, name: "Escribir ensayo de filosofía", subject: "Filosofía", completed: false },
  ]);

  const toggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Obtener lista única de materias
  const subjects = ["Todas", ...new Set(tasks.map((task) => task.subject))];

  // Filtrar tareas por materia
  const filteredTasks =
    selectedSubject === "Todas"
      ? tasks
      : tasks.filter((task) => task.subject === selectedSubject);

  return (
    <section className="card" style={{ marginTop: "20px", maxWidth: "1000px" }}>
      <h2 className="title">Mis Tareas</h2>

      {/* Dropdown de materias */}
      <div style={{ marginBottom: "20px" }}>
        <label style={{ marginRight: "10px", fontWeight: "bold" }}>
          Filtrar por materia:
        </label>
        <select
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
          style={{
            padding: "8px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        >
          {subjects.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
      </div>

      {/* Lista de tareas */}
      {filteredTasks.length === 0 ? (
        <p className="text-muted">No hay tareas para esta materia.</p>
      ) : (
        filteredTasks.map((task) => (
          <TaskItem key={task.id} task={task} onToggleComplete={toggleComplete} />
        ))
      )}
    </section>
  );
}
