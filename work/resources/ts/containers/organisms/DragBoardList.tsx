import React, { useState, useContext } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { DragBoardItem } from '../../components/molecules/DragBoardItem';
import { AddIcon } from '../../components/atoms/AddIcon';
import { ModalWindow } from '../../components/molecules/ModalWindow';
import { StylesContext } from '../../contexts/childContexts/StylesContext';
import { BoardItemContext } from '../../contexts/childContexts/BoardItemContext';

type BoardListProps = {
  items?: any,
  onDragEnd: any,
}

export const DragBoardList = React.memo<BoardListProps> (({
  items,
  onDragEnd,
}) => {
  // classNameのインポート
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles()

  // dragBoardItemのレンダーするデータを読み取り
  const { BoardItemState, setBoardItemState } = useContext<any>(BoardItemContext);

  // モーダルに渡す表示内容
  const [modalValueState, setmodalValueState] = useState<any>({
    id: null,
    title: null,
    content: null
  });

  // モーダル表示のon/off切り替え
  const [modalOpenState, setModalOpenState] = useState<boolean>(false);
  // モーダルを閉じるとき、入力値をクリア
  const modalClose = () => {
    setModalOpenState(false);
    setmodalValueState({
      id: null,
      title: null,
      content: null
    });
  };

  // 正規表現でフォームの空欄不可にする
const regularExpressions = /^.+/;

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="list">
          {provided => (
            <div ref={provided.innerRef} className={classes.drop_able}>
              {items.map((
                item: {
                  id: string,
                  title: string,
                  content: string,
                },
                index: number
                ) => (
                <DragBoardItem
                  item={item}
                  index={index}
                  key={item.id}
                  openOnClick={() => {
                    setModalOpenState(true);
                    setmodalValueState({
                      ...modalValueState,
                      id: item.id,
                      title: item.title,
                      content: item.content,
                    })
                  }}
                  deleteOnClick={() => {
                    //  今のBoardItemの配列を受け取り、[index]を基にカードを削除
                    let newBoardItemState = { ...BoardItemState };
                    newBoardItemState.items.splice(index, 1);
                    setBoardItemState(
                      newBoardItemState,
                    );
                  }}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <div className={classes.iconCenter}>
        <AddIcon
          onClick={() => {
            // 重複してるため、後で一箇所にまとめる setModalOpenState(true);
            setModalOpenState(true);
            setmodalValueState({
              ...modalValueState,
              id: String(BoardItemState.numberMade),
            });
          }}
        />
      </div>
      <ModalWindow
        errorTitle={regularExpressions.test(modalValueState.title) ? false : true}
        helperTextTitle={
          regularExpressions.test(modalValueState.title) ? undefined : 'タイトルを入力してください'
        }
        errorContent={regularExpressions.test(modalValueState.content) ? false : true}
        helperTextContent={
          regularExpressions.test(modalValueState.content) ? undefined : '内容を入力してください'
        }
        modalOpen={modalOpenState}
        modalOnClose={modalClose}
        // 押したボタンの番号によって、表示内容を変える
        defaultValueTitle={modalValueState.title}
        defaultValueContent={modalValueState.content}
        titleOnChange={(e) => {
          setmodalValueState({ ...modalValueState, title: e.target.value })
        }}
        contentOnChange={(e) => {
          setmodalValueState({ ...modalValueState, content: e.target.value })
        }}
        postOnClick={() => {
          /** 今のBoardItemの配列を受け取り、更新部分だけ新しい値に入れ替える
            * updateなら既存のindexに格納
            * addならnewBoardItemState.items.lengthで最後の位置に格納
            * indexNumberに格納位置のindexを入れる
          */
          const newBoardItemState = { ...BoardItemState };
          const searchIndex = newBoardItemState.items.findIndex(({id}: any) => id == modalValueState.id)
          const indexNumber = searchIndex > -1 ? searchIndex : newBoardItemState.items.length;
          newBoardItemState.items[indexNumber] = modalValueState;
          setBoardItemState(
            newBoardItemState,
          );
          setBoardItemState(
            { ...BoardItemState, numberMade: BoardItemState.numberMade + 1 }
          )
          modalClose();
        }}
        disabled={
          // クソコードだから整理したい
          modalValueState.title === null || modalValueState.content === null ? (true) : (
          regularExpressions.test(modalValueState.title) && regularExpressions.test(modalValueState.content) ? (false) : (true))}
      />
    </>
  )
});