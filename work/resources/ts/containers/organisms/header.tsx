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
   * iPad Pro(1024px) < PC(1025px以上)を基準にレスポンシブ対応
   */
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { isAuth, authUserState, authLogout } = useContext<any>(AuthContext);
  const matches = useMediaQuery('(min-width: 1025px)');

  // メニューのオープンon/off
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  }
  const handleClose = () => {
    setAnchorEl(null);
  }

  /**
   * レスポンシブ対応のため共通コンポーネント化
   * CommonAvatarはログイン済なら表示し、それ以外なら非表示する
   */
  const CommonAvatar: React.FC = () => {
    return (
      <>
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
      </>
    );
  }

  return (
    <>
      <AppBar color='secondary' position='sticky'>
        <Toolbar>
          {matches ? (
            <Grid container spacing={2}>
              <Grid item xs={11}>
                <Title />
              </Grid>
              <Grid item xs={1}>
                <CommonAvatar />
              </Grid>
            </Grid>
          ) : (
            <Grid container spacing={10}>
              <Grid item xs={11}>
                <Title />
              </Grid>
              <Grid item xs={1}>
                <CommonAvatar />
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
