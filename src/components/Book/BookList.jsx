// import './BookList.css';
import { useState } from 'react';
import BookShow from './BookShow';

function BookList({ books }) {
  const renderBooks = books.map((book) => {
    <div>
      <BookShow id={book.id} title={book.title}/>
    </div>
  })
  return (
    <div className="BookList">
        Books: {renderBooks}
    </div>
  );
}

export default BookList;