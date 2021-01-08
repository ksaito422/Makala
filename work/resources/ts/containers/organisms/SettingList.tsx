import React from 'react';
import { Paper } from '@material-ui/core';
import { SettingListItem } from '../../components/molecules/SettingListItem';

const texts = ['アカウント'];

export const SettingList: React.FC = () => {
  return (
    <>
      <Paper elevation={2}>
        <SettingListItem items={texts} />
      </Paper>
    </>
  );
};
