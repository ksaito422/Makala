import React, { useContext } from 'react';
import MarkdownPreview from '@uiw/react-markdown-preview';
import { StylesContext } from '../../contexts/childContexts/StylesContext';
import { Paper } from '@material-ui/core';

type Props = {
  items: [
    {
      id: string,
      title: string,
      content: string,
    }
  ],
}

export const Preview: React.FC<Props> = (props: Props) => {
  // classNameのインポート
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();

  // プレビューに表示するテキストの変数宣言
  // forEachでタイトル -> 内容の順で繰り返し変数に入れていく
  // 最後にpreviewTextをMarkdownPreviewで表示する
  let previewText: string = '';
  const tmp = props.items.forEach(key => {
    previewText += key.title + key.content + '<br>'
  });

  return (
    <Paper elevation={3} className={classes.preview}>
      <MarkdownPreview source={previewText} />
    </ Paper>
  );
}