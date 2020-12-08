import React, { useState, useContext } from 'react';
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
   * { ログイン状態の確認, ログインユーザーの情報, ログインメソッド }
   */
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { isAuth, authUserState, authLogout } = useContext<any>(AuthContext);

  // メニューのオープンon/off
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  }
  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <>
      <AppBar color='secondary' position='sticky'>
        <Toolbar>
          <Grid container spacing={2}>
            <Grid item xs={11}>
              <Title />
            </Grid>
            <Grid item xs={1}>
              {isAuth ? (
                <Avatar
                  ariaControls='avatar'
                  ariaHaspopup={true}
                  onClick={handleClick}>
                    {authUserState.name.slice(0,1)}
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
        <MenuItem onClick={authLogout}>ログアウト</MenuItem>
      </Menu>
    </>
  );
}
