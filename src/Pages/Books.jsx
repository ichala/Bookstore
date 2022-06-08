/* eslint-disable */ 
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
    <div className="app-container">
      <div>
        <div>
          { books.map((book) => (
            <div className="book-panel bg-white d-flex align-items-center justify-content-between" key={book.id}>
              <div className="d-inline-flex flex-column">
                <span className="book-genre">Action</span>
                <span className="book-title">{book.title}</span>
                <span className="book-author">{book.author}</span>
                <span className="d-inline-block">
                  <button id={book.id} type="button" className="btn btn-link border-end book-link ps-0">Comments</button>
                  <button id={book.id} type="button" className="btn btn-link border-end book-link" onClick={() => { removeBookFromStore(book.item_id); }}>Remove</button>
                  <button id={book.id} type="button" className="btn btn-link book-link">Edit</button>
                </span>
              </div>

              <div className="d-flex">
                <div className="d-flex align-items-center border-end">
                  <div className="progress-calc d-inline-block" />
                  <span>
                    <div className="progress">64%</div>
                    <div className="completed">Completed</div>
                  </span>
                </div>

                <div className="d-flex flex-column">
                  <div className="chapter">CURRENT CHAPTER</div>
                  <div className="lesson">Chapter 309</div>
                  <button type="button" className="btn UpdateData">UPDATE PROGRESS</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <form className="add-book-form">
          <InputData />
      </form>
    </div>
    
  
    </>
  );
}

export default Books;
