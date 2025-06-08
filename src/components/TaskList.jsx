import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function TaskList() {
  const { t } = useTranslation();
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const addTask = () => {
    if (!newTask.trim()) return;

    const task = {
      id: Date.now(),
      title: newTask,
      description: newDescription,
      completed: false
    };

    setTasks([...tasks, task]);
    setNewTask("");
    setNewDescription("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <section className="task-section">
      <h2 className="section-title">{t("tasks.title")}</h2>

      <div className="task-form card">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder={t("tasks.task_placeholder")}
          className="status-input"
        />
        <textarea
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          placeholder={t("tasks.description_placeholder")}
          className="status-input"
          rows="3"
          style={{ marginTop: "10px" }}
        ></textarea>
        <button onClick={addTask} className="button-primary" style={{ marginTop: "10px" }}>
          {t("tasks.add_button")}
        </button>
      </div>

      <div className="task-list card">
        {tasks.length === 0 ? (
          <p className="text-muted">{t("tasks.no_tasks")}</p>
        ) : (
          tasks.map((task) => (
            <div key={task.id} className="task-item" style={{ padding: "10px 0", borderBottom: "1px solid #eee" }}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                style={{ marginRight: "10px" }}
              />
              <div style={{ flex: 1 }}>
                <strong style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                  {task.title}
                </strong>
                <p style={{ margin: "4px 0", fontSize: "14px", color: "#555" }}>
                  {task.description}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
