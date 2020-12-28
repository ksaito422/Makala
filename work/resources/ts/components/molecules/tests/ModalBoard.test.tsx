import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { ModalBoard } from '../ModalBoard';
import { StylesContextProvider } from '../../../contexts/childContexts/StylesContext';
import { AuthContextProvider } from '../../../contexts/childContexts/AuthContext';

// メモリリークを避けるために、各テスト後にすべてのコンテンツを消去する
afterEach(cleanup);

describe('ModalBoard', () => {
  it('スナップショットテスト', () => {
    const props = {
      defaultValueTitle: 'string',
      postOnClick: jest.fn,
      modalOnClose: jest.fn,
    };

    const { baseElement } = render(
      <StylesContextProvider>
        <AuthContextProvider>
          <ModalBoard {...props} />
        </AuthContextProvider>
      </StylesContextProvider>
    );
    expect(baseElement).toMatchSnapshot();
  });

  // it('ユニットテスト名', () => {
  //   ここに実行して欲しいテストを記述します。
  // });
});
