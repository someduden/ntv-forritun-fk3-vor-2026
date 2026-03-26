import './App.css';
import AddTaskForm from './features/tasks/AddTaskForm';
import TaskList from './features/tasks/TaskList';

function App() {
  return (
    <div>
      <h1>Team Task Hub</h1>
      <AddTaskForm />
      <TaskList />
    </div>
  );
}

export default App;
