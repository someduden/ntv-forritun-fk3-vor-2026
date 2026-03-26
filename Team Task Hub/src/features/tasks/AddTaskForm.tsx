import { useTasks } from '@/context/TaskContext';
import { useState } from 'react';

function AddTaskForm() {
  const [title, setTitle] = useState('');
  const { dispatch } = useTasks();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!title.trim()) return;

    dispatch({
      type: 'ADD_TASK',
      payload: {
        id: crypto.randomUUID(),
        title,
        completed: false,
        projectId: 'default',
      },
    });

    setTitle('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New task..."
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTaskForm;
