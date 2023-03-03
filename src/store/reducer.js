import { ACTIONS } from "./ACTIONS";

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };

    case ACTIONS.TOGGLE_TODO:
      return {
        ...state,
        todoList: state.todoList.map((item) => {
          if (item.id === action.payload) {
            return { ...item, status: !item.status };
          }
          return item;
        }),
      };

    case ACTIONS.DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
} /* state.map((stateItem) => {
        if (stateItem.id === action.payload.id) {
          return { ...stateItem, complete: !stateItem.complete };
        }
        return stateItem;
      }) */
export default reducer;
