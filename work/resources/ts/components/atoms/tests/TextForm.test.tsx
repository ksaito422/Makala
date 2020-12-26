import React from 'react';
import renderer from 'react-test-renderer';
import { TextForm } from '../TextForm';

describe('TextForm', () => {
  it('スナップショットテスト', () => {
    const tree = renderer.create(<TextForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
