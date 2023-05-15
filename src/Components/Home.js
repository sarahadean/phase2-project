import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to="/country/usa">USA</Link>
        </li>
        <li>
          <Link to="/country/canada">Canada</Link>
        </li>
        <li>
          <Link to="/country/uk">UK</Link>
        </li>
        <li>
          <Link to="/bucketlist">Bucket List</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;

