import React from 'react';
import { mount } from 'enzyme';
import { Notice } from '../Notice';

describe('Notice', () => {
  it('スナップショットテスト', () => {
    const props = {
      open: true,
      message: 'string',
      onClose: jest.fn,
    }

    const tree = mount(<Notice {...props} type='success' />)
    expect(tree).toMatchSnapshot();
  });
});