import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import './books.css';

import BookForm from './Bookform';

function Book() {
  const [showForm, setShowForm] = useState(true);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className='book'>
      <h1 className='tit'>Book Services</h1>
      {/* <Link to="#" className='book' onClick={toggleForm}>
        Book Services <br></br> Form
      </Link> */}
      <div className='book-form'>
      <div className='form-container'>
      {showForm && <BookForm />} {/* Conditionally render the BookForm */}
      </div>
      </div>
    </div>
  );
}

export default Book;
