import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducerCategories from './categories/categories';
import reducerBooks from './books/books';

const allReducers = combineReducers({
  book: reducerBooks,
  categories: reducerCategories,
});
const store = createStore(allReducers, applyMiddleware(thunk));

export default store;
