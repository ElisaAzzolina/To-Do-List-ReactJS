import { createContext } from "react";

const initialState = {
  todoList: [
    {
      id: Math.floor(Math.random() * 100000),
      name: "Fare la Spesa",
      status: false,
    },
    {
      id: Math.floor(Math.random() * 100000),
      name: "Dare da mangiare al Cane",
      status: true,
    },
  ],
};

const ApplicationContext = createContext(initialState);

export { ApplicationContext, initialState };
