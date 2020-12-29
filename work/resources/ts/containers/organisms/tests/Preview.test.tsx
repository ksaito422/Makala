import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { Preview } from '../Preview';
import { StylesContextProvider } from '../../../contexts/childContexts/StylesContext';

// メモリリークを避けるために、各テスト後にすべてのコンテンツを消去する
afterEach(cleanup);

// プロパティの型定義
type Props = {
  items: [
    {
      id: string;
      title: string;
      content: string;
    }
  ];
};

describe('Preview', () => {
  it('スナップショットテスト', () => {
    const props: Props = {
      items: [
        {
          id: '1',
          title: 'string',
          content: 'string',
        },
      ],
    };

    const { baseElement } = render(
      <StylesContextProvider>
        <Preview {...props} />
      </StylesContextProvider>
    );
    expect(baseElement).toMatchSnapshot();
  });

  // it('ユニットテスト名', () => {
  //     ここに実行して欲しいテストを記述します。
  //   });
});
