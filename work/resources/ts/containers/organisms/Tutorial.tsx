import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../../components/atoms/Button';
import { AccordionArea } from '../../components/molecules/AccordionArea';
import { StylesContext } from '../../contexts/childContexts/StylesContext';
import {
  Container,
  Grid,
  Paper,
} from '@material-ui/core';

export const Tutorial: React.FC = () => {
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <Container maxWidth='xl'>
        <AccordionArea
          defaultExpanded={true}
        >
        <Grid
          container
          spacing={6}
          justify="flex-end"
          alignItems="center"
        >
          <Grid item xs={7}>
            <Paper className={classes.gif}>
              <p>使い方説明のGIFが入ります</p>
            </Paper>
          </Grid>
          <Grid item xs={5}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  onClick={() => {
                    history.push('/sign-in');
                  }}
                >
                  新規登録
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  onClick={() => {
                    history.push('/login');
                  }}
                >
                  ログイン
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        </AccordionArea>
      </Container>
    </>
  );
}