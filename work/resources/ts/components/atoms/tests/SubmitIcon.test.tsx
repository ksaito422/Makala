import React from 'react';
import renderer from 'react-test-renderer';
import { SubmitIcon } from '../SubmitIcon';

describe('SubmitIcon', () => {
  it('スナップショットテスト', () => {
    const tree = renderer
      .create(<SubmitIcon />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});