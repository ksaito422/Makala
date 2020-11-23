import React from 'react';
import { Title } from '../../components/atoms/Title';
import {
  AppBar,
  Toolbar,
} from '@material-ui/core';

export const Header: React.FC = () => {
  return (
    <AppBar color='primary' position='sticky'>
      <Toolbar>
        <Title
          title='makala'
        />
      </Toolbar>
    </AppBar>
  );
}
