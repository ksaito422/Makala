import React from 'react';
import renderer from 'react-test-renderer';
import { ButtonGroup } from '../ButtonGroup';

describe('ButtonGroup', () => {
  it('スナップショットテスト', () => {
    const props = {
      disabledCard: false,
      disabledPreview: false,
      cardOnClick: jest.fn,
      previewOnClick: jest.fn,
    };

    const tree = renderer.create(<ButtonGroup {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
