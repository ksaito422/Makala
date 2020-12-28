import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Spinner } from '../Spinner';
import { StylesContextProvider } from '../../../contexts/childContexts/StylesContext';

// メモリリークを避けるために、各テスト後にすべてのコンテンツを消去する
afterEach(cleanup);

describe('Spinner', () => {
  it('スナップショットテスト', () => {
    const props = {
      open: true,
    };

    const { baseElement } = render(
      <StylesContextProvider>
        <Spinner {...props} />
      </StylesContextProvider>
    );
    expect(baseElement).toMatchSnapshot();
  });
});
