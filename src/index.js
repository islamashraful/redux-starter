import store from "./store";
import { bugAdded, bugRemoved } from "./actions";

const unsubscribe = store.subscribe(() => {
  console.log("Store changed", store.getState());
});

store.dispatch(bugAdded("Bug 1"));

store.dispatch(bugRemoved(1));

console.log(store.getState());
