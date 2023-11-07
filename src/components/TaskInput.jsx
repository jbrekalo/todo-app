import { useTodo } from "../contexts/TodoContext";

function TaskInput() {
  const { newTaskText, onTaskInput, onTaskSubmit } = useTodo();

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

export default TaskInput;
