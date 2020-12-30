import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RegisterPage } from '../RegisterPage';
import { StylesContextProvider } from '../../../contexts/childContexts/StylesContext';
import { FeedbackContextProvider } from '../../../contexts/childContexts/FeedbackContext';

// メモリリークを避けるために、各テスト後にすべてのコンテンツを消去する
afterEach(cleanup);

describe('RegisterPage', () => {
  it('スナップショットテスト', () => {
    const { baseElement } = render(
      <Router>
        <StylesContextProvider>
          <FeedbackContextProvider>
            <RegisterPage />
          </FeedbackContextProvider>
        </StylesContextProvider>
      </Router>
    );
    expect(baseElement).toMatchSnapshot();
  });

  // it('ユニットテスト名', () => {
  //     ここに実行して欲しいテストを記述します。
  //   });
});
