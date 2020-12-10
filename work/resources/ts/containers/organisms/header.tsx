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
  useMediaQuery,
} from '@material-ui/core';

export const Header: React.FC = () => {
  /**
   * ポップアップメニューの表示位置
   * { ログイン状態の確認, ログインユーザーの情報, ログインメソッド }
   * タブレット( > 900px)を基準にレスポンシブ対応
   */
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { isAuth, authUserState, authLogout } = useContext<any>(AuthContext);
  const matches = useMediaQuery('(min-width: 900px)');

  // メニューのオープンon/off
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
    console.log(anchorEl)
  }
  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <>
      <AppBar color='secondary' position='sticky'>
        <Toolbar>
          {matches ? (
            // PCレイアウト width >= 901px
            <Grid container spacing={2} alignItems='center'>
              <Grid item xs={11}>
                <Title />
              </Grid>
              <Grid item xs={1}>
                {isAuth ? (
                  <Avatar
                    ariaControls='avatar'
                    ariaHaspopup={true}
                    onClick={handleClick}
                  >
                    {authUserState.name.slice(0,1)}
                  </Avatar>
                ) : (
                  null
                )}
              </Grid>
            </Grid>
          ) : (
            // タブレット・スマホレイアウト width <= 900px
            <Grid container spacing={2} alignItems='center'>
              <Grid item xs={10}>
                <Title />
              </Grid>
              <Grid item xs={2}>
                {isAuth ? (
                  <Avatar
                    ariaControls='avatar'
                    ariaHaspopup={true}
                    onClick={handleClick}
                  >
                    {authUserState.name.slice(0,1)}
                  </Avatar>
                ) : (
                  null
                )}
              </Grid>
            </Grid>
          )}
        </Toolbar>
      </AppBar>

      <Menu id='avatar' anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)}
            onClose={handleClose}
      >
        <MenuItem onClick={authLogout}>ログアウト</MenuItem>
      </Menu>
    </>
  );
}
