import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Typography } from '@material-ui/core';
import { StylesContext } from '../../contexts/childContexts/StylesContext';
import {} from '@material-ui/icons';

type Props = {
  // Defines the type of props.
};

export const Footer: React.FC<Props> = (props) => {
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();

  return (
    <>
      <footer className={classes.footer}>
        <Container maxWidth='sm'>
          <Grid container spacing={4} direction='row' justify='space-evenly' alignItems='center'>
            <Grid item xs={6}>
              <Link to='/rules' className={classes.footer_link}>
                利用規約
              </Link>
            </Grid>
            <Grid item xs={6}>
              <Link to='/privacy' className={classes.footer_link}>
                プライバシーポリシー
              </Link>
            </Grid>
          </Grid>
          <Typography variant='body2' align='center' className={classes.footer_copylight}>
            ©︎ 2021 Makala All Rights Reserved
          </Typography>
        </Container>
      </footer>
    </>
  );
};
