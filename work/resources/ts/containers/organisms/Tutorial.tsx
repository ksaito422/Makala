import React, { useContext } from 'react';
import { LinkButton } from '../../components/atoms/LinkButton';
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
                <LinkButton
                  to={'/signin'}
                  fullWidth
                >
                  新規登録
                </LinkButton>
              </Grid>
              <Grid item xs={12}>
                <LinkButton
                  to={'/login'}
                  fullWidth
                >
                  ログイン
                </LinkButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        </AccordionArea>
      </Container>
    </>
  );
}