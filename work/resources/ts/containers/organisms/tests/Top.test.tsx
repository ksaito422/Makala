import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { Top } from '../Top';

// メモリリークを避けるために、各テスト後にすべてのコンテンツを消去する
afterEach(cleanup);

describe('Top', () => {
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
      loginOnClick: jest.fn(),
      guestOnClick: jest.fn(),
      boardOnClick: jest.fn(),
    };

    const { baseElement } = render(<Top {...props} />);
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
      loginOnClick: jest.fn(),
      guestOnClick: jest.fn(),
      boardOnClick: jest.fn(),
    };

    const { baseElement } = render(<Top {...props} />);
    expect(baseElement).toMatchSnapshot();
  });
});
