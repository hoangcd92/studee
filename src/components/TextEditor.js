import React, { useState, useEffect } from 'react';
import { Editor, EditorState, RichUtils, convertToRaw } from 'draft-js';

const INLINE_STYLES = [
  'BOLD',
  'CODE',
  'ITALIC',
  'STRIKETHROUGH',
  'UNDERLINE',
  'HIGHLIGHT',
];
const BLOCK_STYLES = [
  'header-one',
  'header-two',
  'header-three',
  'blockquote',
  'unordered-list-item',
  'ordered-list-item',
];
const STYLE_MAP = {
  HIGHLIGHT: {
    backgroundColor: '#faed27',
  },
};

function TextEditor({ readOnly }) {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  useEffect(() => {
    const savedData = convertToRaw(editorState.getCurrentContent());
    // console.log(savedData);
  }, [editorState]);

  function toggleInlineStyle(e, style) {
    e.preventDefault();
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  }
  function toggleBlockType(e, style) {
    e.preventDefault();
    setEditorState(RichUtils.toggleBlockType(editorState, style));
  }

  function handleKeyCommand(command) {
    const newEditorState = RichUtils.handleKeyCommand(editorState, command);
    console.log(command);
    if (newEditorState) {
      setEditorState(newEditorState);
      return 'handled';
    }
    return 'not-handled';
  }
  function renderInlineStyleButton() {
    const currentInlineStyle = editorState.getCurrentInlineStyle();

    return INLINE_STYLES.map((style) => {
      let activeStatus = currentInlineStyle.has(style) ? 'active' : '';
      return (
        <button
          className={activeStatus}
          key={style}
          onMouseDown={(e) => toggleInlineStyle(e, style)}
        >
          {style}
        </button>
      );
    });
  }

  function renderBlockTypeButton() {
    const currentBlockType = RichUtils.getCurrentBlockType(editorState);

    return BLOCK_STYLES.map((style) => {
      let activeStatus = currentBlockType === style ? 'active' : '';
      return (
        <button
          className={activeStatus}
          key={style}
          onMouseDown={(e) => toggleBlockType(e, style)}
        >
          {style}
        </button>
      );
    });
  }
  console.log(readOnly);

  return (
    <>
      {renderInlineStyleButton()}
      {renderBlockTypeButton()}
      <div className="editor">
        <Editor
          placeholder="Nhập nội dung..."
          customStyleMap={STYLE_MAP}
          editorState={editorState}
          onChange={setEditorState}
          handleKeyCommand={handleKeyCommand}
          readOnly={readOnly}
        />
      </div>
    </>
  );
}

export default TextEditor;
