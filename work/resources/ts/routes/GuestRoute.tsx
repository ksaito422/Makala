import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../contexts/childContexts/AuthContext';

type Props = {
  exact: true,
  path: string,
  component: React.FC<{}>
}

export const GuestRoute: React.FC<Props> = (props) => {
  const { isAuth } = useContext<any>(AuthContext);
  const user = localStorage.getItem('makala_user');

  // 認証済みユーザーなら'/home'にリダイレクトする
  return (
    isAuth ? (
      <Redirect to={`${user}/home`} />
    ) : (
      <Route {...props} />
    )
  );
}