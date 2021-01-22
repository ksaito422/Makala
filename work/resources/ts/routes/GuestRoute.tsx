import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../contexts/childContexts/AuthContext';
import { NotFoundContext } from '../contexts/childContexts/NotFoundContext';

type Props = {
  exact: true;
  path: string;
  component: React.FC<{}>;
};

export const GuestRoute: React.FC<Props> = (props) => {
  const { isAuth } = useContext<any>(AuthContext);
  const { setNotFound } = useContext<any>(NotFoundContext);
  const user = localStorage.getItem('makala_user');

  useEffect(() => {
    // ルーティングするたび、NotFOundStateをfalseに戻す
    setNotFound(false);
  }, []);

  // 認証済みユーザーなら'/home'にリダイレクトする
  return isAuth ? <Redirect to={`${user}/home`} /> : <Route {...props} />;
};
