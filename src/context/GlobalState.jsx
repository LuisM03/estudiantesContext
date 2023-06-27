import { createContext, useReducer } from "react";
import appReducer from "./AppReducer";
const initialState = {
  users: [],
};
export const GlobalContext = createContext(initialState);

export default function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  function AddUser(user) {
    dispatch({
      type: "ADD_USER",
      payload: user,
    });
  }

  function UpdateStatus(id) {
    dispatch({
      type: "UPDATE_USER",
      payload: id,
    });
  }

  function DeleteUser(id) {
    dispatch({
      type: "DELETE_USER",
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider
      value={{ users: state.users, AddUser, UpdateStatus, DeleteUser }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
