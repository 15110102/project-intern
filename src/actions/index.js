import { ADD_TODO, TOGGLE_TODO } from "./type";

let nextId = 0;
export function addTodo(text, status) {
  nextId = nextId + 1;
  return {
    type: ADD_TODO,
    id: nextId,
    status,
    text
  };
}
export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id
  };
}
