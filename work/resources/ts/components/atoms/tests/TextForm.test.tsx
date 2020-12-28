import React from 'react';
import { render } from '@testing-library/react';
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

    const { baseElement } = render(<TextForm {...props} />);
    expect(baseElement).toMatchSnapshot();
  });
});
