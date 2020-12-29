import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { Register } from '../Register';
import { StylesContextProvider } from '../../../contexts/childContexts/StylesContext';

// メモリリークを避けるために、各テスト後にすべてのコンテンツを消去する
afterEach(cleanup);

describe('Register', () => {
  it('PCサイズスナップショットテスト', () => {
    window.matchMedia = jest.fn().mockImplementation((query) => {
      return {
        matches: true,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
      };
    });

    const props = {
      registerOnClick: jest.fn(),
      cancelOnClick: jest.fn(),
    };

    const { baseElement } = render(
      <StylesContextProvider>
        <Register {...props} />
      </StylesContextProvider>
    );
    expect(baseElement).toMatchSnapshot();
  });

  it('スマホサイズスナップショットテスト', () => {
    window.matchMedia = jest.fn().mockImplementation((query) => {
      return {
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
      };
    });

    const props = {
      registerOnClick: jest.fn(),
      cancelOnClick: jest.fn(),
    };

    const { baseElement } = render(
      <StylesContextProvider>
        <Register {...props} />
      </StylesContextProvider>
    );
    expect(baseElement).toMatchSnapshot();
  });

  // it('ユニットテスト名', () => {
  //     ここに実行して欲しいテストを記述します。
  //   });
});
