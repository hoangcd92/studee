import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      Homepage
      <Link to="/articles">To List</Link>
    </div>
  );
}

export default Home;
