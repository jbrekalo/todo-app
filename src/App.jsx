export default function App() {
  return (
    <div>
      <div>
        <img
          src="./images/bg-desktop-light.jpg"
          alt=""
          className="background-photo"
        />
      </div>
      <div className="todo__container">
        <Header />
        <TodoInput />
      </div>
    </div>
  );
}

function Header() {
  return <p className="todo__header">todo</p>;
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
