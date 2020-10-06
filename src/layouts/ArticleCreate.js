import React, { useState } from 'react';
import { firestore } from '../firebase/firebase';
import TextEditor from '../components/TextEditor';

function ArticleCreate() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState(null);

  function saveArticleToFirestore() {
    firestore
      .collection('articles')
      .add({
        title,
        content,
      })
      .then(function (docRef) {})
      .catch(function (error) {});
  }
  return (
    <div className="ArticleDetail">
      <input
        className="Article__title"
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <h2>{title}</h2>
      <div className="Article__content">
        <TextEditor
          readOnly={false}
          content={content}
          setContent={setContent}
        />
      </div>
      <button onClick={saveArticleToFirestore}>ADD CONTENT</button>
    </div>
  );
}

export default ArticleCreate;
