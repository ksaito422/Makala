import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from '../Header';
import { StylesContextProvider } from '../../../contexts/childContexts/StylesContext';

// メモリリークを避けるために、各テスト後にすべてのコンテンツを消去する
afterEach(cleanup);

describe('コンポーネント名', () => {
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

    const { baseElement } = render(
      <Router>
        <StylesContextProvider>
          <Header />
        </StylesContextProvider>
      </Router>
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

    const { baseElement } = render(
      <Router>
        <StylesContextProvider>
          <Header />
        </StylesContextProvider>
      </Router>
    );
    expect(baseElement).toMatchSnapshot();
  });

  // it('ユニットテスト名', () => {
  //     ここに実行して欲しいテストを記述します。
  //   });
});
