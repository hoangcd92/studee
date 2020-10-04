import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { firestore } from '../firebase/firebase';
import TextEditor from '../components/TextEditor';

function ArticleCreate() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState(null);
  return (
    <div className="ArticleDetail">
      <input
        className="Article__title"
        type="text"
        value={title}
        onInput={(e) => {
          setTitle(e.target.value);
        }}
      />
      <h2>{title}</h2>
      <div className="Article__content">
        <TextEditor readOnly={false} setContent={setContent} />
      </div>
    </div>
  );
}

export default ArticleCreate;
