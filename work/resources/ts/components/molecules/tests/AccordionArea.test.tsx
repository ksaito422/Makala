import React from 'react';
import renderer from 'react-test-renderer';
import { AccordionArea } from '../AccordionArea';

describe('AccordionArea', () => {
  it('スナップショットテスト', () => {
    const tree = renderer.create(<AccordionArea />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
