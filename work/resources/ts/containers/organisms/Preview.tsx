import React, { useContext } from 'react';
import MarkdownPreview from '@uiw/react-markdown-preview';
import { DownloadIcon } from '../../components/atoms/DownloadIcon';
import { StylesContext } from '../../contexts/childContexts/StylesContext';
import {
  Container,
  Grid,
  Paper
} from '@material-ui/core';

type Props = {
  items: [
    {
      id: string,
      title: string,
      content: string,
    }
  ],
}

export const Preview: React.FC<Props> = (props) => {
  // cssの定義
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();

  /**
   * プレビューに表示するテキストの変数宣言
   * forEachでタイトル -> 内容の順で繰り返し変数に入れていく
   * 最後にpreviewTextをMarkdownPreviewで表示する
   */
  let previewText: string = '';
  const tmp = props.items.forEach(key => {
    // プレビューに表示するテキスト内容をカスタマイズ
    previewText += '# ' + key.title + '\n' + key.content + '\n\n'
  });

  // markdown file downloadの細かい設定
  const downloadFile = () => {
    const element = document.createElement("a");
    const file = new Blob([previewText], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "makala.md";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }

  return (
    <>
      <Container maxWidth='lg'>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Paper elevation={3} className={classes.preview}>
              <MarkdownPreview source={previewText} />
            </Paper>
          </Grid>
          <Grid item xs={12} className={classes.centerPlacement}>
            <DownloadIcon onClick={downloadFile} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}