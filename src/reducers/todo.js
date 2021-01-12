import { GET_TODO } from "../action/todoAction";

let initialState = {
  getTodo: false,
  errorTodo: false,
  tittle: "To Do List Majoo",
};

const todo = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODO:
      return {
        ...state,
        getTodo: action.payload.datadone,
        getGone: action.payload.datagone,
        errorTodo: action.payload.errorMassage,
      };

    default:
      return state;
  }
};

export default todo;
