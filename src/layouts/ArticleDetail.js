import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TextEditor from '../components/TextEditor';
import { firestore } from '../firebase/firebase';

function ArticleDetail() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    firestore
      .collection('articles')
      .doc(id)
      .get()
      .then((doc) => {
        setTitle(doc.data().title);
        setContent(doc.data().content);
      });
  }, [id]);

  return (
    <div className="ArticleDetail">
      <h2 className="Article__title">{title}</h2>
      <div className="Article__content">
        <TextEditor readOnly={true} content={content} />
      </div>
    </div>
  );
}

export default ArticleDetail;
