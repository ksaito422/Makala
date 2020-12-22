import React from 'react';
import renderer from 'react-test-renderer';
import { Title } from '../Title';
import { StylesContextProvider } from '../../../contexts/childContexts/StylesContext';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Title', () => {
  it('スナップショットテスト', () => {
    const tree = renderer
      .create(
        <Router>
          <StylesContextProvider>
            <Title />
          </StylesContextProvider>
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});