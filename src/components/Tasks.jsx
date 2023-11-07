import { useTodo } from "../contexts/TodoContext";
import Task from "./Task";

function Tasks({ children }) {
  const {
    taskList,
    activeTasks,
    completedTasks,
    handleUpdateTasks,
    filter,
    handleDeleteTask,
  } = useTodo();

  return (
    <div className="tasks__container">
      {filter === "active"
        ? activeTasks.map((task, i) => (
            <Task
              onUpdateTasks={handleUpdateTasks}
              onDeleteTask={handleDeleteTask}
              task={task}
              num={i + 1}
              key={i}
            />
          ))
        : filter === "completed"
        ? completedTasks.map((task, i) => (
            <Task
              onUpdateTasks={handleUpdateTasks}
              onDeleteTask={handleDeleteTask}
              task={task}
              num={i + 1}
              key={i}
            />
          ))
        : taskList.map((task, i) => (
            <Task
              onUpdateTasks={handleUpdateTasks}
              onDeleteTask={handleDeleteTask}
              task={task}
              num={i + 1}
              key={i}
            />
          ))}
      {children}
    </div>
  );
}

export default Tasks;
