import React, { useContext } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { DeleteIcon } from '../atoms/DeleteIcon';
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

export const DragBoardItem: React.FC<Props> = ({ item, index }) => {
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