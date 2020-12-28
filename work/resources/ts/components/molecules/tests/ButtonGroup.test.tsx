import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { ButtonGroup } from '../ButtonGroup';

// メモリリークを避けるために、各テスト後にすべてのコンテンツを消去する
afterEach(cleanup);

describe('ButtonGroup', () => {
  it('スナップショットテスト', () => {
    const props = {
      disabledCard: false,
      disabledPreview: false,
      cardOnClick: jest.fn,
      previewOnClick: jest.fn,
    };

    const { baseElement } = render(<ButtonGroup {...props} />);
    expect(baseElement).toMatchSnapshot();
  });
});
