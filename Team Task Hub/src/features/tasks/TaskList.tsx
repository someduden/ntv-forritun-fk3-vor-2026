import { useTasks } from '@/hooks/useTasks';
import TaskItem from './TaskItem';

type Props = {
  selectedProjectId: string | null;
};

function TaskList({ selectedProjectId }: Props) {
  const { state } = useTasks();

  const filteredTasks = selectedProjectId
    ? state.tasks.filter((task) => task.projectId === selectedProjectId)
    : state.tasks;

  if (filteredTasks.length === 0) {
    return <p>No tasks yet...</p>;
  }

  return (
    <div>
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
