import React from 'react';
import { useParams } from 'react-router-dom';
import TextEditor from '../components/TextEditor';
import { firestore } from '../firebase/firebase';

function ArticleDetail() {
  const { id } = useParams();

  return (
    <div className="ArticleDetail">
      <h2 className="Article__title">美国“新门罗主义”变本加厉　拉美受害不浅</h2>
      <div className="Article__content">
        <TextEditor readOnly={true} />
      </div>
    </div>
  );
}

export default ArticleDetail;
