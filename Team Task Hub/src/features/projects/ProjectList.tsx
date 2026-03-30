import { useTasks } from '@/hooks/useTasks';
import { Button } from '@/shared/components/ui/button';

type Props = {
  selectedProjectId: string | null;
  onSelect: (id: string | null) => void;
};

function ProjectList({ selectedProjectId, onSelect }: Props) {
  const { state } = useTasks();

  return (
    <div>
      <Button variant={'outline'} onClick={() => onSelect(null)}>
        All
      </Button>

      {state.projects.map((project) => (
        <button
          key={project.id}
          onClick={() => onSelect(project.id)}
          style={{
            fontWeight: selectedProjectId === project.id ? 'bold' : 'normal',
          }}
        >
          {project.name}
        </button>
      ))}
    </div>
  );
}

export default ProjectList;
