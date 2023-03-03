import { useContext } from "react";
import { ACTIONS } from "../../store/ACTIONS";
import { ApplicationContext } from "../../store/state";
import styles from "./index.module.scss";
import { BsCheckCircleFill, BsFillSlashCircleFill } from "react-icons/bs";
import { RiDeleteBin7Fill } from "react-icons/ri";

export default function Todo({ data }) {
  const { state, dispatch } = useContext(ApplicationContext);

  const onHandleToggle = (e) => {
    dispatch({ type: ACTIONS.TOGGLE_TODO, payload: data.id });
  };

  const onHandleDelete = (e) => {
    dispatch({ type: ACTIONS.DELETE_TODO, payload: data.id });
  };

  return (
    <div className={styles.wrapper}>
      <span className={`${styles.Todo} ${data.status && styles.statusDone}`}>
        {data.name}
      </span>
      <div className={styles.btns}>
        {data.status ? (
          <button className={styles.todoBtn} onClick={onHandleToggle}>
            <BsFillSlashCircleFill />
          </button>
        ) : (
          <button className={styles.doneBtn} onClick={onHandleToggle}>
            <BsCheckCircleFill />
          </button>
        )}
        <button className={styles.deleteBtn} onClick={onHandleDelete}>
          <RiDeleteBin7Fill />
        </button>
      </div>
    </div>
  );
}
