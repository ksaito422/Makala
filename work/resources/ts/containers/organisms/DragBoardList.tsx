import React, { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { DragBoardItem } from '../../components/molecules/DragBoardItem';
import { AddIcon } from '../../components/atoms/AddIcon';
import { ModalWindow } from '../../components/molecules/ModalWindow';

type BoardListProps = {
  items?: any,
  onDragEnd: any,
}

export const DragBoardList = React.memo<BoardListProps> (({
  items,
  onDragEnd,
}) => {
// モーダル表示のon/off切り替え
  const [modalOpenState, setModalOpenState] = useState<boolean>(false);
  const modalOpen = () => {
    setModalOpenState(true);
  };
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
                  onClick={modalOpen}
                />
              ))}
              <AddIcon />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <ModalWindow
        modalOpen={modalOpenState}
        onClose={modalClose}
        // 押したボタンの番号によって、表示内容を変えたい
        defaultValueTitle={items[0].title}
        defaultValueContent={items[0].content}
      />
    </>
  )
});