import React, { useContext } from 'react';
import { Box, Container, Paper, Typography } from '@material-ui/core';
import { StylesContext } from '../../contexts/childContexts/StylesContext';

type Props = {
  className?: any;
};

export const About: React.FC<Props> = (props) => {
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();

  return (
    <>
      <Container maxWidth='md' className={props.className}>
        <Paper elevation={2} className={classes.paper}>
          <Typography variant='h5' color='textPrimary' className={classes.about_title}>
            Makalaについて
          </Typography>
          <Typography variant='subtitle2' color='textSecondary' className={classes.about_subtitle}>
            Makalaは、マークダウンエディタを使用しており、スマートフォンからのご利用でも文章を書きやすくなるよう工夫しております。
            <br />
            Webにアクセス可能な環境ならどこからでも利用できます。
          </Typography>
          <Typography variant='h5' color='textSecondary' className={classes.about_introduction}>
            機能紹介
          </Typography>
          <Typography
            variant='subtitle2'
            color='textSecondary'
            className={classes.about_introduction_sub}
          >
            Makalaの主な機能を紹介します。
          </Typography>
          <Box>
            <Box>
              <Typography
                variant='h5'
                color='textSecondary'
                className={classes.about_introduction_title}
              >
                記事の作成・プレビュー
              </Typography>
              <img src='/img/makala_01.gif' alt='' />
              <Typography
                variant='subtitle2'
                color='textSecondary'
                className={classes.about_introduction_text}
              >
                記事タイトルを入力して、ボードを作成し、文節ごとに文章を書くことができます。
                <br />
                同時に横の画面にプレビューも表示されますので、文章構成のイメージを掴みやすくなります。
              </Typography>
            </Box>
            <Box>
              <Typography
                variant='h5'
                color='textSecondary'
                className={classes.about_introduction_title}
              >
                文章構成の変更
              </Typography>
              <img src='/img/makala_02.gif' alt='' />
              <Typography
                variant='subtitle2'
                color='textSecondary'
                className={classes.about_introduction_text}
              >
                文節ごとに作成したカードは、ドラッグ&ドロップで並びを変えることができます。
                <br />
                納得のいく文章構成を見つけるのに役立ちます。
              </Typography>
            </Box>
            <Box>
              <Typography
                variant='h5'
                color='textSecondary'
                className={classes.about_introduction_title}
              >
                記事のダウンロード
              </Typography>
              <img src='/img/makala_03.gif' alt='' />
              <Typography
                variant='subtitle2'
                color='textSecondary'
                className={classes.about_introduction_text}
              >
                作成した記事の内容をマークダウンファイルとしてダウンロードできます。
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Container>
    </>
  );
};
