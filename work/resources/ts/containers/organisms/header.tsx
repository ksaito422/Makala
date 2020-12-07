import React from 'react';
import { Title } from '../../components/atoms/Title';
import { Avatar } from '../../components/atoms/Avatar';
import {
  AppBar,
  Grid,
  Toolbar,
} from '@material-ui/core';

export const Header: React.FC = () => {
  return (
    <AppBar color='primary' position='sticky'>
      <Toolbar>
        <Grid container spacing={2}>
          <Grid item xs={11}>
            <Title title='makala' />
          </Grid>
          <Grid item xs={1}>
            <Avatar
              onClick={() => {
                console.log('avatar!!');
              }}
            >
              A
            </Avatar>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
