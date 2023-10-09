const tasks = [
  { text: "Complete online JavaScript course", completed: true },
  { text: "Jog around the park 3x", completed: false },
  { text: "10 minutes meditation", completed: false },
  { text: "Read for 1 hour", completed: false },
  { text: "Pick up groceries", completed: false },
  { text: "Complete Todo App on Frontend Mentor", completed: false },
];

export default function App() {
  return (
    <div>
      <BackgroundImage />
      <TodoContainer>
        <Header />
        <TodoInput />
        <Tasks />
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

function TodoInput() {
  return (
    <input
      type="text"
      name="task"
      id="task"
      placeholder="Create a new todo…"
      className="todo__input"
    />
  );
}

function Tasks() {
  return (
    <div className="tasks__container">
      {tasks.map((task, i) => (
        <Task text={task.text} key={i} num={i + 1} />
      ))}
      <TasksFooter />
    </div>
  );
}

function Task({ text, num }) {
  return (
    <ul className="task">
      <li>
        <input type="checkbox" name={`cb${num}`} id={`cb${num}`} />
        <label htmlFor={`cb${num}`}>{text}</label>
      </li>
    </ul>
  );
}

function TasksFooter() {
  return (
    <div className="tasks__footer">
      <span>X items left</span>
      <div>
        <span>All</span>
        <span>Active</span>
        <span>Completed</span>
      </div>
      <span>Clear Completed</span>
    </div>
  );
}

function BottomMessage() {
  return <p className="bottom-message">Drag and drop to reorder list</p>;
}
