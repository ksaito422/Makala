import React, { useState, useContext } from 'react';
import MarkdownPreview from '@uiw/react-markdown-preview';
import { StylesContext } from '../../contexts/childContexts/StylesContext';

type props = {
  items: {
    id: string,
    content: string,
  },
}

const source = `
## MarkdownPreview

> todo: React component preview markdown text.
`;

export const Preview: React.FC<props> = ({
  items
}) => {
  const item = JSON.stringify(items,null,'\t');

  return (
    <MarkdownPreview
      source={item}
    />
  );
}