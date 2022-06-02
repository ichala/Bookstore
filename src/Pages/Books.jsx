import React from 'react';
import Book from '../Components/Book';
import InputData from '../Components/InputData';

function Books() {
  const booksList = [{
    title: 'test1',
    author: 'test1',
  }, {
    title: 'test2',
    author: 'test2',
  }, {
    title: 'test3',
    author: 'test3',
  }, {
    title: 'test4',
    author: 'test4',
  }];
  return (
    <>
      {booksList.map((book) => (
        <div key={book.title}>
          <Book title={book.title} author={book.author} />
          <button type="button">Remove</button>
        </div>
      ))}
      <InputData />
    </>
  );
}

export default Books;
