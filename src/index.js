// import store from "./store";
// import { bugAdded, bugRemoved, bugResolved } from "./actions";

// const unsubscribe = store.subscribe(() => {
//   console.log("Store changed", store.getState());
// });

// store.dispatch(bugAdded("Bug 1"));

// store.dispatch(bugResolved(1));

// console.log(store.getState());

import reducer from "./reducer";
import createStore from "./customStore";
import * as actions from "./actions";

const store = createStore(reducer);

store.subscribe(() => {
  console.log("Store changed!");
});

store.dispatch(actions.bugAdded("Bug 1"));

console.log(store.getState());
