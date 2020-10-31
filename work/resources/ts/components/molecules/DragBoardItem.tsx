import React, { useContext, useRef, forwardRef, useImperativeHandle } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { DeleteIcon } from '../atoms/DeleteIcon';
import { StylesContext } from '../../contexts/childContexts/StylesContext';
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  Typography,
} from '@material-ui/core';

type BoardItemProps = {
  item: {
    id: string,
    title: string,
    content: string,
  },
  index: number,
  onClick: (event: any) => void,
}

export const DragBoardItem =  React.forwardRef<HTMLButtonElement, BoardItemProps> (({
  item,
  index,
  onClick,
},
  ref
) => {
  // classNameのインポート
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles()

  return (
    <Draggable draggableId={item.id} index={index}>
        {provided => (
          <Card
            ref={provided.innerRef}
            // ドラッグするためのプロパティ draggableProps & dragHandleProps
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className={classes.drag_card}
          >
            <CardHeader
              title={item.title}
              action={
                <DeleteIcon />
              }
            />
            <Button
              ref={ref}
              variant='text'
              fullWidth
              onClick={onClick}
            >
              <CardContent>
                <Typography>
                  {item.content}
                </Typography>
              </CardContent>
            </Button>
          </Card>
        )}
    </Draggable>
  )
})