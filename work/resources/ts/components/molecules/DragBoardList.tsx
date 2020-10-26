import React, { useContext } from "react";
import { Draggable } from "react-beautiful-dnd";
import { DeleteIcon } from '../atoms/DeleteIcon';
import { AddIcon } from '../atoms/AddIcon';
import { StylesContext } from '../../contexts/childContexts/StylesContext';
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
} from '@material-ui/core';

type Props = {
  item: any,
  index: any,
}

export const Item: React.FC<Props> = ({ item, index }) => {
  // classNameのインポート
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles()

  return (
    <Draggable draggableId={item.id} index={index}>
        {provided => (
          <Card
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className={classes.drag_card}
          >
            <CardHeader
              title={item.id}
              action={
                <DeleteIcon />
              }
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

export const DragBoardList = React.memo<{ items: any }> (({ items }) => {
  return (
    <div>
      {items.map((item: any, index: number) => (
        <Item item={item} index={index} key={item.id} />
      ))}
      <AddIcon />
    </div>
  )
});