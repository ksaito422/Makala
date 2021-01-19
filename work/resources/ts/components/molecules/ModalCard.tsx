import React, { useState, useContext } from 'react';
import ReactMde from 'react-mde';
import 'react-mde/lib/styles/css/react-mde-all.css';
import { Grid } from '@material-ui/core';
import { CloseIcon } from '../atoms/CloseIcon';
import { Button } from '../atoms/Button';
import { StylesContext } from '../../contexts/childContexts/StylesContext';

type Props = {
  defaultValue: string;
  postOnSubmit: (value: string) => void;
  modalOnClose: () => void;
};

export const ModalCard: React.FC<Props> = (props) => {
  /**
   * cssの定義
   * ReactMdeの表示テキストと編集メソッド
   */
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();
  const [value, setValue] = useState<string>(props.defaultValue);

  // モーダルに表示する内容の定義
  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12} className={classes.rightPlacement}>
          <CloseIcon onClick={props.modalOnClose} />
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <ReactMde value={value} onChange={setValue} />
          </Grid>
          <Grid item xs={12} className={classes.centerPlacement}>
            <Button
              onClick={() => {
                props.postOnSubmit(value);
              }}
            >
              SAVE
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
