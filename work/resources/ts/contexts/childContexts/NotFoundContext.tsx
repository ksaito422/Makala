import React, { useState, createContext } from 'react';

export const NotFoundContext = createContext({});

export const NotFoundContextProvider: React.FC = (props) => {
  // 404エラーページを表示する状態管理
  const [notFound, setNotFound] = useState(false);

  return (
    <NotFoundContext.Provider
      value={{
        notFound,
        setNotFound,
      }}
    >
      {props.children}
    </NotFoundContext.Provider>
  );
};
