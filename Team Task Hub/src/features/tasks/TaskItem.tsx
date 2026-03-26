import { useTasks } from '@/context/TaskContext';
import type { Task } from '@/types/types';

type Props = {
  task: Task;
};

function TaskItem({ task }: Props) {
  const { dispatch } = useTasks();

  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() =>
          dispatch({
            type: 'TOGGLE_TASK',
            payload: { id: task.id },
          })
        }
      />

      <span
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
      >
        {task.title}
      </span>

      <button
        onClick={() =>
          dispatch({ type: 'DELETE_TASK', payload: { id: task.id } })
        }
      >
        X
      </button>
    </div>
  );
}

export default TaskItem;
