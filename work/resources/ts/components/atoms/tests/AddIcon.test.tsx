import React from 'react';
import renderer from 'react-test-renderer';
import { AddIcon } from '../AddIcon';
import { mount } from 'enzyme';

describe('AddIcon', () => {
  it('clickイベントの確認', () => {
    const props = {
      onClick: jest.fn
    }

    // onClickの監視
    // propsを受け取り mount テスト対象component生成
    const spyOnClick = jest.spyOn(props, 'onClick');
    const component = mount(<AddIcon {...props} />);

    // clickイベント実行
    // spyOnClickが実行されたか確認
    component.find('button').simulate('click');
    expect(spyOnClick).toHaveBeenCalled();
  });

  it('スナップショットテスト', () => {
    const props = {
      onClick: jest.fn
    }

    const tree = renderer
      .create(<AddIcon {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});