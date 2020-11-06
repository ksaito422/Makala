import React, { useContext } from 'react';
import MarkdownPreview from '@uiw/react-markdown-preview';
import { StylesContext } from '../../contexts/childContexts/StylesContext';
import {
  Paper
} from '@material-ui/core';

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
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();

  let previewText: string = '';
  const tmp = items.forEach(key => {
    previewText += key.title + key.content + '<br>'
  })

  return (
    <Paper elevation={3} className={classes.preview}>
      <MarkdownPreview source={previewText} />
    </ Paper>
  );
}