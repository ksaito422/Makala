import React from 'react';
import { Title } from '../../components/atoms/Title';
import {
  AppBar,
  Toolbar,
} from '@material-ui/core';

type Props = {
  title: string,
}

export const Header: React.FC<Props> = (props: Props) => {
  return (
    <AppBar color='primary' position='sticky'>
      <Toolbar>
        <Title
          title={props.title}
        />
      </Toolbar>
    </AppBar>
  );
}
