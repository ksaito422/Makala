import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../contexts/childContexts/AuthContext';

type Props = {
  exact: true,
  path: string,
  component: React.FC<{}>
}

export const PrivateRoute: React.FC<Props> = (props) => {
  const { isAuth } = useContext<any>(AuthContext);

  // 未認証ユーザーなら'/'にリダイレクトする
  return (
    isAuth ? (
      <Route {...props} />
    ) : (
      <Redirect to='/' />
    )
  );
}