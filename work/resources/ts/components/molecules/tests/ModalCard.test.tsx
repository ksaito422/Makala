import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { StylesContextProvider } from '../../../contexts/childContexts/StylesContext';
import { ModalCard } from '../ModalCard';

// メモリリークを避けるために、各テスト後にすべてのコンテンツを消去する
afterEach(cleanup);

describe('ModalCard', () => {
  it('スナップショットテスト', () => {
    const props = {
      defaultValue: 'string',
      postOnSubmit: jest.fn(),
      modalOnClose: jest.fn(),
    };

    const { baseElement } = render(
      <StylesContextProvider>
        <ModalCard {...props} />
      </StylesContextProvider>
    );
    expect(baseElement).toMatchSnapshot();
  });

  // it('ユニットテスト名', () => {
  //   ここに実行して欲しいテストを記述します。
  // });
});
