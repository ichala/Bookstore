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
      <form>
        <input type="text" placeholder="title" name="title" id="title" onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="author" name="author" id="author" onChange={(e) => setAuthor(e.target.value)} />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            submitBookToStore({
              item_id: uuidv4(), title: Title, author: Author, category: '',
            });
          }}
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default InputData;
