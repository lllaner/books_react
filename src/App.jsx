import './App.css';
import { useState } from 'react';
import BookList from './components/Book/BookList';
import BookCreate from './components/Book/BookCreate';
import BookShow from './components/Book/BookShow';

function App() {
  const defaultBooks = [<BookShow id={1} title='Stalker'/>]
  const [books, setBooks] = useState(defaultBooks);

  const onCreate = (title) => {

  };

  return (
    <div className="App">
      <BookCreate onCreate={onCreate}/>
      <BookList books={books}/>
    </div>
  );
}

export default App;
