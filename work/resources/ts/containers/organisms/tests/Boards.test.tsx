import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { Boards } from '../Boards';
import { StylesContextProvider } from '../../../contexts/childContexts/StylesContext';
import { ModalPropsContextProvider } from '../../../contexts/childContexts/ModalPropsContext';

// メモリリークを避けるために、各テスト後にすべてのコンテンツを消去する
afterEach(cleanup);

type Props = {
  boards: [
    {
      id: number;
    }
  ];
  index: number;
  createOnClick: (data: { [x: string]: any }) => void;
  updateOnClick: (data: { [x: string]: any }, user: number) => void;
  deleteOnClick: (id: number, index: number) => void;
  showOnClick: (id: number) => void;
};

describe('Boards', () => {
  it('スナップショットテスト', () => {
    const props: Props = {
      boards: [
        {
          id: 1,
        },
      ],
      index: 1,
      createOnClick: jest.fn(),
      updateOnClick: jest.fn(),
      deleteOnClick: jest.fn(),
      showOnClick: jest.fn(),
    };

    const { baseElement } = render(
      <StylesContextProvider>
        <ModalPropsContextProvider>
          <Boards {...props} />
        </ModalPropsContextProvider>
      </StylesContextProvider>
    );
    expect(baseElement).toMatchSnapshot();
  });

  // it('ユニットテスト名', () => {
  //     ここに実行して欲しいテストを記述します。
  //   });
});
