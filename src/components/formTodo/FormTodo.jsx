import { useContext, useState } from "react";
import { ApplicationContext } from "../../store/state";
import { ACTIONS } from "../../store/ACTIONS";
import styles from "./index.module.scss";

function FormTodo() {
  const [name, setName] = useState("");
  const { dispatch } = useContext(ApplicationContext);

  function Submithandler(e) {
    e.preventDefault();
    dispatch({
      type: ACTIONS.ADD_TODO,
      payload: {
        id: Math.floor(Math.random() * 100000),
        name: name,
        status: false,
      },
    });
    setName(() => "");
  }

  return (
    <div className={styles.FormTodo}>
      <form onSubmit={Submithandler}>
        <input
          type="text"
          value={name}
          onInput={(e) => setName(() => e.target.value)}
          placeholder="Aggiungi qualcosa da fare"
        />
      </form>
    </div>
  );
}

export default FormTodo;
