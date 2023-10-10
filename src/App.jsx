import { useState } from "react";

const tasks = [
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
  const [taskArr, setTaskArr] = useState(tasks);
  const [newTaskText, setNewTaskText] = useState("");

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

    setTaskArr((task) => [...task, newTask]);

    setNewTaskText("");
  }

  function handleTaskCompletion(id) {
    setTaskArr(
      taskArr.map((task) =>
        task.id === id
          ? {
              ...task,
              ...(task.completed ? { completed: false } : { completed: true }),
            }
          : task
      )
    );
  }

  function handleActive() {
    setTaskArr(taskArr.filter((task) => task.completed === false));
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
        <Tasks taskArr={taskArr} onTaskCompletion={handleTaskCompletion}>
          <TasksFooter taskArr={taskArr} onActive={handleActive} />
        </Tasks>
        <BottomMessage />
      </TodoContainer>
    </div>
  );
}

function BackgroundImage() {
  return (
    <img
      src="./images/bg-desktop-light.jpg"
      alt=""
      className="background-photo"
    />
  );
}

function TodoContainer({ children }) {
  return <div className="todo__container">{children}</div>;
}

function Header() {
  return (
    <div className="todo__header">
      <p>todo</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
      >
        <path
          d="M15.3717 0.215831C10.5931 1.19962 7 5.4302 7 10.5C7 16.299 11.701 21 17.5 21C20.4958 21 23.1986 19.7454 25.1116 17.7328C23.2191 22.5722 18.5098 26 13 26C5.8203 26 0 20.1797 0 13C0 5.8203 5.8203 0 13 0C13.81 0 14.6027 0.0740788 15.3717 0.215831Z"
          fill="white"
        />
      </svg>
    </div>
  );
}

function TaskInput({ newTaskText, onTaskInput, onTaskSubmit }) {
  return (
    <form action="submit" onSubmit={onTaskSubmit}>
      <input
        type="text"
        name="task"
        id="task"
        placeholder="Create a new todo…"
        className="todo__input"
        value={newTaskText}
        onChange={(e) => onTaskInput(e.target.value)}
      />
    </form>
  );
}

function Tasks({ taskArr, onTaskCompletion, children }) {
  return (
    <div className="tasks__container">
      {taskArr.map((task, i) => (
        <Task
          onTaskCompletion={onTaskCompletion}
          task={task}
          num={i + 1}
          key={i}
        />
      ))}
      {children}
    </div>
  );
}

function Task({ task, onTaskCompletion, num }) {
  return (
    <ul className="task">
      <li>
        <input
          type="checkbox"
          name={`cb${num}`}
          id={`cb${num}`}
          className={
            task.completed ? "task__checkbox-checked" : "task__checkbox"
          }
          onChange={() => onTaskCompletion(task.id)}
        />
        <label
          htmlFor={`cb${num}`}
          className={task.completed ? "task__label-checked" : "task__label"}
        >
          {task.text}
        </label>
      </li>
    </ul>
  );
}

function TasksFooter({ taskArr, onActive }) {
  return (
    <div className="tasks__footer">
      <span>
        {Object(taskArr.filter((task) => task.completed === false)).length}{" "}
        items left
      </span>
      <div>
        <span>All</span>
        <span onClick={onActive}>Active</span>
        <span>Completed</span>
      </div>
      <span>Clear Completed</span>
    </div>
  );
}

function BottomMessage() {
  return <p className="bottom-message">Drag and drop to reorder list</p>;
}
