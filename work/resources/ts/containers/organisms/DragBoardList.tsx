import React, { useState, useContext } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { DragBoardItem } from '../../components/molecules/DragBoardItem';
import { AddIcon } from '../../components/atoms/AddIcon';
import { ModalWindow } from '../../components/molecules/ModalWindow';
import { StylesContext } from '../../contexts/childContexts/StylesContext';

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

  // モーダルに渡す表示内容
  const [modalValueState, setmodalValueState] = useState<any>({
    id: null,
    title: null,
    content: null
  });

  // モーダル表示のon/off切り替え
  const [modalOpenState, setModalOpenState] = useState<boolean>(false);
  const modalClose = () => {
    setModalOpenState(false);
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="list">
          {provided => (
            <div ref={provided.innerRef}>
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
                  onClick={() => {
                    setModalOpenState(true);
                    setmodalValueState({
                      ...modalValueState,
                      id: item.id,
                      title: item.title,
                      content: item.content,
                    })
                  }}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <div className={classes.iconCenter}>
        <AddIcon />
      </div>
      <ModalWindow
        modalOpen={modalOpenState}
        onClose={modalClose}
        // 押したボタンの番号によって、表示内容を変える
        defaultValueTitle={modalValueState.title}
        defaultValueContent={modalValueState.content}
      />
    </>
  )
});