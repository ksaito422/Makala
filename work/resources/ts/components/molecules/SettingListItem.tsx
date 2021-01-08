import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

type Props = {
  items: string[];
};

export const SettingListItem: React.FC<Props> = (props) => {
  return (
    <>
      <List>
        {props.items.map((item, index) => (
          <ListItem button key={index}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </>
  );
};
