import { ADD_TODO, TOGGLE_TODO } from "../actions/type";
import { put, takeEvery } from "redux-saga/effects";

export function* sayHello() {
  console.log("Hello");
}

function* add() {
  console.log("Add todo!!!");
}
export function* watchAddToDo() {
  yield takeEvery(ADD_TODO, add);
}

function* toggle() {
  console.log("Toggle todo!!!");
}
export function* watchToggleToDo() {
  yield takeEvery(TOGGLE_TODO, toggle);
}
