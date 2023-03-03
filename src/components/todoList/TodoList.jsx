import { useContext } from "react";
import { ApplicationContext } from "../../store/state";
import Todo from "../todo";
import styles from "./index.module.scss";

function TodoList() {
  const context = useContext(ApplicationContext);

  return (
    <div className={styles.TodoList}>
      {context.state.todoList.map((todo) => (
        <Todo data={todo} key={todo.id} />
      ))}
    </div>
  );
}

export default TodoList;
