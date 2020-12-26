import React from 'react';
import { mount } from 'enzyme';
import { ModalWindow } from '../ModalWindow';
import { StylesContextProvider } from '../../../contexts/childContexts/StylesContext';

describe('ModalWindow', () => {
  it('スナップショットテスト', () => {
    const props = {
      modalOpen: true,
      modalOnClose: jest.fn,
    };

    const tree = mount(
      <StylesContextProvider>
        <ModalWindow {...props} />
      </StylesContextProvider>
    );
    expect(tree).toMatchSnapshot();
  });
});
