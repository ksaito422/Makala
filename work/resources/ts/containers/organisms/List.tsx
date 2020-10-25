import React from "react";
import { Draggable } from "react-beautiful-dnd";

export const Item = ({ item, index }: {item: any, index: any}) => {
  return (
    <Draggable draggableId={item.id} index={index}>
      {provided => (
        <p
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {item.content}
        </p>
        )}
    </Draggable>
  )
}

export const List = React.memo<{ items: any }> (({ items }) => (
  <>
    {items.map((item: any, index: number) => (
      <Item item={item} index={index} key={item.id} />
    ))}
  </>
));