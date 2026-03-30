import { useTasks } from '@/hooks/useTasks';
import { Button } from '@/shared/components/ui/button';
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

      <Button
        variant={'outline'}
        size={'xs'}
        onClick={() =>
          dispatch({ type: 'DELETE_TASK', payload: { id: task.id } })
        }
      >
        X
      </Button>
    </div>
  );
}

export default TaskItem;
