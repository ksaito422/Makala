import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Paper, Typography } from '@material-ui/core';
import { StylesContext } from '../../contexts/childContexts/StylesContext';

export const NotFound: React.FC = () => {
  // cssの定義
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();

  return (
    <>
      <Container maxWidth='md'>
        <Paper elevation={2} className={classes.paper}>
          <Typography variant='h3' color='textPrimary'>
            Not Found
          </Typography>
          <Typography variant='h5' color='textSecondary'>
            お探しのページは見つかりませんでした。
          </Typography>
          <Link to='/'>TOPへ</Link>
        </Paper>
      </Container>
    </>
  );
};
