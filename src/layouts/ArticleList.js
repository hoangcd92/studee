import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { firestore } from '../firebase/firebase';

function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    firestore
      .collection('articles')
      .get()
      .then((docs) => {
        const articlesList = [];
        docs.forEach((doc) => {
          articlesList.push({ id: doc.id, title: doc.data().title });
        });
        setArticles(articlesList);
      });
  }, []);

  return (
    <div className="ArticleList">
      <h2 className="ArticleList__title">Article List</h2>
      <Link to="/articles/create">
        <button>Create New Article</button>
      </Link>
      <div className="ArticleList__list">
        <ul>
          {articles.map((article) => (
            <li key={article.id}>
              <Link to={`/articles/${article.id}`}>
                <h3>{article.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ArticleList;
