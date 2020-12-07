import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Title } from '../../components/atoms/Title';
import { Avatar } from '../../components/atoms/Avatar';
import { AuthContext } from '../../contexts/childContexts/AuthContext';
import {
  AppBar,
  Grid,
  Toolbar,
} from '@material-ui/core';

export const Header: React.FC = () => {
  /**
   * ログイン状態の確認
   * URLパラメータ取得
   */
  const { isAuth } = useContext<any>(AuthContext);
  const { user } = useParams<any>();

  return (
    <AppBar color='primary' position='sticky'>
      <Toolbar>
        <Grid container spacing={2}>
          <Grid item xs={11}>
            <Title title='makala' />
          </Grid>
          <Grid item xs={1}>
            {isAuth ? (
              <Avatar
                onClick={() => {
                  console.log('avatar!!');
                }}
              >
                {user.slice(0,1)}
              </Avatar>
            ) : (
              null
            )}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
