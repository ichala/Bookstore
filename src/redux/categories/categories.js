const CHECK = 'BOOKSTORE/CATEGORIES/CHECK';

// Reducer
export default function reducerCategories(state = [], action = {}) {
  switch (action.type) {
    case CHECK:
      return 'Under construction';
    default: return state;
  }
}

// Action Creators
export function checkStatus() {
  return { type: CHECK };
}
