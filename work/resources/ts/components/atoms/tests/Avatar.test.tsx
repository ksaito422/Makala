import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { Avatar } from '../Avatar';
import { StylesContextProvider } from '../../../contexts/childContexts/StylesContext';

describe('Avatar', () => {
  it('clickイベントの確認', () => {
    const props = {
      ariaControls: 'avatar',
      ariaHaspopup: true,
      onClick: jest.fn,
    };

    // onClickの監視
    // propsを受け取り mount テスト対象component生成
    const spyOnClick = jest.spyOn(props, 'onClick');
    const component = mount(
      <StylesContextProvider>
        <Avatar {...props} />
      </StylesContextProvider>
    );

    // clickイベント実行
    // spyOnClickが実行されたか確認
    component.find('button').simulate('click');
    expect(spyOnClick).toHaveBeenCalled();
  });

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
});
