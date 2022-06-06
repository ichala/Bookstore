import { createStore, combineReducers } from 'redux';
import reducerCategories from './categories/categories';
import reducerBooks from './books/books';

const allReducers = combineReducers({
  book: reducerBooks,
  categories: reducerCategories,
});
const store = createStore(allReducers);

export default store;
