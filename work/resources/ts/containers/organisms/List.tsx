import React from "react";
import { Draggable } from "react-beautiful-dnd";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
} from '@material-ui/core';

export const Item = ({ item, index }: {item: any, index: any}) => {
  return (
    <Draggable draggableId={item.id} index={index}>
        {provided => (
          <Card
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <CardHeader
              title={item.id}
            />
            <CardContent>
              <Typography>
                {item.content}
              </Typography>
            </CardContent>
          </Card>
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