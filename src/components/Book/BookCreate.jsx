// import './BookCreate.css';
import { useState } from "react";


function BookCreate() {
  const [title, setTitle] = useState('write book title');

  const handleSubmit = (event) => {
    event.preventDefault();

  };

  const handleChange = (event) => {
    setTitle(event.target.value)
  }

  return (
    <div className="BookCreate">
        BookCreate
        <form action="">
          <input type="text" value={title} onChange={handleChange}/>
          <button>Submit</button>
        </form>
    </div>
  );
}

export default BookCreate;