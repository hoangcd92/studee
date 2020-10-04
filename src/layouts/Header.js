import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <Link to="/" className="header__title">
        <h2>studee.vn</h2>
      </Link>

      <div className="header__navigation">
        <div>
          <Link to="/articles">Articles</Link>
        </div>
        <div>
          <Link to="/articles">Flashcard</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
