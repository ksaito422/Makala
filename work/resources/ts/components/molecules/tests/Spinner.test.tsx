import React from 'react';
import { mount } from 'enzyme'
import { Spinner } from '../Spinner';
import { StylesContextProvider } from '../../../contexts/childContexts/StylesContext';

describe('Spinner', () => {
  it('スナップショットテスト', () => {
    const props = {
      open: true
    }

    const tree = mount(
      <StylesContextProvider>
        <Spinner {...props} />
      </StylesContextProvider>
    )
    expect(tree).toMatchSnapshot();
  });
});