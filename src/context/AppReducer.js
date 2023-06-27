export default function appReducer(state, action) {
  switch(action.type){
    case "ADD_USER":{
      return {
        ...state,
        users: [...state.users, action.payload]
      }}
    case "DELETE_USER":{
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      }}
    case "UPDATE_USER":{
      const updatedTasks = state.users.map((task) => {
        if (task.id === action.payload) {
          if(task.status === true){
            return {...task, status : false}
          }else {
            return {...task, status : true}
          }
        }
        return task;
      });
      return {
        ...state,
        users: updatedTasks,
      };
    }
  }
}