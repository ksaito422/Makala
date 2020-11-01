import React, { useState, useRef, createRef } from 'react';
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
  // 
  const ref: any = useRef([]);
  items.map((item: any) => {
    ref.current[item.id] = createRef();
  })

  // モーダル表示のon/off切り替え
  const [modalOpenState, setModalOpenState] = useState<boolean>(false);
  // const modalOpen = () => {
  //   setModalOpenState(true);
  //   console.log(ref.current[item.id]);
  // };
  const modalClose = () => {
    setModalOpenState(false);
  };
  let modalDefaultValueId = 1;


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
                  ref={ref.current[item.id]}
                  item={item}
                  index={index}
                  key={item.id}
                  onClick={() => {
                    setModalOpenState(true);
                    console.log(ref);
                    console.log(ref.current[item.id].current.ariaLabel);
                    modalDefaultValueId = ref.current[item.id].current.ariaLabel
                    console.log(modalDefaultValueId);
                  }}
                />
              ))}
              <AddIcon />
              {provided.placeholder}
              <ModalWindow
                modalOpen={modalOpenState}
                onClose={modalClose}
                // 押したボタンの番号によって、表示内容を変えたい
                defaultValueTitle={items[modalDefaultValueId].title}
                defaultValueContent={items[modalDefaultValueId].content}
              />
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  )
});