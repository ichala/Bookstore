const CREATE = 'BOOKSTORE/BOOKS/CREATE_BOOK';
const DELETE = 'BOOKSTORE/BOOKS/DELETE_BOOK';

// Reducer
export default function reducerBooks(state = [{
  id: '1',
  title: 'test1',
  author: 'test1',
}, {
  id: '2',
  title: 'test2',
  author: 'test2',
}, {
  id: '3',
  title: 'test3',
  author: 'test3',
}, {
  id: '4',
  title: 'test4',
  author: 'test4',
}], action = {}) {
  switch (action.type) {
    case CREATE:
      return [...state, action.payload];
    case DELETE:
      return [...state.filter((book) => (book.id !== action.payload))];
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
export const booksList = (state) => state.books;
