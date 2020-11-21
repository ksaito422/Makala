import React from 'react';
import { StylesContext } from '../../contexts/childContexts/StylesContext';
import {
  Container,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
 } from '@material-ui/core';
 import DragIndicatorIcon from '@material-ui/icons/DragIndicator';

type Props = {
  data: any
}

function generate(element: React.ReactElement) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

export const Boards: React.FC<Props> = (props: Props) => {
  return (
    <>
      <Container maxWidth='sm'>
        <Paper elevation={3}>
          <List>
            {generate(
              <ListItem>
                <ListItemIcon>
                  <IconButton>
                    <DragIndicatorIcon />
                  </IconButton>
                </ListItemIcon>
                <ListItemText
                  primary={props.data.boards[0].board_name}
                />
              </ListItem>
            )}
          </List>
        </Paper>
      </Container>
    </>
  );
}