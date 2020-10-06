import React, { useState, useEffect } from 'react';
import {
  Editor,
  EditorState,
  RichUtils,
  convertToRaw,
  convertFromRaw,
} from 'draft-js';

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

function TextEditor({ readOnly, content, setContent }) {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  useEffect(() => {
    if (content) {
      const currentContent = convertFromRaw(content);
      setEditorState(EditorState.createWithContent(currentContent));
    }
  }, [content]);

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
  function converCurrentContentToRaw() {
    const savedData = convertToRaw(editorState.getCurrentContent());
    setContent(savedData);
  }

  return (
    <>
      {!readOnly && renderInlineStyleButton()}
      {!readOnly && renderBlockTypeButton()}
      <div className="editor">
        <Editor
          customStyleMap={STYLE_MAP}
          editorState={editorState}
          onChange={setEditorState}
          handleKeyCommand={handleKeyCommand}
          readOnly={readOnly}
          onBlur={converCurrentContentToRaw}
        />
      </div>
    </>
  );
}

export default TextEditor;
