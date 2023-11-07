import { useTodo } from "../contexts/TodoContext";

function TasksFooterFilters() {
  const { handleSetFilter, filter, isMobile } = useTodo();

  return (
    <div className={isMobile ? "task__footer-filter" : ""}>
      <span
        onClick={() => handleSetFilter("all")}
        className={filter === "all" ? "tasks__footer--selected" : ""}
      >
        All
      </span>
      <span
        onClick={() => handleSetFilter("active")}
        className={filter === "active" ? "tasks__footer--selected" : ""}
      >
        Active
      </span>
      <span
        onClick={() => handleSetFilter("completed")}
        className={filter === "completed" ? "tasks__footer--selected" : ""}
      >
        Completed
      </span>
    </div>
  );
}

export default TasksFooterFilters;
