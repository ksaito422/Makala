import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Notice } from '../Notice';

// メモリリークを避けるために、各テスト後にすべてのコンテンツを消去する
afterEach(cleanup);

describe('Notice', () => {
  it('スナップショットテスト', () => {
    const props = {
      open: true,
      message: 'string',
      onClose: jest.fn,
    };

    const { baseElement } = render(<Notice {...props} type='success' />);
    expect(baseElement).toMatchSnapshot();
  });
});
