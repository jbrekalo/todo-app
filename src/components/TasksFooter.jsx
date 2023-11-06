import TasksFooterFilters from "./TasksFooterFilters";

function TasksFooter({
  taskList,
  onClearCompleted,
  onSetFilter,
  filter,
  isMobile,
}) {
  return (
    <div className="tasks__footer">
      <span>
        {Object(taskList.filter((task) => task.completed === false)).length}{" "}
        items left
      </span>
      {!isMobile && (
        <TasksFooterFilters
          onSetFilter={onSetFilter}
          filter={filter}
          isMobile={isMobile}
        />
      )}
      <span onClick={() => onClearCompleted()}>Clear Completed</span>
    </div>
  );
}

export default TasksFooter;
