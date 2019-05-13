import { ADD_TODO, TOGGLE_TODO } from "../actions/type";

const initialState = [];
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          status: action.status
        }
      ];
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, status: !todo.status } : todo
      );
    default:
      return state;
  }
};
export default todos;
