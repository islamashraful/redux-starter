import { BUG_ADDED, BUG_REMOVED, BUG_RESOLVED } from "./actionTypes";
import store from "./store";

let lastId = 0;

export default function reducer(state = [], action) {
  if (action.type === BUG_ADDED) {
    return [
      ...state,
      {
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      },
    ];
  } else if (action.type === BUG_REMOVED) {
    return state.filter((item) => item.id !== action.payload.id);
  } else if (action.type === BUG_RESOLVED) {
    return state.map((item) => {
      if (item.id === action.payload.id) {
        return { ...item, resolved: true };
      }
    });
  }

  return state;
}
