import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <p>Greetings, {currentUser.username}</p>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <div>
      <Link className='btn' to='/signup'>Sign Up</Link><br/>
      <Link className='btn' to='/login'>Login</Link>
    </div>
  );
    
  return (
    // <header className='nav-bar'>
    //   <h1 className='logo'>BenchBnB</h1>
      <div>
        {display}
      </div>
    // </header>
  );
};