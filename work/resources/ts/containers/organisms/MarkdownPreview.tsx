import React, { useState, useContext } from 'react';
import MarkdownPreview from '@uiw/react-markdown-preview';
import { StylesContext } from '../../contexts/childContexts/StylesContext';

const source = `
## MarkdownPreview

> todo: React component preview markdown text.
`;

export const Demo: React.FC<any> = () => {
  return (
    <MarkdownPreview source={source} />
  );
}