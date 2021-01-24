import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../contexts/childContexts/AuthContext';
import { NotFoundContext } from '../contexts/childContexts/NotFoundContext';

type Props = {
  exact: true;
  path: string;
  component: React.FC<{}>;
};

export const PrivateRoute: React.FC<Props> = (props) => {
  const { isAuth } = useContext<any>(AuthContext);
  const { setNotFound } = useContext<any>(NotFoundContext);

  useEffect(() => {
    // ルーティングするたび、NotFOundStateをfalseに戻す
    setNotFound(false);
  }, []);

  // 未認証ユーザーなら'/'にリダイレクトする
  return isAuth ? <Route {...props} /> : <Redirect to='/login' />;
};
