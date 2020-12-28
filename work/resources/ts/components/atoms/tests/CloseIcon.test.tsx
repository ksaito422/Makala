import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CloseIcon } from '../CloseIcon';

describe('CloseIcon', () => {
  it('スナップショットテスト', () => {
    const props = {
      onClick: jest.fn,
    };

    const { baseElement } = render(<CloseIcon {...props} />);
    expect(baseElement).toMatchSnapshot();
  });
  it('clickイベントの確認', () => {
    const props = {
      onClick: jest.fn,
    };

    // onClickの監視
    // propsを受け取りrender テスト対象component生成
    const spyOnClick = jest.spyOn(props, 'onClick');
    const component = render(<CloseIcon {...props} />);
    // screen.debug();

    // <button>を探す
    // clickイベント実行
    // spyOnClickが実行されたか確認
    const button = component.getByRole('button');
    fireEvent.click(button);
    expect(spyOnClick).toHaveBeenCalled();
  });
});
