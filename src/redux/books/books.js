const CREATE = 'BOOKSTORE/BOOKS/CREATE_BOOK';
const DELETE = 'BOOKSTORE/BOOKS/DELETE_BOOK';

// Reducer
export default function reducerBooks(state = [], action = {}) {
  switch (action.type) {
    case CREATE:
      return state.push(action.payload);
    case DELETE:
      return state.filter((book) => (book.id !== action.payload));
    default: return state;
  }
}

// Action Creators
export function createBook(book) {
  return { type: CREATE, payload: book };
}

export function deleteBook(id) {
  return { type: DELETE, payload: id };
}
