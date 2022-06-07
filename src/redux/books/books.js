import { removeApi, saveApi } from '../api';

const CREATE = 'BOOKSTORE/BOOKS/CREATE_BOOK';
const DELETE = 'BOOKSTORE/BOOKS/DELETE_BOOK';
const UPDATE = 'BOOKSTORE/BOOKS/UPDATE_BOOKS';
// Reducer
export default function reducerBooks(state = [], action = {}) {
  switch (action.type) {
    case CREATE:
      saveApi(action.payload);
      return [...state, action.payload];
    case DELETE:
      removeApi(action.payload);
      return state.filter((book) => book.item_id !== action.payload);
    case UPDATE:
      return action.payload;
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
export const setBooks = (book) => ({
  type: UPDATE,
  payload: book,
});
export const booksList = (state) => state.books;
