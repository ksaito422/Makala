import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { AccordionArea } from '../AccordionArea';

// メモリリークを避けるために、各テスト後にすべてのコンテンツを消去する
afterEach(cleanup);

describe('AccordionArea', () => {
  it('スナップショットテスト', () => {
    const { baseElement } = render(<AccordionArea />);
    expect(baseElement).toMatchSnapshot();
  });
});
