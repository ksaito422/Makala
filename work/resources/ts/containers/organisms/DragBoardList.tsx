import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { DragBoardItem } from '../../components/molecules/DragBoardItem';
import { AddIcon } from '../../components/atoms/AddIcon';
import { ModalWindow } from '../../components/molecules/ModalWindow';

type BoardListProps = {
  items?: any,
  onClick: (event: any) => void,
  onClose: (event: any) => void,
  modalOpen: boolean,
  onDragEnd: any,
}

export const DragBoardList = React.memo<BoardListProps> (({
  items,
  onClick,
  onClose,
  modalOpen,
  onDragEnd,
}) => {
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
                  onClick={onClick}
                />
              ))}
              <AddIcon />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <ModalWindow
        modalOpen={modalOpen}
        onClose={onClose}
        // 押したボタンの番号によって、表示内容を変えたい
        defaultValueTitle={items[0].title}
        defaultValueContent={items[0].content}
      />
    </>
  )
});