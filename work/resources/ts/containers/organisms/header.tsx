import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AppBar, Grid, Menu, MenuItem, Toolbar, useMediaQuery } from '@material-ui/core';
import { Title } from '../../components/atoms/Title';
import { Button } from '../../components/atoms/Button';
import { Avatar } from '../../components/atoms/Avatar';
import { AuthContext } from '../../contexts/childContexts/AuthContext';

export const Header: React.FC = () => {
  /**
   * ポップアップメニューの表示位置
   * { ログイン状態の確認, ログインユーザーの情報, ログインメソッド }
   * タブレット( > 1100px)を基準にレスポンシブ対応
   */
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { isAuth, authUserState, authLogout } = useContext<any>(AuthContext);
  const history = useHistory();
  const matches = useMediaQuery('(min-width: 1101px)');

  // メニューのオープンon/off
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar color='secondary' position='sticky'>
        <Toolbar>
          {matches ? (
            // PCレイアウト width >= 1101px
            <Grid container spacing={2} alignItems='center'>
              <Grid item xs={10}>
                <Title />
              </Grid>
              <Grid item xs={2}>
                {isAuth ? (
                  <Avatar ariaControls='avatar' ariaHaspopup onClick={handleClick}>
                    {authUserState.name.slice(0, 1)}
                  </Avatar>
                ) : (
                  <Button
                    variant='outlined'
                    size='medium'
                    onClick={() => {
                      history.push('/login');
                    }}
                  >
                    ログイン
                  </Button>
                )}
              </Grid>
            </Grid>
          ) : (
            // タブレット・スマホレイアウト width <= 1100px
            <Grid container spacing={2} alignItems='center'>
              <Grid item xs={9}>
                <Title />
              </Grid>
              <Grid item xs={3}>
                {isAuth ? (
                  <Avatar ariaControls='avatar' ariaHaspopup onClick={handleClick}>
                    {authUserState.name.slice(0, 1)}
                  </Avatar>
                ) : (
                  <Button
                    variant='outlined'
                    size='medium'
                    onClick={() => {
                      history.push('/login');
                    }}
                  >
                    ログイン
                  </Button>
                )}
              </Grid>
            </Grid>
          )}
        </Toolbar>
      </AppBar>

      <Menu
        id='avatar'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            history.push(`/${authUserState.name}/settings/account`);
          }}
        >
          設定
        </MenuItem>
        <MenuItem onClick={authLogout}>ログアウト</MenuItem>
      </Menu>
    </>
  );
};
