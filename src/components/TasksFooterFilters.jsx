function TasksFooterFilters({ onSetFilter, filter, isMobile }) {
  console.log(isMobile);
  return (
    <div className={isMobile ? "task__footer-filter" : ""}>
      <span
        onClick={() => onSetFilter("all")}
        className={filter === "all" ? "tasks__footer--selected" : ""}
      >
        All
      </span>
      <span
        onClick={() => onSetFilter("active")}
        className={filter === "active" ? "tasks__footer--selected" : ""}
      >
        Active
      </span>
      <span
        onClick={() => onSetFilter("completed")}
        className={filter === "completed" ? "tasks__footer--selected" : ""}
      >
        Completed
      </span>
    </div>
  );
}

export default TasksFooterFilters;
