// import './BookShow.css';
import { useState } from 'react';
import BookEdit from './BookEdit';

function BookShow({ id, title }) {

  return (
    <div className="BookShow">
        Book ID: {id} , Bool Title: {title}
    </div>
  );
}

export default BookShow;