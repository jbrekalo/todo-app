import { useTodo } from "../contexts/TodoContext";
import TasksFooterFilters from "./TasksFooterFilters";

function TasksFooter() {
  const { taskList, handleClearCompleted, handleSetFilter, filter, isMobile } =
    useTodo();

  return (
    <div className="tasks__footer">
      <span>
        {Object(taskList.filter((task) => task.completed === false)).length}{" "}
        items left
      </span>
      {!isMobile && (
        <TasksFooterFilters
          onSetFilter={handleSetFilter}
          filter={filter}
          isMobile={isMobile}
        />
      )}
      <span onClick={() => handleClearCompleted()}>Clear Completed</span>
    </div>
  );
}

export default TasksFooter;
