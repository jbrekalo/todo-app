import { useState, useEffect } from "react";
import BackgroundImage from "./components/BackgrountImage";
import TodoContainer from "./components/TodoContainer";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import Tasks from "./components/Tasks";
import TasksFooter from "./components/TasksFooter";
import TasksFooterFilters from "./components/TasksFooterFilters";
import BottomMessage from "./components/BottomMessage";

const initialTasks = [
  {
    text: "Complete online JavaScript course",
    completed: true,
    id: crypto.randomUUID(),
  },
  { text: "Jog around the park 3x", completed: false, id: crypto.randomUUID() },
  { text: "10 minutes meditation", completed: false, id: crypto.randomUUID() },
  { text: "Read for 1 hour", completed: false, id: crypto.randomUUID() },
  { text: "Pick up groceries", completed: false, id: crypto.randomUUID() },
  {
    text: "Complete Todo App on Frontend Mentor",
    completed: false,
    id: crypto.randomUUID(),
  },
];

export default function App() {
  const [taskList, setTaskList] = useState(initialTasks);
  const [newTaskText, setNewTaskText] = useState("");
  const [filter, setFilter] = useState("all");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 550);

  let activeTasks = taskList.filter((task) => !task.completed);
  let completedTasks = taskList.filter((task) => task.completed);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 550);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleTaskInput(taskInput) {
    setNewTaskText(taskInput);
  }

  function handleTaskSubmit(e) {
    e.preventDefault();

    if (!newTaskText) return;

    const newTask = {
      text: newTaskText,
      completed: false,
      id: crypto.randomUUID(),
    };

    setTaskList((task) => [...task, newTask]);

    setNewTaskText("");
  }

  function handleUpdateTasks(id) {
    setTaskList(
      taskList.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );

    handleSetFilter(filter);
  }

  function handleDeleteTask(e, id) {
    e.preventDefault();

    setTaskList(taskList.filter((task) => task.id !== id));
  }

  function handleSetFilter(selectedFilter) {
    setFilter(selectedFilter);
  }

  function handleClearCompleted() {
    setTaskList(taskList.filter((task) => !task.completed));
  }

  return (
    <div>
      <BackgroundImage />
      <TodoContainer>
        <Header />
        <TaskInput
          newTaskText={newTaskText}
          onTaskInput={handleTaskInput}
          onTaskSubmit={handleTaskSubmit}
        />
        <Tasks
          taskList={taskList}
          activeTasks={activeTasks}
          completedTasks={completedTasks}
          onUpdateTasks={handleUpdateTasks}
          onDeleteTask={handleDeleteTask}
          filter={filter}
        >
          <TasksFooter
            taskList={taskList}
            onSetFilter={handleSetFilter}
            filter={filter}
            onClearCompleted={handleClearCompleted}
            isMobile={isMobile}
          />
        </Tasks>
        {isMobile && (
          <TasksFooterFilters
            onSetFilter={handleSetFilter}
            filter={filter}
            onClearCompleted={handleClearCompleted}
            isMobile={isMobile}
          />
        )}
        <BottomMessage />
      </TodoContainer>
    </div>
  );
}
