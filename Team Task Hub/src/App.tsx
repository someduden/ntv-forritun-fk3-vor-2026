import { useState } from 'react';
import './App.css';
import AddTaskForm from './features/tasks/AddTaskForm';
import TaskList from './features/tasks/TaskList';
import ProjectList from './features/projects/ProjectList';
import AddProjectForm from './features/projects/AddProjectForm';

function App() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null,
  );

  return (
    <div>
      <h1>Team Task Hub</h1>

      <AddProjectForm />

      <ProjectList
        selectedProjectId={selectedProjectId}
        onSelect={setSelectedProjectId}
      />

      <AddTaskForm selectedProjectId={selectedProjectId} />

      <TaskList selectedProjectId={selectedProjectId} />
    </div>
  );
}

export default App;
