import Task from "./Task";

function Tasks({
  taskList,
  activeTasks,
  completedTasks,
  onUpdateTasks,
  filter,
  children,
  onDeleteTask,
}) {
  return (
    <div className="tasks__container">
      {filter === "active"
        ? activeTasks.map((task, i) => (
            <Task
              onUpdateTasks={onUpdateTasks}
              onDeleteTask={onDeleteTask}
              task={task}
              num={i + 1}
              key={i}
            />
          ))
        : filter === "completed"
        ? completedTasks.map((task, i) => (
            <Task
              onUpdateTasks={onUpdateTasks}
              onDeleteTask={onDeleteTask}
              task={task}
              num={i + 1}
              key={i}
            />
          ))
        : taskList.map((task, i) => (
            <Task
              onUpdateTasks={onUpdateTasks}
              onDeleteTask={onDeleteTask}
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
