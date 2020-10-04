import React from 'react';
import { Link } from 'react-router-dom';

function ArticleList() {
  return (
    <div className="ArticleList">
      <h2 className="ArticleList__title">Article List</h2>
      <Link to="/articles/create">
        <button>Create New Article</button>
      </Link>
      <div className="ArticleList__list">
        <ul>
          <li>
            <Link to="/articles/1">
              <h3>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
                commodi.
              </h3>
            </Link>
            <p>21 Sep 2020</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ArticleList;
