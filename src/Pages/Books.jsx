import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../Components/Book';
import InputData from '../Components/InputData';
import fetchApi from '../redux/api';
import { deleteBook, setBooks } from '../redux/books/books';

function Books() {
  const books = useSelector((state) => state.book);
  const dispatch = useDispatch();
  const removeBookFromStore = (id) => {
    dispatch(deleteBook(id));
  };
  useEffect(() => {
    async function intitData() {
      const books = await fetchApi();
      dispatch(setBooks(books));
    }
    intitData();
  }, []);

  return (
    <>
      {books.map((book) => (
        <div key={book.item_id}>
          <Book title={book.title} author={book.author} />
          <button type="button" onClick={() => { removeBookFromStore(book.item_id); }}>Remove</button>
        </div>
      ))}
      <InputData />
    </>
  );
}

export default Books;
