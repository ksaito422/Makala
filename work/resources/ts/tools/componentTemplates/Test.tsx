import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import {} from '';

// メモリリークを避けるために、各テスト後にすべてのコンテンツを消去する
afterEach(cleanup);

// テストテンプレート コメントアウト解除して使う
// describe('コンポーネント名', () => {
//   it('スナップショットテスト', () => {
//         const props = {
//           onClick: jest.fn
//         }

//         const { baseElement } = render(<コンポーネント名 {...props} />);
//         expect(baseElement).toMatchSnapshot();
//       });

// it('ユニットテスト名', () => {
//     ここに実行して欲しいテストを記述します。
//   });
// });
