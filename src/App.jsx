import BackgroundImage from "./components/BackgrountImage";
import TodoContainer from "./components/TodoContainer";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import Tasks from "./components/Tasks";
import TasksFooter from "./components/TasksFooter";
import TasksFooterFilters from "./components/TasksFooterFilters";
import BottomMessage from "./components/BottomMessage";
import { useTodo } from "./contexts/TodoContext";

export default function App() {
  const { isMobile } = useTodo();

  return (
    <div>
      <BackgroundImage />
      <TodoContainer>
        <Header />
        <TaskInput />
        <Tasks>
          <TasksFooter />
        </Tasks>
        {isMobile && <TasksFooterFilters />}
        <BottomMessage />
      </TodoContainer>
    </div>
  );
}
