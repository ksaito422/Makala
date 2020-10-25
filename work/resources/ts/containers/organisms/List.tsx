import React from "react";
import { Draggable } from "react-beautiful-dnd";

export const Item = ({ item, index }) => {
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

export const List = React.memo<{ items }> (({ items }) => (
  <>
    {items.map((item, index: number) => (
      <Item item={item} index={index} key={item.id} />
    ))}
  </>
));