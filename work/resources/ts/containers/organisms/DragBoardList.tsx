import React, { useState, useContext } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { DragBoardItem } from '../../components/molecules/DragBoardItem';
import { AddIcon } from '../../components/atoms/AddIcon';
import { ModalWindow } from '../../components/molecules/ModalWindow';
import { ModalCard } from '../../components/molecules/ModalCard';
import { ModalPropsContext } from '../../contexts/childContexts/ModalPropsContext';
import { StylesContext } from '../../contexts/childContexts/StylesContext';
import { ApiCardsContext } from '../../contexts/childContexts/ApiCardsContext';

type BoardListProps = {
  items?: any,
  onDragEnd: any,
  deleteOnClick: (id?: string) => void,
}

export const DragBoardList = React.memo<BoardListProps> (({
  items,
  onDragEnd,
  deleteOnClick,
}) => {
  /**
   * cssの定義
   * dragBoardItemのレンダーするデータを読み取り
   * { モーダルに渡す表示内容 表示のon/off切り替え }
   */
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();
  const { cardsState, setCardsState } = useContext<any>(ApiCardsContext);
  const {
    modalValueState,
    setModalValueState,
    modalOpenState,
    setModalOpenState
  } = useContext<any>(ModalPropsContext);

  // モーダルを閉じるとき、入力値をクリア
  const modalClose = () => {
    setModalOpenState(false);
    setModalValueState({
      id: null,
      card_name: null,
      card_content: null
    });
  };

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
                    setModalValueState({
                      ...modalValueState,
                      id: item.id,
                      card_name: item.title,
                      card_content: item.content,
                    })
                  }}
                  deleteOnClick={() => {
                    deleteOnClick(item.id);
                  }}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <div className={classes.centerPlacement}>
        <AddIcon
          onClick={() => {
            // 重複してるため、後で一箇所にまとめる setModalOpenState(true);
            setModalOpenState(true);
            setModalValueState({
              ...modalValueState,
              id: String(cardsState.numberMade),
            });
          }}
        />
      </div>
      <ModalWindow
        modalOpen={modalOpenState}
        modalOnClose={modalClose}
      >
        <ModalCard
          modalOnClose={modalClose}
          // 押したボタンの番号によって、表示内容を変える
          defaultValueTitle={modalValueState.card_name}
          defaultValueContent={modalValueState.card_content}
          postOnClick={() => {
            /** 今のBoardItemの配列を受け取り、更新部分だけ新しい値に入れ替える
              * updateなら既存のindexに格納
              * addならnewBoardItemState.items.lengthで最後の位置に格納
              * indexNumberに格納位置のindexを入れる
            */
            const newBoardItemState = { ...cardsState };
            const searchIndex = newBoardItemState.items.findIndex(({id}: any) => id == modalValueState.id)
            const indexNumber = searchIndex > -1 ? searchIndex : newBoardItemState.items.length;
            newBoardItemState.items[indexNumber] = modalValueState;
            setCardsState(
              newBoardItemState,
            );
            setCardsState(
              { ...cardsState, numberMade: cardsState.numberMade + 1 }
            )
            modalClose();
          }}
        />
      </ModalWindow>
    </>
  )
});