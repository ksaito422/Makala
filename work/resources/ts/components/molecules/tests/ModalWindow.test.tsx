import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { ModalWindow } from '../ModalWindow';
import { StylesContextProvider } from '../../../contexts/childContexts/StylesContext';

// メモリリークを避けるために、各テスト後にすべてのコンテンツを消去する
afterEach(cleanup);

describe('ModalWindow', () => {
  it('PCサイズのスナップショットテスト', () => {
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
      modalOpen: true,
      modalOnClose: jest.fn,
    };

    const { baseElement } = render(
      <StylesContextProvider>
        <ModalWindow {...props} />
      </StylesContextProvider>
    );
    expect(baseElement).toMatchSnapshot();
  });

  it('スマホサイズのスナップショットテスト', () => {
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
      modalOpen: true,
      modalOnClose: jest.fn,
    };

    const { baseElement } = render(
      <StylesContextProvider>
        <ModalWindow {...props} />
      </StylesContextProvider>
    );
    expect(baseElement).toMatchSnapshot();
  });
});
