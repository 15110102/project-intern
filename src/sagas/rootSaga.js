import { all, put, takeEvery } from "redux-saga/effects";
import { sayHello, watchAddToDo, watchToggleToDo } from "./ToDoList";

export default function* rootSaga() {
  yield all([sayHello(), watchAddToDo(), watchToggleToDo()]);
}
