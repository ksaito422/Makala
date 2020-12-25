import React, { useContext } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Button } from '../atoms/Button';
import { CloseIcon } from '../atoms/CloseIcon';
import { StylesContext } from '../../contexts/childContexts/StylesContext';

type Props = {
  item: {
    id: string;
    title: string;
    content: string;
  };
  index: number;
  openOnClick: () => void;
  deleteOnClick: () => void;
};

export const DragCard: React.FC<Props> = (props) => {
  // cssの定義
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();

  return (
    <Draggable draggableId={String(props.item.id)} index={props.index}>
      {(provided) => (
        <Card
          ref={provided.innerRef}
          // ドラッグするためのプロパティ draggableProps & dragHandleProps
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={classes.drag_card}
        >
          <CardHeader
            title={props.item.title}
            action={<CloseIcon onClick={props.deleteOnClick} />}
          />
          <Button
            className={classes.card}
            color='default'
            variant='contained'
            fullWidth
            onClick={props.openOnClick}
          >
            <CardContent component='span'>
              <Typography align='left'>{props.item.content}</Typography>
            </CardContent>
          </Button>
        </Card>
      )}
    </Draggable>
  );
};
