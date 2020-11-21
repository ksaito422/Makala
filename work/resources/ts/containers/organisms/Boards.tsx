import React from 'react';
import { CloseIcon } from '../../components/atoms/CloseIcon';
import { StylesContext } from '../../contexts/childContexts/StylesContext';
import {
  Container,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  Paper,
 } from '@material-ui/core';
 import DragIndicatorIcon from '@material-ui/icons/DragIndicator';

type Props = {
  boards: any,
  onClick: () => void,
  deleteOnClick: (event: number) => void,
}

export const Boards: React.FC<Props> = (props: Props) => {
  return (
    <>
      <Container maxWidth='sm'>
        <Paper elevation={3}>
          <List>
            {props.boards.map((
              board: {
                id: number,
                board_name: string,
              },
              index: number
              ) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <IconButton
                    onClick={props.onClick}
                  >
                    <DragIndicatorIcon />
                  </IconButton>
                </ListItemIcon>
                <ListItemText
                  primary={board.board_name}
                />
                <ListItemSecondaryAction>
                  <CloseIcon
                    onClick={() => {
                      props.deleteOnClick(board.id)
                    }}
                  />
                </ListItemSecondaryAction>
              </ListItem>
              ))}
          </List>
        </Paper>
      </Container>
    </>
  );
}