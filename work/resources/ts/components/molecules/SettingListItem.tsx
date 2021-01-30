import React, { useState } from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

type Props = {
  items: string[];
};

export const SettingListItem: React.FC<Props> = (props) => {
  // 現在表示している設定メニューリストをマーキングする
  const [selectedIndax, setSelectedIndex] = useState(0);
  const ListItemOnClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <List>
        {props.items.map((item, index) => (
          <ListItem
            selected={selectedIndax === index}
            button
            key={index}
            onClick={() => ListItemOnClick(index)}
          >
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </>
  );
};
