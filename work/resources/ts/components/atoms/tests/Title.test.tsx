import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { Title } from '../Title';
import { StylesContextProvider } from '../../../contexts/childContexts/StylesContext';

describe('Title', () => {
  it('PCサイズのスナップショットテスト', () => {
    window.matchMedia = jest.fn().mockImplementation((query) => {
      return {
        matches: true,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
      };
    });

    const { baseElement } = render(
      <Router>
        <StylesContextProvider>
          <Title />
        </StylesContextProvider>
      </Router>
    );
    expect(baseElement).toMatchSnapshot();
  });

  it('スマホサイズのスナップショットテスト', () => {
    window.matchMedia = jest.fn().mockImplementation((query) => {
      return {
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
      };
    });

    const { baseElement } = render(
      <Router>
        <StylesContextProvider>
          <Title />
        </StylesContextProvider>
      </Router>
    );
    expect(baseElement).toMatchSnapshot();
  });
});
