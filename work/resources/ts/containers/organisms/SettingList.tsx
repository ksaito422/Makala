import React from 'react';
import { Paper } from '@material-ui/core';
import { SettingListItem } from '../../components/molecules/SettingListItem';

// 設定メニューのコンテンツ
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
