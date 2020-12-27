import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import { DownloadIcon } from '../DownloadIcon';

describe('DownloadIcon', () => {
  it('スナップショットテスト', () => {
    const props = {
      onClick: jest.fn,
    };

    const tree = renderer.create(<DownloadIcon {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('clickイベントの確認', () => {
    const props = {
      onClick: jest.fn,
    };
    // onClickの監視
    // propsを受け取り mount テスト対象component生成
    const spyOnClick = jest.spyOn(props, 'onClick');
    const component = render(<DownloadIcon {...props} />);
    // screen.debug();

    // <button>を探す
    // clickイベント実行
    // spyOnClickが実行されたか確認
    const button = component.getByRole('button');
    fireEvent.click(button);
    expect(spyOnClick).toHaveBeenCalled();
  });
});
