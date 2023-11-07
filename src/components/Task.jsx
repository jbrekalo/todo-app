import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function Task({ task, num }) {
  const [isHover, setIsHover] = useState();
  const { handleUpdateTasks, handleDeleteTask } = useTodo();

  return (
    <ul className="task">
      <li
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <input
          type="checkbox"
          name={`cb${num}`}
          id={`cb${num}`}
          className={
            task.completed ? "task__checkbox-checked" : "task__checkbox"
          }
          onChange={() => handleUpdateTasks(task.id)}
        />
        <label
          htmlFor={`cb${num}`}
          className={task.completed ? "task__label-checked" : "task__label"}
        >
          {task.text}
        </label>
        {isHover && (
          <div
            className="task__delete"
            onClick={(e) => handleDeleteTask(e, task.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M17.6777 0.707107L16.9706 0L8.83883 8.13173L0.707107 0L0 0.707107L8.13173 8.83883L0 16.9706L0.707106 17.6777L8.83883 9.54594L16.9706 17.6777L17.6777 16.9706L9.54594 8.83883L17.6777 0.707107Z"
                fill="#494C6B"
              />
            </svg>
          </div>
        )}
      </li>
    </ul>
  );
}

export default Task;
