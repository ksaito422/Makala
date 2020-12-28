import React from 'react';
import { render } from '@testing-library/react';
import { SubmitIcon } from '../SubmitIcon';

describe('SubmitIcon', () => {
  it('スナップショットテスト', () => {
    const { baseElement } = render(<SubmitIcon />);
    expect(baseElement).toMatchSnapshot();
  });
});
