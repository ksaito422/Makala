import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Title } from '../../components/atoms/Title';
import { Avatar } from '../../components/atoms/Avatar';
import { AuthContext } from '../../contexts/childContexts/AuthContext';
import {
  AppBar,
  Grid,
  Menu,
  MenuItem,
  Toolbar,
} from '@material-ui/core';

export const Header: React.FC = () => {
  /**
   * ポップアップメニューの表示位置
   * ログイン状態の確認
   * URLパラメータ取得
   */
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { isAuth } = useContext<any>(AuthContext);
  const { user } = useParams<any>();

  // メニューのオープンon/off
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  }
  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <>
      <AppBar color='primary' position='sticky'>
        <Toolbar>
          <Grid container spacing={2}>
            <Grid item xs={11}>
              <Title title='makala' />
            </Grid>
            <Grid item xs={1}>
              {isAuth ? (
                <Avatar
                  ariaControls='avatar'
                  ariaHaspopup={true}
                  onClick={handleClick}>
                    {user.slice(0,1)}
                  </Avatar>
              ) : (
                null
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Menu
        id='avatar'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => {console.log('logout!!')}}>ログアウト</MenuItem>
      </Menu>
    </>
  );
}
