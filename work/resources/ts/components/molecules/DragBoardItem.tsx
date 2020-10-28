import React, { useContext } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { DeleteIcon } from '../atoms/DeleteIcon';
import { StylesContext } from '../../contexts/childContexts/StylesContext';
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  Modal,
  Typography,
} from '@material-ui/core';

type Props = {
  item: any,
  index: any,
  onClick: (event: any) => void,
  onClose: (event: any) => void,
  modalOpen: boolean,
}

export const DragBoardItem: React.FC<Props> = ({
  item,
  index,
  onClick,
  onClose,
  modalOpen
}) => {
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
            <Modal
              open={modalOpen}
              onClose={onClose}
            >
              <p>aa</p>
            </Modal>
          </Card>
        )}
    </Draggable>
  )
}