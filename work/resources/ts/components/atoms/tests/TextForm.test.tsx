import React from 'react';
import renderer from 'react-test-renderer';
import { TextForm } from '../TextForm';

describe('TextForm', () => {
  it('スナップショットテスト', () => {
    const props = {
      error: true,
      helperText: 'helperText',
      rowsMax: 4,
      rows: 2,
      defaultValue: 'defaultValue',
      label: 'label',
      name: 'name',
      autoComplete: 'autoComplete',
      required: true,
      autoFocus: true,
    };

    const tree = renderer.create(<TextForm {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
