import { useTasks } from '@/context/TaskContext';
import TaskItem from './TaskItem';

function TaskList() {
  const { state } = useTasks();

  if (state.tasks.length === 0) {
    return <p>No tasks yet...</p>;
  }

  return (
    <div>
      {state.tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
