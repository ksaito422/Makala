import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../contexts/childContexts/AuthContext';

export const Auth: React.FC = (props) => {
  const { authMe } = useContext<any>(AuthContext);

  useEffect(() => {
    authMe();
  }, []);

  return (
    <>
      {props.children}
    </>
  );
}