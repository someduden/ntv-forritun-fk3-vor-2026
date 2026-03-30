import { useTasks } from '@/hooks/useTasks';
import { Button } from '@/shared/components/ui/button';
import { useState } from 'react';

type Props = {
  selectedProjectId: string | null;
};

function AddTaskForm({ selectedProjectId }: Props) {
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
        projectId: selectedProjectId ?? 'default',
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
      <Button type="submit" variant={'outline'}>
        Add
      </Button>
    </form>
  );
}

export default AddTaskForm;
