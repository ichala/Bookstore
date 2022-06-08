import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { createBook } from '../redux/books/books';

function InputData() {
  const [Title, setTitle] = useState('unknown');
  const [Author, setAuthor] = useState('unknown');
  const dispatch = useDispatch();
  const submitBookToStore = (data) => {
    dispatch(createBook(data));
  };
  return (
    <>

      <span className="add-new-book">ADD NEW BOOK</span>
      <input id="clear-title" placeholder="Book Title" onChange={(e) => setTitle(e.target.value)} className="book-title-input" />
      <input id="clear-author" placeholder="Author" onChange={(e) => setAuthor(e.target.value)} className="book-category-input" />
      <button
        type="button"
        className="btn add-book-button"
        onClick={(e) => {
          e.preventDefault();
          submitBookToStore({
            item_id: uuidv4(), title: Title, author: Author, category: '',
          });
        }}
      >
        ADD BOOK
      </button>
    </>
  );
}

export default InputData;
