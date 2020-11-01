import React, { useContext } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { CloseIcon } from '../atoms/CloseIcon';
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

export const DragBoardItem: React.FC<BoardItemProps> = ({
  item,
  index,
  onClick,
}) => {
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
                <CloseIcon
                  onClick={() => console.log('test')}
                />
              }
            />
            <Button
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
}