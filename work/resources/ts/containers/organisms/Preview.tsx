import React from 'react';
import MarkdownPreview from '@uiw/react-markdown-preview';
import { StylesContext } from '../../contexts/childContexts/StylesContext';

type props = {
  items: [
    {
      id: string,
      title: string,
      content: string,
    }
  ],
}

export const Preview: React.FC<props> = ({
  items
}) => {
  let previewText: string = '';
  const tmp = items.forEach(key => {
    previewText += key.title + key.content + '<br>'
  })

  return (
    <MarkdownPreview
      source={previewText}
    />
  );
}