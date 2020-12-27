import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import { Avatar } from '../Avatar';
import { StylesContextProvider } from '../../../contexts/childContexts/StylesContext';

describe('Avatar', () => {
  it('スナップショットテスト', () => {
    const props = {
      ariaControls: 'avatar',
      ariaHaspopup: true,
      onClick: jest.fn,
      children: 'a',
    };

    const tree = renderer
      .create(
        <StylesContextProvider>
          <Avatar {...props} />
        </StylesContextProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('clickイベントの確認', () => {
    const props = {
      ariaControls: 'avatar',
      ariaHaspopup: true,
      onClick: jest.fn,
    };

    // onClickの監視
    // propsを受け取りrender テスト対象component生成
    const spyOnClick = jest.spyOn(props, 'onClick');
    const component = render(
      <StylesContextProvider>
        <Avatar {...props} />
      </StylesContextProvider>
    );
    // screen.debug();

    // <button>を探す
    // clickイベント実行
    // spyOnClickが実行されたか確認
    const button = component.getByRole('button');
    fireEvent.click(button);
    expect(spyOnClick).toHaveBeenCalled();
  });
});
