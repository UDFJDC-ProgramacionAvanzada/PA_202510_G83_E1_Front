import './SharedStyles.css';

function TaskItem({ task, onToggleComplete }) {
  if (!task) return null;

  return (
    <div className={`card ${task.completed ? 'completed' : ''}`}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="checkbox"
          style={{ marginRight: '12px', transform: 'scale(1.2)', cursor: 'pointer' }}
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
        />
        <span style={{
          fontSize: '16px',
          textDecoration: task.completed ? 'line-through' : 'none',
          color: task.completed ? '#555' : '#000'
        }}>
          {task.name}
        </span>
      </div>
    </div>
  );
}

export default TaskItem;
