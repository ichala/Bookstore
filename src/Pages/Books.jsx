import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../Components/Book';
import InputData from '../Components/InputData';
import { deleteBook } from '../redux/books/books';

function Books() {
  const books = useSelector((state) => state.book);
  const dispatch = useDispatch();
  return (
    <>
      {books.map((book) => (
        <div key={book.id}>
          <Book title={book.title} author={book.author} />
          <button type="button" onClick={() => { dispatch(deleteBook(book.id)); }}>Remove</button>
        </div>
      ))}
      <InputData />
    </>
  );
}

export default Books;
